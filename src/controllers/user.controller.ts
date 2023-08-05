import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";
import { CreateUserDto } from "../dto/user.dto";


// Interceptor
class UserController {

    async createUser(req: Request, res: Response, next: NextFunction) {

        const { email, username, password } = req.body;

        const result = await userService.createUser({
            email,
            username,
            password,
        } as CreateUserDto);

        return res.status(200).send(result);

    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;

        const result = "User updated successfully";

        return result;

    }

}


export default new UserController();