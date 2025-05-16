import {configureStore} from "@reduxjs/toolkit";
import counterReducer, {counter} from './counter/counterSlice'
import commonCryptoReducer, {commonCrypto} from './common-crypto/commonCryptoSlice'
import elasticReducer, {elastic} from './elastic/elasticSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        [commonCrypto]: commonCryptoReducer,
        [counter]: counterReducer,
        [elastic]: elasticReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;
export const useStoreDispatch =
    () => useDispatch<typeof store.dispatch>();

export type StoreDispatch = ReturnType<typeof useStoreDispatch>