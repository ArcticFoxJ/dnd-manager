import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import { getMonster, getMonsterList } from 'services/API/apiService'
import Monster from 'services/API/Enums/Monster'
import { populateList } from 'services/helpers'
import PageProps from 'pages/PageProps'

const Monsters = ({setTitle}: PageProps) => {

  setTitle('Monsters')

  const [monsters, setMonsters] = useState<Monster[]>()

  useEffect(() => {
    populateList(getMonsterList, getMonster, setMonsters)
  }, [])
    
  return (
    <React.Fragment>
      { 
        !monsters 
        ? <CircularProgress /> 
        : monsters?.map(data => 
          <div key={data.index}>{data.name}</div>
        )
      }
    </React.Fragment>
  )
}

export default Monsters
