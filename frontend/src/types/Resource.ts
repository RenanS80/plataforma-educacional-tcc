import { Tag } from "./Tag"

export type Resource = {
    id: number,
    title: string,
    description: string,
    link: string,
    registrationDate: string,
    tags: Tag[]
}