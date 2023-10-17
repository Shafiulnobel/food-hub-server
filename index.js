const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const categories = require('./api/categories.json')
const chefs = require('./api/chef.json')
const blogs = require('./api/blog.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/categories', (req, res) => {
  res.send(categories)
})
app.get('/chefs', (req, res) => {
  res.send(chefs)
})
app.get('/blogs', (req, res) => {
  res.send(blogs)
})
// app.get('/chefs/:id', (req, res) => {
//   const id = req.params.id;
//   const selectedChefs = chefs.find(n=>n.id===id)
//   res.send(selectedChefs)
// })
app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  const selectedChefs = chefs.find(n=>n.id===id)
  res.send(selectedChefs)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})