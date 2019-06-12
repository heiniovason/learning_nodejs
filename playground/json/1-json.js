const fs = require('fs')

// Assign file contents to a buffer. What about file size?
const dataBuffer = fs.readFileSync('1-json.json')

// Parse buffer data to a string.
const dataJSON = dataBuffer.toString()

// Parse JSON string to a JSON object.
const user = JSON.parse(dataJSON)

// Modify user data.
user.name = 'Mowgli'
user.age = 69

// Parse JSON object to string.
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)




