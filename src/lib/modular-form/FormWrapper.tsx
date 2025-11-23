import React from 'react'

interface FormWrapperProps {
    children: React.ReactNode
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
    function submitForm(event: React.FormEvent) {
        event.preventDefault()
    }

    return (
        <form
            className="mx-auto max-w-md space-y-8 rounded-lg border border-stone-600 bg-zinc-800 p-4 shadow-lg"
            onClick={submitForm}
        >
            {children}
        </form>
    )
}

export default FormWrapper
