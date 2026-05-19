
import express from 'express'
import multer from 'multer'
import fs from 'fs'
import pdf from 'pdf-parse'
import cors from 'cors'
import OpenAI from 'openai'
import { Pool } from 'pg'

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({ dest: 'uploads/' })
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// 💾 PostgreSQL
const db = new Pool({
  connectionString: process.env.DATABASE_URL
})