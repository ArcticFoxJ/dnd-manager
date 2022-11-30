import { Card, CardHeader, CardContent, Typography, IconButton, IconButtonProps, styled, Collapse, Avatar } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

interface MagicItemListItemProps {
    index: string
    name: string
    rarity: string
    equipmentCategory: string
    variant: boolean
    description: string[]
}

const MagicItemListItem = ({index, name, rarity, equipmentCategory, variant, description}: MagicItemListItemProps) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  return (
    <Card>
      <CardHeader
        title={name}
        subheader={rarity + ' - ' + equipmentCategory + (variant ? ' - variant' : '')}
        action={
            <ExpandMore 
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>
        }
        avatar={
          <Avatar alt={equipmentCategory} src="./staff.jpg" />
          // <Avatar alt={equipmentCategory} src={require(`assets/images/items/${equipmentCategory == 'Ammunition' ? 'staff' : equipmentCategory.toLowerCase()}.jpg`)} />
        }
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
      {/* <CardContent>
        <img src="staff.jpg" />
        <img src={require("staff.jpg")} />
      </CardContent> */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {description.map((description, i) => 
          <Typography key={index + "-desc-" + i} variant="body1" color="text.primary" gutterBottom paragraph>
            {description}
          </Typography>  
        )}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default MagicItemListItem
