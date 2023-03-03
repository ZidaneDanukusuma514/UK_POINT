import create from "zustand";
import { Bikepoint } from "./Interface";

export const useBikepoint = create<Bikepoint>(() => ({
  Testing: "This is zustand",
}));
