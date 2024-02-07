import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <RouterProvider router={router} />
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default App;
