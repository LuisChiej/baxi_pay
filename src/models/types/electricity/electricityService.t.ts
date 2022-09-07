import { Discos } from "../../../models/enums/discos";
import { MeterType } from "../../../models/enums/meterTypes";

export type ElectricityServiceType = `${Discos}_${MeterType}`