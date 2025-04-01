import { decodeEntity } from 'html-entities'
import { motion } from "motion/react"

export default function EmojiButton({
    emoji,
    onClick,
    selectedCardEntry,
    matchedCardEntry,
    index,
    primaryColor,
    secondaryColor
}) {    
    
    const btnStyle =
        matchedCardEntry ? "bg-gray-100 text-opacity-100 border-black" :
        selectedCardEntry ? `${secondaryColor} bg-opacity-90 text-opacity-100 border-sky-200` :
        `${primaryColor} hover:border-sky-200 cursor-pointer`
        
    const btnAria =
        matchedCardEntry ? `${decodeEntity(emoji.name)}. Matched.` :
        selectedCardEntry ? `${decodeEntity(emoji.name)}. Not matched yet.` :
        "Card upside down."

    const hiddenCardScale = matchedCardEntry || selectedCardEntry ? 1 : 1.05
 
    return (
        <motion.div whileHover={{ scale: hiddenCardScale }}>
            <button
                className={` text-black text-4xl font-semibold text-opacity-0 border-2 rounded-md px-1 py-5 w-full h-full transition duration-150 ease-in-out  md:text-6xl lg:px-2 lg:py-8 ${btnStyle} shadow-md shadow-gray-400`}
                onClick={selectedCardEntry ? null : onClick}
                disabled={matchedCardEntry}
                aria-label={`Position ${index + 1}: ${btnAria}`}
                aria-live="polite"
                >
                {decodeEntity(emoji.htmlCode[0])}
            </button>
        </motion.div>
    )
}