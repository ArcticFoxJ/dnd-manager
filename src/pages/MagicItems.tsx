import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardContent, Grid, Typography } from '@mui/material'
import { getMagicItem, getMagicItemList } from 'services/API/apiService'
import MagicItem from 'services/API/Enums/MagicItem'
import { populateList } from 'services/helpers'
import PageProps from 'pages/PageProps'
import CenterSpinner from 'components/CenterSpinner'

const MagicItems = ({setTitle}: PageProps) => {

  useEffect(() => {
    setTitle("Magic Items")
  }, [])

  const [magicItems, setMagicItems] = useState<MagicItem[]>()
  
  useEffect(() => {
    populateList(getMagicItemList, getMagicItem, setMagicItems)
  }, [])

  return (
    <React.Fragment>
      { 
        !magicItems 
        ? <CenterSpinner />
        : <Grid container spacing={5} alignItems="flex-start">
          { magicItems?.map(data => 
            <Grid
              item
              key={data.index}
              xs={12}
              sm={6}
              md={4} 
              // style={{display: 'flex'}}
            >
              <Card >
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
                {
                  data.desc.map(description => 
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                    >
                      {description}
                    </Typography>  
                  )
                }
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      }
    </React.Fragment>
  )
}

export default MagicItems
