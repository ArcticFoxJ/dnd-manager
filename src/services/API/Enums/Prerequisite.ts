import APIReference from "services/API/Enums/APIReference"

export default interface Prerequisite {
    ability_score: APIReference

    /** Minimum score to meet the prerequisite */
    minimum_score: number
}