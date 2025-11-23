import React from 'react'

interface UserRequirementInputProps {
    // Define props here
}

const UserMessageInput: React.FC<UserRequirementInputProps> = () => {
    function handleChange() {}

    return (
        <div className="mb-4">
            <label
                htmlFor="context"
                className="mb-2 block font-bold text-gray-200"
            >
                Ask AI
            </label>
            <input
                type="text"
                id="context"
                name="context"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-200 shadow focus:outline-none"
                onChange={handleChange}
            />
        </div>
    )
}

export default UserMessageInput
