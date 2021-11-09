import txt from './hello.txt'
import * as math from './math'

const msg = "hello from a javascript file"
const sum = math.add(1, 1)

function sayHello() {
    console.log("JS", msg)
    console.log("TXT", txt)
    console.log("Import", sum)
}

sayHello()
