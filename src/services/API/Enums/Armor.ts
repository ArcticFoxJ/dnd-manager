import Equipment from "services/API/Enums/Equipment"

export default interface Armor extends Equipment {
    /** The category of armor this falls into */
    armor_category: string
    
    /** Details on how to calculate armor class */
    armor_class: any

    /** Minimum STR required to use this armor */
    str_minimum: number

    /** Whether the armor gives disadvantage for Stealth */
    stealth_disadvantage: boolean

    /** How much the equipment weighs */
    weight: number
}