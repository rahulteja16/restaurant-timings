import { Timings, StatusTypes } from "../types";
import { daysOfWeek } from "../constants";

export const getWorkingHrs = (
  weekSchedule: Timings,
  dayIndex: number
): string[] => {
  const currentDay = daysOfWeek[dayIndex];
  const workingHrs = [...weekSchedule[currentDay]];
  const dayWorkingLength = workingHrs.length;
  const resultArr: string[] = [];

  if (workingHrs[dayWorkingLength - 1].type === StatusTypes.open) {
    const nextDay = getNextDay(dayIndex);
    if (weekSchedule[nextDay].length > 0) {
      const nextDayWorkingHrs = Object.assign({}, weekSchedule[nextDay][0]);
      workingHrs.push(nextDayWorkingHrs);
    }
  }

  workingHrs.forEach((obj, id) => {
    if (obj.type === StatusTypes.open) {
      const startTime: string = getDateInString(workingHrs[id].value);
      const endTime: string = getDateInString(workingHrs[id + 1].value);
      resultArr.push(`${startTime} - ${endTime}`);
    }
  });

  return resultArr;
};

export const getDateInString = (sec: number) => {
  let date = new Date(1970, 0, 1);
  date.setSeconds(sec);
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const getNextDay = (dayIndex: number) => {
  if (dayIndex === 6) {
    return daysOfWeek[0];
  } else {
    return daysOfWeek[dayIndex + 1];
  }
};
