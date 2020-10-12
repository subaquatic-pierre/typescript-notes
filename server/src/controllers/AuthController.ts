import { Request, Response} from 'express'
import {get, post, controller, auth, bodyValidator} from './decorators';


/**
 * @class Controller class for all auth routes
 */

@controller()
class LoginController {    
    @get('/login')
    getLogin(req: Request, res: Response): void {
        res.send(`
        <div>
        <h2>Name</h2>
            <form method='POST'>
                <div>
                    <label for="userName">Name (4 to 8 characters):</label>
                    <input type="text" id="userName" name="userName" >
                </div>
                <div>
                    <label for="password">Password</label>
                    <input name="password" id="password" type="password" placeholder="Enter your password">
                </div>
                    <button>Submit</button>
            </form>
        </div>
        `)
    }

    @post('/login')
    @bodyValidator('password', 'userName')
    postLogin(req: Request, res: Response) {
        const {userName, password} = req.body
        if (userName === 'user' && password === 'password') {
            req.session = {loggedIn: true}
        } else {
            res.send(`
            <h3>Incorrect login credentials</h3>
            `)
        }
        res.redirect('/')
    }

    @get('/logout')
    getLogout(req:Request, res: Response) {
        if (req.session && req.session.loggedIn) {
            req.session = null
        }
        res.redirect('/')
    }    
}