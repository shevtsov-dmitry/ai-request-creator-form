import { useEffect, useState } from 'react'
import './settings.css'
import SwitchCheckbox from './switch-checkbox/SwitchCheckbox'

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
    type SettingsOptions = {
        useShortcuts: boolean
        useVisualShortuctutsGuide: boolean
    }

    const [settings, setSettings] = useState<SettingsOptions>(() => {
        const saved = localStorage.getItem('settings')
        return saved
            ? JSON.parse(saved)
            : {
                  useShortcuts: false,
                  useVisualShortuctutsGuide: false,
              }
    })

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings))
    }, [settings])

    return (
        <div className="h-screen w-screen">
            <ul className="h-fit w-full px-[2%]">
                <li className="settings-row">
                    <p>use shortcuts</p>
                    <SwitchCheckbox
                        checked={settings.useShortcuts}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                useShortcuts: e.target.checked,
                            })
                        }
                    />
                </li>

                <li className="settings-row">
                    <p>visual shortcuts guide</p>
                    <SwitchCheckbox
                        checked={settings.useVisualShortuctutsGuide}
                        onChange={(e) =>
                            setSettings({
                                ...settings,
                                useVisualShortuctutsGuide: e.target.checked,
                            })
                        }
                    />
                </li>
            </ul>
        </div>
    )
}

export default Settings
