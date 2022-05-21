let direction = null;
let x = 100;
let y = 250;

if(direction === 'west'){
    x = x - 1
}
if(direction === 'north'){
    y = y + 1
}
if(direction === 'east'){
    x = x + 1
}
if(direction === 'south'){
    y = y - 1
}
character.style.left = x + 'px'
character.style.bottom = y + 'px'
setInterval(moveCharacter, 1)                                    

setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)
document.addEventListener('keydown', function(e){                
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})
function newPlayableCharacter(x, y) {
    const element = newImage('assets/green-character/static.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/green-character/static.gif`
        }
        if (direction === 'west') {
            element.src = `assets/green-character/west.gif`
        }
        if (direction === 'north') {
            element.src = `assets/green-character/north.gif`
        }
        if (direction === 'east') {
            element.src = `assets/green-character/east.gif`
        }
        if (direction === 'south') {
            element.src = `assets/green-character/south.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}
