// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import store from "../redux_store/store";
import { createWrapper } from "next-redux-wrapper";
import "../styles/globals.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);