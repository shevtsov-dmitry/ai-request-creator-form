interface SubmitButtonProps {
    // Define your props here
}

const SubmitButton: React.FC<SubmitButtonProps> = () => {
    return (
        <button
            type="submit"
            className="focus:shadow-outline mx-auto block rounded bg-stone-200 px-4 py-2 font-bold text-gray-800 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-stone-300 focus:outline-none"
        >
            Submit
        </button>
    )
}

export default SubmitButton
