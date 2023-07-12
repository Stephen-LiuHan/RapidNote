import {Request, Response, NextFunction} from 'express';

export default function notImplemented(_: Request, res: Response, __: NextFunction) {
    res.status(501).json({ message: 'Not Implemented.' });
}
