(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/40ff261f-19ec-4ed8-acd6-a6c91779f88b":
/*!*****************************************************************************************************!*\
  !*** /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/40ff261f-19ec-4ed8-acd6-a6c91779f88b ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports={'find-and-replace-text':__webpack_require__(/*! ./src/find-and-replace-text */ "./src/find-and-replace-text.js").default,'reset-settings':__webpack_require__(/*! ./src/reset-settings */ "./src/reset-settings.js").default}

/***/ }),

/***/ "../sketch-plugin-helper/node_modules/is-promise/index.js":
/*!****************************************************************!*\
  !*** ../sketch-plugin-helper/node_modules/is-promise/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),

/***/ "../sketch-plugin-helper/node_modules/p-each-series/index.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/node_modules/p-each-series/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const pEachSeries = async (iterable, iterator) => {
	let index = 0;

	for (const value of iterable) {
		// eslint-disable-next-line no-await-in-loop
		await iterator(await value, index++);
	}

	return iterable;
};

module.exports = pEachSeries;
// TODO: Remove this for the next major release
module.exports.default = pEachSeries;


/***/ }),

/***/ "../sketch-plugin-helper/src/api.js":
/*!******************************************!*\
  !*** ../sketch-plugin-helper/src/api.js ***!
  \******************************************/
/*! exports provided: getDefaultSettings, getSettings, openSettingsDialog, resetSettings, saveSettings, saveTemporarySettings, CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, NUMERIC_TEXT_BOX, STRING_TEXT_BOX, TEXT_BOX, test, snapshotTest, compareSketchDocuments, addLayersToPage, adjustParentGroupsToFit, findLayersByName, getAbsoluteCoordinates, getAllLayers, getSelectedLayers, getSelectedOrAllLayers, getAllArtboards, iterateNestedLayers, openSketchDocument, showMessage, showSuccessMessage, showErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_get_default_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/get-default-settings */ "../sketch-plugin-helper/src/settings/get-default-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSettings", function() { return _settings_get_default_settings__WEBPACK_IMPORTED_MODULE_0__["getDefaultSettings"]; });

/* harmony import */ var _settings_get_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/get-settings */ "../sketch-plugin-helper/src/settings/get-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return _settings_get_settings__WEBPACK_IMPORTED_MODULE_1__["getSettings"]; });

/* harmony import */ var _settings_open_settings_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/open-settings-dialog */ "../sketch-plugin-helper/src/settings/open-settings-dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSettingsDialog", function() { return _settings_open_settings_dialog__WEBPACK_IMPORTED_MODULE_2__["openSettingsDialog"]; });

/* harmony import */ var _settings_reset_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/reset-settings */ "../sketch-plugin-helper/src/settings/reset-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSettings", function() { return _settings_reset_settings__WEBPACK_IMPORTED_MODULE_3__["resetSettings"]; });

/* harmony import */ var _settings_save_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/save-settings */ "../sketch-plugin-helper/src/settings/save-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSettings", function() { return _settings_save_settings__WEBPACK_IMPORTED_MODULE_4__["saveSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveTemporarySettings", function() { return _settings_save_settings__WEBPACK_IMPORTED_MODULE_4__["saveTemporarySettings"]; });

/* harmony import */ var _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/ui/form-types */ "../sketch-plugin-helper/src/settings/ui/form-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["CHECK_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["DROP_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["RADIO_BUTTONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_TEXT_BOX", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["NUMERIC_TEXT_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STRING_TEXT_BOX", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["STRING_TEXT_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["TEXT_BOX"]; });

/* harmony import */ var _test_runner_test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-runner/test */ "../sketch-plugin-helper/src/test-runner/test.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "test", function() { return _test_runner_test__WEBPACK_IMPORTED_MODULE_6__["test"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotTest", function() { return _test_runner_test__WEBPACK_IMPORTED_MODULE_6__["snapshotTest"]; });

/* harmony import */ var _test_runner_compare_sketch_documents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-runner/compare-sketch-documents */ "../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareSketchDocuments", function() { return _test_runner_compare_sketch_documents__WEBPACK_IMPORTED_MODULE_7__["compareSketchDocuments"]; });

/* harmony import */ var _utilities_add_layers_to_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/add-layers-to-page */ "../sketch-plugin-helper/src/utilities/add-layers-to-page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLayersToPage", function() { return _utilities_add_layers_to_page__WEBPACK_IMPORTED_MODULE_8__["addLayersToPage"]; });

/* harmony import */ var _utilities_adjust_parent_groups_to_fit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/adjust-parent-groups-to-fit */ "../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjustParentGroupsToFit", function() { return _utilities_adjust_parent_groups_to_fit__WEBPACK_IMPORTED_MODULE_9__["adjustParentGroupsToFit"]; });

