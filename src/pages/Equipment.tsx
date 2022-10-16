import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Weapon from 'services/API/Enums/Weapon'
import Armor from 'services/API/Enums/Armor'
import Gear from 'services/API/Enums/Gear'
import EquipmentPack from 'services/API/Enums/EquipmentPack'
import { getEquipmentList, getEquipment } from 'services/API/apiService'
import { populateList } from 'services/helpers'
import PageProps from 'pages/PageProps'

const Equipment = ({setTitle}: PageProps) => {

  setTitle('Equipment')

  const [equipment, setEquipment] = useState<(Weapon|Armor|Gear|EquipmentPack)[]>()

  useEffect(() => {
    populateList(getEquipmentList, getEquipment, setEquipment)
  }, [])
    
  return (
    <React.Fragment>
      { 
        !equipment 
        ? <CircularProgress /> 
        : equipment?.map(data => 
            <div key={data.index}>{data.name}</div>
        )
      }
    </React.Fragment>
  )
}

export default Equipment
