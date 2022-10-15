import { Box, Button } from '@mui/material'
import SelectList, { ListItem } from 'components/forms/SelectList'
import React, { useEffect, useState } from 'react'
import { getAlignments, getClasses, getRaces } from 'services/API/apiService'
import ResourceList from 'services/API/Enums/ResourceList'

const Character = () => {

  const [classes, setClasses] = useState<ListItem[] | undefined>()
  const [alignments, setAlignments] = useState<ListItem[] | undefined>()
  const [races, setRaces] = useState<ListItem[] | undefined>()
  
  const [classType, setClassType] = useState<string>('')
  const [alignment, setAlignment] = useState<string>('')
  const [race, setRace] = useState<string>('')

  const mapResponseToSelect = (data: ResourceList | undefined): ListItem[] | undefined => {
    return data?.results?.map(c => new ListItem(c.index, c.name)) || undefined
  }

  useEffect(() => {
    const populateClasses = async () => {
      getClasses().then(data => setClasses(mapResponseToSelect(data)))
    }
    const populateAlignments = async () => {
      getAlignments().then(data => setAlignments(mapResponseToSelect(data)))
    }
    const populateRaces = async () => {
      getRaces().then(data => setRaces(mapResponseToSelect(data)))
    }
    populateClasses()
    populateAlignments()
    populateRaces()
  }, [])

  const randomise = () => {
    const classKeys = classes?.map(x => x.key) as string[]
    setClassType(classKeys[Math.floor(Math.random()*classKeys?.length)])
    
    const alignmentKeys = alignments?.map(x => x.key) as string[]
    setAlignment(alignmentKeys[Math.floor(Math.random()*alignmentKeys?.length)])
    
    const raceKeys = races?.map(x => x.key) as string[]
    setRace(raceKeys[Math.floor(Math.random()*raceKeys?.length)])
  }

  return (
    <div>
      <h3>Classes</h3>
      <div>
        <Button variant="contained" onClick={randomise}>Randomise</Button>
      </div>
      <Box component="div">
        <SelectList id='class-type' title='Class' required={true} value={classType} items={classes} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setClassType(e.target.value)}} />
        <SelectList id='alignment' title='Alignment' required={true} value={alignment} items={alignments} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setAlignment(e.target.value)}} />
        <SelectList id='race' title='Race' required={true} value={race} items={races} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setRace(e.target.value)}} />
      </Box>
    </div>
  )
}

export default Character
