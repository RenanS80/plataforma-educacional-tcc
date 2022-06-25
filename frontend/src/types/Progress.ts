import { Collection } from "./Collection";
import { User } from "./User";

export type Progress = {
    collection: Collection,
    user: User,
    score: number,
    status: string
}

export type ProgressPage = {
    content: Progress[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}