import { User } from "./User";
import { UserValidator } from "./UserValidator";
import { UserRepository } from "./UserRepository";

const userValidator = new UserValidator();
const userRepository = new UserRepository();

const user = getUser();
addUser(user);

// MARK: - Functions

function addUser(user: User): void {
    if (validateUser(user)) {
        userRepository.addUser(user);
        console.log("User added successfully");
    } else {
        console.log("User not added");
    }
}

function validateUser(user: User): boolean {
    return userValidator.validate(user);
}

function getUser(): User {
    let user = new User();
    user.username = "user";
    user.password = "password";
    return user;
}