/* harmony import */ var _utilities_find_layers_by_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/find-layers-by-name */ "../sketch-plugin-helper/src/utilities/find-layers-by-name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLayersByName", function() { return _utilities_find_layers_by_name__WEBPACK_IMPORTED_MODULE_10__["findLayersByName"]; });

/* harmony import */ var _utilities_get_absolute_coordinates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilities/get-absolute-coordinates */ "../sketch-plugin-helper/src/utilities/get-absolute-coordinates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteCoordinates", function() { return _utilities_get_absolute_coordinates__WEBPACK_IMPORTED_MODULE_11__["getAbsoluteCoordinates"]; });

/* harmony import */ var _utilities_get_layers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utilities/get-layers */ "../sketch-plugin-helper/src/utilities/get-layers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllLayers", function() { return _utilities_get_layers__WEBPACK_IMPORTED_MODULE_12__["getAllLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayers", function() { return _utilities_get_layers__WEBPACK_IMPORTED_MODULE_12__["getSelectedLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedOrAllLayers", function() { return _utilities_get_layers__WEBPACK_IMPORTED_MODULE_12__["getSelectedOrAllLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllArtboards", function() { return _utilities_get_layers__WEBPACK_IMPORTED_MODULE_12__["getAllArtboards"]; });

/* harmony import */ var _utilities_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utilities/iterate-nested-layers */ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterateNestedLayers", function() { return _utilities_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_13__["iterateNestedLayers"]; });

/* harmony import */ var _utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utilities/open-sketch-document */ "../sketch-plugin-helper/src/utilities/open-sketch-document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSketchDocument", function() { return _utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_14__["openSketchDocument"]; });

/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_15__["showMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSuccessMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_15__["showSuccessMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showErrorMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_15__["showErrorMessage"]; });


















/***/ }),

/***/ "../sketch-plugin-helper/src/common/constants.js":
/*!*******************************************************!*\
  !*** ../sketch-plugin-helper/src/common/constants.js ***!
  \*******************************************************/
/*! exports provided: appcastFileName, bundleFileName, manifestFileName, packageJsonConfigKey, sourceDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appcastFileName", function() { return appcastFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bundleFileName", function() { return bundleFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manifestFileName", function() { return manifestFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageJsonConfigKey", function() { return packageJsonConfigKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDirectory", function() { return sourceDirectory; });
const appcastFileName = 'appcast.xml';
const bundleFileName = 'plugin.js';
const manifestFileName = 'manifest.json';
const packageJsonConfigKey = 'sketch-plugin-helper';
const sourceDirectory = './src';

/***/ }),

/***/ "../sketch-plugin-helper/src/common/get-package-json.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/common/get-package-json.js ***!
  \**************************************************************/
/*! exports provided: getPackageJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPackageJson", function() { return getPackageJson; });
function getPackageJson() {
  const packageJson = "{\"private\": true,\"version\": \"0.0.0\",\"devDependencies\": {\"sketch-plugin-helper\": \"*\"},\"scripts\": {\"build\": \"sph build\",\"fix\": \"sph lint --fix\",\"lint\": \"sph lint\",\"run\": \"sph run\",\"symlink\": \"sph symlink\",\"test\": \"sph test\",\"unlink\": \"sph symlink --delete\",\"version\": \"sph version\",\"watch\": \"sph build --watch\"},\"sketch-plugin-helper\": {\"pluginName\": \"Find and Replace Text\",\"pluginDescription\": \"A Sketch plugin to find and replace text in text layers and symbol instances\",\"authorName\": \"Lim Yuan Qing\",\"githubUserName\": \"yuanqing\",\"githubRepositoryName\": \"sketch-find-and-replace-text\",\"menu\": [{\"handler\": \"find-and-replace-text\",\"label\": \"Find and Replace Text\"},\"-\",{\"handler\": \"reset-settings\",\"label\": \"Reset Settings\"}],\"defaultSettings\": {\"caseSensitive\": true,\"findText\": \"\",\"replaceText\": \"\"}}\n}\n";

  return JSON.parse(packageJson);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/get-default-settings.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/get-default-settings.js ***!
  \********************************************************************/
/*! exports provided: getDefaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSettings", function() { return getDefaultSettings; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "../sketch-plugin-helper/src/common/constants.js");
/* harmony import */ var _common_get_package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/get-package-json */ "../sketch-plugin-helper/src/common/get-package-json.js");


function getDefaultSettings() {
  const {
    defaultSettings
  } = Object(_common_get_package_json__WEBPACK_IMPORTED_MODULE_1__["getPackageJson"])()[_common_constants__WEBPACK_IMPORTED_MODULE_0__["packageJsonConfigKey"]];
  return defaultSettings || {};
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/get-settings.js":
/*!************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/get-settings.js ***!
  \************************************************************/
/*! exports provided: getSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "../sketch-plugin-helper/src/common/constants.js");
/* harmony import */ var _common_get_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/get-package-json */ "../sketch-plugin-helper/src/common/get-package-json.js");



