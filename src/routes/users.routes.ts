import { Router } from 'express';
import UsersController from '../controllers/users.controllers';


export default class UsersRouter {
    /**
     *
     */
    public router: Router = Router();
    
    /**
     * 
     */
    public path: string = "/users";

    /**
     * 
     */
    private controller: UsersController; 

    /**
     * 
     */
    constructor () {
        this.controller = new UsersController()
        this.setup();
    }

    /**
     * 
     */
    setup() {
        this.router
            .get("/", this.controller.getAll)
            .get("/:id", this.controller.getOne)
    }
}