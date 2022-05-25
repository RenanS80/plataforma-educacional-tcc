import { Role } from "utils/auth";

export type UserInsert = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roles: Role[];
}