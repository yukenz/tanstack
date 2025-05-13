import {describe, test} from '@jest/globals';
import {createPublicClient, http} from "viem";
import {mainnet} from "viem/chains";

describe('Test VIEM', () => {
    test('check balance', async () => {

        const client = createPublicClient({
            chain: mainnet,
            transport: http()
        });

        const blockNumber = client.getBlockNumber();

        console.log(await blockNumber);

    });
});