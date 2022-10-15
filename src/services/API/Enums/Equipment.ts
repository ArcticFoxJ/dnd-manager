import APIReference from "services/API/Enums/APIReference"
import Cost from "services/API/Enums/Cost"

export default interface Equipment extends APIReference{
    /** Description of the resource */
    desc: string[]
    
    equipment_category: APIReference
    
    cost: Cost
}