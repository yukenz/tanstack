import {createFileRoute} from '@tanstack/react-router'
import {doRsaSignature} from "@/serverFn/cryptography";
import cn from "classnames";
import Button from "@/component/retro/Button";
import TextArea from "@/component/retro/TextArea";
import Input from "@/component/retro/Input";
import Radio from "@/component/retro/Radio";
import {FormEventHandler, useState} from "react";
import toast from "react-hot-toast";


export const Route = createFileRoute('/common-crypto/')({
    component: RouteComponent,
})

function RouteComponent() {

    const [result, setResult] = useState<string | undefined>()
    const [resultFieldColor, setResultFieldColor] = useState<
        'text-black' | 'text-green-500' | 'text-red-500'
    >('text-black')
    const [resultFieldDisable, setResultFieldDisable] = useState(true)


    const onSubmitForm: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);

        const privateKey = formData.get('PK') as string;
        const message = formData.get('MSG') as string;
        const algorithm = formData.get('ALG') as string;

        try {
            const signature = await doRsaSignature({privateKey, message, algorithm});
            setResult(signature);
            setResultFieldDisable(false)
            setResultFieldColor('text-green-500')
        } catch (e) {
            setResult((e as Error).message)
            setResultFieldDisable(true)
            setResultFieldColor('text-red-500')
        }
    };


    return ;
}
