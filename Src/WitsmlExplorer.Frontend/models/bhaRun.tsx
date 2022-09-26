import CommonData from "./commonData";
import Measure from "./measure";
import ObjectOnWellbore from "./objectOnWellbore";

export default interface BhaRun extends ObjectOnWellbore {
  numStringRun: string;
  tubular: string;
  tubularUidRef: string;
  dTimStart: Date;
  dTimStop: Date;
  dTimStartDrilling: Date;
  dTimStopDrilling: Date;
  planDogleg: Measure;
  actDogleg: Measure;
  actDoglegMx: Measure;
  statusBha: string;
  numBitRun: string;
  reasonTrip: string;
  objectiveBha: string;
  commonData: CommonData;
}
