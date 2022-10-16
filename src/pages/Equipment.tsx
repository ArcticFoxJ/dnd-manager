import { useEffect, useState } from 'react'
import Weapon from 'services/API/Enums/Weapon'
import Armor from 'services/API/Enums/Armor'
import Gear from 'services/API/Enums/Gear'
import EquipmentPack from 'services/API/Enums/EquipmentPack'
import { getEquipmentList, getEquipment } from 'services/API/apiService'
import { CircularProgress, Typography } from '@mui/material'
import { populateList } from 'services/helpers'

const Equipment = () => {
    const [equipment, setEquipment] = useState<(Weapon|Armor|Gear|EquipmentPack)[]>()

    useEffect(() => {
      populateList(getEquipmentList, getEquipment, setEquipment)
    }, [])
      
    return (
        <div>
          <Typography 
              variant="h1"
              color="text.primary"
              gutterBottom
          >
              Equipment
          </Typography>
          { 
              !equipment 
              ? <CircularProgress /> 
              : equipment?.map(data => 
                  <div key={data.index}>{data.name}</div>
              )
          }
        </div>
    )
}

export default Equipment
