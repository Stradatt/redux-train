import * as string_decoder from "string_decoder";

export interface IPost {
    id: number
    title: string
    body: string
}

export interface IPostItem {
    post: IPost
}