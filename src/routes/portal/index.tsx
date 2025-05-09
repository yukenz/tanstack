import {createFileRoute, useRouter} from '@tanstack/react-router'
import cn from 'classnames'
import {useEffect, useState} from "react";
import Card from "@/component/Card";
import Counter from "@/component/Counter";
import {getEnviVar} from "@/serverFn/environment";

// @ts-ignore
export const Route = createFileRoute('/portal/')({
    head: () => ({
        meta: [
            {title: "Portal Index"},
        ]
    }),
    component: Component
})

function Component() {

    const [appId, setAppId] = useState<string>()
    const [apiKey, setApiKey] = useState<string>()

    useEffect(() => {
        console.log('Component mounted.')

        getEnviVar("APPID").then(value => setAppId(value))
        getEnviVar("APIKEY").then(value => setApiKey(value))

    }, [])


    return (
        <>
            <h1 className={cn("underline")}>Hello I'm portal</h1>
            <p>{appId}</p>
            <p>{apiKey}</p>
            <Card title="Hello World"/>
            <Counter>X</Counter>
        </>
    )
}