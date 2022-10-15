import Equipment from "services/API/Enums/Equipment"
import APIReference from "services/API/Enums/APIReference"

export default interface EquipmentPack extends Equipment {
    gear_category: APIReference

    /** The list of adventuring gear in the pack */
    contents: APIReference[]
}