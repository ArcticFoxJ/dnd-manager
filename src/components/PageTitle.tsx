import { Typography } from '@mui/material'

interface PageTitleProps {
    title: string
}

const PageTitle = ({title}: PageTitleProps) => {
  return (
    <Typography 
        variant="h2"
        color="text.primary"
        gutterBottom
    >
        {title}
    </Typography>
  )
}

export default PageTitle
