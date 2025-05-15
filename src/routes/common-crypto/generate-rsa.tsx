import {createFileRoute} from '@tanstack/react-router'
import TextArea from "@/component/retro/TextArea";
import {FormEventHandler, useEffect, useState} from "react";
import Radio from "@/component/retro/Radio";
import Button from "@/component/retro/Button";
import {doGenerateRsa, doRsaSignature} from "@/serverFn/cryptography";
import {
    setGenerateRsaKey,
    useCommonCryptoSelector,
    saveGenerateRsaState,
    loadGenerateRsaState
} from "@/state/common-crypto/commonCryptoSlice";
import {useStoreDispatch} from "@/state/store";
import {CommonCryptoState} from "@/state/common-crypto/commonCryptoState";

export const Route = createFileRoute('/common-crypto/generate-rsa')({
    component: RouteComponent,
})

type generateKeyResult = Awaited<ReturnType<typeof doGenerateRsa>>;

function RouteComponent() {

    const commonCryptoState = useCommonCryptoSelector();
    const dispatch = useStoreDispatch();

    const onSubmitForm: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);

        try {
            const keyLength = parseInt(formData.get('LGT') as string);
            const rsaKeyPair = await doGenerateRsa({keyLength})

            dispatch(setGenerateRsaKey({
                privateKey: rsaKeyPair.privPem,
                publicKey: rsaKeyPair.pubPem,
                resultFieldDisable: false
            }));

            dispatch(saveGenerateRsaState())
        } catch (e) {
        }
    };

    useEffect(() => {
        dispatch(loadGenerateRsaState())
    },[]);

    return <div className="flex flex-col h-full p-3.5 gap-1">
        <h1 className="mb-6 text-4xl font-black text-black">RSA Key Generator</h1>
        <p className="text-lg text-black">Generate RSA Private Key</p>
        <form
            className="flex flex-col h-full p-3.5 gap-1"
            name='signature-form'
            onSubmit={onSubmitForm}
        >

            {/* Key Length */}
            <Radio
                className='mb-3.5'
                options={[
                    {label: '1024 Bit', value: '1024'},
                    {label: '2048 Bit', value: '2048'},
                    {label: '4096 Bit', value: '4096'},
                ]}
                name='LGT'
                defaultValue="2048"
                label='Key Length'
            />

            {/* Submit Field */}
            <Button
                className='mb-3.5'
                type='submit'
            >Generate Signature
            </Button>
        </form>

        {/* Result */}
        <TextArea
            disabled={commonCryptoState.generateRsa.resultFieldDisable}
            label="RSA Private Key Result"
            placeholder="Private Key"
            className='h-[200px]'
            name='PubKey'
            value={commonCryptoState.generateRsa?.privateKey}
        />
        <TextArea
            disabled={commonCryptoState.generateRsa.resultFieldDisable}
            label="RSA Public Key Result"
            placeholder="Public Key"
            className='h-[200px]'
            name='PrivKey'
            value={commonCryptoState?.generateRsa?.publicKey}
        />
    </div>
}
