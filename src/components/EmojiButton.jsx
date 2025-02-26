import { decodeEntity } from 'html-entities'

export default function EmojiButton({
    emoji,
    handleClick,
    selectedCardEntry,
    matchedCardEntry,
    index
}) {
    
    const btnContent = selectedCardEntry || matchedCardEntry ? decodeEntity(emoji.htmlCode[0]) : "❔"
    
    const btnStyle =
        matchedCardEntry ? "bg-white md:bg-gray-100" :
        selectedCardEntry ? "bg-gray-300" :
        "bg-gray-500 p-4"
        
    const btnAria =
        matchedCardEntry ? `${decodeEntity(emoji.name)}. Matched.` :
        selectedCardEntry ? `${decodeEntity(emoji.name)}. Not matched yet.` :
        "Card upside down."
 
    return (
        <button
            className={`bg-gray-400 text-black font-semibold border-2 rounded-md cursor-pointer p-2 w-full h-full md:text-6xl sm:text-4xl${btnStyle}`}
            onClick={selectedCardEntry ? null : handleClick}
            disabled={matchedCardEntry}
            aria-label={`Position ${index + 1}: ${btnAria}`}
            aria-live="polite"
        >
            {btnContent}
        </button>
    )
}