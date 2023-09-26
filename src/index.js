import txt from './index.txt'
import * as math from './math'

const msg = "hello from a javascript file"
const sum = math.add(1, 1)

function sayHello() {
    console.log("Inline string:", msg)
    console.log("Imported text file: ", txt)
    console.log("Imported function output:", sum)
}

sayHello()
