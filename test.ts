// Test code for Servo 360 library
let testPin = AnalogPin.P1

// Test Case 1: Basic Rotation Tests
// Purpose: Test basic motor rotation in both directions
// Expected: Motor should rotate in both directions at full speed
// Pass criteria: Motor rotates smoothly in both directions
basic.forever(function () {
    basic.showString("T1")

    // Test clockwise rotation
    servo360.spinOneWay(testPin)
    basic.pause(2000)

    // Test counter-clockwise rotation
    servo360.spinOtherWay(testPin)
    basic.pause(2000)

    // Stop motor
    servo360.turnOffMotor(testPin)
    basic.pause(1000)

    // Test Case 2: Variable Speed Tests
    // Purpose: Test speed control in both directions
    // Expected: Motor should vary speed smoothly
    // Pass criteria: Noticeable speed changes at different levels
    basic.showString("T2")

    // Test speed control clockwise
    for (let speed = 0; speed <= 100; speed += 25) {
        servo360.spinOneWayWithSpeed(testPin, speed)
        basic.pause(1000)
    }

    // Test speed control counter-clockwise
    for (let speed = 0; speed <= 100; speed += 25) {
        servo360.spinOtherWayWithSpeed(testPin, speed)
        basic.pause(1000)
    }

    // Stop motor
    servo360.turnOffMotor(testPin)
    basic.pause(1000)

    // Test Case 3: Pin Change Tests
    // Purpose: Test functionality on different pins
    // Expected: Motor should work on multiple pins
    // Pass criteria: Motor responds on each tested pin
    basic.showString("T3")
    let testPins = [AnalogPin.P1, AnalogPin.P2]

    for (let pin of testPins) {
        // Test both directions
        servo360.spinOneWay(pin)
        basic.pause(1000)
        servo360.spinOtherWay(pin)
        basic.pause(1000)
        servo360.turnOffMotor(pin)
        basic.pause(500)
    }

    // Test Case 4: Edge Cases
    // Purpose: Test boundary conditions
    // Expected: Motor should handle extreme values properly
    // Pass criteria: No erratic behavior at limits
    basic.showString("T4")

    // Test minimum speed
    servo360.spinOneWayWithSpeed(testPin, 0)
    basic.pause(1000)
    servo360.spinOtherWayWithSpeed(testPin, 0)
    basic.pause(1000)

    // Test maximum speed
    servo360.spinOneWayWithSpeed(testPin, 100)
    basic.pause(1000)
    servo360.spinOtherWayWithSpeed(testPin, 100)
    basic.pause(1000)

    // Stop motor
    servo360.turnOffMotor(testPin)
    basic.pause(1000)

    // Test Case 5: Quick Direction Changes
    // Purpose: Test motor response to rapid direction changes
    // Expected: Motor should handle direction changes smoothly
    // Pass criteria: No mechanical issues during changes
    basic.showString("T5")

    for (let i = 0; i < 3; i++) {
        servo360.spinOneWay(testPin)
        basic.pause(500)
        servo360.spinOtherWay(testPin)
        basic.pause(500)
    }

    // Final stop
    servo360.turnOffMotor(testPin)
    basic.pause(1000)
})