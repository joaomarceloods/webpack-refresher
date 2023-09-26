import txt from './index.txt'
import * as math from './math'
import envelope1 from './double-import-experiment/envelope1'
import envelope2 from './double-import-experiment/envelope2'

const msg = "hello from a javascript file"
const sum = math.add(1, 1)

function sayHello() {
    console.log("Envelope 1:", envelope1.content)
    console.log("Envelope 2:", envelope2.content)
    console.log("Inline string:", msg)
    console.log("Imported text file: ", txt)
    console.log("Imported function output:", sum)
}

sayHello()
