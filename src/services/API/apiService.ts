import { ClassData } from "services/API/Enums/Class"
import ResourceList from "services/API/Enums/ResourceList"
import Weapon from 'services/API/Enums/Weapon'
import Armor from 'services/API/Enums/Armor'
import Gear from 'services/API/Enums/Gear'
import EquipmentPack from 'services/API/Enums/EquipmentPack'
import MagicItem from 'services/API/Enums/MagicItem'
import Monster from 'services/API/Enums/Monster'

const BASE_URL = "https://www.dnd5eapi.co/api/"

export const getClassList = async () => fetchData<ResourceList | undefined>('classes')
export const getAlignmentList = async () => fetchData<ResourceList | undefined>('alignments')
export const getRaceList = async () => fetchData<ResourceList | undefined>('races')
export const getEquipmentList = async () => fetchData<ResourceList | undefined>('equipment')
export const getMagicItemList = async () => fetchData<ResourceList | undefined>('magic-items')
export const getMonsterList = async () => fetchData<ResourceList | undefined>('monsters')

export const getClass = async (index: string) => fetchData<ClassData | undefined>(`classes/${index}`)
export const getEquipment = async (index: string) => fetchData<Weapon|Armor|Gear|EquipmentPack | undefined>(`equipment/${index}`)
export const getMagicItem = async (index: string) => fetchData<MagicItem | undefined>(`magic-items/${index}`)
export const getMonster = async (index: string) => fetchData<Monster | undefined>(`monsters/${index}`)

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