import {undefined} from "zod";

export interface CommonCryptoState {
    generateRsa: {
        publicKey?: string;
        privateKey?: string;
        resultFieldDisable: boolean;
    }
    rsaSignature: {
        privateKey?: string;
        messageSignature?: string;
        hashAlgorithm?: string;
        resultSignature?: string;
        resultFieldDisable: boolean;
        resultFieldColor: 'text-black' | 'text-green-500' | 'text-red-500'
    }
}

export const initialState: CommonCryptoState = {
    generateRsa: {
        resultFieldDisable: true
    },
    rsaSignature: {
        resultFieldDisable: true,
        resultFieldColor: "text-black"
    }
}