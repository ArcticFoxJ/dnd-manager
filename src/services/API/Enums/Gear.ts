import APIReference from "services/API/Enums/APIReference"
import Equipment from "services/API/Enums/Equipment"

export default interface Gear extends Equipment {
    gear_category: APIReference

    /** How much the equipment weighs */
    weight: number
}