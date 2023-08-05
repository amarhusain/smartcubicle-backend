import { UserRepository, userRepository } from "../repository/user.repository";
import { CreateUserDto } from "../dto/user.dto";


// Business Logic
export class UserService {

    constructor(public userRepository: UserRepository) {

    }

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.userRepository.createUser(createUserDto);
        return user;
    }

}

export const userService = new UserService(userRepository);