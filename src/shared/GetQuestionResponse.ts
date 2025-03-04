import { QuestionType, VariableType } from "./types"

export default interface GetQuestionResponse {
    id: string
    prompt: string
    pointValue: number
    owner: string
    isArchived: false
    isDeleted: false
    type: QuestionType
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
    }[]
}