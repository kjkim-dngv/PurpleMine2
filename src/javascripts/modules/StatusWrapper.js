var PurpleMine = PurpleMine || {} // eslint-disable-line no-use-before-define

PurpleMine.StatusWrapper = (function () {
  'use strict'

  var instance

  function StatusWrapper () {
    if (instance) return instance
    instance = this

    wrapStatusCells()
  }

  function wrapStatusCells () {
    document.querySelectorAll('.list.issues td.status').forEach(function (el) {
      if (!el.querySelector('span')) {
        var text = el.textContent.trim()
        if (text) {
          el.innerHTML = '<span>' + text + '</span>'
        }
      }
    })
  }

  return StatusWrapper
})()
