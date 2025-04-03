import EmojiButton from './EmojiButton'

export default function MemoryCard({ onClick, imagesData, selectedCards, matchedCards, primaryColor, secondaryColor }) {
    const cardEl = imagesData.map((image, index) => {
        const selectedCardEntry = selectedCards.find(image => image.index === index)
        const matchedCardEntry = matchedCards.find(image => image.index === index)

        return (
            <li key={index} className='list-none rounded-lg lg:w-full lg:h-full'>
                <EmojiButton
                    image={image}
                    onClick={() => onClick(image, index)}
                    selectedCardEntry={selectedCardEntry}
                    matchedCardEntry={matchedCardEntry}
                    index={index}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                />
            </li>
        )
    })
    
    return <ul className="grid grid-cols-3 gap-3 lg:gap-5">{cardEl}</ul>
}