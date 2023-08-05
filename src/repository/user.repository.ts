import { CreateUserDto } from "../dto/user.dto";
import User, { IUserModel } from "../models/user.model";


// save to db
export class UserRepository {

    constructor(public userModel: IUserModel) {

    }

    async createUser(createUserDto: CreateUserDto) {
        const user = new this.userModel(createUserDto);
        return user.save();
    }

}

export const userRepository = new UserRepository(User);