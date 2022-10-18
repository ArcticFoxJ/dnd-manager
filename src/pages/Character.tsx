import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import SelectList, { ListItem } from 'components/forms/SelectList'
import { getAlignmentList, getClassList, getRaceList } from 'services/API/apiService'
import ResourceList from 'services/API/Enums/ResourceList'
import PageProps from 'pages/PageProps'

interface CharacterData {
  classType: string
  alignment: string
  race: string
}

const Character = ({setTitle}: PageProps) => {

  useEffect(() => {
    setTitle('Character')
  }, [])

  const [classes, setClasses] = useState<ListItem[] | undefined>()
  const [alignments, setAlignments] = useState<ListItem[] | undefined>()
  const [races, setRaces] = useState<ListItem[] | undefined>()
  
  const [character, setCharacter] = useState<CharacterData>({
    classType: '',
    alignment: '',
    race: ''
  })

  const mergeCharacterProps = (newProps: any) => {
    setCharacter(c => ({
      ...c, 
      ...newProps
    }))
  }

  const mapResponseToSelect = (data: ResourceList | undefined): ListItem[] | undefined => {
    return data?.results?.map(c => new ListItem(c.index, c.name)) || undefined
  }

  useEffect(() => {
    const populateClasses = async () => {
      getClassList().then(data => setClasses(mapResponseToSelect(data)))
    }
    const populateAlignments = async () => {
      getAlignmentList().then(data => setAlignments(mapResponseToSelect(data)))
    }
    const populateRaces = async () => {
      getRaceList().then(data => setRaces(mapResponseToSelect(data)))
    }
    populateClasses()
    populateAlignments()
    populateRaces()
  }, [])

  const randomise = () => {
    const classKeys = classes?.map(x => x.key) as string[]
    mergeCharacterProps({classType: classKeys[Math.floor(Math.random()*classKeys?.length)]})
    
    const alignmentKeys = alignments?.map(x => x.key) as string[]
    mergeCharacterProps({alignment: alignmentKeys[Math.floor(Math.random()*alignmentKeys?.length)]})

    const raceKeys = races?.map(x => x.key) as string[]
    mergeCharacterProps({race: raceKeys[Math.floor(Math.random()*raceKeys?.length)]})
  }

  return (
    <React.Fragment>
      <div>
        <Button variant="contained" onClick={randomise}>Randomise</Button>
      </div>
      <Box component="div">
        <SelectList id='class-type' title='Class' required={true} value={character.classType} items={classes} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {mergeCharacterProps({classType: e.target.value})}} />
        <SelectList id='alignment' title='Alignment' required={true} value={character.alignment} items={alignments} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {mergeCharacterProps({alignment: e.target.value})}} />
        <SelectList id='race' title='Race' required={true} value={character.race} items={races} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {mergeCharacterProps({race: e.target.value})}} />
      </Box>
    </React.Fragment>
  )
}

export default Character
