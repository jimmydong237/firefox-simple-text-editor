var el = document.getElementById('content')

self.port.on('content', function( content ) {
  el.innerHTML = content

  document.addEventListener('keyup', function() {
    self.port.emit('content', el.innerHTML)
  })

})
