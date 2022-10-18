import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardContent, Grid, Typography, Box } from '@mui/material'
import { getMagicItem, getMagicItemList } from 'services/API/apiService'
import MagicItem from 'services/API/Enums/MagicItem'
import { populateList } from 'services/helpers'
import PageProps from 'pages/PageProps'
import CenterSpinner from 'components/CenterSpinner'
import SelectList, { ListItem } from 'components/forms/SelectList'

const MagicItems = ({setTitle}: PageProps) => {

  useEffect(() => {
    setTitle("Magic Items")
  }, [])

  const [magicItems, setMagicItems] = useState<MagicItem[]>()

  const [rarityFilterOptions, setRarityFilterOptions] = useState<ListItem[]>()
  const [rarityFilter, setRarityFilter] = useState<string>('')

  const [categoryFilterOptions, setCategoryFilterOptions] = useState<ListItem[]>()
  const [categoryFilter, setCategoryFilter] = useState<string>('')

  useEffect(() => {
    const setFilterOptions = (items: MagicItem[]) => {
      setRarityFilterOptions(
        [...new Set(items?.map(item => item.rarity.name))]
        .map(rarity => { return new ListItem(rarity, rarity) })
        .sort((x, y) => x.value.localeCompare(y.value))
      )
    }
    const setOtherFilterOptions = (items: MagicItem[]) => {
      setCategoryFilterOptions(
        [...new Set(items?.map(item => item.equipment_category.name))]
        .map(category => { return new ListItem(category, category) })
        .sort((x, y) => x.value.localeCompare(y.value))
      )
    }
    populateList(getMagicItemList, getMagicItem, setMagicItems, (items) => {setFilterOptions(items); setOtherFilterOptions(items)})
  }, [])

  return (
    <React.Fragment>
      { !magicItems 
        ? <CenterSpinner />
        : <div>
            <Box mb={3} >
              <SelectList id="rarity-select" title="Rarity" value={rarityFilter} items={rarityFilterOptions} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setRarityFilter(e.target.value)}} />
              <SelectList id="category-select" title="Category" value={categoryFilter} items={categoryFilterOptions} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setCategoryFilter(e.target.value)}} />
            </Box>
            <Grid container spacing={5} alignItems="flex-start">
              { magicItems?.filter(item => !rarityFilter || (item.rarity.name == rarityFilter))
              .filter(item => !categoryFilter || (item.equipment_category.name == categoryFilter))
              .map(data => 
              <Grid item key={data.index} xs={12} sm={6} md={4}> {/* style={{display: 'flex'}}  */}
                <Card>
                  <CardHeader
                    title={data.name}
                    subheader={data.rarity.name + ' - ' + data.equipment_category.name + (data.variant ? ' - variant' : '')}
                    titleTypographyProps={{ 
                      align: 'center' ,
                      color: (theme) => theme.palette.info.contrastText 
                    }}
                    subheaderTypographyProps={{ 
                      align: 'center' ,
                      color: (theme) => theme.palette.info.contrastText 
                    }}
                    sx={{ 
                      backgroundColor: (theme) => theme.palette.info.main 
                    }}
                  />
                  <CardContent>
                    {data.desc.map((description, i) => 
                      <Typography key={data.index + "-desc-" + i} variant="body1" color="text.primary" gutterBottom >
                        {description}
                      </Typography>  
                    )}
                  </CardContent>
                </Card>
              </Grid>
              )}
            </Grid>
        </div>
      }
    </React.Fragment>
  )
}

export default MagicItems
