import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Counter/counterSlice";
import formReducer from "../Form/formSlice";

export const store = configureStore({
    reducer: {
        form: formReducer,
        counter: counterReducer
        
        
    }
})

