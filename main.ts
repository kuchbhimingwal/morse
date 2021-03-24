let LetterToSend = ""
let morse: string[] = []
let alphabet: string[] = []
let stringArray: string[] = []
let k=0
let finalString = ""
function decoDer () {
	let morseArray = LetterToSend.split(" ")
    
    for(let i = 0; i < morseArray.length; i++) {
        
        for(let j = 0; j < morse.length; j++) {
            if(morseArray[i] === morse[j]){
                stringArray[k] = alphabet[j]
                k++
            }
        }
    }

    for(let i = 0; i < stringArray.length; i++) {
        finalString = finalString + stringArray[i]+ " "
    }
    basic.showString(finalString)
}
input.onButtonPressed(Button.A, function () {
    LetterToSend = "" + LetterToSend + "."
    basic.showString(".")
})
input.onButtonPressed(Button.AB, function () {
    LetterToSend = "" + LetterToSend + " "
    basic.showString("_")
})
input.onButtonPressed(Button.B, function () {
    LetterToSend = "" + LetterToSend + "-"
    basic.showString("-")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    decoDer ()
})
basic.forever(function () {
    morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
})
