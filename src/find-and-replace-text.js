import {
  getLayersOnAllPages,
  getLayersOnCurrentPage,
  getSelectedLayers,
  iterateChildLayers,
  openSettingsDialog,
  saveTemporarySettings,
  showErrorMessage,
  showMessage,
  showSuccessMessage,
  CHECK_BOX,
  DROP_DOWN,
  TEXT_BOX
} from 'sketch-plugin-helper'

import replaceTextInLayer from './replace-text-in-layer'

const scopeMessage = {
  'Selected layers': 'in the selected layers',
  'Current page': 'on the current page',
  'Entire document': 'across the entire document'
}

export default function findAndReplaceText () {
  const selectedLayers = getSelectedLayers()
  const hasSelection = selectedLayers.length !== 0
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
      },
      {
        type: DROP_DOWN,
        key: 'scope',
        label: 'Scope',
        possibleValues: [
          hasSelection && 'Selected layers',
          'Current page',
          'Entire document'
        ].filter(Boolean),
        value: hasSelection ? 'Selected layers' : null
      }
    ]
  })
  if (!settings) {
    return
  }
  const { scope, ...settingsWithoutScope } = settings
  let layers = []
  if (scope === 'Selected layers') {
    saveTemporarySettings(settingsWithoutScope)
    layers = getNestedTextLayersAndSymbolInstances(selectedLayers)
    if (layers.length === 0) {
      showErrorMessage('No text layers or symbol instances in selection')
      return
    }
  } else {
    saveTemporarySettings(settings)
    layers = getNestedTextLayersAndSymbolInstances(
      scope === 'Current page'
        ? getLayersOnCurrentPage()
        : getLayersOnAllPages()
    )
    if (layers.length === 0) {
      showErrorMessage('No text layers or symbol instances found')
      return
    }
  }
  const regularExpression = new RegExp(
    settings.findText,
    settings.caseSensitive ? 'g' : 'gi'
  )
  let count = 0
  layers.forEach(function (layer) {
    count += replaceTextInLayer[layer.type]({
      layer,
      regularExpression,
      replaceText: settings.replaceText
    })
  })
  if (count === 0) {
    showMessage('No replacements made')
    return
  }
  showSuccessMessage(
    `Made ${count} replacement${count === 1 ? '' : 's'} ${scopeMessage[scope]}`
  )
}

function getNestedTextLayersAndSymbolInstances (layers) {
  const result = []
  iterateChildLayers(layers, function (layer) {
    if (layer.type === 'Text' || layer.type === 'SymbolInstance') {
      result.push(layer)
    }
  })
  return result
}
