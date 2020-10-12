import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import {router as loginRouter} from './routes/loginRoutes'
import {router as routerController} from './controllers/decorators'
import './controllers/LoginController'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({secret:'string'}))
app.use(loginRouter)
app.use(routerController)

app.listen(3000, ()=> {
    console.log('Application listening on port 3000')
})