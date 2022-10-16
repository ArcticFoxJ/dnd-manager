import { CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getMagicItem, getMagicItemList } from 'services/API/apiService'
import MagicItem from 'services/API/Enums/MagicItem'
import { populateList } from 'services/helpers'

const MagicItems = () => {
  const [magicItems, setMagicItems] = useState<MagicItem[]>()
  
  useEffect(() => {
    populateList(getMagicItemList, getMagicItem, setMagicItems)
  }, [])

  return (
    <div>
      <Typography 
          variant="h1"
          color="text.primary"
          gutterBottom
      >
          Magic Items
      </Typography>
      { 
          !magicItems 
          ? <CircularProgress /> 
          : magicItems?.map(data => 
              <div key={data.index}>{data.name}</div>
          )
      }
    </div>
  )
}

export default MagicItems
