import { CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getMagicItem, getMagicItemList } from 'services/API/apiService'
import MagicItem from 'services/API/Enums/MagicItem'

const MagicItems = () => {
  const [magicItems, setMagicItems] = useState<MagicItem[]>()
  
  useEffect(() => {
    const populateEquipment = async () => {
        getMagicItemList().then(data => {
          let list: MagicItem[] = []
          let promises = data?.results.map(resource => {
            return getMagicItem(resource.index).then(x => {
              if(x) {
                list.push(x)
              }
            })
          }) || []
          Promise.all(promises).then(() =>
          setMagicItems(list)
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
