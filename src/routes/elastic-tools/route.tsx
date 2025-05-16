import {createFileRoute, Outlet} from '@tanstack/react-router'
import Button from "@/component/retro/Button";
import Link from "@/component/retro/Link";
import {Route as BuildApiCurlRoute} from './build-api-curl'
import {Route as BuildApiNativeCurlRoute} from './build-api-native-curl'
import {useEffect} from "react";
import {useStoreDispatch} from "@/state/store";
// import {Route as RsaSignature} from './rsa-signature'
import {loadDocumentId} from "@/state/elastic/elasticSlice";

export const Route = createFileRoute('/elastic-tools')({
    component: RouteComponent,
})

function RouteComponent() {

    const dispatch = useStoreDispatch();

    useEffect(() => {
        dispatch(loadDocumentId())
    }, []);

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="flex justify-start items-start gap-3">
                <Link
                    to={BuildApiCurlRoute.to}
                    className='mb-3.5 w-auto' type='button'
                >Build API Curl
                </Link>
                <Link
                    to={BuildApiNativeCurlRoute.to}
                    className='mb-3.5 w-auto' type='button'
                >Build API Native Curl
                </Link>
            </div>
            <div className="rounded-lg border-4 border-orange-100 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Outlet/>
            </div>
        </main>
    )
}
