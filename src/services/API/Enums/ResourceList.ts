import APIReference from "services/API/Enums/APIReference"

export default interface ResourceList {
    count: number
    results: APIReference[]
}