const BASE_URL = "https://www.dnd5eapi.co/api/"

interface ResourceBase {
    index: string
    name: string
    url: string
}

export interface ResourceList {
    count: number
    results: ResourceBase[]
}

enum Type { "proficiencies", "equipment" }
enum OptionType { "reference", "counted_reference", "choice" }
enum OptionSetType { "options_array", "equipment_category" }

interface Equipment {
    equipment: ResourceBase
    quantity: number
}

interface Option {
    option_type: OptionType
    count?: number
    of?: ResourceBase //option type = counted reference
    choice?: OptionChoice //option type = choice
    item?: ResourceBase //option_type = reference
}

interface OptionChoice {
    desc: string
    choose: number
    type: Type
    from: {
        option_set_type: OptionSetType
        options?: Option[] //option_set_type = options_array
        equipment_category: ResourceBase[] //option_set_type = equipment_category
    }
}

interface MultiClassing {
    prerequisites: Scores[]
    proficiencies: ResourceBase[]
}

interface Scores {
    ability_score: ResourceBase
    minimum_score: number
}

interface Reference {
    name: string
    desc: string[]
}

interface Spellcasting {
    level: number,
    spellcasting_ability: ResourceBase,
    info: Reference[]
}

export interface ClassData extends ResourceBase {
    hit_die: number
	proficiency_choices: OptionChoice[]
	proficiencies: ResourceBase[]
	saving_throws: ResourceBase[]
	starting_equipment: Equipment[]
	starting_equipment_options: OptionChoice[]
	class_levels: string //url
	multi_classing: MultiClassing
	subclasses: ResourceBase[]
    spellcasting: Spellcasting
     spells: string //url
}

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