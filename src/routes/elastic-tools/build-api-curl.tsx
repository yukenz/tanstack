import {createFileRoute} from '@tanstack/react-router'
import {FormEventHandler, useEffect, useState} from "react";
import {buildApiCurl} from "@/serverFn/elastictools";
import Button from "@/component/retro/Button";
import {Inbox} from "lucide-react";
import Input from "@/component/retro/Input";

export const Route = createFileRoute('/elastic-tools/build-api-curl')({
    component: RouteComponent,
})

function RouteComponent() {


    const [result, setResult] = useState<string>()

    const onSubmitForm: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const docId = formData.get('DOCID') as string;

        const res = await buildApiCurl({docId});
        setResult(res);
    };

    return <div className="flex flex-col h-full p-3.5 gap-1">
        <h1 className="mb-6 text-4xl font-black text-black">Build Curl API</h1>
        <p className="text-lg text-black">Curl generate based on elastic</p>
        <form
            className="flex flex-col h-full p-3.5 gap-1"
            name='signature-form'
            onSubmit={onSubmitForm}
        >

            <Input
                className='mb-3.5'
                name='DOCID'
                label='Document Id'
            />

            {/* Submit Field */}
            <Button
                className='mb-3.5'
                type='submit'
            >Generate API Curl
            </Button>
            <p>{result}</p>

        </form>
    </div>;
}
