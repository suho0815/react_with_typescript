import type { IUser } from "./User";
import { makeRandomUser } from "./User";
import * as C from './chance'
import * as I from './image'
import * as D from './date'

export type ICard = {
    uuid: string
    writer: IUser
    image: string
    title: string
    paragraphs: string
    dayMonthYearDate: string
    relativeDate: string | null
}

