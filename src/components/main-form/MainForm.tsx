import { useState } from 'react'
import FormWrapper from '../../lib/modular-form/FormWrapper'
import UserMessageInput from '../../lib/modular-form/UserMessageInput'
import ContextInputRow from '../../lib/modular-form/context-input-rows/ContextInputRow'
import GetResultButton from '../../lib/modular-form/GetResultButton'

interface MainFormProps {}

const MainForm: React.FC<MainFormProps> = ({}) => {
    return (
        <FormWrapper>
            <UserMessageInput />
            <ContextInputRow useAddDeleteButtons />
            <GetResultButton />
        </FormWrapper>
    )
}

export default MainForm
