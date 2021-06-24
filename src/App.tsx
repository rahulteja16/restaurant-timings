import OpeningSummary from "./components/OpeningSummary";
import ThemeProvider from "./styles/ThemeProvider";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Flex, FlexCenter } from "./styles/CommonStyles";

const Wrapper = styled.div`
  ${Flex}
  ${FlexCenter}
  flex-flow: column;
  height: 100vh;
`;

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Wrapper>
        <OpeningSummary />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
