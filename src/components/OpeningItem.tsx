import styled from "styled-components";
import { staticKeys } from "../constants";
import { Flex, FlexCenter } from "../styles/CommonStyles";
import { Schedule } from "../types";
import SizedBox from "./SizedBox";

const ItemWrapper = styled.div`
  ${Flex}
  justify-content: space-between;
  min-height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const TitleWrapper = styled.div`
  ${Flex};
  ${FlexCenter};
  flex-flow: column;
  font-weight: ${(props) => props.theme.fontWeight.fw600};
  font-size: ${(props) => props.theme.fontSize.fs20};
  text-transform: capitalize;
`;

const LeftSection = styled.div`
  ${Flex}
  padding-right: ${(props) => props.theme.paddings.p80}
`;

const WorkingWrapper = styled.div`
  ${Flex}
  flex-flow: wrap;
  justify-content: flex-end;
`;

const Working = styled.p`
  max-width: 140px;
`;

const TodayWrapper = styled.div`
  ${Flex};
  ${FlexCenter};
  flex-flow: column;
  font-size: ${(props) => props.theme.fontSize.fs14};
  font-weight: ${(props) => props.theme.fontWeight.fw600};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.info};
  letter-spacing: 0.8px;
`;

const ClosedWrapper = styled.div`
  ${Flex}
  ${FlexCenter}
  color: ${(props) => props.theme.colors.text};
  flex-flow: column;
`;

const OpeningItem = ({ day, isToday, openHrs }: Schedule) => {
  return (
    <ItemWrapper>
      <LeftSection>
        <TitleWrapper data-testid="day-txt">{day}</TitleWrapper>
        {isToday && <SizedBox axis="width" size="10" />}
        {isToday && (
          <TodayWrapper data-testid="today-txt">
            {staticKeys.todayKey}
          </TodayWrapper>
        )}
      </LeftSection>
      {openHrs.length === 0 && (
        <ClosedWrapper data-testid="closed-hrs">
          {staticKeys.closedKey}
        </ClosedWrapper>
      )}
      {openHrs.length !== 0 && (
        <WorkingWrapper>
          <Working data-testid="working-hrs">{openHrs.join(" ")}</Working>
        </WorkingWrapper>
      )}
    </ItemWrapper>
  );
};

export default OpeningItem;
