import { useEffect, useState } from 'react'

const GetResultButton: React.FC = () => {
    const [isResultSuccessful, setIsResultSuccessful] = useState<Boolean>(false)

    async function copyResult() {
        // ...
        setIsResultSuccessful(true)
        setTimeout(() => setIsResultSuccessful(false), 2000)
    }

    return (
        <>
            <button
                onClick={copyResult}
                type="submit"
                className="focus:shadow-outline mx-auto block rounded bg-stone-200 px-4 py-2 font-bold text-gray-800 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-stone-300 focus:outline-none"
            >
                COPY
            </button>
            {isResultSuccessful && (
                <div className="fixed rounded-sm bg-neutral-500 p-2 opacity-45">
                    <p className="font-bold text-green-500">success</p>
                </div>
            )}
        </>
    )
}

export default GetResultButton
