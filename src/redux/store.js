import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {favoriteReducer} from "./favorite/favoriteSlice.js";
import {camperReducer} from "./campers/campersSlice.js";

const favoritePersistConfig = {
    key: 'favorites',
    storage,
};

export const store = configureStore({
    reducer: {
        favorites: persistReducer(favoritePersistConfig, favoriteReducer),
        campers: camperReducer,
        // filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);