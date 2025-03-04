import { VariableType } from "./types"

export default interface CreateVariableRequest {
    questionId: string
    type: VariableType
    min: number
    max: number
    step: number
    label: string
}