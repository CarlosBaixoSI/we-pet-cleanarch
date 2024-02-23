import { UnauthorizedException } from "@application/common/exceptions";
import jwt, { JwtPayload } from 'jsonwebtoken';
export async function validateToken(token?: string): Promise<JwtPayload> {
    if(!token) {
        return new UnauthorizedException('No token provided');
    }

    try{
        const payload = await jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        return payload;

    } catch(error: any) {
        throw new UnauthorizedException(error.message);
    }
}