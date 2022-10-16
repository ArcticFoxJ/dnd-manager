import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import PageTitle from 'components/PageTitle'
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
      <PageTitle title="Magic Items" />
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
