import { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function validateAuth(username?: string, password?: string) {
    return function (req: Request, res: Response, next: NextFunction): void {
        if (req.session && req.session.loggedIn === true) {
            next()
            return;
        }
        res.status(403).send('<h2>Permission denied, you are not allowed to view this page</h2>')
        return;        
    }
}

export function auth() {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKeys.auth, true, target, key)
    }
}
