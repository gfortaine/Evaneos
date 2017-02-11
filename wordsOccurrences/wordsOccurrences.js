const wordsOccurrences = (text) => {
  const regEx = new RegExp('[-0-9a-zà-ÿ]+', 'g')
  
  return (text.toLowerCase().match(regEx) || []).reduce((prev, curr) => {    
    return (((curr.length > 1) ? prev[curr] = (++prev[curr] || 1) : null), prev) }, Object.create(null))
}    
