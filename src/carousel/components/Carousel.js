import React, {useCallback} from 'react'
import classnames from 'classnames'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import CarouselPane from './CarouselPane'

function Carousel({items, className}) {
    const classes = useStyles()

    const CarouselPanes = useCallback(() => {
        return items.map((item, index) => {
            return (
                <CarouselPane
                    key={index}
                    item={item}
                    className={classnames(
                        classes.carouselPane
                    )}
                />
            )
        })
    }, [items, classes])

    return (
        <div
            className={classnames(
                classes.root,
                className
            )}
        >
            <CarouselPanes/>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    carouselPane: {
        width: '10vw',
        height: '100%',
        color: 'black',
        flexGrow: 1,
        '&:hover': {
            width: '100vw'
        }
    }
})

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
    className: PropTypes.string
}

export default Carousel