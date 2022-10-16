import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import PageTitle from 'components/PageTitle'
import Weapon from 'services/API/Enums/Weapon'
import Armor from 'services/API/Enums/Armor'
import Gear from 'services/API/Enums/Gear'
import EquipmentPack from 'services/API/Enums/EquipmentPack'
import { getEquipmentList, getEquipment } from 'services/API/apiService'
import { populateList } from 'services/helpers'

const Equipment = () => {
    const [equipment, setEquipment] = useState<(Weapon|Armor|Gear|EquipmentPack)[]>()

    useEffect(() => {
      populateList(getEquipmentList, getEquipment, setEquipment)
    }, [])
      
    return (
      <div>
        <PageTitle title="Equipment" />
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
