import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./features/middleware";
import modeReducer from './features/modeSlice'
import dataReducer from './features/dataSlice'

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        data: dataReducer
    },
    middleware: [ logger ]
})