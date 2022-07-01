import { Collection } from "./Collection";
import { CollectionStatus } from "./CollectionStatus";
import { User } from "./User";

export type Progress = {
    collection: Collection,
    user: User,
    score: number,
    status: CollectionStatus
}

export type ProgressPut = {
    collectionId: number,
    userId: number,
    score: number,
    status: CollectionStatus
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