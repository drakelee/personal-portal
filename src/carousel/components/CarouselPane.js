import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {makeStyles} from '@material-ui/core/styles'

function CarouselPane({className, ...props}) {
    const classes = useStyles(props)

    return (
        <div
            className={classnames(
                classes.root,
                className
            )}
        >
        </div>
    )
}

const useStyles = makeStyles({
    root: props => ({
        backgroundColor: props.item.backgroundColor
    })
})

CarouselPane.propTypes = {
    item: PropTypes.object
}

export default CarouselPane