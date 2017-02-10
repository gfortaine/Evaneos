const wordsOccurrences = (text) => {
  const regEx = new RegExp('[-0-9a-zà-ÿ]+', 'gi')
  
  return text.match(regEx).reduce((prev, curr) => {
    const word = curr.toLowerCase()
    
    return (((word.length > 1) ? prev[word] = (++prev[word] || 1) : null), prev) }, Object.create(null))
}    
