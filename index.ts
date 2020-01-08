import { Photon } from '@prisma/photon'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const photon = new Photon()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async function(req, res) {
  const users = await photon.users()
  console.log(`Request received`, users)
  res.send(JSON.stringify(users))
})

app.listen(3000, () => {
  console.log(`Running on 3000`)
})
