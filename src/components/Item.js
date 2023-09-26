import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Item = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }}>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia 
        component='img'
        height='194'
        image='https://i.namu.wiki/i/Pn_SbIvBaOZAdd1-t5o3MkfxQB4XJ9LlmYz0nYOwLxd1r-CCes7mC5aO6MrnU3a864HpJUjuCZtdcZpL2uX0lxmje_sO9ZK5NoHra3GKjIPn4yPNoSV-xR0oL9RDJANmMdgbMCQd8WgEYgRWemLwNA.webp'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Item