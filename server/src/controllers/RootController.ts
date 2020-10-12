import {Request, Response} from 'express';
import {AppRouter} from '../AppRouter';
import { auth, controller, get } from './decorators';

const router = AppRouter.getInstance()

@controller()
class RootController {
    
    @get('/')
    getRoot(req: Request, res: Response) {
        if (req.session && req.session.loggedIn){
            res.send(`
                <h2>Hello User, you are logged in</h2>
                <a href='/logout'><h3>Logout</h3></a>
            `)
        }
        else {
            res.send(`
            <h2>You are not logged in</h2>
            <a href='/login'><h3>Login</h3></a>
            `)
        }
    }

    @get('/protected')
    @auth()
    getProtected(req:Request, res: Response) {
        res.send(`
        <h2>Welcome to your protected route!</h2>
        `)
    }
}
