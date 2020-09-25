/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace PMS7003 {
    /**
     * Declare buffer and set RX, TX pin
     */
    //% block="Connect Sensor to RX %rxpin| TX %txpin"
    //% inlineInputMode=inline
    export function ConnectSensor(rxpin: SerialPin, txpin: SerialPin): void {
        serial.redirect(
            rxpin,
            txpin,
            BaudRate.BaudRate9600)
    }

    /**
     * Read data from sensor and save to buffer
     */
    //% block="Start Character"
    export function StartCharacter () {
        return "BM";
    }

    /**
     * Read data from sensor and save to buffer
     */
    //% block="Read Data"
    export function ReadData (): void {
        bufr = serial.readBuffer(32)
    }

    /**
     * Calculate Checksum and return true if data is valid
     */
    //% block="Checksum OK?"
    export function CalcChecksum (): boolean {
	let temp = 0
        for (let index = 0; index <= 29; index++) {
        temp += bufr[index]
    	}
	return temp == Calc16bitNumber(30);
}

    /**
     * Read PM1 data
     */
    //% block="PM1"
    export function DataPM1 () {
	return NumberTostring(Calc16bitNumber(10),4);
}

    /**
     * Read PM2.5 data
     */
    //% block="PM2.5"
    export function DataPM25 () {
	return NumberTostring(Calc16bitNumber(12),4);
}

    /**
     * Read PM10 data
     */
    //% block="PM10"
    export function DataPM10 () {
	return NumberTostring(Calc16bitNumber(14),4);
}

let bufr = pins.createBuffer(32);

function Calc16bitNumber (num: number) {
    return bufr[num] * 256 + bufr[num + 1];
}

function NumberTostring (number: number, length: number) {
    return ("" + number + "         ").substr(0, length)
}
	
}
