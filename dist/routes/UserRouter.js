"use strict";
const express_1 = require("express");
const User = require("../model/User");
class UserRouter {
    /**
     * Initialize the UserRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all users.
     */
    getAll(req, res, next) {
        User.find((err, Users) => {
            if (err) {
                res.json({ info: 'error during find Users', error: err });
            }
            ;
            res.json({ info: 'Users found successfully', data: Users });
        });
    }
    /**
     * Save user
     */
    save(req, res, next) {
        var newUser = new User(req.body);
        newUser.save((err) => {
            if (err) {
                res.json({ info: 'error during User create', error: err });
            }
            res.json({ info: 'User saved successfully', data: newUser });
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
exports.UserRouter = UserRouter;
// Create the UserRouter, and export its configured Express.Router
const userRoutes = new UserRouter();
userRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = userRoutes.router;