function getSettings() {
  const {
    defaultSettings
  } = Object(_common_get_package_json__WEBPACK_IMPORTED_MODULE_2__["getPackageJson"])()[_common_constants__WEBPACK_IMPORTED_MODULE_1__["packageJsonConfigKey"]];

  if (typeof defaultSettings === 'undefined') {
    return {};
  }

  return Object.keys(defaultSettings).reduce(function (results, key) {
    const sessionValue = Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["sessionVariable"])(key);
    const savedValue = Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["settingForKey"])(key);
    const value = typeof sessionValue !== 'undefined' ? sessionValue : savedValue;
    const defaultValue = defaultSettings[key];
    results[key] = typeof value !== 'undefined' ? value : defaultValue;
    return results;
  }, {});
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/open-settings-dialog.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/open-settings-dialog.js ***!
  \********************************************************************/
/*! exports provided: openSettingsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSettingsDialog", function() { return openSettingsDialog; });
/* harmony import */ var _ui_create_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/create-alert */ "../sketch-plugin-helper/src/settings/ui/create-alert.js");
/* harmony import */ var _ui_create_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/create-label */ "../sketch-plugin-helper/src/settings/ui/create-label.js");
/* harmony import */ var _ui_create_stack_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/create-stack-view */ "../sketch-plugin-helper/src/settings/ui/create-stack-view.js");
/* harmony import */ var _ui_create_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/create-form */ "../sketch-plugin-helper/src/settings/ui/create-form.js");
/* harmony import */ var _get_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-settings */ "../sketch-plugin-helper/src/settings/get-settings.js");





const formHeight = 20;
const formPaddingBottom = 12;
const labelHeight = 20;
const labelPaddingBottom = 6;
const width = 300;
function openSettingsDialog({
  title,
  inputs: inputsConfig
}) {
  const settings = Object(_get_settings__WEBPACK_IMPORTED_MODULE_4__["getSettings"])();
  const {
    inputs,
    views,
    stackViewHeight
  } = parse({
    inputsConfig,
    settings
  });
  const stackView = Object(_ui_create_stack_view__WEBPACK_IMPORTED_MODULE_2__["createStackView"])({
    width,
    height: stackViewHeight,
    views
  });
  const alert = Object(_ui_create_alert__WEBPACK_IMPORTED_MODULE_0__["createAlert"])(title);
  alert.setAccessoryView(stackView); // eslint-disable-next-line eqeqeq

  if (alert.runModal() == '1000') {
    return Object.keys(inputs).reduce(function (result, key) {
      const retrieveValue = inputs[key];
      result[key] = retrieveValue();
      return result;
    }, {});
  }

  return null;
}

function parse({
  inputsConfig,
  settings
}) {
  const inputs = {};
  const views = [];
  let stackViewHeight = 0;
  inputsConfig.forEach(function ({
    type,
    key,
    label,
    value: inputsConfigValue,
    ...rest
  }) {
    if (label && type !== 'CHECK_BOX') {
      // Create a label for forms that aren't check boxes
      const labelView = Object(_ui_create_label__WEBPACK_IMPORTED_MODULE_1__["createLabel"])({
        label,
        width,
        height: labelHeight
      });
      views.push({
        view: labelView,
        paddingBottom: labelPaddingBottom
      });
      stackViewHeight += labelHeight + labelPaddingBottom;
    }

    const settingsSavedValue = settings[key];
    const value = typeof settingsSavedValue !== 'undefined' ? settingsSavedValue : inputsConfigValue;
    const {
      view,
      retrieveValue
    } = _ui_create_form__WEBPACK_IMPORTED_MODULE_3__[type]({
      label,
      value,
      width,
      height: formHeight,
      ...rest
    });
    views.push({
      view,
      paddingBottom: formPaddingBottom
    });
    stackViewHeight += formHeight + formPaddingBottom;
    inputs[key] = retrieveValue;
  });
  stackViewHeight -= formPaddingBottom;
  return {
    inputs,
    views,
    stackViewHeight
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/reset-settings.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/reset-settings.js ***!
  \**************************************************************/
/*! exports provided: resetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSettings", function() { return resetSettings; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/constants */ "../sketch-plugin-helper/src/common/constants.js");
/* harmony import */ var _common_get_package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/get-package-json */ "../sketch-plugin-helper/src/common/get-package-json.js");




