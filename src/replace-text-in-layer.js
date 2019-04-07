export default {
  SymbolInstance: replaceTextInSymbolInstance,
  Text: replaceTextInTextLayer
}

function replaceTextInSymbolInstance ({
  layer,
  regularExpression,
  replaceText
}) {
  let count = 0
  layer.overrides.forEach(function (override) {
    if (override.symbolOverride) {
      return
    }
    const text = override.value
    if (regularExpression.test(text)) {
      override.value = text.replace(regularExpression, function () {
        count++
        return replaceText
      })
    }
  })
  return count
}

function replaceTextInTextLayer ({ layer, regularExpression, replaceText }) {
  const text = layer.text
  if (regularExpression.test(text)) {
    let count = 0
    layer.text = text.replace(regularExpression, function () {
      count++
      return replaceText
    })
    return count
  }
  return 0
}
