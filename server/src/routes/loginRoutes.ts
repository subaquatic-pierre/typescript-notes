import {Router, Request, Response} from 'express';

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello, world!</h1>')
})

router.get('/login', (req: Request, res: Response) => {
    res.send(`
    <div>
    <h2>Name</h2>
        <form method='POST'>
            <div>
                <label for="name">Name (4 to 8 characters):</label>
                <input type="text" id="name" name="name" >
            </div>
            <div>
                <label for="password">Password</label>
                <input name="password" id="password" type="password" placeholder="Enter your password">
            </div>
                <button>Submit</button>
        </form>
    </div>
    `)
})

router.post('/login', (req: Request, res: Response) => {
    console.log(req.body)
    res.redirect('/')
})

export {router}
