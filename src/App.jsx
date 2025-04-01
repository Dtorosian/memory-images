import { useState, useEffect, useRef } from 'react'
import StartPage from '/src/components/StartPage.jsx'
import MemoryCard from './components/MemoryCard'
import AssistiveTechInfo from './components/AssistiveTechInfo'
import GameOver from './components/GameOver'
import ErrorCard from './components/ErrorCard'

export default function App() {
    const initialFormData = {category: "animals-and-nature", number: 10}
    
    const [formData, setFormData] = useState(initialFormData)
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([])
    const [selectedCards, setSelectedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [areAllCardsMatched, setAreAllCardsMatched] = useState(false)
    const [isError, setIsError] = useState(false)
    
    const startTimeRef = useRef(null)


    const primaryColor = 'bg-sand-beige'
    const secondaryColor = 'bg-mud-green'
    const backgroundColor = 'bg-ink-gray'
    const textColor = 'text-white'
    const fontType = 'font-arial'


    useEffect(() => {
        if (startTimeRef.current && areAllCardsMatched) {
            const endTime = Date.now()
            const timeTaken = (endTime - startTimeRef.current) / 1000
            console.log(timeTaken)
        }
    }, [areAllCardsMatched])

    useEffect(() => {
        if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
            setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...selectedCards])
        }
    }, [selectedCards])
    
    useEffect(() => {
        if (emojisData.length && matchedCards.length === emojisData.length) {
            setAreAllCardsMatched(true)
        }
    }, [matchedCards])
    
    function handleFormChange(e) {
        setFormData(prevFormData => ({...prevFormData, [e.target.name]: e.target.value}))
    }
    
    async function startGame(e) {
        e.preventDefault()

        try {
            const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${formData.category}`)
            
            if (!response.ok) {
                throw new Error("Could not fetch data from API")
            }
            
            const data = await response.json()
            const dataSlice = await getDataSlice(data)
            const emojisArray = await getEmojisArray(dataSlice)
            
            setEmojisData(emojisArray)
            setIsGameOn(true)
            startTimeRef.current = Date.now()
        } catch(err) {
            console.error(err)
            setIsError(true)
        }   
    }

    async function getDataSlice(data) {
        const randomIndices = getRandomIndices(data)
        
        const dataSlice = randomIndices.reduce((array, index) => {
            array.push(data[index])
            return array
        }, [])

        return dataSlice
    }

    function getRandomIndices(data) {        
        const randomIndicesArray = []
 
        for (let i = 0; i < (formData.number / 2); i++) {
            const randomNum = Math.floor(Math.random() * data.length)
            if (!randomIndicesArray.includes(randomNum)) {
                randomIndicesArray.push(randomNum)
            } else {
                i--
            }
        }
        
        return randomIndicesArray
    }

    async function getEmojisArray(data) {
        const pairedEmojisArray = [...data, ...data]
        
        for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = pairedEmojisArray[i]
            pairedEmojisArray[i] = pairedEmojisArray[j]
            pairedEmojisArray[j] = temp
        }
        
        return pairedEmojisArray
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
        <div className={`${backgroundColor} ${textColor} ${fontType} flex flex-col justify-center items-center gap-8 text-xl h-full min-h-screen p-3 mx-auto`}>
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
            {isGameOn && !areAllCardsMatched &&
                <AssistiveTechInfo emojisData={emojisData} matchedCards={matchedCards} />}
            {areAllCardsMatched && <GameOver onClick={resetGame} primaryColor={primaryColor} secondaryColor={secondaryColor} />}
            {isGameOn &&
                <MemoryCard
                    onClick={turnCard}
                    data={emojisData}
                    selectedCards={selectedCards}
                    matchedCards={matchedCards}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                />
            }
            {isError && <ErrorCard onClick={resetError} />}
        </div>
    )
}