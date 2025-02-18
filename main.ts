/**
 * Servo 360
 */
//% color=#2b569b weight=1 icon="\uf0ad" block="Servo 360"
namespace servo360 {
    /**
    * Spins the motor in one direction at full speed
    * @param pin Which pin the motor is on
    */
    //% blockId=spinOneWay weight=100
    //% block="spin one way pin %pin"
    export function spinOneWay(pin = AnalogPin.P1): void {
        pins.servoWritePin(pin, 180)
    }

    /**
    * Spins the motor in other direction at full speed
    * @param pin Which pin the motor is on
    */
    //% blockId=spinOtherWay weight=80
    //% block="spin other way pin %pin"
    export function spinOtherWay(pin = AnalogPin.P2): void {
        pins.servoWritePin(pin, 0)
    }

    /**
    * Spins the motor in one direction, with a speed from 0 to 100
    * @param pin Which pin the motor is on
    * @param speed Speed from 0 to 100
    */
    //% blockId=spinOneWayWithSpeed weight=60
    //% block="spin one way pin %pin | with speed %speed"
    //% speed.min=0 speed.max=100
    export function spinOneWayWithSpeed(pin = AnalogPin.P1, speed = 50): void {
        let spin = (speed * 90) / 100 + 90
        pins.servoWritePin(pin, spin)
    }

    /**
    * Spins the motor in the other direction, with a speed from 0 to 100
    * @param pin Which pin the motor is on
    * @param speed Speed from 0 to 100
    */
    //% blockId=spinOtherWayWithSpeed weight=40
    //% block="spin other way pin %pin | with speed %speed"
    //% speed.min=0 speed.max=100
    export function spinOtherWayWithSpeed(pin = AnalogPin.P2, speed = 50): void {
        let spin = 90 - (speed * 90) / 100
        pins.servoWritePin(pin, spin)
    }

    /**
    * Turns off the motor at this pin
    * @param pin Which pin the motor is on
    */
    //% blockId=turnOffMotor weight=20
    //% block="turn off motor at pin %pin"
    export function turnOffMotor(pin = DigitalPin.P1): void {
        pins.digitalWritePin(pin, 0)
    }
}