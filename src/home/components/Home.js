import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import Landing from './Landing'
import Skills from './Skills'

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Landing/>
            <Skills/>
        </div>
    )
}

const useStyles = makeStyles(theme => createStyles({
    root: {
        height: 500,
        width: '100vw',
        backgroundColor: 'white'
    }
}))

export default Home;