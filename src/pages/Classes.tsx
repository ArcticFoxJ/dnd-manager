import { useEffect, useState } from 'react'
import { ClassData, getClass, getClasses } from 'services/api'

const Classes = () => {

    const [classes, setClasses] = useState<ClassData[]>([])

    useEffect(() => {
        setClasses([])

        const populateClasses = async () => {
            getClasses().then(data => {
                data?.results.map(x => x.index)
                .forEach((x) => {
                    getClass(x).then((x: ClassData | undefined) => {
                        if(x) {
                            setClasses(current => [...current, x])
                        }
                    })
                })
            }
        )}

        populateClasses() 
      }, [])

  return (
    <div>
      {classes?.map(classData => 
        <div key={classData.index}>{classData.name}</div>
      )}
    </div>
  )
}

export default Classes
