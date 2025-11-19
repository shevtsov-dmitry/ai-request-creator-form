import React from 'react'

interface ContextInputProps {}

const ContextInputRow: React.FC<ContextInputProps> = ({}) => {
    function handleChange() {}

    return (
        <div className="mb-6">
            <label
                htmlFor="content"
                className="mb-2 block font-bold text-gray-200"
            >
                Content
            </label>
            <input
                id="content"
                name="content"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-200 shadow focus:outline-none"
                onChange={handleChange}
            />
        </div>
    )
}

export default ContextInputRow
