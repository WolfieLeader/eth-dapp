import { useContext } from "react";
import { ethContext } from "../context/ethContext";

export const useMetamask = () => useContext(ethContext);
