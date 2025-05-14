import {createFileRoute, Outlet} from '@tanstack/react-router'
import Button from "@/component/retro/Button";
import Link from "@/component/retro/Link";
import {Route as GenRsaRoute} from './generate-rsa'
import {Route as RsaSignature} from './rsa-signature'

export const Route = createFileRoute('/common-crypto')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="flex justify-start items-start gap-3">
                <Link
                    to={GenRsaRoute.to}
                    className='mb-3.5 w-auto' type='button'
                >Generate RSA
                </Link>
                <Link
                    to={RsaSignature.to}
                    className='mb-3.5 w-auto' type='button'
                >RSA Signature
                </Link>
            </div>
            <div className="rounded-lg border-4 border-orange-100 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Outlet/>
            </div>
        </main>
    )
}
