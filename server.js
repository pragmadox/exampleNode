const App = require('express')()
const logger = require('morgan')
const infoDisplayType = logger('dev')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const fs = require('fs')

//Middleware resides here
App.use(infoDisplayType)
App.use(jsonParser)

App.get('/', (req, res) => {
  res.send('<h1>This Is A Thing</h1>')
})

App.get('/exampleRoute', (req, res) => {
  res.send('<p>Here is some example text.<p>')
})

App.get('/about', (req, res) => {
  res.send({
    name: "Jay Price", location:"01023"
  })
})

App.post('/', (req, res)=> {
  console.log(req)
  fs.writeFileSync('exampleText.json', JSON.stringify(req.body),  'utf8')
  res.send('The data finished sending.')
})


App.listen(8080, function(error){
  if(error){
    console.log('Encountered problem starting the server.', error)
  }
  else{
    console.log('Successfully connected to server on port 8080')
  }
})
