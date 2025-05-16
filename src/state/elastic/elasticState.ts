import {createServerFn} from "@tanstack/react-start";

export interface ElasticState {
    documentId?: string
}


export const initialState = () => {

    return {} as ElasticState
}