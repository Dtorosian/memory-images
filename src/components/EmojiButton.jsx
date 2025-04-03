import { motion } from "motion/react"

export default function EmojiButton({
    image,
    onClick,
    selectedCardEntry,
    matchedCardEntry,
    index,
    primaryColor,
    secondaryColor
}) {    
    
    const btnStyle =
        matchedCardEntry ? "bg-white border border-black opacity-60" :
        selectedCardEntry ? `${secondaryColor} border-2 border-white` :
        `${primaryColor} cursor-pointer`

    const imgStyle = !selectedCardEntry && !matchedCardEntry ? 'opacity-0' : null
        

    const hiddenCardScale = matchedCardEntry || selectedCardEntry ? 1 : 1.05
 
    return (
        <motion.div whileHover={{ scale: hiddenCardScale }}>
            <button
                className={`text-4xl font-semibold rounded-md p-1 h-full w-full transition duration-150 ease-in-out lg:p-3 ${btnStyle} shadow-sm shadow-gray-500 flex items-center justify-center hover:shadow-md`}
                onClick={selectedCardEntry ? null : onClick}
                disabled={matchedCardEntry}
            >
                <img 
                    src={image} 
                    alt={`Image ${index + 1}`} 
                    className={`${imgStyle} w-full h-full object-cover rounded-md transition duration-500 ease-in-out`} 
                />
            </button>
        </motion.div>
    )
}