function resetSettings() {
  const {
    defaultSettings
  } = Object(_common_get_package_json__WEBPACK_IMPORTED_MODULE_3__["getPackageJson"])()[_common_constants__WEBPACK_IMPORTED_MODULE_2__["packageJsonConfigKey"]];

  if (typeof defaultSettings === 'undefined') {
    return;
  }

  Object.keys(defaultSettings).forEach(function (key) {
    Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSettingForKey"])(key, undefined);
    Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSessionVariable"])(key, undefined);
  });
  Object(_utilities_show_message__WEBPACK_IMPORTED_MODULE_1__["showMessage"])('Reset settings');
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/save-settings.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/save-settings.js ***!
  \*************************************************************/
/*! exports provided: saveSettings, saveTemporarySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSettings", function() { return saveSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTemporarySettings", function() { return saveTemporarySettings; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");


const saveSettings = saveSettingsFactory(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSettingForKey"]);
const saveTemporarySettings = saveSettingsFactory(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSessionVariable"]);

function saveSettingsFactory(saveValue) {
  return function (settings, options) {
    if (typeof settings === 'undefined') {
      return;
    }

    Object.keys(settings).forEach(function (key) {
      const value = settings[key];

      if (typeof value === 'undefined') {
        return;
      }

      saveValue(key, value);
    });
    const successMessage = typeof options !== 'undefined' && options.successMessage;

    if (successMessage) {
      Object(_utilities_show_message__WEBPACK_IMPORTED_MODULE_1__["showMessage"])(successMessage);
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/check-box.js":
/*!************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/check-box.js ***!
  \************************************************************/
/*! exports provided: checkBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBox", function() { return checkBox; });
function checkBox({
  width,
  height,
  label,
  value
}) {
  const checkBox = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
  checkBox.setButtonType(NSSwitchButton);
  checkBox.setBezelStyle(0);
  checkBox.setState(value ? NSOnState : NSOffState);
  checkBox.setTitle(label);
  return {
    view: checkBox,
    retrieveValue: function () {
      // eslint-disable-next-line eqeqeq
      return checkBox.stringValue() == '1';
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-alert.js":
/*!***************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-alert.js ***!
  \***************************************************************/
/*! exports provided: createAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlert", function() { return createAlert; });
function createAlert(title) {
  const alert = NSAlert.alloc().init();
  alert.window().setAutorecalculatesKeyViewLoop(true);
  alert.setMessageText(title);
  alert.addButtonWithTitle('OK');
  alert.addButtonWithTitle('Cancel');
  return alert;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-form.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-form.js ***!
  \**************************************************************/
/*! exports provided: CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, NUMERIC_TEXT_BOX, STRING_TEXT_BOX, TEXT_BOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-box */ "../sketch-plugin-helper/src/settings/ui/check-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return _check_box__WEBPACK_IMPORTED_MODULE_0__["checkBox"]; });

/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop-down */ "../sketch-plugin-helper/src/settings/ui/drop-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return _drop_down__WEBPACK_IMPORTED_MODULE_1__["dropDown"]; });

/* harmony import */ var _radio_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-buttons */ "../sketch-plugin-helper/src/settings/ui/radio-buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return _radio_buttons__WEBPACK_IMPORTED_MODULE_2__["radioButtons"]; });

/* harmony import */ var _numeric_text_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numeric-text-box */ "../sketch-plugin-helper/src/settings/ui/numeric-text-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_TEXT_BOX", function() { return _numeric_text_box__WEBPACK_IMPORTED_MODULE_3__["numericTextBox"]; });

