import {createServerFn} from "@tanstack/react-start";

const getEnviVarFn = createServerFn({
    method: 'GET',
})
    .validator((arg1: string) => arg1)
    .handler(({data: arg1}) => process.env[arg1])


async function getEnviVar(arg1: string) {
    return await getEnviVarFn({data: arg1})
}

export {getEnviVar}