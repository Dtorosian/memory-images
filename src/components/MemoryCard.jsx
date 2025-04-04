import ImageButton from './ImageButton'

export default function MemoryCard({ onClick, imagesData, selectedCards, matchedCards, primaryColor, secondaryColor, cardsNumber }) {

    console.log(cardsNumber)

    const gridColumns = cardsNumber % 5 === 0 ? 'grid-cols-5' 
        : cardsNumber % 4 === 0 ? 'grid-cols-4' 
        : 'grid-cols-3'

    const cardEl = imagesData.map((image, index) => {
        const selectedCardEntry = selectedCards.find(card => card.index === index)
        const matchedCardEntry = matchedCards.find(card => card.index === index)

        return (
            <li key={index} className='justify-items-center rounded-lg'>
                <ImageButton
                    image={image}
                    onClick={() => onClick(image, index)}
                    selectedCardEntry={selectedCardEntry}
                    matchedCardEntry={matchedCardEntry}
                    index={index}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    cardsNumber={cardsNumber}
                />
            </li>
        )
    })
    
    return <ul className={`grid ${gridColumns} gap-3`}>{cardEl}</ul>
}