/* harmony import */ var _string_text_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string-text-box */ "../sketch-plugin-helper/src/settings/ui/string-text-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STRING_TEXT_BOX", function() { return _string_text_box__WEBPACK_IMPORTED_MODULE_4__["stringTextBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return _string_text_box__WEBPACK_IMPORTED_MODULE_4__["textBox"]; });








/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-label.js":
/*!***************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-label.js ***!
  \***************************************************************/
/*! exports provided: createLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabel", function() { return createLabel; });
function createLabel({
  label,
  width,
  height
}) {
  const textField = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
  textField.setBezeled(false);
  textField.setDrawsBackground(false);
  textField.setEditable(false);
  textField.setLineBreakMode(NSLineBreakByTruncatingTail);
  textField.setSelectable(false);
  textField.setStringValue(label);
  return textField;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-stack-view.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-stack-view.js ***!
  \********************************************************************/
/*! exports provided: createStackView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStackView", function() { return createStackView; });
function createStackView({
  width,
  height,
  views
}) {
  const stackView = NSStackView.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
  stackView.setAlignment(NSLayoutAttributeLeft);
  stackView.setOrientation(NSUserInterfaceLayoutOrientationVertical);
  stackView.setSpacing(0);
  stackView.setTranslatesAutoresizingMaskIntoConstraints(true);
  stackView.updateConstraintsForSubtreeIfNeeded();
  views.forEach(function ({
    view,
    paddingBottom
  }) {
    stackView.addView_inGravity_(view, NSStackViewGravityTop);
    stackView.setCustomSpacing_afterView_(paddingBottom, view);
  });
  return stackView;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/drop-down.js":
/*!************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/drop-down.js ***!
  \************************************************************/
/*! exports provided: dropDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropDown", function() { return dropDown; });
function dropDown({
  width,
  height,
  value,
  possibleValues
}) {
  const popUpButton = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
  possibleValues.forEach(function (value) {
    popUpButton.addItemWithTitle(value);
  });
  const index = typeof value !== 'undefined' ? possibleValues.indexOf(value) : 0;
  popUpButton.selectItemAtIndex(index);
  return {
    view: popUpButton,
    retrieveValue: function () {
      const index = popUpButton.indexOfSelectedItem();
      return possibleValues[index];
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/form-types.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/form-types.js ***!
  \*************************************************************/
/*! exports provided: CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, NUMERIC_TEXT_BOX, STRING_TEXT_BOX, TEXT_BOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return CHECK_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return DROP_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return RADIO_BUTTONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_TEXT_BOX", function() { return NUMERIC_TEXT_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING_TEXT_BOX", function() { return STRING_TEXT_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return TEXT_BOX; });
const CHECK_BOX = 'CHECK_BOX';
const DROP_DOWN = 'DROP_DOWN';
const RADIO_BUTTONS = 'RADIO_BUTTONS';
const NUMERIC_TEXT_BOX = 'NUMERIC_TEXT_BOX';
const STRING_TEXT_BOX = 'STRING_TEXT_BOX';
const TEXT_BOX = STRING_TEXT_BOX;

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/numeric-text-box.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/numeric-text-box.js ***!
  \*******************************************************************/
/*! exports provided: numericTextBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericTextBox", function() { return numericTextBox; });
/* harmony import */ var _text_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-box */ "../sketch-plugin-helper/src/settings/ui/text-box.js");

const numericTextBox = Object(_text_box__WEBPACK_IMPORTED_MODULE_0__["textBox"])(function (value) {
  // eslint-disable-next-line no-eval
  return parseFloat(eval(value));
});

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/radio-buttons.js":
/*!****************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/radio-buttons.js ***!
  \****************************************************************/
/*! exports provided: radioButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radioButtons", function() { return radioButtons; });
function radioButtons({
  width,
  height,
  value,
  possibleValues
}) {
  const buttonFormat = NSButtonCell.alloc().init();
  buttonFormat.setButtonType(NSRadioButton);
  const length = possibleValues.length;
  const matrix = NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0, 0, width, height), NSRadioModeMatrix, buttonFormat, 1, length);
  matrix.setCellSize(CGSizeMake(Math.floor(width / length), height));
  const cells = matrix.cells();
  cells.forEach(function (cell, index) {
    cell.setTitle(possibleValues[index]);
  });
  const index = typeof value !== 'undefined' ? possibleValues.indexOf(value) : 0;
  matrix.selectCellAtRow_column(0, index);
  return {
    view: matrix,
    retrieveValue: function () {
      const index = matrix.cells().indexOfObject(matrix.selectedCell());
      return possibleValues[index];
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/string-text-box.js":
/*!******************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/string-text-box.js ***!
  \******************************************************************/
/*! exports provided: stringTextBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringTextBox", function() { return stringTextBox; });
/* harmony import */ var _text_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-box */ "../sketch-plugin-helper/src/settings/ui/text-box.js");

const stringTextBox = Object(_text_box__WEBPACK_IMPORTED_MODULE_0__["textBox"])();

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/text-box.js":
/*!***********************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/text-box.js ***!
  \***********************************************************/
/*! exports provided: textBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textBox", function() { return textBox; });
function textBox(transform) {
  return function ({
    width,
    height,
    value,
    placeholder
  }) {
    const textField = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
    const stringValue = value == null ? '' : `${value}`;
    textField.setStringValue(stringValue);

    if (placeholder) {
      textField.setPlaceholderString(placeholder);
    }

    return {
      view: textField,
      retrieveValue: function () {
        const string = `${textField.stringValue()}`;
        return transform ? transform(string) : string;
      }
    };
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js":
/*!***************************************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js ***!
  \***************************************************************************/
/*! exports provided: compareSketchDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareSketchDocuments", function() { return compareSketchDocuments; });
function compareSketchDocuments(a, b) {
  return compare(a.toJSON(), b.toJSON());
}

function compare(a, b) {
  if (isObject(a) && isObject(b)) {
    return compareObjects(a, b);
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    return compareArrays(a, b);
  }

  if (typeof a === 'boolean' && typeof b === 'boolean' || typeof a === 'number' && typeof b === 'number' || typeof a === 'string' && typeof b === 'string') {
    return a === b;
  }

  return a == null && b == null;
}

function isObject(x) {
  return typeof x === 'object' && !!x && x.constructor === Object;
}

const IGNORED_KEYS = {
  id: true,
  includedLayerIds: true,
  libraryID: true,
  objectID: true,
  path: true,
  selected: true,
  sharedStyleId: true,
  symbolID: true
};

function compareObjects(a, b) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.reduce(function (result, key) {
    if (!result) {
      return false;
    }

    if (IGNORED_KEYS[key]) {
      return result;
    }

    return compare(a[key], b[key]);
  }, true);
}

function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  return a.reduce(function (result, value, i) {
    if (!result) {
      return false;
    }

    return compare(value, b[i]);
  }, true);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/results-logger.js":
/*!*****************************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/results-logger.js ***!
  \*****************************************************************/
