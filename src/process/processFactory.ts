import { UserDTO } from "../types/userTypes";

export default class ProcessFactory {
    user: UserDTO
    constructor(userDTO) {
        this.user = userDTO
    }
}