// app/routes/__root.tsx
import type {ReactNode} from 'react'
import {
    Outlet,
    createRootRoute,
    HeadContent,
    Scripts,
} from '@tanstack/react-router'

import {Provider} from 'react-redux'


import globalCss from '@/styles/global.css?url'
import {TanStackRouterDevtoolsInProd} from "@tanstack/react-router-devtools";
import globalHeader from "@/definition/globalHeader";
import {store} from "@/state/store";
import {RetroNavbar} from "@/component/RetroNavbar";
import {ToastBar, Toaster} from "react-hot-toast";

export const Route = createRootRoute({
    head: () => globalHeader(globalCss),
    component: () => <App/>,
    notFoundComponent: () => <p>Not Found</p>,
})

function App() {

    return (
        <Provider store={store}>
            <RootDocument>
                <RetroNavbar/>
                <Toaster
                    position='bottom-center'
                >
                    {(t) => (
                        <ToastBar
                            toast={t}
                            style={{
                                ...t.style,
                                animation: t.visible
                                    ? 'custom-enter 1s ease'
                                    : 'custom-exit 1s ease forwards',
                                border: 'black solid 2px'
                            }}
                        />
                    )}
                </Toaster>
                <Outlet/>
                <TanStackRouterDevtoolsInProd/>
            </RootDocument>
        </Provider>
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