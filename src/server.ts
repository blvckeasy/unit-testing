import Express, { Router, Request, Response, NextFunction } from "express";
import UsersRouter from "./routes/users.routes";
import UsersController from "./controllers/users.controllers";

interface IServerOptions {
	logging?: boolean;
}

export default class Server {
	/**
	 *
	 */
	public app = Express();

	/**
	 *
	 */
	private options?: IServerOptions;

	/**
	 *
	 */
	protected PORT: number = 3000;

	/**
	 *
	 */
	private usersRouter!: UsersRouter;

	/**
	 *
	 * @param options
	 */
	constructor(options: IServerOptions) {
		this.options = options;
        this.usersRouter = new UsersRouter();

		this.usersRouter.setup()
		this.app.use("/users", this.usersRouter.router)
	}

	/**
	 *
	 */
	setupMiddlewares() {
        // console.log(this.usersRouter.router.stack[0].route.stack[0].handle + "")
		this.usersRouter.setup();
		console.log("nimadur");
		this.app.use("/users", (req, res) => {
			res.send("nimadur");
		});
	}

	/**
	 *
	 */
	setupRoutes() {}

	/**
	 *
	 */
	errorHandler() {}

	/**
	 *
	 */
	listen() {
		this.app.listen(this.PORT, () => {
			if (this.options?.logging) {
				console.log("server is listening on *" + this.PORT);
			}
		});
	}
}
