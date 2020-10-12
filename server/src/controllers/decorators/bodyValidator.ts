import {Request, Response, NextFunction} from 'express';
import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys';

export function validateBody(keys: string) {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body){
            res.status(403).send('The request does not have a body')
        }

        for(let key of keys) {
            if (key in req.body === false) {
                res.status(405).send(`The body did not contain a ${key} field`)
                return;
            }
        }
        next()
        return;
    }
}

export function bodyValidator(...keys: string[]) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKeys.validator, keys, target, key)
    }
}