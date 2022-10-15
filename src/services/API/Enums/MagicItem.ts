import APIReference from "services/API/Enums/APIReference"

export default interface MagicItem extends APIReference {
    /** Description of the resource */
    desc: string[]

    equipment_category: APIReference

    rarity: {
        /** The rarity of the item */
        name: string
    }

    variants: APIReference[]

    /** Whether this is a variant or not */
    variant: boolean
}