serial.onDataReceived("BM", function () {
    led.toggle(2, 2)
    PMS7003.ReadData()
    if (PMS7003.CalcChecksum()) {
        basic.showNumber(PMS7003.DataPM1())
    } else {
    	
    }
})
PMS7003.ConnectSensor(SerialPin.P1, SerialPin.P2)
basic.forever(function () {
	
})
