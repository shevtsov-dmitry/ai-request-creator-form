import ContextInputRow from '../../lib/modular-form/context-input-rows/ContextInputRow'
import useContextRows from '../../lib/modular-form/context-input-rows/useContextRows'
import FormWrapper from '../../lib/modular-form/FormWrapper'
import UserMessageInput from '../../lib/modular-form/UserMessageInput'

interface MainFormProps {
    // Define your props here
}

const MainForm: React.FC<MainFormProps> = ({}) => {
    const contextRowsManager = useContextRows()

    return (
        <FormWrapper>
            <div className="text-bold mx-auto text-white">FORM</div>
            <UserMessageInput />
            <div className="flex gap-2">
                <button onClick={contextRowsManager.addRow}>+</button>
                <button onClick={contextRowsManager.deleteRow}>-</button>
                {contextRowsManager.rows.map((id) => (
                    <ContextInputRow key={id} />
                ))}
            </div>
        </FormWrapper>
    )
}

export default MainForm
