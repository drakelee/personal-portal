import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import MainEvent from '../../events/components/MainEvent'

function CalendarDayColumn({events = []}) {
    const classes = useStyles()
    const renderMainEvents = () => {
        return events.map(event => {
            return <MainEvent event={event} key={event.id}/>
        })}

    return (
        <div className={classes.root}>
            {renderMainEvents()}
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: `1440px`,
        width: `${100/7}%`,
        overflowY: 'scroll'
    }
})

export default CalendarDayColumn