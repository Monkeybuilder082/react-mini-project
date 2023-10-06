import {configureStore} from '@reduxjs/toolkit'
import movieSliceReducer from './reducers/movieSlice'


export default configureStore({
    reducer:{
        movie:movieSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})