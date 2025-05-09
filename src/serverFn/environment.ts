import {createServerFn} from "@tanstack/react-start";

const getEnviVarFn = createServerFn({
    method: 'GET',
})
    .validator((data: string) => data)
    .handler(({data}) => process.env[data])

async function getEnviVar(enviVarKey: string) {
    return await getEnviVarFn({data: enviVarKey})
}

export {getEnviVar}