/*! exports provided: ResultsLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsLogger", function() { return ResultsLogger; });
class ResultsLogger {
  constructor() {
    this.count = 0;
    this.passCount = 0;
    console.log('TAP version 13');
  }

  logTestName(testName) {
    console.log(`# ${testName}`);
  }

  logAssertionPassed(message) {
    this.count += 1;
    this.passCount += 1;
    console.log(`ok ${this.count} ${message || ''}`.trim());
  }

  logAssertionFailed(message) {
    this.count += 1;
    console.log(`not ok ${this.count} ${message || ''}`.trim());
  }

  logResultsSummary() {
    console.log(`1..${this.count}`);
    console.log(`\n# tests ${this.count}`);
    console.log(`# pass  ${this.passCount}`);
    const failCount = this.count - this.passCount;

    if (this.count === 0 || failCount > 0) {
      console.log(`# fail  ${failCount}`);
      console.log('\n# not ok\n');
    } else {
      console.log('\n# ok\n');
    }
  }

}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/test-suite.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/test-suite.js ***!
  \*************************************************************/
/*! exports provided: TestSuite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSuite", function() { return TestSuite; });
class TestSuite {
  constructor({
    name,
    resultsLogger
  }) {
    this.expectedCount = null;
    this.actualCount = 0;
    this.failed = false;
    this.resultsLogger = resultsLogger;
    this.resultsLogger.logTestName(name);
  }

  assertionPassed() {
    this.actualCount += 1;
    this.resultsLogger.logAssertionPassed();

    if (this.actualCount > this.expectedCount) {
      this.failed = true;
      this.resultsLogger.logAssertionFailed('plan != count');
    }
  }

  assertionFailed() {
    this.actualCount += 1;
    this.resultsLogger.logAssertionFailed();
  }

  plan(count) {
    if (this.expectedCount === null) {
      this.expectedCount = count;
      return;
    }

    this.resultsLogger.logAssertionFailed('plan called twice');
  }

  true(object) {
    if (object === true) {
      this.assertionPassed();
      return;
    }

    this.assertionFailed();
  }

  checkAssertionCounts() {
    if (this.failed === false && this.actualCount !== this.expectedCount) {
      this.resultsLogger.logAssertionFailed('plan != count');
    }
  }

}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/test.js":
/*!*******************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/test.js ***!
  \*******************************************************/
/*! exports provided: test, snapshotTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotTest", function() { return snapshotTest; });
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-promise */ "../sketch-plugin-helper/node_modules/is-promise/index.js");
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var p_each_series__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-each-series */ "../sketch-plugin-helper/node_modules/p-each-series/index.js");
/* harmony import */ var p_each_series__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p_each_series__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _compare_sketch_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compare-sketch-documents */ "../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js");
/* harmony import */ var _utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/open-sketch-document */ "../sketch-plugin-helper/src/utilities/open-sketch-document.js");
/* harmony import */ var _results_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results-logger */ "../sketch-plugin-helper/src/test-runner/results-logger.js");
/* harmony import */ var _test_suite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-suite */ "../sketch-plugin-helper/src/test-runner/test-suite.js");






const tests = [];
let isQueued = false;
function test(name, handler) {
  tests.push({
    name,
    handler
  });

  if (!isQueued) {
    isQueued = true;
    setTimeout(runAllTests, 0);
  }
}
function snapshotTest(name, inputFilePath, snapshotFilePath, handler) {
  tests.push({
    name,
    handler: createSnapshotTest({
      inputFilePath,
      snapshotFilePath,
      handler
    })
  });

  if (!isQueued) {
    isQueued = true;
    setTimeout(runAllTests, 0);
  }
}

function createSnapshotTest({
  inputFilePath,
  snapshotFilePath,
  handler
}) {
  return async function (t) {
    t.plan(1);
    const inputFile = await Object(_utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_3__["openSketchDocument"])(inputFilePath);
    handler(inputFile);
    const snapshotFile = await Object(_utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_3__["openSketchDocument"])(snapshotFilePath);
    t.true(Object(_compare_sketch_documents__WEBPACK_IMPORTED_MODULE_2__["compareSketchDocuments"])(inputFile, snapshotFile));
    inputFile.close();
    snapshotFile.close();
  };
}

