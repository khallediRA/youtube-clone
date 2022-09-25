import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./index";

export const useAppDispatch : () => AppDispatch= useDispatch;
// To test lately
// export const useAppSelector = (state:RootState) => state.youtubeApp;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
