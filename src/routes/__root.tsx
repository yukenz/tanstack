// app/routes/__root.tsx
import type {ReactNode} from 'react'
import {
    Outlet,
    createRootRoute,
    HeadContent,
    Scripts,
} from '@tanstack/react-router'

import globalCss from '@/styles/global.css?url'
import {TanStackRouterDevtoolsInProd} from "@tanstack/react-router-devtools";
import globalHeader from "@/definition/globalHeader";

export const Route = createRootRoute({
    head: () => globalHeader(globalCss),
    component: RootComponent,
})

function RootComponent() {
    return (
        <RootDocument>
            <Outlet/>
            <TanStackRouterDevtoolsInProd/>
        </RootDocument>
    )
}

function RootDocument({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <Scripts/>
        </body>
        </html>
    )
}