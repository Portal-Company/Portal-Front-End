import React, { ComponentType } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { theme } from "../styles/theme";
import Loading from "../components/loading";

import { useState, useEffect } from "react";

type NextPageWithLayout = NextPage & {
  Layout?: ComponentType;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  err?: Error;
};

type EmptyLayoutProps = {
  children: React.ReactNode;
};

const EmptyLayout = ({ children }: EmptyLayoutProps) => <>{children}</>;

function MyApp({ Component, pageProps, err }: AppPropsWithLayout) {
  const ComponentLayout = Component.Layout ? Component.Layout : React.Fragment;

  const [loadingPortal, setLoadingPortal] = useState(false);

  useEffect(() => {
    setLoadingPortal(true);
    setTimeout(() => {
      setLoadingPortal(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loadingPortal ? (
        <Loading />
      ) : (
        <ComponentLayout>
          <Component {...pageProps} err={err} />
        </ComponentLayout>
      )}
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
