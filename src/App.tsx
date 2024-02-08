import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GlobalStyles from "./styles/global.style";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
