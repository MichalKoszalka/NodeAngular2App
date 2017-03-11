import {Router, Request, Response, NextFunction} from 'express';
import * as User from '../model/User';

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
    User.find((err, Users) => {
        if (err) {
            res.json({info: 'error during find Users', error: err});
        };
        res.json({info: 'Users found successfully', data: Users});
    });
  }

/**
 * Save user
 */
  public save(req: Request, res: Response, next: NextFunction) {
      var newUser = new User(req.body);
      newUser.save((err)=>{
        if (err){
        res.json({info: 'error during User create', error: err});
        }
        res.json({info: 'User saved successfully', data: newUser}); 
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