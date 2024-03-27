import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDicpatch, Rootstate} from "../store/store";

export const useAppDispatch = () => useDispatch<AppDicpatch>();
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
