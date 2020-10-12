import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import {AppRouter} from './AppRouter'
import './controllers'

const app = express()
const router = AppRouter.getInstance()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({secret:'string'}))
app.use(router)

app.listen(3000, ()=> {
    console.log('Application listening on port 3000')
})