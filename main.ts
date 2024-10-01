/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maryam Ergen
 * Created on: Sep 2024
 * This program plays cookie clicker
*/

basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

let cookieClickNumber: number
cookieClickNumber = 0

input.onButtonPressed(Button.A, function () {
    cookieClickNumber = cookieClickNumber + 1
    pause(2)
    basic.showNumber(cookieClickNumber)
})