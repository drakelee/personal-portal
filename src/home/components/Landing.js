import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <video autoPlay muted loop className={classes.landing}>
                <source src='landing.mp4' type='video/mp4'/>
            </video>
            <div className={classes.landingOverlay}/>
            <div className={classes.intro}>
                <Typography className={classes.introName}>
                    Drake Lee
                </Typography>
                <div className={classes.introTitlesContainer}>
                    <Typography className={classes.introTitlesFrontend}>
                        frontend
                    </Typography>
                    <Typography className={classes.introTitlesBackend}>
                        backend
                    </Typography>
                    <Typography className={classes.introTitlesFullStack}>
                        full stack
                    </Typography>
                </div>
                <div>
                    <Typography
                        align='right'
                        className={classes.summary}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => createStyles ({
    root: {
        height: '100vh',
        width: '100vw',
    },
    landing: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100vh',
        width: '100vw',
        objectFit: 'cover',
        zIndex: 0
    },
    landingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
        opacity: 0.7
    },
    intro: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        padding: 150,
        color: 'white',
        zIndex: 1
    },
    introName: {
        fontSize: 180,
        fontFamily: 'BitterBold, sans-serif'
    },
    introTitlesContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    introTitlesFrontend: {
        fontSize: 60,
        fontFamily: 'Canvas'
    },
    introTitlesBackend: {
        fontSize: 60,
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, monospace'
    },
    introTitlesFullStack: {
        fontSize: 60,
        fontFamily: 'Mightype'
    },
    summary: {
        fontSize: 50,
        marginTop: 100,
        align: 'right'
    }
}))

export default Landing