const exampleSocket = new WebSocket("ws://10.0.0.150:8000")
const map_pane = document.getElementById('map_pane') // detects moves
const map_container = document.getElementById('map_container') // is moved
var drag = {
    x: 0,
    y: 0,
    state: false
}



map_pane.addEventListener('mousedown', function(event) {
    console.log('down')
    map_pane.classList.add('cursor_grabbing')
    drag.x = event.pageX
    drag.y = event.pageY
    drag.state = true
})




document.addEventListener('mousemove', function(event) {
    if (drag.state) {
        map_container.style.left = parseInt(map_container.style.left, 10) + (event.pageX - drag.x) + 'px'
        map_container.style.top = parseInt(map_container.style.top, 10) + (event.pageY - drag.y) + 'px'
        drag.x = event.pageX
        drag.y = event.pageY
    }
})




document.addEventListener('mouseup', function(event) {
    map_pane.classList.remove('cursor_grabbing')
    drag.state = false
    // exampleSocket.send('hello world')
})







