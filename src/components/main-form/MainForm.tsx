import React, {useEffect, useState} from 'react'
import {useKeyboardShortcuts} from 'use-keyboard-shortcuts'
import {encode} from "@toon-format/toon";

interface MainFormProps {
}

const MainForm: React.FC<MainFormProps> = ({}) => {
    const DEFAULT_TEXT_AREA_ROWS_AMOUNT = 10

    const [userRequestMessage, setUserRequestMessage] = useState<string>('')
    const [log, setLog] = useState<string>('<nothing>')
    const [contextList, setContextList] = useState<string[]>([''])
    const [rowsInContextInput, setRowsInContextInput] = useState<number>(
        DEFAULT_TEXT_AREA_ROWS_AMOUNT
    )

    enum CopyButtonColors {
        DEFAULT_GRAY_BLUE = '#414754',
        SUCCESS_GREEN = '#2c855b',
        FAILURE_RED = '#873141',
    }

    const [copyButtonColor, setCopyButtonColor] = useState<string>(
        CopyButtonColors.DEFAULT_GRAY_BLUE
    )

    useKeyboardShortcuts([
        {keys: ['alt', 'n'], onEvent: () => addContextInput()},
        {keys: ['alt', 'shift', 'c'], onEvent: () => clearInputsContext()},
    ])

    useEffect(() => {
        switch (contextList.length) {
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

    }, [contextList])

    function addContextInput(): void {
        const prevList: string[] = [...contextList]
        prevList.push('')
        setContextList(prevList)
    }

    function removeContextInputAtIndex(index: number): void {
        const prevList: string[] = [...contextList]
        prevList.splice(index, 1)
        setContextList(prevList)
    }

    function clearInputsContext() {
        setUserRequestMessage('')
        setContextList([''])
    }

    function handleButtonPressToCopyOutput() {
        const toon = encode(
            {
                userMessage: userRequestMessage,
                context: contextList,
            }
        )

        if (userRequestMessage !== '') {
            navigator.clipboard
                .writeText(toon)
                .then(() => {
                    setLog('Output copied to clipboard')
                    setCopyButtonColor(CopyButtonColors.SUCCESS_GREEN)
                    setTimeout(
                        () =>
                            setCopyButtonColor(
                                CopyButtonColors.DEFAULT_GRAY_BLUE
                            ),
                        700
                    )
                })
                .catch((error) => {
                    console.error('Failed to copy output:', error)
                    setLog('Failed to copy output')
                    setCopyButtonColor(CopyButtonColors.FAILURE_RED)
                    setTimeout(
                        () =>
                            setCopyButtonColor(
                                CopyButtonColors.DEFAULT_GRAY_BLUE
                            ),
                        700
                    )
                })
        } else {
            setLog('User input is empty')
            setCopyButtonColor(CopyButtonColors.FAILURE_RED)
            setTimeout(
                () => setCopyButtonColor(CopyButtonColors.DEFAULT_GRAY_BLUE),
                700
            )
        }
    }

    function formatNewContextInput(text: string): string {
        return text.replaceAll("\n", "");
    }

    return (
        <main className="mx-[5%] mt-10 flex h-screen w-screen flex-col gap-6">
            <h1 className="w-full text-center text-3xl font-black text-gray-300">
                REQUEST CREATOR 💬
            </h1>
            <div>
                <label
                    htmlFor="user-input"
                    className="text-base font-bold text-gray-300"
                >
                    User Message
                </label>
                <textarea
                    id="user-input"
                    rows={4}
                    className="w-full rounded-md border border-gray-500 bg-gray-700 px-4 py-2 text-base font-normal text-white focus:border-blue-500 focus:outline-none"
                    value={userRequestMessage}
                    onChange={(e) => setUserRequestMessage(e.target.value)}
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
                    {contextList.map((context, index) => (
                        <div
                            key={index}
                            className="flex gap-2">
                            <textarea
                                className="w-full flex-8 rounded-md border border-gray-500 bg-gray-700 px-4 py-2 text-base font-normal text-white focus:border-blue-500 focus:outline-none"
                                value={context}
                                onChange={(e) => {
                                    const newContexts = [...contextList]
                                    newContexts[index] =
                                        formatNewContextInput(e.target.value)
                                    setContextList(newContexts)
                                }}
                                rows={rowsInContextInput}
                            />
                            <div className="flex flex-col gap-[2%]">
                                {index == contextList.length - 1 && (
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
                                {contextList.length > 1 && (
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
                    onClick={handleButtonPressToCopyOutput}
                    style={{
                        boxShadow:
                            'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',

                        backgroundColor: copyButtonColor,
                    }}
                    title="Copy Output to Clipboard as JSON"
                    className="w-fit rounded-lg px-6 py-2 text-2xl font-semibold text-white transition-all hover:scale-105 hover:cursor-pointer hover:bg-gray-700 focus:outline-none"
                >
                    COPY
                </button>
                <button
                    type="button"
                    onClick={() => clearInputsContext()}
                    style={{
                        backgroundColor: CopyButtonColors.DEFAULT_GRAY_BLUE,
                    }}
                    className="absolute mt-1.5 ml-60 w-fit rounded-lg px-3 py-1 text-xl font-semibold text-white transition-all hover:scale-105 hover:cursor-pointer hover:bg-gray-700 focus:outline-none"
                >
                    CLEAR
                </button>
            </div>
            {/* TODO {Settings.showLogs && <div className="text-sm font-light text-wrap text-gray-200"> {log} </div>}*/}
            {false && <p>{log}</p>}
        </main>
    )
}


export default MainForm
