import type { AppProps } from "next/app";
import { theme } from "styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyles";
import { wrapper } from "redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
