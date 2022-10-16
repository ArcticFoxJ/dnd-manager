import { Box, Typography } from '@mui/material'

interface PageTitleProps {
    title: string
}

const PageTitle = ({title}: PageTitleProps) => {
  return (
    <Typography 
      variant="h2"
      align='center'
      sx={{ 
        backgroundColor: (theme) => theme.palette.secondary.main,
        color: (theme) => theme.palette.secondary.contrastText
      }}
      gutterBottom
    >
      <Box pt={2} pb={2}>
          {title}
      </Box>
    </Typography>
  )
}

export default PageTitle
