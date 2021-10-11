import "../styles/reset.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "components/store/RootReducer";
import React from "react";
import { Provider } from "react-redux";

const store = configureStore({ reducer: RootReducer });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </RecoilRoot>
  );
}
export default MyApp;
