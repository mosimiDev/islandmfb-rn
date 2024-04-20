import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from './authSlice'
import airtimeReducer from "./airtimeSlice";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";


const rootReducer = combineReducers({

    auth: persistReducer(
        {
            key: "auth",
            storage: AsyncStorage,
            blacklist: ["isLoading", "errorMessage", "isError", "isSuccess"],
        },
        authReducer
    ),
    airtime:airtimeReducer
})


const presistedReducer = persistReducer(
    {
        key: "root",
        storage: AsyncStorage,
    },
    rootReducer,

)

export const store = configureStore({


    reducer: presistedReducer

});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
