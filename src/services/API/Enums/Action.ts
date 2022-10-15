import DifficultyClass from "services/API/Enums/DifficultyClass"
import Damage from "services/API/Enums/Damage"
import Choice from "services/API/Enums/Choice"


enum ActionType {
    Melee = 'melee',
    Ranged = "ranged",
    Ability = "ability",
    Magic = "magic"
}

interface ActionInfo {
    action_name: string
    count: number
    type: ActionType
}

interface Attack {
    name: string
    /** Ability Check associated with a particular action */
    dc: DifficultyClass
    /** Damage type and dice associated with a particular attack */
    damage: Damage
}

export default interface Action {
    name: string
    desc: string
    action_options: Choice
    actions: ActionInfo[]
    options: Choice
    multiattack_type: string
    attack_bonus: number
    /** Ability Check associated with a particular action */
    dc: DifficultyClass
    attacks: Attack[]
    /** Damage type and dice associated with a particular attack */
    damage: Damage
}