/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/


import { Response  } from 'express';

export function catchError(error: unknown, res: Response, ) {
    try {
        console.error(error);
        res.statusCode = 400;
        if (typeof error !== 'object') {
            res.json(error);
            return;
        }
        res.json({ message: error });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}