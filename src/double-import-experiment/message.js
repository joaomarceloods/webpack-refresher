const message = (() => {
  console.log("message.js is imported by two files, but this string here is logged just once in the output")
  return "a piece of text from message.js"
})()

export default message
