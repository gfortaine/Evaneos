// @flow

type MapOfNumbers = { [key: string]: ?number }

export default (text: string): MapOfNumbers => (
  (text.toLowerCase().match(/[-0-9a-zà-ÿ]+/g) || []).reduce((prev, curr) => (
    curr.length > 1
    ? { __proto__: null, ...prev, [curr]: ((prev[curr] + 1) || 1) }
    : prev
  ), { __proto__: null })
)

