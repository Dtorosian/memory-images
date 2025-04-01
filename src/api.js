export async function getData(formData) {
    try {
        const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${formData.category}`)
        
        if (!response.ok) {
            throw new Error("Could not fetch data from API")
        }
        
        const data = await response.json()
        const dataSlice = await getDataSlice(data, formData)
        const emojisArray = await getEmojisArray(dataSlice)
        
        return emojisArray
        
    } catch(err) {
        console.error(err)
    }   
}

async function getDataSlice(data, formData) {
    const randomIndices = getRandomIndices(data, formData)
    
    const dataSlice = randomIndices.reduce((array, index) => {
        array.push(data[index])
        return array
    }, [])

    return dataSlice
}

function getRandomIndices(data, formData) {        
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