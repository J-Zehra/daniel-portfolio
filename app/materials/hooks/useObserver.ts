"use client";

import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { ApplicationContext } from "../context/appContext";

function useObserver(pageName: string) {
  const context = useContext(ApplicationContext);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      context?.setActiveNav(pageName);
    }
  }, [ref, isInView, context, pageName]);

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [router.pathname]);

  return { ref };
}

export default useObserver;
