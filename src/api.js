    export async function getData(formData) {
        try {
            const data = await fetchImages(formData.number / 2)
    
            if (!data || data.length === 0) {
                throw new Error("No images available");
            }
    
            // Process the images (random selection, duplication, shuffle)
            const dataSlice = await getDataSlice(data, formData)
            const imageArray = await getImageArray(dataSlice)
    
            return imageArray;
            
        } catch (err) {
            console.error(err);
        }   
    }
    
    async function fetchImages(count) {
        const imagePromises = Array.from({ length: count }, (_, i) =>
            fetch(`https://picsum.photos/200/300?random=${i}`)
            .then(res => res.url)
        )
    
        return await Promise.all(imagePromises);
    }
    
    // Select random images (already random from Picsum, but keeping structure)
    async function getDataSlice(data, formData) {
        const randomIndices = getRandomIndices(data, formData)
        return randomIndices.map(index => data[index])
    }
    
    // Generate unique random indices
    function getRandomIndices(data, formData) {        
        const randomIndicesArray = []
    
        while (randomIndicesArray.length < formData.number / 2) {
            const randomNum = Math.floor(Math.random() * data.length)
            if (!randomIndicesArray.includes(randomNum)) {
                randomIndicesArray.push(randomNum)
            }
        }
        
        return randomIndicesArray
    }
    
    // Duplicate and shuffle images
    async function getImageArray(data) {
        const pairedImagesArray = [...data, ...data]
    
        for (let i = pairedImagesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pairedImagesArray[i], pairedImagesArray[j]] = [pairedImagesArray[j], pairedImagesArray[i]]
        }
        
        return pairedImagesArray
    }
    