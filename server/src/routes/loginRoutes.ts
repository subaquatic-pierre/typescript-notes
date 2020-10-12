import {Router, Request, Response, NextFunction} from 'express';

const router = Router()

const authHandler = (req:Request, res:Response, next: NextFunction): void => {
    if (req.session && req.session.loggedIn){
        next()
        return;
    }
    else {
        res.status(403)
        res.send(`
            <h2>Permission denied, you are not allowed to view this page</h2>
        `)
    }
}

router.get('/', (req: Request, res: Response) => {
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
})

router.post('/login', (req: Request, res: Response) => {
    const {userName, password} = req.body
    if (userName && password && userName === 'user' && password === 'password') {
        req.session = {loggedIn: true}
    } else {
        res.send(`
        <h3>Incorrect login credentials</h3>
        `)
    }
    res.redirect('/')
})

router.get('/logout', (req:Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        req.session = null
    }
    res.redirect('/')
})

router.get('/protected', authHandler, (req:Request, res: Response) => {
    res.send(`
    <h2>Welcome to your protected route!</h2>
    `)
})

export {router}
