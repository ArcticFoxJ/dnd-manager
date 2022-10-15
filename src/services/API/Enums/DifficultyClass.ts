import APIReference from "services/API/Enums/APIReference"

export default interface DifficultyClass {
    /** Reference to the AbilityScore used for this DC */
    dc_type: APIReference

    /** Check must equal or exceed this value for success */
    dc_value: number

    /** How to modify damage on a successful check */
    /** Can be "none", "half", or "other" */
    success_type: string
}
