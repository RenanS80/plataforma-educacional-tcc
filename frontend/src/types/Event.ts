import { Category } from "./Category"
import { Resource } from "./Resource";
import { Tag } from "./Tag"

export type Event = {
    id: number,
    title: string,
    description: string,
    link: string,
    platform: string,
    image: string,
    score: number,
    count: number,
    startDate: string;
    endDate: string;
    category: Category,
    tags: Tag[],
    resources: Resource[]
}