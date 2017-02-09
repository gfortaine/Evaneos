const wordOccurrences = (text) => {
  const occurrences = {}
  const regEx = new RegExp('[A-z-À-ÿ]+', 'g')
  
  text.match(regEx).reduce((prev, curr) => {
    const word = `${curr.toLowerCase()}`
    
    return (word.length > 1)
           ? occurrences[word] = ((occurrences[word] += 1) || 1)
           : null
    }, [])
    
  return occurrences  
}    
