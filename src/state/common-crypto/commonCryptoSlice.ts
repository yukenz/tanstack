import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "@/state/store";
import {CommonCryptoState, initialState} from "./commonCryptoState";
import {WritableDraft} from "immer";


const name = 'common-crypto';

const reducers = {
    setGenerateRsaKey: (state: WritableDraft<CommonCryptoState>, {
        type,
        payload
    }: PayloadAction<CommonCryptoState['generateRsa']>) => {
        state.generateRsa = payload;
    },
    setRsaSignature: (state: WritableDraft<CommonCryptoState>, {
        type,
        payload
    }: PayloadAction<CommonCryptoState['rsaSignature']>) => {
        state.rsaSignature = payload;
    },
    setRsaSignatureError: (state: WritableDraft<CommonCryptoState>, {type, payload}: PayloadAction<string>) => {
        state.rsaSignature.resultSignature = payload;
        state.rsaSignature.resultFieldDisable = true;
        state.rsaSignature.resultFieldColor = "text-red-500";
    },
}

const commonCryptoSlice = createSlice({
    name,
    initialState,
    reducers
});

export const {
    setGenerateRsaKey,
    setRsaSignature,
    setRsaSignatureError
} = commonCryptoSlice.actions;

export const useCommonCryptoSelector =
    () => useSelector((state: RootState) => state[commonCryptoSlice.name]);

// For Store
export default commonCryptoSlice.reducer;
export const commonCrypto = name;

