import "../styles/globals.css";
import React from "react";
import { NextWebVitalsMetric } from "next/app";

if (
  [process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL].some(
    (envVar) => envVar === undefined
  )
) {
  throw new Error("Must provide all environment variables");
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default App;
