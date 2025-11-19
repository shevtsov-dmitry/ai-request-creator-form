import ContextInputRow from '../lib/modular-form/ContextInputRow'
import FormWrapper from '../lib/modular-form/FormWrapper'
import UserMessageInput from '../lib/modular-form/UserMessageInput'

interface MainFormProps {
    // Define your props here
}

const MainForm: React.FC<MainFormProps> = ({}) => {
    return (
        <FormWrapper>
            <div className="text-bold mx-auto text-white">FORM</div>
            <UserMessageInput />
            <ContextInputRow />
        </FormWrapper>
    )
}

export default MainForm
