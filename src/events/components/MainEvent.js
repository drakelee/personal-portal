import React, {Fragment, useState} from 'react'
import Divider from '@material-ui/core/Divider'
import {makeStyles} from '@material-ui/core/styles'

function MainEvent({event}) {
    const [isHover, setHover] = useState(false)
    const classes = useStyles({event})

    const renderSubEvents = () => {
        const {subEvents} = event
        return (
            <Fragment>
                {
                    subEvents && subEvents.map(subEvent => {
                        return (
                            <div className={classes.subEventsContainer} key={`${event.id}:${subEvent.title}`}>
                                <div className={classes.subEventRoot}>
                                    {subEvent.title}
                                </div>
                                <Divider/>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }

    const renderTitle = () => {
        return (
            <div className={classes.subEventRoot}>
                {event.title}
            </div>
        )
    }

    if (!event) return null
    return (
        <div
            className={classes.root}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {!isHover  && renderTitle()}
            {isHover && renderSubEvents()}
        </div>
    )
}

const getTop = event => {
    if (!event) return 0
    const startDate = new Date(event.startDate.split('[')[0])
    return (1440/1440) * ((startDate.getHours() * 60) + startDate.getMinutes())
}

const getHeight = event => {
    if (!event) return 0
    const endDate = new Date(event.endDate.split('[')[0])
    return (1440/1440) * ((endDate.getHours() * 60) + endDate.getMinutes())
}
const useStyles = makeStyles({
    root: props => ({
        position: 'absolute',
        top: `${getTop(props.event)}px`,
        height: `${getHeight(props.event) - getTop(props.event)}px`,
        width: '100%',
        backgroundColor: 'grey'
    }),
    subEventsContainer: {
        position: 'relative',
        animation: '1s $grow'
    },
    subEventRoot: {
        position: 'relative',
        fontSize: 'calc(12px + 2vmin)'
    },
    '@keyframes grow': {
        from: {
            height: '0px'
        },
        to: {
            height: '100%'
        }
    }
})
export default MainEvent