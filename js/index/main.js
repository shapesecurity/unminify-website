"use strict";

var safetyLevel = unminify.safetyLevels.UNSAFE;

// fn from http://underscorejs.org/docs/underscore.html
// https://github.com/jashkenas/underscore/blob/master/LICENSE
function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function() {
    var last = Date.now() - timestamp;

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

var inputEditor = ace.edit(document.querySelector("#input"));
var outputEditor = ace.edit(document.querySelector("#output"));

function displayError(exception) {
  hideError();
  console.dir(exception);
  if (exception.line) {
    inputEditor.getSession().setAnnotations([{
      row: exception.line - 1,
      column: exception.column,
      text: exception.message,
      type: "error" // also warning and information
    }]);
  }
}

function hideError() {
  inputEditor.getSession().clearAnnotations();
}

function render(program) {
  hideError();
  outputEditor.setValue(program, -1);
}

var inputSession = inputEditor.getSession();
inputEditor.setBehavioursEnabled(false);
inputEditor.setHighlightActiveLine(false);
inputEditor.setOption("fontFamily", "Source Code Pro");
inputEditor.setOption("fontSize", "10pt");
inputEditor.setShowPrintMargin(false);
inputEditor.setTheme("ace/theme/textmate");
inputEditor.setWrapBehavioursEnabled(true);
inputSession.setMode("ace/mode/javascript");
inputSession.setOption("useWorker", false);
inputSession.setTabSize(2);
inputSession.setUseSoftTabs(true);
inputSession.setUseWrapMode(true);

var outputSession = outputEditor.getSession();
outputEditor.setBehavioursEnabled(false);
outputEditor.setHighlightActiveLine(false);
outputEditor.setOption("fontFamily", "Source Code Pro");
outputEditor.setOption("fontSize", "10pt");
outputEditor.setShowPrintMargin(false);
outputEditor.setTheme("ace/theme/textmate");
outputEditor.setWrapBehavioursEnabled(false);
outputEditor.setReadOnly(true);
outputSession.setMode("ace/mode/javascript");
outputSession.setOption("useWorker", false);
outputSession.setTabSize(2);
outputSession.setUseSoftTabs(true);
outputSession.setUseWrapMode(false);

function onChange() {
  var code = inputEditor.getValue();
  try {
    var program = unminify(code, { safety: safetyLevel });
  } catch (ex) {
    displayError(ex);
    return;
  }
  render(program);
}

inputEditor.getSession().on('change', debounce(onChange, 300));

function onLoad() {
  onChange();

  var button = document.querySelector("#safety-level-button");

  function updateSafetyLevel(newSafetyLevel, niceText) {
    return function() {
      safetyLevel = newSafetyLevel;
      button.innerHTML = niceText;
      onChange();
    }
  }

  document.querySelector("#slb-useless").addEventListener('click', updateSafetyLevel(unminify.safetyLevels.USELESS, 'Useless'));
  document.querySelector("#slb-safe").addEventListener('click', updateSafetyLevel(unminify.safetyLevels.SAFE, 'Safe'));
  document.querySelector("#slb-mostly-safe").addEventListener('click', updateSafetyLevel(unminify.safetyLevels.MOSTLY_SAFE, 'Mostly Safe'));
  document.querySelector("#slb-unsafe").addEventListener('click', updateSafetyLevel(unminify.safetyLevels.UNSAFE, 'Unsafe'));
  document.querySelector("#slb-wildly-unsafe").addEventListener('click', updateSafetyLevel(unminify.safetyLevels.WILDLY_UNSAFE, 'Wildly Unsafe'));
}

window.addEventListener('DOMContentLoaded', onLoad);
