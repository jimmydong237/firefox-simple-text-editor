var buttons = require('sdk/ui/button/action')
  , tabs = require("sdk/tabs")

var button = buttons.ActionButton({
  id: "text-editor-button",
  label: "Open a new text editor",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick() {
  tabs.open('data:text/html;charset=utf-8,%20<body%20contenteditable%20style="font-size:1.8rem;font-family:monaco;line-height:1.4;max-width:60rem;margin:0%20auto;padding:4rem;"%20spellcheck="false"><p>Insert here.')
}
