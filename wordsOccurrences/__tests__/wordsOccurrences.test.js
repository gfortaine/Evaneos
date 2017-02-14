import wordsOccurrences from '../wordsOccurrences'

describe('wordsOccurrences', () => {
  it('should count the number of occurences of a word in a given text', () => {
    const text = "Bonjour Guillaume Tu vas venir ce soir voir Johan. Je ne sais pas si tu auras le temps mais je t'envoie un petit exercice pour pouvoir en parler avec lui ce soir On cherche à calculer le nombre d'occurence de chaque mots dans un texte. Les mots de moins de deux lettres seront ignorés. Concevez une petite librairie JS qui répond à ce problème. Dans le doute, utilisez votre bon sens. Je suis désolée pour cet envoi très tard. Je te souhaite une bonne journée Caroline"

    expect(wordsOccurrences(text).je).toBe(4)
    expect(wordsOccurrences(text).ce).toBe(3)
    expect(wordsOccurrences(text).bonjour).toBe(1)
    expect(wordsOccurrences(text).guillaume).toBe(1)
    expect(wordsOccurrences(text).t).toBeUndefined()
    expect(wordsOccurrences(text).function).toBeUndefined()
    expect(wordsOccurrences(text).constructor).toBeUndefined()
  })
})

