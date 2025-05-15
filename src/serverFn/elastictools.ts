import {createServerFn} from "@tanstack/react-start";

interface IBuildApiCurl {
    docId: string
}

const buildApiCurlFn = createServerFn({
    method: 'POST',
})
    .validator((data: IBuildApiCurl) => data)
    .handler(async ({data}) => {

        const response = fetch('http://10.0.118.36:5555/rad/yuyun.elasticrepeater.interfaces:YuyunElasticRepeaterDesc/buildApiCurl', {
            method: 'POST',
            headers: {
                ['Accept']: 'application/json',
                ['Content-Type']: 'application/json',
                ['Authorization']: 'Basic ' + btoa('yuyun:awan123123')
            },
            body: JSON.stringify({
                "indices": "dev-api-gateway*",
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

export {buildApiCurl}