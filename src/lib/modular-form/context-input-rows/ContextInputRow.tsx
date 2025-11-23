import React, { useEffect, useState } from 'react'
import useContextRows from './useContextRows'

interface ContextInputProps {
    useAddDeleteButtons: boolean
}

const ContextInputRow: React.FC<ContextInputProps> = ({
    useAddDeleteButtons = false,
}) => {
    const { rows, addRow, deleteRow } = useContextRows()

    const [isRowAdded, setIsRowAdded] = useState<boolean>(false)

    useEffect(() => {
        console.log(rows)
    }, [rows])

    function handleChange() {}

    return (
        <>
            <>
                {useAddDeleteButtons && !isRowAdded && (
                    <button onClick={addRow}>
                        <img
                            src="images/icons/plus.svg"
                            className="w-[10%]"
                            alt="+"
                        />
                    </button>
                )}
                {useAddDeleteButtons && rows.length !== 0 && isRowAdded && (
                    <button onClick={deleteRow}>
                        <img
                            src="images/icons/minus.svg"
                            className="w-[10%]"
                            alt="-"
                        />
                    </button>
                )}
            </>
            <div className="h-fit w-full">
                <label
                    htmlFor="content"
                    className="block font-bold text-gray-200"
                >
                    Context
                </label>
                <textarea
                    id="content"
                    name="content"
                    className="focus:shadow-outline h-24 w-full appearance-none rounded border leading-tight text-gray-200 shadow focus:outline-none"
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default ContextInputRow
