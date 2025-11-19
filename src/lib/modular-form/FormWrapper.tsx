import React from 'react'

interface FormWrapperProps {
    children: React.ReactNode
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
    return (
        <form className="mx-auto max-w-md space-y-8 rounded-lg border border-stone-600 p-4 shadow-lg">
            {children}
        </form>
    )
}

export default FormWrapper
