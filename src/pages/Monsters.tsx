import { CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getMonster, getMonsterList } from 'services/API/apiService'
import Monster from 'services/API/Enums/Monster'

const Monsters = () => {
    const [monsters, setMonsters] = useState<Monster[]>()

    useEffect(() => {
        const populateEquipment = async () => {
            getMonsterList().then(data => {
              let list: Monster[] = []
              let promises = data?.results.map(resource => {
                return getMonster(resource.index).then(x => {
                  if(x) {
                    list.push(x)
                  }
                })
              }) || []
              Promise.all(promises).then(() =>
              setMonsters(list)
              )
            })
        }
    
        populateEquipment() 
      }, [])
      
    return (
        <div>
            <Typography 
                variant="h1"
                color="text.primary"
                gutterBottom
            >
                Monsters
            </Typography>
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
