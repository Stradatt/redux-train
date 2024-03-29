import {AppDicpatch} from "../store";
import {IUser} from "../../models/IUser";
import axios from "axios";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

// const GetErrorMessage = (error: unknown) => {
//     if (error instanceof Error) return error.message
//     return String(error)
// }
//
//реализация запроса на ванильном редакс
// export const fetchUsers = () => async (dispatch: AppDicpatch)=> {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError(GetErrorMessage(e)))
//     }
// }

// рекомендованная реализация запроса на RTK

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunckAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (e) {
            return thunckAPI.rejectWithValue('Ne udalos')
        }

    }
)















