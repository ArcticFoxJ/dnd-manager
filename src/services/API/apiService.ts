import { ClassData } from "services/API/Enums/Class"
import ResourceList from "services/API/Enums/ResourceList"

const BASE_URL = "https://www.dnd5eapi.co/api/"

export const getClasses = async (): Promise<ResourceList | undefined> => fetchData<ResourceList | undefined>('classes')
export const getAlignments = async (): Promise<ResourceList | undefined> => fetchData<ResourceList | undefined>('alignments')
export const getRaces = async (): Promise<ResourceList| undefined> => fetchData<ResourceList | undefined>('races')

export const getClass = async (index: string): Promise<ClassData | undefined> => fetchData<ClassData | undefined>(`classes/${index}`)

const fetchData = async <T>(endpoint: string): Promise<T | undefined> => {

    try {
        const response = await fetch(BASE_URL + endpoint);

        if(response.status == 200) { 
            return await response.json() 
        }
    }
    catch(e) {
        console.error(e)
    }
}