import APIReference from "services/API/Enums/APIReference"

export default interface Damage {
    /** Pattern: ^\d+d\d+(\+\d+)?$ */
    damage_dice: string
    damage_type: APIReference
}