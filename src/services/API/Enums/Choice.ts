import APIReference from "services/API/Enums/APIReference"
import Damage from "services/API/Enums/Damage"

enum OptionType { "reference", "counted_reference", "choice" }


interface Option {
    /** Type of option; determines other attributes */
    option_type: OptionType
}

interface OptionType1 extends Option { //option_type = reference
    item: APIReference 
}

interface OptionType2 extends Option { //option_type = 
    /** The name of the action */
    action_name: string

    /** The number of times this action can be repeated if */
    count: number
    
    /** For attack options that can be melee, ranged, abilities, or thrown */
    type: 'melee' | 'ranged' | 'abilities' | 'thrown'
}

interface OptionType3 extends Option { //option_type =
    items: Option[]
}

interface OptionType4 extends Option { //option_type = choice
    choice: Choice
}

interface OptionType5 extends Option { //option_type =
    string: string
}

interface OptionType6 extends Option { //option_type = 
    /** A description of the ideal */
    desc: string

    /** A list of alignments of those who might follow the ideal */
    alignments: APIReference[]
}

interface OptionType7 extends Option { //option_type = counted reference
    count: number
    of: APIReference
}

interface OptionType8 extends Option { //option_type = 
    
    ability_score: APIReference

    /** The minimum score required to satisfy the prerequisite */
    minimum_score: number
}

interface OptionType9 extends Option { //option_type = 
    
    ability_score: APIReference

    /** The bonus being applied to the ability score */
    bonus: number
}

interface DC {
    dc_type: APIReference

    /** Value to beat */
    dc_value: number

    /** Result of a successful save. Can be "none", "half", or "other" */
    success_type: string
}

interface OptionType10 extends Option { //option_type = 
    
    /** Name of the breath */
    name: string
    dc: DC
    damage: Damage[]
}

interface OptionType11 extends Option { //option_type = 
    damage_type: APIReference
    /** Damage expressed in dice (e.g. "13d6"). */
    damage_dice: string
    /** Information regarding the damage */
    notes: string
}

enum Type { "proficiencies", "equipment" }
enum OptionSetType { "options_array", "equipment_category" }

interface OptionSet {
    /** Type of option set; determines other attributes */
    option_set_type: OptionSetType
}

interface OptionsArray extends OptionSet { //option_set_type = options_array
    /** Array of options to choose from */
    options?: OptionType1[] | 
                OptionType2[] | 
                OptionType3[] | 
                OptionType4[] | 
                OptionType5[] | 
                OptionType6[] | 
                OptionType7[] | 
                OptionType8[] | 
                OptionType9[] | 
                OptionType10[] | 
                OptionType11[]
}

interface EquipmentCategory extends OptionSet { //option_set_type = equipment_category
    equipment_category: APIReference[] 
}

interface ResourceList extends OptionSet { //option_set_type = 
    /** A reference (by URL) to a collection in the database */
    resource_list?: string
}

export default interface Choice {

    /** Description of the choice to be made */
    desc: string

    /** Number of items to pick from the list */
    choose: number

    /** Type of the resources to choose from */
    type: Type

    from: OptionsArray | EquipmentCategory | ResourceList
}