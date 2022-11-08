import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'

const Noticia = ({noticia}) => {
    const { urlToImage, url, title, description, source} = noticia
  return (
    <Grid 
        item
        md={6}
        lg={4}
    >
        <Card>
            {urlToImage && (
                <CardMedia 
                    component="img"
                    alt={`imagen de la noticia ${title}`}
                    image={urlToImage}
                    height={'250'}

                />
            )}
            <CardContent>
                <Typography variant='body1' color={'#005eb7'}>
                    {source.name}
                </Typography>
                <Typography variant='h5' component="div">
                    {title}
                </Typography>
                <Typography variant='body2' marginY={2}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link
                    href={url}
                    target="_blank"
                    variant='button'
                    color={"primary"}
                    width='100%'
                    padding={'5px 0'}
                    sx={{
                        textDecoration: 'none',
                        position: 'relative',
                        left: 10
                    }}
                >
                    Leer Noticia
                </Link>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default Noticia