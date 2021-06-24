import styled from "styled-components";
import useFetchTimings from "../hooks/useFetchTimings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { Schedule } from "../types";
import { getWorkingHrs } from "../helper/timing-helper";
import { daysOfWeek, staticKeys } from "../constants";

import { Flex, FlexCenter } from "../styles/CommonStyles";
import { Loader } from "../styles/Loader";
import OpeningItem from "./OpeningItem";

const Position = styled.div`
  ${Flex}
  ${FlexCenter}
  flex-flow: row;
`;

const Heading = styled.div`
  ${Flex};
  font-weight: ${(props) => props.theme.fontWeight.fw900};
  font-size: ${(props) => props.theme.fontSize.fs32};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding-bottom: ${(props) => props.theme.paddings.p16};
`;

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondry};
  box-shadow: ${(props) => props.theme.shadows.md};
  padding: ${(props) => props.theme.paddings.p40};
  border-radius: ${(props) => props.theme.radii.r8};
`;

const IconWrapper = styled.div`
  ${Flex};
  ${FlexCenter};
  flex-flow: column;
  padding-right: ${(props) => props.theme.paddings.p16};
  font-size: ${(props) => props.theme.fontSize.fs24};
`;

const OpeningSummary = () => {
  const { data: timings, loading } = useFetchTimings();
  if (loading) {
    return (
      <Position>
        <Loader />
      </Position>
    );
  }

  const workingHrsArr: Schedule[] = [];
  const currentDay = new Date().getDay();

  daysOfWeek.forEach((day, index) => {
    const obj: Schedule = {
      day,
      isToday:
        index === 6 && currentDay === 0 ? true : index === currentDay - 1,
      openHrs: timings[day].length !== 0 ? getWorkingHrs(timings, index) : [],
    };
    workingHrsArr.push(obj);
  });

  return (
    <Position>
      <CardWrapper data-testid="opening-summary-list">
        <Heading>
          <IconWrapper>
            <FontAwesomeIcon icon={faClock} />
          </IconWrapper>
          <div>{staticKeys.openingHrsKey}</div>
        </Heading>

        {workingHrsArr.map((item, index) => {
          return (
            <OpeningItem
              key={index}
              day={item.day}
              isToday={item.isToday}
              openHrs={item.openHrs}
            />
          );
        })}
      </CardWrapper>
    </Position>
  );
};

export default OpeningSummary;
