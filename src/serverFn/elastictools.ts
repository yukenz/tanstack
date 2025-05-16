import {createServerFn} from "@tanstack/react-start";


// BuildApiCurl
interface IBuildApiCurl {
    docId: string,
    indices: string
}

const buildApiCurlFn = createServerFn({
    method: 'POST',
})
    .validator((data: IBuildApiCurl) => data)
    .handler(async ({data}) => {

        const esbuser = process.env.ESB_USER;
        const esbpass = process.env.ESB_PASS;

        const response = fetch('http://10.0.118.36:5555/rad/yuyun.elasticrepeater.interfaces:YuyunElasticRepeaterDesc/buildApiCurl', {
            method: 'POST',
            headers: {
                ['Accept']: 'application/json',
                ['Content-Type']: 'application/json',
                ['Authorization']: 'Basic ' + btoa(esbuser + ':' + esbpass)
            },
            body: JSON.stringify({
                "indices": data.indices,
                "idDoc": data.docId,
                "targetProtocol": "http",
                "additionalHeaders": {
                    "Accept-Encoding": "none"
                },
                "removeHeaders": [
                    "Authorization",
                    "traceparent",
                    "User-Agent",
                    "Content-Length",
                    "X-dynaTrace",
                    "traceNumber",
                    "tracestate"
                ]
            }),
            signal: AbortSignal.timeout(10000)
        });

        return await response
            .then(async (res) => {
                const body = await res.text();
                console.log(body)
                return body
            })
            .catch(e => (e as Error).message);

    })

async function buildApiCurl(data: IBuildApiCurl) {
    return await buildApiCurlFn({data})
}


// BuildApiNativeCurl
interface IBuildApiNativeCurl {
    docId: string,
    indices: string
}

const buildApiNativeCurlFn = createServerFn({
    method: 'POST',
})
    .validator((data: IBuildApiCurl) => data)
    .handler(async ({data}) => {

        const esbuser = process.env.ESB_USER;
        const esbpass = process.env.ESB_PASS;

        const response = fetch('http://10.0.118.36:5555/rad/yuyun.elasticrepeater.interfaces:YuyunElasticRepeaterDesc/buildNativeCurl', {
            method: 'POST',
            headers: {
                ['Accept']: 'application/json',
                ['Content-Type']: 'application/json',
                ['Authorization']: 'Basic ' + btoa(esbuser + ':' + esbpass)
            },
            body: JSON.stringify({
                "indices": data.indices,
                "idDoc": data.docId,
                "additionalHeaders": {
                    "Accept-Encoding": "none"
                },
                "removeHeaders": [
                    "Authorization",
                    "traceparent",
                    "User-Agent",
                    "Content-Length",
                    "X-dynaTrace",
                    "traceNumber",
                    "tracestate"
                ]
            }),
            signal: AbortSignal.timeout(10000)
        });

        return await response
            .then(async (res) => {
                const body = await res.text();
                console.log(body)
                return body
            })
            .catch(e => (e as Error).message);

    })

async function buildApiNativeCurl(data: IBuildApiNativeCurl) {
    return await buildApiNativeCurlFn({data})
}

export {buildApiCurl, buildApiNativeCurl}