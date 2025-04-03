import { useEffect, useRef } from 'react'
import RegularButton from './RegularButton'

export default function GameOver({ onClick, primaryColor, secondaryColor }) {
    const divRef = useRef(null)
    
    useEffect(() => {
        divRef.current.focus()
    }, [])
    
    return (
        <section
            className={`${secondaryColor} flex flex-col justify-center items-center text-center gap-4 font-bold tracking-wide rounded-lg py-6 shadow-sm shadow-gray-600 lg:w-1/2 md:w-2/3`}
            tabIndex={0}
            ref={divRef}
        >
            <p className="text-lg my-1 mx-3 md:text-xl">You've matched all the memory cards!</p>
            <RegularButton onClick={onClick} primaryColor={primaryColor}>
                Play again
            </RegularButton>
        </section>
    )
}