import {createFileRoute, useRouter} from '@tanstack/react-router'
import cn from 'classnames'
import {useEffect} from "react";
import Card from "@/component/Card";

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

    useEffect(() => {
        console.log('Component mounted.')
    }, [])

    // const router = useRouter()
    // const state = Route.useLoaderData()

    return (
        <>
            <h1 className={cn("underline")}>Hello I'm portal</h1>
            <Card title="Hello World"/>
        </>
    )
}