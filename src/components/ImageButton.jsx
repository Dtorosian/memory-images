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
        matchedCardEntry ? "bg-white border border-black opacity-60 btn--image--matched pointer-events-none" :
        selectedCardEntry ? `${secondaryColor} border-2 border-white btn--image--selected pointer-events-none` :
        `${primaryColor} cursor-pointer`

    const imgStyle = !selectedCardEntry && !matchedCardEntry ? 'opacity-0' : null
        

    const hiddenCardScale = selectedCardEntry ? 1 : matchedCardEntry ? 0.95 : 1.03
    const cardTapScale = matchedCardEntry || selectedCardEntry ? null : 0.9
    const cardMatchedStyle = matchedCardEntry ? 0.95 : 1
 
    return (
        <motion.section 
            whileHover={{ scale: hiddenCardScale }} 
            whileTap={{ scale: cardTapScale }} 
            animate={{ scale: cardMatchedStyle }} 
            transition={{ type: "spring", stiffness: 200 }}
        >
            <button
                className={`font-semibold rounded-md p-1 transition duration-150 ease-in-out ${btnStyle} shadow-sm shadow-gray-500 flex items-center justify-center hover:shadow-md `}
                onClick={selectedCardEntry ? null : onClick}
                disabled={matchedCardEntry}
            >
                <img 
                    src={image} 
                    alt={`Image ${index + 1}`} 
                    className={`${imgStyle} object-cover rounded-md transition duration-500 ease-in-out`} 
                />
            </button>
        </motion.section>
    )
}