var el = document.getElementById('content')

self.port.on('content', function( content ) {
  if ( content === null || content === '' || content === '<br>' ) content = 'Insert your text here.'
  el.innerHTML = content

  document.addEventListener('keyup', function() {
    self.port.emit('content', el.innerHTML)
  })

})