async function runAllTests() {
  const resultsLogger = new _results_logger__WEBPACK_IMPORTED_MODULE_4__["ResultsLogger"]();

  try {
    await p_each_series__WEBPACK_IMPORTED_MODULE_1___default()(tests, async function ({
      name,
      handler
    }) {
      const testSuite = new _test_suite__WEBPACK_IMPORTED_MODULE_5__["TestSuite"]({
        name,
        resultsLogger
      });
      const result = handler(testSuite);

      if (is_promise__WEBPACK_IMPORTED_MODULE_0___default()(result)) {
        await result;
      }

      testSuite.checkAssertionCounts();
      return Promise.resolve();
    });
  } catch (error) {
    throw error;
  } finally {
    resultsLogger.logResultsSummary();
  }
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/add-layers-to-page.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/add-layers-to-page.js ***!
  \*******************************************************************/
/*! exports provided: addLayersToPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLayersToPage", function() { return addLayersToPage; });
/* harmony import */ var _get_selected_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-selected-document */ "../sketch-plugin-helper/src/utilities/get-selected-document.js");

function addLayersToPage(layers) {
  const document = Object(_get_selected_document__WEBPACK_IMPORTED_MODULE_0__["getSelectedDocument"])();
  return document.selectedPage.sketchObject.addLayers(layers);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js":
/*!****************************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js ***!
  \****************************************************************************/
/*! exports provided: adjustParentGroupsToFit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustParentGroupsToFit", function() { return adjustParentGroupsToFit; });
function adjustParentGroupsToFit(layer) {
  adjustParentGroupsToFitHelper(layer, {});
}

function adjustParentGroupsToFitHelper(layer, adjustedGroupIds) {
  const parent = layer.parent;

  if (parent && parent.type === 'Group' && !adjustedGroupIds[parent.id]) {
    parent.adjustToFit();
    adjustedGroupIds[parent.id] = true;
    adjustParentGroupsToFitHelper(parent, adjustedGroupIds);
  }
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/find-layers-by-name.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/find-layers-by-name.js ***!
  \********************************************************************/
/*! exports provided: findLayersByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLayersByName", function() { return findLayersByName; });
/* harmony import */ var _get_layers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-layers */ "../sketch-plugin-helper/src/utilities/get-layers.js");
/* harmony import */ var _iterate_nested_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterate-nested-layers */ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js");


function findLayersByName(name) {
  const result = [];
  Object(_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_1__["iterateNestedLayers"])(Object(_get_layers__WEBPACK_IMPORTED_MODULE_0__["getAllLayers"])(), function (layer) {
    if (layer.name === name) {
      result.push(layer);
    }
  });
  return result;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-absolute-coordinates.js":
/*!*************************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-absolute-coordinates.js ***!
  \*************************************************************************/
/*! exports provided: getAbsoluteCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteCoordinates", function() { return getAbsoluteCoordinates; });
function getAbsoluteCoordinates(layer) {
  return getAbsoluteCoordinatesHelper(layer, {
    x: layer.frame.x,
    y: layer.frame.y
  });
}

function getAbsoluteCoordinatesHelper(layer, result) {
  const parent = layer.parent;

  if (parent.type === 'Page') {
    return result;
  }

  const newResult = {
    x: result.x + parent.frame.x,
    y: result.y + parent.frame.y
  };

  if (parent.type === 'Artboard') {
    return newResult;
  }

  return getAbsoluteCoordinatesHelper(parent, newResult);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-layers.js":
/*!***********************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-layers.js ***!
  \***********************************************************/
/*! exports provided: getAllLayers, getSelectedLayers, getSelectedOrAllLayers, getAllArtboards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLayers", function() { return getAllLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayers", function() { return getSelectedLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedOrAllLayers", function() { return getSelectedOrAllLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllArtboards", function() { return getAllArtboards; });
/* harmony import */ var _get_selected_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-selected-document */ "../sketch-plugin-helper/src/utilities/get-selected-document.js");

function getAllLayers() {
  const document = Object(_get_selected_document__WEBPACK_IMPORTED_MODULE_0__["getSelectedDocument"])();
  const page = document.selectedPage;
  return page.layers;
}
function getSelectedLayers() {
  const document = Object(_get_selected_document__WEBPACK_IMPORTED_MODULE_0__["getSelectedDocument"])();
  return document.selectedLayers.layers.reverse();
}
function getSelectedOrAllLayers() {
  const selectedLayers = getSelectedLayers();
  return selectedLayers.length !== 0 ? selectedLayers : getAllLayers();
}
function getAllArtboards() {
  return getAllLayers().filter(function (layer) {
    return layer.type === 'Artboard';
  });
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-selected-document.js":
/*!**********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-selected-document.js ***!
  \**********************************************************************/
/*! exports provided: getSelectedDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedDocument", function() { return getSelectedDocument; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

function getSelectedDocument() {
  const documents = NSApplication.sharedApplication().orderedDocuments();
  return Object(sketch__WEBPACK_IMPORTED_MODULE_0__["fromNative"])(documents[0]);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js":
/*!**********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/iterate-nested-layers.js ***!
  \**********************************************************************/
/*! exports provided: iterateNestedLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateNestedLayers", function() { return iterateNestedLayers; });
function iterateNestedLayers(layers, callback) {
  layers.forEach(function (layer) {
    callback(layer);
    const type = layer.type;

    if (type === 'Artboard' || type === 'Group') {
      iterateNestedLayers(layer.layers, callback);
    }
  });
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/open-sketch-document.js":
/*!*********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/open-sketch-document.js ***!
  \*********************************************************************/
/*! exports provided: openSketchDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSketchDocument", function() { return openSketchDocument; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);

async function openSketchDocument(filePath) {
  return new Promise(function (resolve, reject) {
    sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Document"].open(filePath, function (error, document) {
      if (error) {
        return reject(error);
      }

      resolve(document);
    });
  });
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/show-message.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/show-message.js ***!
  \*************************************************************/
/*! exports provided: showMessage, showSuccessMessage, showErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccessMessage", function() { return showSuccessMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorMessage", function() { return showErrorMessage; });
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_0__);

function showMessage(message, options) {
  sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message(options && options.symbol ? `${options.symbol} ${message}` : message);
}
function showSuccessMessage(message) {
  showMessage(message, {
    symbol: '✔'
  });
}
function showErrorMessage(message) {
  showMessage(message, {
    symbol: '✘'
  });
}

/***/ }),

