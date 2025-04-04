import { motion } from "motion/react"

export default function EmojiButton({
    image,
    onClick,
    selectedCardEntry,
    matchedCardEntry,
    index,
    primaryColor,
    secondaryColor,
    cardsNumber
}) {    
    
    const btnStyle =
        matchedCardEntry ? "bg-white border border-black opacity-60 btn--image--matched" :
        selectedCardEntry ? `${secondaryColor} border-2 border-white btn--image--selected` :
        `${primaryColor} cursor-pointer`

    const imgStyle = !selectedCardEntry && !matchedCardEntry ? 'opacity-0' : null
        

    const hiddenCardScale = matchedCardEntry || selectedCardEntry ? 1 : 1.03

    const lgScreenWidth = cardsNumber > 12 ? 'md:w-3/4 lg:w-2/3' : 'lg:w-9/12'
 
    return (
        <motion.section className={`${lgScreenWidth}`} whileHover={{ scale: hiddenCardScale }}>
            <button
                className={`text-4xl font-semibold rounded-md mx-auto p-1 w-full transition duration-150 ease-in-out ${btnStyle} shadow-sm shadow-gray-500 flex items-center justify-center hover:shadow-md`}
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