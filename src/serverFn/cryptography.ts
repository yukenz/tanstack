import {createServerFn} from "@tanstack/react-start";
import {KJUR, KEYUTIL, hextob64} from 'jsrsasign';


interface IDoCrypto {
    privateKey: string;
    message: string,
    algorithm: 'SHA256withRSA' | 'SHA512withRSA' | string,
}

const doCryptoFn = createServerFn({
    method: 'POST',
})
    .validator((d: IDoCrypto) => d)
    .handler(({data}) => {

        console.log(data);

        // const keypair = KEYUTIL.generateKeypair("RSA", 2048);
        // const privPem = KEYUTIL.getPEM(keypair.prvKeyObj, "PKCS8PRV");
        // const pubPem = KEYUTIL.getPEM(keypair.pubKeyObj);

        const privKey = KEYUTIL.getKey(data.privateKey);

        const sha256wRsa = new KJUR.crypto.Signature({alg: data.algorithm});
        sha256wRsa.init(privKey)
        sha256wRsa.updateString(JSON.stringify(data.message))

        const b64Signature = hextob64(sha256wRsa.sign());
        return b64Signature;

    })

async function doCrypto(props: IDoCrypto) {
    return await doCryptoFn({data: props})
}

export {doCrypto}