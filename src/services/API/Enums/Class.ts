import APIReference from "services/API/Enums/APIReference"
import MultiClassing from "services/API/Enums/MultiClassing"
import Spellcasting from "services/API/Enums/Spellcasting"
import Choice from "services/API/Enums/Choice"

interface ClassEquipment {
    equipment: APIReference
    quantity: number
}

export interface ClassData extends APIReference {
    /** Hit die of the class. (ex: 12 == 1d12) */
    hit_die: number
    
    /** URL of the level resource for the class */
	class_levels: string 

	multi_classing: MultiClassing

    spellcasting: Spellcasting
    
    /** URL of the spell resource list for the class */
    spells: string

    /** List of equipment and their quantities all players of the class start with */
	starting_equipment: ClassEquipment[]

    /** List of choices of starting equipment */
	starting_equipment_options: Choice[]

    /** List of choices of starting proficiencies */
	proficiency_choices: Choice[]

    /** List of starting proficiencies for all new characters of this class */
	proficiencies: APIReference[]

    /** Saving throws the class is proficient in */
	saving_throws: APIReference[]

    /** List of all possible subclasses this class can specialize in */
	subclasses: APIReference[]
}