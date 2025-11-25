import React, { useEffect, useState } from 'react'

interface MainFormProps {}

const MainForm: React.FC<MainFormProps> = ({}) => {
    const DEFAULT_ROWS_AMOUNT = 10

    const [log, setLog] = useState<string>('<nothing>')
    const [contexts, setContexts] = useState<string[]>([''])
    const [rowsInContextInput, setRowsInContextInput] =
        useState<number>(DEFAULT_ROWS_AMOUNT)

    useEffect(() => {
        switch (contexts.length) {
            case 0:
            case 1:
                setRowsInContextInput(DEFAULT_ROWS_AMOUNT)
                break
            case 2:
                setRowsInContextInput(6)
                break
            case 3:
                setRowsInContextInput(3)
                break
            default:
                setRowsInContextInput(2)
        }
    }, [])

    return (
        <main className="mx-5 flex h-screen w-screen flex-col gap-3">
            <h1 className="w-full text-center text-2xl font-black text-gray-300">
                REQUEST CREATOR
            </h1>
            <div>
                <label
                    htmlFor="user-input"
                    className="text-base font-bold text-gray-300"
                >
                    User Message
                </label>
                <input
                    type="text"
                    id="user-input"
                    className="w-full rounded-md border border-gray-500 bg-gray-700 px-4 py-2 text-base font-normal text-white focus:border-blue-500 focus:outline-none"
                />
            </div>
            <div>
                <label
                    htmlFor="context"
                    className="text-base font-bold text-gray-300"
                >
                    Context
                </label>
                <div>
                    {contexts.map((context, index) => (
                        <div className="flex">
                            <textarea
                                className="w-full flex-8 rounded-md border border-gray-500 bg-gray-700 px-4 py-2 text-base font-normal text-white focus:border-blue-500 focus:outline-none"
                                key={index}
                                value={context}
                                onChange={(e) => {
                                    const newContexts = [...contexts]
                                    newContexts[index] = e.target.value
                                    setContexts(newContexts)
                                }}
                                rows={rowsInContextInput}
                            />
                            <div className="h-16 w-full flex-1 bg-purple-300">
                                <img src="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    type="button"
                    style={{
                        boxShadow:
                            'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
                    }}
                    className="w-fit rounded-lg bg-gray-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:cursor-pointer hover:bg-gray-700 focus:outline-none"
                >
                    COPY
                </button>
            </div>
            <div className="text-sm font-light text-wrap text-gray-200">
                {log}
            </div>
        </main>
    )
}

export default MainForm
