import { useEffect, useState } from 'react'
import { CircularProgress, Typography } from '@mui/material'
import PageTitle from 'components/PageTitle'
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
      <PageTitle title="Classes" />
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
