import EmojiButton from './EmojiButton'

export default function MemoryCard({ onClick, data, selectedCards, matchedCards, primaryColor, secondaryColor }) {
    const cardEl = data.map((emoji, index) => {
        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index)
        const matchedCardEntry = matchedCards.find(emoji => emoji.index === index)

        return (
            <li key={index} className={` list-none rounded-lg lg:w-full lg:h-full`}>
                <EmojiButton
                    emoji={emoji}
                    onClick={() => onClick(emoji.name, index)}
                    selectedCardEntry={selectedCardEntry}
                    matchedCardEntry={matchedCardEntry}
                    index={index}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                />
            </li>
        )
    })
    
    return <ul className="grid grid-cols-5 gap-3">{cardEl}</ul>
}