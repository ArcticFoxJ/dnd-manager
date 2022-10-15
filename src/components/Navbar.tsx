import { AppBar, Button, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          dnd-manager
        </Typography>
        <Stack direction='row' spacing={2}> 
          <Button color='inherit'>
            <Link to='/character'>Character</Link> {/* TODO: Get template color? */}
          </Button>
          <Button
            color='inherit'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Lists
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem color='inherit'>            
              <Link to='/classes'>Classes</Link> {/* TODO: Get template color? */}
            </MenuItem>
            <MenuItem color='inherit'>            
              <Link to='/equipment'>Equipment</Link> {/* TODO: Get template color? */}
            </MenuItem>
            <MenuItem color='inherit'>            
              <Link to='/magic-items'>Magic Items</Link> {/* TODO: Get template color? */}
            </MenuItem>
            <MenuItem color='inherit'>            
              <Link to='/monsters'>Monsters</Link> {/* TODO: Get template color? */}
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
