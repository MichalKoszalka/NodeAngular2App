import {Router, Request, Response, NextFunction} from 'express';
import {User, IUser} from '../model/user';

export class UserRouter {
  router: Router

  /**
   * Initialize the UserRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all users.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    User.find((err, users) => {
        if (err) {
            res.json(err);
        };
        res.json(users);
    });
  }

/**
 * Save user
 */
  public save(req: Request, res: Response, next: NextFunction) {
      var newUser = new User(req.body);
      newUser.save((err)=>{
        if (err){
        res.json(err);
        }
        res.json(newUser); 
      });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.post('/', this.save);
  }

}

// Create the UserRouter, and export its configured Express.Router
const userRouter = new UserRouter().router;

export default userRouter;