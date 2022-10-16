import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import { getClass, getClassList } from 'services/API/apiService'
import { ClassData } from 'services/API/Enums/Class'
import { populateList } from 'services/helpers'
import PageProps from 'pages/PageProps'

const Classes = ({setTitle}: PageProps) => {

  setTitle('Classes')

  const [classes, setClasses] = useState<ClassData[]>()

  useEffect(() => {
    populateList(getClassList, getClass, setClasses)
  }, [])

  return (
    <React.Fragment>
      { 
        !classes 
        ? <CircularProgress /> 
        : classes?.map(data => 
          <div key={data.index}>{data.name}</div>
        )
      }
    </React.Fragment>
  )
}

export default Classes
