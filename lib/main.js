var buttons = require('sdk/ui/button/action')
var tabs    = require('sdk/tabs')
var sp      = require('sdk/simple-prefs')
var ss      = require('sdk/simple-storage')
var data    = require('sdk/self').data
var pageMod = require('sdk/page-mod')

var button = buttons.ActionButton({
  id: 'text-editor-button',
  label: 'Open a new text editor',
  icon: {
    '16': './icon-16.png',
    '32': './icon-32.png',
    '64': './icon-64.png'
  },
  onClick: handleClick
})

pageMod.PageMod({
  include: [ data.url('page-simple.html') ],
  contentScriptFile: data.url('script.js'),
  onAttach: function( worker ) {
    worker.port.emit('content', ss.storage.content)
    worker.port.on('content', function( content ) {
      ss.storage.content = content
    })
  }
})

function handleClick() {
  sp.prefs.editorType === 'A'? openPage('page-advanced.html') : openPage('page-simple.html')
}

function openPage( page ) {
  tabs.open( data.url( page ) )
}
