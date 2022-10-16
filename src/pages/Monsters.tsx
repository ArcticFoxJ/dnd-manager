import { CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
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