/***/ "./src/find-and-replace-text.js":
/*!**************************************!*\
  !*** ./src/find-and-replace-text.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findAndReplaceText; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");
/* harmony import */ var _replace_text_in_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replace-text-in-layer */ "./src/replace-text-in-layer.js");


function findAndReplaceText() {
  const settings = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["openSettingsDialog"])({
    title: 'Find and Replace Text',
    inputs: [{
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["TEXT_BOX"],
      key: 'findText',
      label: 'Find'
    }, {
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"],
      key: 'caseSensitive',
      label: 'Case sensitive'
    }, {
      type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["TEXT_BOX"],
      key: 'replaceText',
      label: 'Replace'
    }]
  });

  if (!settings) {
    return;
  }

  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["saveTemporarySettings"])(settings);
  const selectedLayers = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getSelectedLayers"])();
  let layers = [];

  if (selectedLayers.length === 0) {
    layers = getNestedTextLayersAndSymbolInstances(Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getAllLayers"])());

    if (layers.length === 0) {
      Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showErrorMessage"])('No text layers or symbol instances on the page');
      return;
    }
  } else {
    layers = getNestedTextLayersAndSymbolInstances(selectedLayers);

    if (layers.length === 0) {
      Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showErrorMessage"])('No text layers or symbol instances in selection');
      return;
    }
  }

  const regularExpression = new RegExp(settings.findText, settings.caseSensitive ? 'g' : 'gi');
  let totalCount = 0;
  layers.forEach(function (layer) {
    const count = _replace_text_in_layer__WEBPACK_IMPORTED_MODULE_1__["default"][layer.type]({
      layer,
      regularExpression,
      replaceText: settings.replaceText
    });
    totalCount += count;
  });

  if (totalCount === 0) {
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showMessage"])('No replacements made');
    return;
  }

  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])(`Made ${totalCount} replacement${totalCount === 1 ? '' : 's'}`);
}

function getNestedTextLayersAndSymbolInstances(layers) {
  const results = [];
  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["iterateNestedLayers"])(layers, function (layer) {
    if (layer.type === 'Text' || layer.type === 'SymbolInstance') {
      results.push(layer);
    }
  });
  return results;
}

/***/ }),

/***/ "./src/replace-text-in-layer.js":
/*!**************************************!*\
  !*** ./src/replace-text-in-layer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SymbolInstance: replaceTextInSymbolInstance,
  Text: replaceTextInTextLayer
});

function replaceTextInSymbolInstance({
  layer,
  regularExpression,
  replaceText
}) {
  let count = 0;
  layer.overrides.forEach(function (override) {
    if (override.symbolOverride) {
      return;
    }

    const text = override.value;

    if (regularExpression.test(text)) {
      override.value = text.replace(regularExpression, function () {
        count++;
        return replaceText;
      });
    }
  });
  return count;
}

function replaceTextInTextLayer({
  layer,
  regularExpression,
  replaceText
}) {
  const text = layer.text;

  if (regularExpression.test(text)) {
    let count = 0;
    layer.text = text.replace(regularExpression, function () {
      count++;
      return replaceText;
    });
    return count;
  }

  return 0;
}

/***/ }),

/***/ "./src/reset-settings.js":
/*!*******************************!*\
  !*** ./src/reset-settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

/* harmony default export */ __webpack_exports__["default"] = (sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["resetSettings"]);

/***/ }),

/***/ 0:
/*!***********************************************************************************************************!*\
  !*** multi /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/40ff261f-19ec-4ed8-acd6-a6c91779f88b ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/40ff261f-19ec-4ed8-acd6-a6c91779f88b */"../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/40ff261f-19ec-4ed8-acd6-a6c91779f88b");


/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ })));
//# sourceMappingURL=plugin.js.map