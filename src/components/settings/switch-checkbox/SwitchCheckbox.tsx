import React from 'react'
import './switch-checkbox.css'

interface SwitchCheckboxProps {
    checked?: boolean
    disabled?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SwitchCheckbox: React.FC<SwitchCheckboxProps> = ({
    checked = false,
    disabled = false,
    onChange,
}) => (
    <label className="checkbox-google">
        <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={onChange}
        />
        <span className="checkbox-google-switch" />
    </label>
)

export default SwitchCheckbox
