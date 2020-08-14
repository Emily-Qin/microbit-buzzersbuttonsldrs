let lightLevel = 0
let aPressed = false
let bPressed = false

// read light levels
basic.forever(function () {
    aPressed = false
    bPressed = false
        serial.writeLine("reading light level")
        lightLevel = input.lightLevel() 
    if (lightLevel > 20) {
        Alarm()
   
    }
    serial.writeLine("AAA")
})

//alarm
function Alarm() {        
        while (!aPressed) {
            //alarm sounds
             music.playMelody("C5 G A E F C F G ", 120)
             basic.pause(1000) 
             input.onButtonPressed(Button.A, () => {
                 aPressed = true
              })
         }

        serial.writeLine("stopped melody after buttonA")
        music.stopMelody(MelodyStopOptions.All)  

        while (!bPressed)  {
           basic.pause(1000) 
           input.onButtonPressed(Button.B, () => {
           bPressed = true
         })
        }
        serial.writeLine("buttonB Pressed")         
}
