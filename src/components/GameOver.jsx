import { useEffect, useRef } from 'react'
import RegularButton from './RegularButton'

export default function GameOver({ handleClick }) {
    const divRef = useRef(null)
    
    useEffect(() => {
        divRef.current.focus()
    }, [])
    
    return (
        <div
            className="flex flex-col gap-4 bg-gray-600 text-yellow-600 font-bold tracking-wide rounded-lg py-6 px-8 border border-slate-900 shadow-md shadow-gray-500"
            tabIndex={0}
            ref={divRef}
        >
            <p className="text-lg my-1 mx-3">You've matched all the memory cards!</p>
            <RegularButton handleClick={handleClick}>
                Play again
            </RegularButton>
        </div>
    )
}