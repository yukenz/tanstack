import {describe, test} from '@jest/globals';
import {createPublicClient, http} from "viem";
import {mainnet} from "viem/chains";
import {buildApiCurl} from "../serverFn/elastictools";

describe('Test Fetch', () => {
    test('generate curl api', async () => {

        const response = fetch('http://10.0.118.36:5555/rad/yuyun.elasticrepeater.interfaces:YuyunElasticRepeaterDesc/buildApiCurl', {
            method: 'POST',
            headers: {
                ['Accept']: 'application/json',
                ['Content-Type']: 'application/json',
                ['Authorization']: 'Basic ' + btoa('yuyun:awan123123')
            },
            body: JSON.stringify({
                "indices": "dev-api-gateway*",
                "idDoc": "7MbPf5YB3lIaMSzn2ubf",
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

        await response.then(async (res) => {
            try {
                // Failed JSON
                return await res.json();
            } catch (e) {
                // Success CURL
                return await res.text();
            }
        }).catch(e => (e as Error).message);



    });

    test('generate curl api serverfn', async () => {

        const newVar = await buildApiCurl();
        console.log(newVar);

    });
});