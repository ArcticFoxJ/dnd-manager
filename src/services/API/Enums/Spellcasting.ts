import APIReference from 'services/API/Enums/APIReference'

interface Reference {
    /** Feature name */
    name: string
    /** Feature description */
    desc: string[]
}

export default interface Spellcasting {
    /** Level at which the class can start using its spellcasting abilities */
    level: number,

    /** Reference to the AbilityScore used for spellcasting by the class */
    spellcasting_ability: APIReference,
    
    /** Descriptions of the class' ability to cast spells */
    info: Reference[]
}