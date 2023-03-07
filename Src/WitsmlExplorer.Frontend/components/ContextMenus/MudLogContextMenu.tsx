import { Divider, Typography } from "@equinor/eds-core-react";
import { MenuItem } from "@material-ui/core";
import React, { useContext } from "react";
import NavigationContext from "../../contexts/navigationContext";
import OperationContext from "../../contexts/operationContext";
import OperationType from "../../contexts/operationType";
import { ComponentType } from "../../models/componentType";
import MudLog from "../../models/mudLog";
import { ObjectType } from "../../models/objectType";
import { JobType } from "../../services/jobService";
import { colors } from "../../styles/Colors";
import MudLogPropertiesModal, { MudLogPropertiesModalProps } from "../Modals/MudLogPropertiesModal";
import ContextMenu from "./ContextMenu";
import { menuItemText, onClickDeleteObjects, StyledIcon } from "./ContextMenuUtils";
import { copyObjectOnWellbore, pasteComponents } from "./CopyUtils";
import { useClipboardComponentReferencesOfType } from "./UseClipboardComponentReferences";

export interface MudLogContextMenuProps {
  mudLogs: MudLog[];
}

const MudLogContextMenu = (props: MudLogContextMenuProps): React.ReactElement => {
  const { mudLogs } = props;
  const { navigationState } = useContext(NavigationContext);
  const { selectedServer, servers } = navigationState;
  const geologyIntervalReferences = useClipboardComponentReferencesOfType(ComponentType.GeologyInterval);
  const { dispatchOperation } = useContext(OperationContext);

  const onClickModify = async () => {
    const modifyMudLogProps: MudLogPropertiesModalProps = { mudLog: mudLogs[0] };
    dispatchOperation({ type: OperationType.DisplayModal, payload: <MudLogPropertiesModal {...modifyMudLogProps} /> });
    dispatchOperation({ type: OperationType.HideContextMenu });
  };

  return (
    <ContextMenu
      menuItems={[
        <MenuItem key={"copy"} onClick={() => copyObjectOnWellbore(selectedServer, mudLogs, dispatchOperation, ObjectType.MudLog)} disabled={mudLogs.length === 0}>
          <StyledIcon name="copy" color={colors.interactive.primaryResting} />
          <Typography color={"primary"}>{menuItemText("copy", "mudLog", mudLogs)}</Typography>
        </MenuItem>,
        <MenuItem
          key={"paste"}
          onClick={() => pasteComponents(servers, geologyIntervalReferences, dispatchOperation, mudLogs[0], JobType.CopyGeologyIntervals)}
          disabled={geologyIntervalReferences === null || mudLogs.length !== 1}
        >
          <StyledIcon name="paste" color={colors.interactive.primaryResting} />
          <Typography color={"primary"}>{menuItemText("paste", "geology interval", geologyIntervalReferences?.componentUids)}</Typography>
        </MenuItem>,
        <MenuItem key={"delete"} onClick={() => onClickDeleteObjects(dispatchOperation, mudLogs, ObjectType.MudLog)} disabled={mudLogs.length === 0}>
          <StyledIcon name="deleteToTrash" color={colors.interactive.primaryResting} />
          <Typography color={"primary"}>{menuItemText("delete", "mudLog", mudLogs)}</Typography>
        </MenuItem>,
        <Divider key={"divider"} />,
        <MenuItem key={"properties"} onClick={onClickModify} disabled={mudLogs.length !== 1}>
          <StyledIcon name="settings" color={colors.interactive.primaryResting} />
          <Typography color={"primary"}>Properties</Typography>
        </MenuItem>
      ]}
    />
  );
};

export default MudLogContextMenu;