import { css } from "styled-components";

export const Flex = css`
  display: flex;
`;

export const FlexCenter = css`
  justify-content: center;
`;

export const Center = css`
  ${Flex}
  ${FlexCenter}
  flex-flow: column;
`;
