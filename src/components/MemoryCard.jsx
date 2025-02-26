import EmojiButton from './EmojiButton'

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards }) {
    const cardEl = data.map((emoji, index) => {
        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index)
        const matchedCardEntry = matchedCards.find(emoji => emoji.index === index)

        return (
            <li key={index} className={`list-none lg:m-3 bg-gray-500 rounded-lg lg:w-full lg:h-full`}>
                <EmojiButton
                    emoji={emoji}
                    handleClick={() => handleClick(emoji.name, index)}
                    selectedCardEntry={selectedCardEntry}
                    matchedCardEntry={matchedCardEntry}
                    index={index}
                />
            </li>
        )
    })
    
    return <ul className="grid grid-cols-5 gap-3">{cardEl}</ul>
}