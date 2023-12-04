import React from "react";

// Dialog uses HTMLDialogElement which is not yet supported by jsdom, so we need to mock it. Keep an eye on https://github.com/jsdom/jsdom/issues/3294 for progress.
export const mockEdsCoreReact = () => {
  const originalModule = jest.requireActual("@equinor/eds-core-react");

  const MockDialog = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );

  const CustomContent = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );
  const Header = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );
  const Title = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );
  const Actions = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );

  MockDialog.CustomContent = CustomContent;
  MockDialog.Header = Header;
  MockDialog.Title = Title;
  MockDialog.Actions = Actions;

  return {
    ...originalModule,
    Dialog: MockDialog
  };
};
