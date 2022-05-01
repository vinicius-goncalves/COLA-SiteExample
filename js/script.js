let button = document.getElementById('header-icon')
let getOverlay = document.getElementById('overlay-menu')

button.addEventListener('click', () => {
    getOverlay.style.height = "100vh"    
})

window.addEventListener('keydown', (e) => {
    let keyPress = e.key
    if(keyPress == "Escape") {
        getOverlay.style.height = "0"
    }
})