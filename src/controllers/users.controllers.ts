import { NextFunction, Request, Response } from "express";

/**
 * 
 */
const USERS = [
    {
        id: 1,
        username: "islom abdurakhmonov",
        password: "asdfqwer",
    },
    {
        id: 2,
        username: "islom abdurakhmonov",
        password: "asdfqwer",
    },
    {
        id: 3,
        username: "islom abdurakhmonov",
        password: "asdfqwer",
    },
]


export default class UsersController {
    /**
     * 
     * @param req
     * @param res 
     * @param next 
     * @returns 
     */
    async getAll(req: Request, res: Response, next: NextFunction) {
        const data = USERS;
        
        return res.send(JSON.stringify({ data }));
    }

    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     * @returns 
     */
    async getOne(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const data = USERS.find(( user ) => user.id === +id);

        return res.send(JSON.stringify({ data }));
    }
}