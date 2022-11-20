import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

export const Loader = () => {
  const ref = useRef(null);
  const isLoading = useSelector((state) => state.general.loading);

  useEffect(() => {
    if (isLoading === true) ref.current.continuousStart();
    if (isLoading === false) ref.current.complete();
  }, [isLoading]);

  return <LoadingBar color="#57BBA7" ref={ref} height={4}/>;
};
