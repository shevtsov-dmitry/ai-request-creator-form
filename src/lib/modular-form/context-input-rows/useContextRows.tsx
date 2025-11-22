import { useState } from 'react'

export function useContextRows() {
    const [rows, setRows] = useState<number[]>([1])

    const addRow = () => setRows((prev) => [...prev, Date.now()])

    const deleteRow = () =>
        setRows((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))

    return { rows, addRow, deleteRow }
}

export default useContextRows
