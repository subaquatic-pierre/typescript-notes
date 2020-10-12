import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import {router} from './routes/loginRoutes'
import {router as routerController} from './controllers/decorators' 

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({secret:'string'}))
app.use(router)
app.use(routerController)

app.listen(3000, ()=> {
    console.log('Application listening on port 3000')
})