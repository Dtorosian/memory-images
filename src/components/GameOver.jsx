import { useEffect, useRef } from 'react'
import RegularButton from './RegularButton'

export default function GameOver({ onClick, primaryColor, secondaryColor }) {
    const divRef = useRef(null)
    
    useEffect(() => {
        divRef.current.focus()
    }, [])
    
    return (
        <section
            className={`${secondaryColor} flex flex-col justify-center items-center text-center gap-4 font-bold tracking-wide rounded-lg py-6 w-11/12 border border-black shadow-md shadow-gray-500 v lg:w-1/2`}
            tabIndex={0}
            ref={divRef}
        >
            <p className="text-lg my-1 mx-3">You've matched all the memory cards!</p>
            <RegularButton onClick={onClick} primaryColor={primaryColor}>
                Play again
            </RegularButton>
        </section>
    )
}