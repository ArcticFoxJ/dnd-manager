import APIReference from "services/API/Enums/APIReference"
import DifficultyClass from "services/API/Enums/DifficultyClass"
import Damage from "services/API/Enums/Damage"
import Action from "services/API/Enums/Action"
import Senses from "services/API/Enums/Senses"

interface Speed {
    /** All creatures have a walking speed, simply called the speed. Creatures that have no form of ground-based locomotion have a walking speed of 0 feet */
    walk: string

    /** A monster that has a burrowing speed can use that speed to move through sand, earth, mud, or ice. A monster can’t burrow through solid rock unless it has a special trait that allows it to */
    burrow: string

    /** A monster that has a climbing speed can use all or part of its movement to move on vertical surfaces. The monster doesn’t need to spend extra movement to climb */
    climb: string

    /** A monster that has a flying speed can use all or part of its movement to fly */
    fly: string

    /** A monster that has a swimming speed doesn’t need to spend extra movement to swim */
    swim: string
}

interface Proficiencies {
    value: number
    proficiency: APIReference
}

interface Spell {
    name: string
    level: number
    url: string
    usage: Usage
}

interface SpecialAbilitySpellcasting {
    ability: APIReference
    dc: number
    modifier: number
    components_required: string[]
    school: string
    slots: any
    spells: Spell[]
}

interface Usage {
    /** Allowed: at will┃per day┃recharge after rest┃recharge on roll */
    type: string //could be enum?
    rest_types: string[]
    times: number
}

interface SpecialAbility {
    name: string
    desc: string
    attack_bonus: number
    /** Ability Check associated with a particular action */
    dc: DifficultyClass
    /** Damage type and dice associated with a particular attack */
    damage: Damage
    spellcasting: SpecialAbilitySpellcasting
    usage: Usage
}

export default interface Monster extends APIReference {

    desc: string[]

    /** A monster's ability to charm or intimidate a player */
    charisma: number

    /** How sturdy a monster is */
    constitution: number

    /** The monster's ability for swift movement or stealth */
    dexterity: number

    /** The monster's ability to outsmart a player */
    intelligence: number

    /** How hard a monster can hit a player */
    strength: number

    /** A monster's ability to ascertain the player's plan */
    wisdom: number

    /** The image url of the monster */
    image: string

    /** The image url of the monster */
    size: string //could be enum

    /** The type of monster */
    type: string

    /** The sub-category of a monster used for classification of monsters */
    subtype: string

    /** A creature's general moral and personal attitudes */
    alignments: string //could be enum

    /** The difficulty for a player to successfully deal damage to a monster */
    armor_class: number

    /** The hit points of a monster determine how much damage it is able to take before it can be defeated */
    hit_points: number

    /** The hit die of a monster can be used to make a version of the same monster whose hit points are determined by the roll of the die. For example: A monster with 2d6 would have its hit */
    hit_dice: string

    /** The roll for determining a monster's hit points, which consists of the hit dice (e.g. 18d10) and the modifier determined by its Constitution (e.g. +36). For example, 18d10+36 */
    hit_points_roll: string

    /** A list of actions that are available to the monster to take during combat */
    /** Action available to a Monster in addition to the standard creature actions */
    actions: Action[]

    /** A list of legendary actions that are available to the monster to take during combat */
    /** Action available to a Monster in addition to the standard creature actions */
    legendary_actions: Action[]

    /** A monster's challenge rating is a guideline number that says when a monster becomes an appropriate challenge against the party's average level. For example. A group of 4 players with */
    challenge_rating: number

    /** A list of conditions that a monster is immune to */
    condition_immunities: APIReference[]

    /** A list of damage types that a monster will take double damage from */
    damage_immunities: string[]

    /** A list of damage types that a monster will take half damage from */
    damage_resistances: string[]

    /** A list of damage types that a monster will take double damage from */
    damage_vulnerabilities: string[]

    /** List of other related monster entries that are of the same form. Only applicable to Lycanthropes that have multiple forms */
    forms: APIReference[]

    /** The languages a monster is able to speak */
    languages: string

    /** A list of proficiencies of a monster */
    proficiencies: Proficiencies[]

    /** A list of reactions that is available to the monster to take during combat */
    /** Action available to a Monster in addition to the standard creature actions */
    reactions: Action[]

    /** Monsters typically have a passive perception but they might also have other senses to detect players */
    senses: Senses

    /** A list of the monster's special abilities. */
    special_abilities: SpecialAbility[]

    /** Speed for a monster determines how fast it can move per turn */
    speed: Speed

    /** The number of experience points (XP) a monster is worth is based on its challenge rating */
    xp: number 
}