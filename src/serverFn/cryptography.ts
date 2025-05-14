import {createServerFn} from "@tanstack/react-start";
import {KJUR, KEYUTIL, hextob64} from 'jsrsasign';

// IDoRsaSignature

interface IDoRsaSignature {
    privateKey: string;
    message: string,
    algorithm: 'SHA256withRSA' | 'SHA512withRSA' | string,
}

const doRsaSignatureFn = createServerFn({
    method: 'POST',
})
    .validator((d: IDoRsaSignature) => d)
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

async function doRsaSignature(props: IDoRsaSignature) {
    return await doRsaSignatureFn({data: props})
}


// DoGenerateRsa
interface IDoGenerateRsa {
    keyLength: 1024 | 2048 | 4096 | number,
}

const doGenerateRsaFn = createServerFn({
    method: 'POST',
})
    .validator((d: IDoGenerateRsa) => d)
    .handler(({data}) => {

        console.log(data);

        const keypair = KEYUTIL.generateKeypair("RSA", data.keyLength);
        const privPem = KEYUTIL.getPEM(keypair.prvKeyObj, "PKCS8PRV");
        const pubPem = KEYUTIL.getPEM(keypair.pubKeyObj);

        return {privPem, pubPem};

    })

async function doGenerateRsa(props: IDoGenerateRsa) {
    return await doGenerateRsaFn({data: props})
}

export {doRsaSignature,doGenerateRsa}