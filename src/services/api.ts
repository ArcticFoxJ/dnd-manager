const BASE_URL = "https://www.dnd5eapi.co/api/"

interface ResourceListItem {
    index: string
    name: string
    url: string
}

export interface ResourceList {
    count: number
    results: ResourceListItem[]
}

export const getClasses = async (): Promise<ResourceList| undefined> => fetchData<ResourceList| undefined>('classes')
export const getAlignments = async (): Promise<ResourceList| undefined> => fetchData<ResourceList| undefined>('alignments')
export const getRaces = async (): Promise<ResourceList| undefined> => fetchData<ResourceList| undefined>('races')

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