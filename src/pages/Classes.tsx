import { CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getClass, getClassList } from 'services/API/apiService'
import { ClassData } from 'services/API/Enums/Class'
import { populateList } from 'services/helpers'

const Classes = () => {

    const [classes, setClasses] = useState<ClassData[]>()

    useEffect(() => {
      populateList(getClassList, getClass, setClasses)
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
