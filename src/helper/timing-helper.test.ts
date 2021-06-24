import { StatusTypes, Timings } from "../types";
import { getDateInString, getNextDay, getWorkingHrs } from "./timing-helper";

const response: Timings = {
  monday: [],
  tuesday: [
    { type: StatusTypes.open, value: 36000 },
    { type: StatusTypes.close, value: 64800 },
  ],
  wednesday: [],
  thursday: [
    { type: StatusTypes.open, value: 36000 },
    { type: StatusTypes.close, value: 64800 },
  ],
  friday: [{ type: StatusTypes.open, value: 36000 }],
  saturday: [
    { type: StatusTypes.close, value: 3600 },
    { type: StatusTypes.open, value: 36000 },
  ],
  sunday: [
    { type: StatusTypes.close, value: 3600 },
    { type: StatusTypes.open, value: 43200 },
    { type: StatusTypes.close, value: 75600 },
  ],
};

describe("Timing Helper", () => {
  describe("getWorkingHrs", () => {
    it("should return timings array", () => {
      const timingArr = getWorkingHrs(response, 1);
      expect(timingArr).toStrictEqual(["10:00 AM - 6:00 PM"]);
    });
  });

  describe("getDateInString", () => {
    it("should return time in 12hrs format", () => {
      const timeStr = getDateInString(36000);
      expect(timeStr).toBe("10:00 AM");
    });
  });

  describe("getNextDay", () => {
    it("should return Monday text", () => {
      const sundayStr = getNextDay(6);
      expect(sundayStr).toBe("monday");
    });

    it("should return Tuesday text", () => {
      const sundayStr = getNextDay(0);
      expect(sundayStr).toBe("tuesday");
    });
  });
});
