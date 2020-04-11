import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Carousel from './Carousel'

function HomeCarousel() {
    const classes = useStyles()

    return (
        <Carousel
            className={classes.carousel}
            items={items}
        />
    )
}

const items = [
    {
        backgroundColor: 'white'
    },
    {
        backgroundColor: 'blue'
    },
    {
        backgroundColor: 'grey'
    },
    {
        backgroundColor: 'red'
    }
]

const useStyles = makeStyles({
    carousel: {
        height: '60vh',
        width: '80vw',
        minWidth: 900
    }
})

export default HomeCarousel