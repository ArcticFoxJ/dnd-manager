import Equipment from "services/API/Enums/Equipment"
import APIReference from "services/API/Enums/APIReference";
import Damage from "services/API/Enums/Damage";

interface WeaponRange {
    /** The weapon's normal range in feet */
    normal: number
    /** The weapon's long range in feet */
    long: number
}

export default interface Weapon extends Equipment {
    /** The category of weapon this falls into */
    weapon_category: string

    /** Whether this is a Melee or Ranged weapon */
    weapon_range: string

    /** A combination of weapon_category and weapon_range */
    category_range: string

    range: WeaponRange

    damage: Damage

    two_handed_damage: Damage

    /** A list of the properties this weapon has. */
    properties: APIReference[]

    /** How much the equipment weighs */
    weight: number
}