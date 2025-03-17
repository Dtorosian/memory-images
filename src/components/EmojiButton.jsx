import { decodeEntity } from 'html-entities'

export default function EmojiButton({
    emoji,
    onClick,
    selectedCardEntry,
    matchedCardEntry,
    index,
    primaryColor
}) {    
    const btnContent = selectedCardEntry || matchedCardEntry ? decodeEntity(emoji.htmlCode[0]) : "❔"
    
    const btnStyle =
        matchedCardEntry ? "bg-opacity-60" :
        selectedCardEntry ? "bg-opacity-90" :
        ""
        
    const btnAria =
        matchedCardEntry ? `${decodeEntity(emoji.name)}. Matched.` :
        selectedCardEntry ? `${decodeEntity(emoji.name)}. Not matched yet.` :
        "Card upside down."
 
    return (
        <button
            className={`${primaryColor} text-black font-semibold border-2 rounded-md cursor-pointer p-2 py-4 w-full h-full transition duration-150 ease-in-out  md:text-6xl sm:text-4xl ${btnStyle}`}
            onClick={selectedCardEntry ? null : onClick}
            disabled={matchedCardEntry}
            aria-label={`Position ${index + 1}: ${btnAria}`}
            aria-live="polite"
        >
            {btnContent}
        </button>
    )
}