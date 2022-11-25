namespace WitsmlExplorer.Api.Models
{
    public enum JobType
    {
        CopyBhaRun = 1,
        CopyLog,
        CopyLogData,
        CopyRig,
        CopyRisk,
        CopyTrajectory,
        CopyTrajectoryStations,
        CopyTubular,
        CopyTubularComponents,
        CopyWbGeometrySections,
        ModifyBhaRun,
        TrimLogObject,
        ModifyLogObject,
        DeleteMessageObjects,
        ModifyMessageObject,
        DeleteBhaRuns,
        DeleteCurveValues,
        DeleteLogObjects,
        DeleteMnemonics,
        DeleteTrajectories,
        DeleteTrajectoryStations,
        DeleteTubular,
        DeleteTubularComponents,
        DeleteWbGeometrys,
        DeleteWbGeometrySections,
        DeleteWell,
        DeleteWellbore,
        DeleteRigs,
        DeleteRisks,
        DeleteMudLog,
        RenameMnemonic,
        ModifyTrajectoryStation,
        ModifyTubular,
        ModifyTubularComponent,
        ModifyWbGeometry,
        ModifyWbGeometrySection,
        ModifyWell,
        ModifyWellbore,
        ModifyMudLog,
        ModifyRig,
        ModifyRisk,
        CreateLogObject,
        CreateWell,
        CreateWellbore,
        CreateRisk,
        CreateMudLog,
        CreateWbGeometry,
        BatchModifyWell,
        ImportLogData,
        ReplaceLogData,
        ReplaceLogObjects
    }
}
