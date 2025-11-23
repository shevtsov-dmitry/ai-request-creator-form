import { useState } from 'react'

const PageNumberIndicator: React.FC = () => {
    const [pageNumber, setPageNumber] = useState<number>(1)

    return (
        <div className="text-bold text-bold w-full text-center text-white">
            Page №{pageNumber}
        </div>
    )
}

export default PageNumberIndicator
