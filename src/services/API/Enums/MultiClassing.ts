import APIReference from "services/API/Enums/APIReference"
import Prerequisite from "services/API/Enums/Prerequisite"
import Choice from "services/API/Enums/Choice"

export default interface MultiClassing {
    /** List of prerequisites that must be met */
    prerequisites: Prerequisite[]

    /** List of choices of prerequisites to meet for */
    prerequisite_options: Choice

    /** List of proficiencies available when multiclassing */
    proficiencies: APIReference[]
    
    /** List of choices of proficiencies that are given when multiclassing */
    proficiency_choices: Choice
}