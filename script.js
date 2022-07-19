let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')


let values = [
    '😃', '😇', '😋', '😂' , '😭', '😡'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * 6)]
}

let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()

    }, 1000 / newSpeed)
}

let spin = document.getElementById('spin')

inpSpeed.onchange = function (ev){
    //document.documentElement -> this is the :root of the speed
    spin.onclick = function(){
        document.documentElement.style.setProperty('--speed', ev.target.value)
        updateAnimation(ev.target.value)
    }
   


}
let stop = document.getElementById('stop')
stop.onclick = function(){
    document.documentElement.style.setProperty('--speed', 0)
    clearInterval(animationId)

    //declaring that the player has won
    let slot1 = $('#value1').text()
    let slot2 = $('#value2').text()
    let slot3 = $('#value3').text()

    //if the outcome comes as true then display alert to the player that player won or else lost
    if((slot1 == slot2) && (slot2 == slot3) && (slot1 == slot3)){
     alert("Congratulations! Winner Winner")
    }
    else{
        alert("Try again!")
    }
    
}
