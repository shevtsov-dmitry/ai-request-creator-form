import React, { useEffect, useState } from 'react'

interface MainFormProps {}

const MainForm: React.FC<MainFormProps> = ({}) => {
    const DEFAULT_TEXT_AREA_ROWS_AMOUNT = 10

    const [log, setLog] = useState<string>('<nothing>')
    const [contexts, setContexts] = useState<string[]>([''])
    const [rowsInContextInput, setRowsInContextInput] = useState<number>(
        DEFAULT_TEXT_AREA_ROWS_AMOUNT
    )

    useEffect(() => {
        switch (contexts.length) {
            case 0:
            case 1:
                setRowsInContextInput(DEFAULT_TEXT_AREA_ROWS_AMOUNT)
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
    }, [contexts])

    function addContextInput(
        event: MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
        event = null
        const prevList: string[] = [...contexts]
        prevList.push('')
        setContexts(prevList)
    }

    function removeContextInputAtIndex(index: number): void {
        const prevList: string[] = [...contexts]
        prevList.splice(index, 1)
        setContexts(prevList)
    }

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
                <div className="flex flex-col gap-2">
                    {contexts.map((context, index) => (
                        <div className="flex gap-2">
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
                            <div className="flex flex-col gap-[2%]">
                                {index == contexts.length - 1 && (
                                    <button
                                        className="hover:cursor-pointer"
                                        onClick={addContextInput}
                                    >
                                        <img
                                            width={30}
                                            src="images/icons/plus.svg"
                                        />
                                    </button>
                                )}
                                {contexts.length > 1 && (
                                    <button
                                        className="hover:cursor-pointer"
                                        onClick={() =>
                                            removeContextInputAtIndex(index)
                                        }
                                    >
                                        <img
                                            width={30}
                                            src="images/icons/minus.svg"
                                        />
                                    </button>
                                )}
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
                    className="w-fit rounded-lg bg-gray-600 px-6 py-2 text-2xl font-semibold text-white transition-colors hover:cursor-pointer hover:bg-gray-700 focus:outline-none"
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
