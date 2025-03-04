import { QuestionType, VariableType } from "./types"

export default interface GetActivityResponse {
    id: string
    prompt: string
    variables: {
        id: string
        type: VariableType
        min: number
        max: number
        step: number
        label: string
    }[]
    conditions: {
        id: string
        expression: string
        isCorrect: boolean
        feedback: string
    }
    pointValue: number
    owner: string
    type: QuestionType
    isArchived: boolean
    isDeleted: boolean
}