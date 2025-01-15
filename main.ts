input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        # . . . #
        `)
})
