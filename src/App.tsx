import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default App;
