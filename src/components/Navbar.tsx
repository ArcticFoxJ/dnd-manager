import { AppBar, Button, Link, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react';


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
            <Link color='inherit' href='/character'>Character</Link>
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
              <Link  color='inherit' href='/classes'>Classes</Link>
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
