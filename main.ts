function decoDer () {
    let stringArray: string[] = []
    morseArray = LetterToSend.split(" ")
    for (let i = 0; i <= morseArray.length - 1; i++) {
        for (let j = 0; j <= morse.length - 1; j++) {
            if (morseArray[i] == morse[j]) {
                stringArray[k] = alphabet[j]
                k += 1
            }
        }
    }
    if (k == 0) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    for (let l = 0; l <= stringArray.length - 1; l++) {
        finalString = "" + finalString + stringArray[l] + " "
    }
    basic.showString(finalString)
}
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    LetterToSend = "" + LetterToSend + "."
    basic.showString(".")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
    LetterToSend = "" + LetterToSend + " "
    basic.showString("_")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    LetterToSend = "" + LetterToSend + "-"
    basic.showString("-")
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    decoDer()
})
let finalString = ""
let alphabet: string[] = []
let k = 0
let morse: string[] = []
let LetterToSend = ""
let morseArray: string[] = []
music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
basic.showString("A for dot B for dash and A+B for space")
basic.forever(function () {
    morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
})
