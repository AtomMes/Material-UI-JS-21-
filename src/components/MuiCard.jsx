import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>{/*paperi nman bana, cartochkaya sarqum */}
        <CardMedia //cartMediana, nkary eli
          component="img"
          height="300"
          image='https://cdn.shopify.com/s/files/1/0568/0286/9411/products/HelloGoodTimes_530x@2x.jpg?v=1623756600'//nkar
          alt="image"
        />
        <CardContent>{/*contentna, meji gracnery ev ayln */}
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil esse
            unde enim dolorem?
          </Typography>
        </CardContent>
        <CardActions>{/*actionnerna, aysinqn knopkeqy */}
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
