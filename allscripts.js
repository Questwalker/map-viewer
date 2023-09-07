const exampleSocket = new WebSocket("ws://10.0.0.150:8000")

const map_pane = document.getElementById('map_pane') // detects moves
const map_container = document.getElementById('map_container') // is moved
var drag = {
    x: 0,
    y: 0,
    state: false
}
// start
map_pane.addEventListener('mousedown', function(event) {
    console.log('down')
    map_pane.classList.add('cursor_grabbing')
    drag.x = event.pageX
    drag.y = event.pageY
    drag.state = true
})
map_pane.addEventListener('touchstart', function(event) {
    event.preventDefault()
    drag.x = event.pageX
    drag.y = event.pageY
    drag.state = true
})
// move
document.addEventListener('mousemove', function(event) {
    if (drag.state) {
        // TODO: Restrict how far a the image can be moved away, similar to the genshin impact map
        map_container.style.left = parseInt(map_container.style.left, 10) + (event.pageX - drag.x) + 'px'
        map_container.style.top = parseInt(map_container.style.top, 10) + (event.pageY - drag.y) + 'px'
        drag.x = event.pageX
        drag.y = event.pageY
    }
})
map_pane.addEventListener('touchmove', function(event) {
    event.preventDefault()
    // TODO: Restrict how far a the image can be moved away, similar to the genshin impact map
    map_container.style.left = parseInt(map_container.style.left, 10) + (event.touches[0].pageX - drag.x) + 'px'
    map_container.style.top = parseInt(map_container.style.top, 10) + (event.touches[0].pageY - drag.y) + 'px'
    drag.x = event.touches[0].pageX
    drag.y = event.touches[0].pageY
})
// end
document.addEventListener('mouseup', function(event) {
    map_pane.classList.remove('cursor_grabbing')
    drag.state = false
})
map_pane.addEventListener('touchend', function(event) {
    event.preventDefault()
    drag.state = false
    // exampleSocket.send('hello world')
})





function stringifyEvent(e) {
    const obj = {}
    for (let k in e) {
        obj[k] = e[k]
    }
    return JSON.stringify(obj, (k, v) => {
        if (v instanceof Node) return 'Node'
        if (v instanceof Window) return 'Window'
        return v
    }, ' ')
}





// var totalX = 0
// var totalY = 0
// var moveX = 0
// var moveY = 0

// document.addEventListener("mousemove", function(ev){
//     totalX += Math.abs(ev.movementX)
//     totalY += Math.abs(ev.movementY)
//     moveX += ev.movementX
//     moveY += ev.movementY
// }, false)

// setInterval(function(){
//     console.log(`Speed X: ${totalX}px/s, Y: ${totalY}px/s`)
//     moveX = moveY = totalX = totalY = 0
// }, 1000)