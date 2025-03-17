import { useRef, useEffect } from 'react'
import RegularButton from './RegularButton'

export default function ErrorCard({ onClick }) {
    const divRef = useRef(null)
    
    useEffect(() => {
        divRef.current.focus()
    }, [])
    
    return (
        <div className="flex flex-col gap-6 bg-gray-600 text-amber-600 text-center font-bold tracking-wide rounded-lg py-8 px-12 border border-slate-900 shadow-md shadow-gray-500" ref={divRef} tabIndex={-1}>
            <p className="text-lg my-1 mx-3">Sorry, there was an error.</p>
            <p className="text-base">Please come back later or click the button below to try restarting the game.</p>
            <RegularButton onClick={onClick}>
                Restart game
            </RegularButton>
        </div>
    )
}