export interface CustomRequest extends Request {
    tokenPayload: {
        role: string;
    };
}