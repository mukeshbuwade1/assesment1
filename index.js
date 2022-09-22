let http = require("http")

function fun(request, response){
    response.end("__sabash munnna bahut badiya__")
}

const server = http.createServer(fun)

server.listen(3000,()=>{
    console.log('hey mukesh -to chaliye suru karte hai.........')
})