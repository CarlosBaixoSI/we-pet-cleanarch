import { UnauthorizedException } from '@application/common/exceptions';
import { CustomRequest } from '@application/common/interfaces/customRequest/ICustomRequest';
import { Request, Response, NextFunction } from 'express';


const permit = function (allowedRoles: Array<string>) {
    return async function (req: any, res: Response, next: NextFunction) {
        const payload = req.tokenPayload;
        if (payload.roles.some((role: any) => allowedRoles.includes(role.name))){
            next();
        } else {
            next(
                new UnauthorizedException('Insufficient permissions')
            );
        }
    };
};
export default permit;
