import ImageButton from './ImageButton'

export default function MemoryCard({ onClick, imagesData, selectedCards, matchedCards, primaryColor, secondaryColor, cardsNumber }) {

    const gridColumns = cardsNumber % 5 === 0 ? 'grid-cols-4 lg:grid-cols-5' 
        : cardsNumber % 4 === 0 ? 'grid-cols-4' 
        : 'grid-cols-3'

    const cardEl = imagesData.map((image, index) => {
        const selectedCardEntry = selectedCards.find(card => card.index === index)
        const matchedCardEntry = matchedCards.find(card => card.index === index)


        return (
            <div key={index} className='justify-items-center rounded-lg'>
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
            </div>
        )
    })
    
    return <div className={`grid ${gridColumns} gap-3`}>{cardEl}</div>
}