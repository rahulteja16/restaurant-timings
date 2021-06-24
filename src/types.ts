export enum StatusTypes {
  open = "open",
  close = "close",
}
export interface Status {
  type: StatusTypes;
  value: number;
}

export interface Schedule {
  day: string;
  isToday: boolean;
  openHrs: string[];
}

export interface Timings {
  [key: string]: Status[];
}
