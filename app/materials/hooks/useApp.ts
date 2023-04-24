import { useContext } from "react";
import { ApplicationContext } from "../context/appContext";

function useApp() {
  return useContext(ApplicationContext);
}

export default useApp;
