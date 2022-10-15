import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ClassData, getClass, getClasses } from 'services/api'

const Classes = () => {

    const [classes, setClasses] = useState<ClassData[]>([])

    useEffect(() => {
        const populateClasses = async () => {
            getClasses().then(data => {
              let classList: ClassData[] = []
              let promises = data?.results.map(resource => {
                return getClass(resource.index).then(x => {
                  if(x) {
                    classList.push(x)
                  }
                })
              }) || []
              Promise.all(promises).then(() =>
                setClasses(classList)
              )
            }
        )}

        populateClasses() 
      }, [])

  return (
    <div>
      <Typography 
          variant="h1"
          color="text.primary"
          gutterBottom>
        Classes
      </Typography>
      {classes?.map(classData => 
        <div key={classData.index}>{classData.name}</div>
      )}
    </div>
  )
}

export default Classes
