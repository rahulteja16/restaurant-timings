import styled from "styled-components";

type dimensions = {
  size: string;
  axis: string;
};

function getHeight({ axis, size }: dimensions) {
  return axis === "width" ? 1 : size;
}

function getWidth({ axis, size }: dimensions) {
  return axis === "height" ? 1 : size;
}

const SizedBox = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default SizedBox;
