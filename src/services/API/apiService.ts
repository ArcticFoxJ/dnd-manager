import { ClassData } from "services/API/Enums/Class"
import ResourceList from "services/API/Enums/ResourceList"
import Weapon from 'services/API/Enums/Weapon'
import Armor from 'services/API/Enums/Armor'
import Gear from 'services/API/Enums/Gear'
import EquipmentPack from 'services/API/Enums/EquipmentPack'

const BASE_URL = "https://www.dnd5eapi.co/api/"

export const getClassList = async (): Promise<ResourceList | undefined> => fetchData<ResourceList | undefined>('classes')
export const getAlignmentList = async (): Promise<ResourceList | undefined> => fetchData<ResourceList | undefined>('alignments')
export const getRaceList = async (): Promise<ResourceList| undefined> => fetchData<ResourceList | undefined>('races')
export const getEquipmentList = async (): Promise<ResourceList | undefined> => fetchData<ResourceList | undefined>('equipment')

export const getClass = async (index: string): Promise<ClassData | undefined> => fetchData<ClassData | undefined>(`classes/${index}`)
export const getEquipment = async (index: string): Promise<Weapon|Armor|Gear|EquipmentPack | undefined> => fetchData<Weapon|Armor|Gear|EquipmentPack | undefined>(`equipment/${index}`)

const fetchData = async <T>(endpoint: string): Promise<T | undefined> => {

    try {
        const response = await fetch(BASE_URL + endpoint);

        if(response.status === 200) { 
            return await response.json() 
        }
    }
    catch(e) {
        console.error(e)
    }
}