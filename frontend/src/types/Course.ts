import { Category } from "./Category"
import { Resource } from "./Resource";
import { Tag } from "./Tag"

export type Course = {
    id: number,
    title: string,
    description: string,
    link: string,
    platform: string,
    image: string,
    score: number,
    count: number,
    registrationDate: string;
    category: Category,
    tags: Tag[],
    resources: Resource[]
}