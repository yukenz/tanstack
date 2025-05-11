import {createFileRoute} from '@tanstack/react-router'
import {doCrypto} from "@/serverFn/cryptography";
import cn from "classnames";
import Button from "@/component/retro/Button";
import TextArea from "@/component/retro/TextArea";
import Input from "@/component/retro/Input";
import Radio from "@/component/retro/Radio";
import {useState} from "react";
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

    return <main className="container mx-auto px-4 py-12">
        <div className="rounded-lg border-4 border-orange-100 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="mb-6 text-4xl font-black text-black">RSA Signature Generator</h1>
            <p className="text-lg text-black">This is a retro-styled website with a nostalgic navbar.</p>


            {/*<button onClick={async () => {*/}
            {/*    const res = await doCrypto();*/}
            {/*    console.log(res)*/}
            {/*}} className="font-black text-black outline p-2 rounded-2xl hover:bg-amber-200"> Call Server Fn*/}
            {/*</button>*/}


            <form
                className="flex flex-col h-full p-3.5 gap-1"
                name='signature-form'
                onSubmit={async (event) => {
                    event.preventDefault()
                    const formData = new FormData(event.currentTarget);

                    const privateKey = formData.get('PK') as string;
                    const message = formData.get('MSG') as string;
                    const algorithm = formData.get('ALG') as string;

                    try {
                        const signature = await doCrypto({privateKey, message, algorithm});
                        setResult(signature);
                        setResultFieldDisable(false)
                        setResultFieldColor('text-green-500')
                    } catch (e) {
                        setResult((e as Error).message)
                        setResultFieldDisable(true)
                        setResultFieldColor('text-red-500')
                    }
                }}
            >

                {/* Private Key Field */}
                <TextArea
                    label="Enter Private Key"
                    placeholder="Private Key"
                    className='h-[200px]'
                    name='PK'
                />


                {/* Message Field */}
                <TextArea
                    label="Enter Message"
                    placeholder="Signature Message"
                    className='h-[200px] mb-3.5'
                    name='MSG'
                />

                {/* Select Algo */}
                <Radio
                    className='mb-3.5'
                    options={[
                        {label: 'SHA256', value: 'SHA256withRSA'},
                        {label: 'SHA512', value: 'SHA512withRSA'},
                    ]}
                    name='ALG'
                    defaultValue="SHA256withRSA"
                    label='Algorithm'
                />

                <Button
                    className='mb-3.5'
                    type='submit'
                >Generate Signature
                </Button>
            </form>
            <Input
                disabled={resultFieldDisable}
                defaultValue="Signature Result Here"
                className={cn('text-center',
                    resultFieldColor
                )}
                value={result}
                onClick={event => {
                    const target = event.currentTarget;
                    navigator.clipboard.writeText(target.value)
                        .then(value => toast("Signature copied to clipboard", {duration: 1000}))
                }}
            />
        </div>

    </main>
}
