import { CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getClass, getClassList } from 'services/API/apiService'
import { ClassData } from 'services/API/Enums/Class'

const Classes = () => {

    const [classes, setClasses] = useState<ClassData[]>()

    useEffect(() => {
        const populateClasses = async () => {
            getClassList().then(data => {
              let list: ClassData[] = []
              let promises = data?.results.map(resource => {
                return getClass(resource.index).then(x => {
                  if(x) {
                    list.push(x)
                  }
                })
              }) || []
              Promise.all(promises).then(() =>
                setClasses(list)
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
          gutterBottom
        >
        Classes
      </Typography>
      { 
        !classes 
        ? <CircularProgress /> 
        : classes?.map(data => 
            <div key={data.index}>{data.name}</div>
        )
      }
    </div>
  )
}

export default Classes
