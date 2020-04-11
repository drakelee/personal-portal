import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'

function Skills() {
    const classes = useStyles()
    return (
        <div className={classes.root}>

        </div>
    )
}

const useStyles = makeStyles(theme => createStyles({
    root: {
        width: '100vw',
        height: 800,
        backgroundColor: 'white'
    }
}))

export default Skills