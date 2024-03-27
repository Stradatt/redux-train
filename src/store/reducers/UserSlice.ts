import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

export interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: string,
    count: number,
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload
            },)
            .addCase(fetchUsers.rejected, (state, action) => {
                if (
                    action.payload &&
                    typeof action.payload === "object" &&
                    "message" in action.payload
                ) {
                    state.isLoading = false;
                    state.error = action.payload.message as string;
                } else {
                    state.isLoading = false;
                    state.error = "An error occurred";
                }})
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            },)
    }
    });

export default userSlice.reducer;