import {Request, Response} from 'express'
import {get, controller} from './decorators';

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
}