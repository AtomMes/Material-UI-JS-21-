import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 heading </Typography>{/*asumenq inch varianta, orinak es pahin h1, u tenc , sa hmi h1 tega brauzerum*/}
        <Typography variant='h2' component='div'>h2 heading </Typography>{/*ete uzum enq h2-i stylery vercni bayc h2 chexni componentum grum enq inch exni h2-i texy, orinak grel em div, hima sa brauzerum div-a bayc h2 i stylerna vren */}
        <Typography variant='h3' gutterBottom >h3 heading </Typography>{/*margina avelacnum bottomic */}
        <Typography variant='h4'  >h4 heading </Typography>
        <Typography variant='h5'>h5 heading </Typography>
        <Typography variant='h6'>h6 heading </Typography>

        <Typography variant='subtitle1'>subtitle 1</Typography>
        <Typography variant='subtitle2'>subtitle 2</Typography>


        <Typography variant='body1'>body 1</Typography>{/*es daje ete variant chgrenq sra nmana exnum, defaultna */}
        <Typography variant='body2'>body 2</Typography>
    </div>
  )
}
