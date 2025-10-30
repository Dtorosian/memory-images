import { useState, useEffect, useRef } from 'react'
import StartPage from '/src/components/StartPage.jsx'
import MemoryCard from './components/MemoryCard'
import GameOver from './components/GameOver'
import ErrorCard from './components/ErrorCard'
import { getData } from './api'
import { useSound } from 'use-sound'
import gameStart from '/src/sounds/gameStart.mp3'
import gameWon from '/src/sounds/gameWon.wav'
import correct from '/src/sounds/correct.mp3'

export default function App() {
    const initialFormData = {category: "animals-and-nature", number: 6}
    
    const [formData, setFormData] = useState(initialFormData)
    const [isGameOn, setIsGameOn] = useState(false)
    const [imagesData, setImagesData] = useState([])
    const [selectedCards, setSelectedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [areAllCardsMatched, setAreAllCardsMatched] = useState(false)
    const [isError, setIsError] = useState(false)
    const [playGameStart] = useSound(gameStart)
    const [playGameWon] = useSound(gameWon)
    const [playCorrect] = useSound(correct)
    
    const startTimeRef = useRef(null)

    const primaryColor = 'bg-yellow-600'
    const secondaryColor = 'bg-gray-600'
    const backgroundColor = 'bg-gray-blue'
    const textColor = 'text-white'
    const fontType = 'font-arial'

    useEffect(() => {
        if (startTimeRef.current && areAllCardsMatched) {
            const endTime = Date.now()
            const timeTaken = (endTime - startTimeRef.current) / 1000
            playGameWon()
            console.log(timeTaken)
        }
    }, [areAllCardsMatched])

    useEffect(() => {
        if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
            playCorrect()
            setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...selectedCards])
            setSelectedCards([])
        }
    }, [selectedCards])
    
    useEffect(() => {
        if (imagesData.length && matchedCards.length === imagesData.length) {
            setAreAllCardsMatched(true)
        }
    }, [matchedCards])
    
    function handleFormChange(e) {
        setFormData(prevFormData => ({...prevFormData, [e.target.name]: e.target.value}))
    }
    
    async function startGame(e) {
        e.preventDefault()
        startTimeRef.current = Date.now()

        const images = await getData(formData);
        setImagesData(images)
        
        setIsGameOn(true)

        playGameStart()

    }
    
    function turnCard(name, index) {
        if (selectedCards.length < 2) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, { name, index }])
        } else if (selectedCards.length === 2) {
            setSelectedCards([{ name, index }])
        }
    }
    
    function resetGame() {
        setIsGameOn(false)
        setSelectedCards([])
        setMatchedCards([])
        setAreAllCardsMatched(false)        
    }
    
    function resetError() {
        setIsError(false)
    }
    
    return (
        <div className={`${backgroundColor} ${textColor} ${fontType} flex flex-col justify-center items-center gap-8 text-xl min-h-screen p-4 mx-auto`}>
            <h1 className='text-4xl font-bold tracking-wide uppercase m-0 md:text-5xl'>Memory Game</h1>
            {!isGameOn && !isError &&
                <StartPage 
                    onSubmit={startGame} 
                    onChange={handleFormChange} 
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    textColor={textColor} 
                    backgroundColor={backgroundColor}
                />
            }
            {areAllCardsMatched && <GameOver onClick={resetGame} primaryColor={primaryColor} secondaryColor={secondaryColor} />}
            {isGameOn &&
                <MemoryCard
                    onClick={turnCard}
                    imagesData={imagesData}
                    selectedCards={selectedCards}
                    matchedCards={matchedCards}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    cardsNumber={formData.number}
                />
            }
            {isError && <ErrorCard onClick={resetError} />}
        </div>
    )
}