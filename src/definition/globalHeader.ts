export default (globalCss: string) => ({
    links: [
        {
            rel: 'stylesheet',
            href: globalCss
        }
    ],
    meta: [
        {
            charSet: 'utf-8',
        },
        {
            name: 'viewport',
            content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
        },
        {
            title: 'TanStack Start Starter',
        },
        {
            httpEquiv: 'X-UA-Compatible',
            content: "ie=edge"
        }
    ],
})