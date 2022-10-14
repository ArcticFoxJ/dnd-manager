import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          dnd-manager
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>
            <Link className='nav-link' to='/character'>Character</Link>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
