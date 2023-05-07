const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
const users =[
    {id: 1, name: 'Mohibul', email:'mohibul@gmail.com'},
    {id: 2, name: 'Aowal', email:'takla@gmail.com'},
    {id: 3, name: 'Masum', email:'masum@gmail.com'},
    {id: 4, name: 'Shojib', email:'kipta@gmail.com'}
]
app.get('/', (req, res) => {
  res.send('User management server is running!')
})



app.get('/users', (req, res) => {
  res.send(users)
})


app.post('/users', (req, res) =>{
    console.log('Backend Hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})