import express, { Application } from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import UserController from "../controllers/user.controller";



export class AuthRoutes extends CommonRoutesConfig {

    constructor(app: Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/api/auth/signup').post(UserController.createUser);

        return this.app;
    }
}