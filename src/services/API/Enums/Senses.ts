export default interface Senses {
    /** The monster's passive perception (wisdom) score */
    passive_perception: number
    
    /** A monster with blindsight can perceive its surroundings without relying on sight, within a specific radius */
    blindsight: string
    
    /** A monster with darkvision can see in the dark within a specific radius */
    darkvision: string
    
    /** A monster with tremorsense can detect and pinpoint the origin of vibrations within a specific radius, provided that the monster and the source of the vibrations are in contact with the */
    tremorsense: string
    
    /** A monster with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving */
    truesight: string
}