const wordOccurrences = (text) => {
  const occurrences = {}
  const regEx = new RegExp('[-0-9A-zÀ-ÿ]+', 'g')
  
  text.match(regEx).reduce((prev, curr) => {
    const word = `${curr.toLowerCase()}`
    
    return (word.length > 1)
           ? occurrences[word] = ((occurrences[word] += 1) || 1)
           : null
    }, [])
    
  return occurrences  
}    
