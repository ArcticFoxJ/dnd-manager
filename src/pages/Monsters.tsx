import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import PageTitle from 'components/PageTitle'
import { getMonster, getMonsterList } from 'services/API/apiService'
import Monster from 'services/API/Enums/Monster'
import { populateList } from 'services/helpers'

const Monsters = () => {
  const [monsters, setMonsters] = useState<Monster[]>()

  useEffect(() => {
    populateList(getMonsterList, getMonster, setMonsters)
  }, [])
    
  return (
    <div>
      <PageTitle title="Monsters" />
      { 
        !monsters 
        ? <CircularProgress /> 
        : monsters?.map(data => 
          <div key={data.index}>{data.name}</div>
        )
      }
    </div>
  )
}

export default Monsters
