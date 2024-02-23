import { Request, Response, NextFunction } from 'express';
import { validateToken } from '@application/services/tokenValidation/validateToken';
import { JwtPayload} from 'jsonwebtoken';
import { UnauthorizedException } from '@application/common/exceptions';
import { ParamsDictionary } from 'express-serve-static-core';

const auth = async function (req: Request, res: Response, next: any) {
    interface CustomRequest extends Request {
        tokenPayload: JwtPayload;
    }
    
        if(!req.path.includes('signin') && !req.path.includes('signup')) {
        try {
                const token = req.headers.authorization;
                const payload: JwtPayload = await validateToken(token);

                
                (req as CustomRequest)['tokenPayload'] = payload;
                next();
        } catch (e: any) {
            if (e.opts?.title === 'invalid_token') {
                next(
                    new UnauthorizedException()
                );
            } else {
                next(e);
            }
        }
    } else {
        next();
    };
}

    export default auth;
