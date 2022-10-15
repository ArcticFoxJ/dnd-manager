import { useEffect, useState } from 'react'
import Weapon from 'services/API/Enums/Weapon'
import Armor from 'services/API/Enums/Armor'
import Gear from 'services/API/Enums/Gear'
import EquipmentPack from 'services/API/Enums/EquipmentPack'
import { getEquipmentList, getEquipment } from 'services/API/apiService'
import { CircularProgress, Typography } from '@mui/material'

const Equipment = () => {
    const [equipment, setEquipment] = useState<(Weapon|Armor|Gear|EquipmentPack)[]>()

    useEffect(() => {
        const populateEquipment = async () => {
            getEquipmentList().then(data => {
              let list: (Weapon|Armor|Gear|EquipmentPack)[] = []
              let promises = data?.results.map(resource => {
                return getEquipment(resource.index).then(x => {
                  if(x) {
                    list.push(x)
                  }
                })
              }) || []
              Promise.all(promises).then(() =>
                setEquipment(list)
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
