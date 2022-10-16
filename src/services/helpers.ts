import ResourceList from 'services/API/Enums/ResourceList'

export const populateList = async function <T>(
    getList: () => Promise<ResourceList | undefined>, 
    getItem: (index: string) => Promise<T | undefined>,
    setItems: (value: React.SetStateAction<T[] | undefined>) => void
) {
    getList().then(data => {
        let list: T[] = []
        let promises = data?.results.map(resource => {
        return getItem(resource.index).then(x => {
            if(x) {
            list.push(x)
            }
        })
        }) || []
        Promise.all(promises).then(() =>
        setItems(list)
        )
    })
}