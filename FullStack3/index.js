const http = require('http')

const app = http.createServer((request, respone) => {
    Response.writeHead(200, { 'Content-Type': 'text/plain'})
    Response.end('Hello World')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)