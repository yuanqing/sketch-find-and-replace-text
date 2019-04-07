import {
  getAllLayers,
  getSelectedLayers,
  iterateNestedLayers,
  openSettingsDialog,
  saveTemporarySettings,
  showErrorMessage,
  showMessage,
  showSuccessMessage,
  CHECK_BOX,
  TEXT_BOX
} from 'sketch-plugin-helper'

import replaceTextInLayer from './replace-text-in-layer'

export default function findAndReplaceText () {
  const settings = openSettingsDialog({
    title: 'Find and Replace Text',
    inputs: [
      {
        type: TEXT_BOX,
        key: 'findText',
        label: 'Find'
      },
      {
        type: CHECK_BOX,
        key: 'caseSensitive',
        label: 'Case sensitive'
      },
      {
        type: TEXT_BOX,
        key: 'replaceText',
        label: 'Replace'
      }
    ]
  })
  if (!settings) {
    return
  }
  saveTemporarySettings(settings)
  const selectedLayers = getSelectedLayers()
  let layers = []
  if (selectedLayers.length === 0) {
    layers = getNestedTextLayersAndSymbolInstances(getAllLayers())
    if (layers.length === 0) {
      showErrorMessage('No text layers or symbol instances on the page')
      return
    }
  } else {
    layers = getNestedTextLayersAndSymbolInstances(selectedLayers)
    if (layers.length === 0) {
      showErrorMessage('No text layers or symbol instances in selection')
      return
    }
  }
  const regularExpression = new RegExp(
    settings.findText,
    settings.caseSensitive ? 'g' : 'gi'
  )
  let totalCount = 0
  layers.forEach(function (layer) {
    const count = replaceTextInLayer[layer.type]({
      layer,
      regularExpression,
      replaceText: settings.replaceText
    })
    totalCount += count
  })
  if (totalCount === 0) {
    showMessage('No replacements made')
    return
  }
  showSuccessMessage(
    `Made ${totalCount} replacement${totalCount === 1 ? '' : 's'}`
  )
}

function getNestedTextLayersAndSymbolInstances (layers) {
  const results = []
  iterateNestedLayers(layers, function (layer) {
    if (layer.type === 'Text' || layer.type === 'SymbolInstance') {
      results.push(layer)
    }
  })
  return results
}
