import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios'
import CalendarDayColumn from './CalendarDayColumn'

function CalendarWeek() {
    const [events, setEvents] = useState([])
    const classes = useStyles()

    useEffect(() => {
        async function getEvents() {
            const response = await axios.get('http://localhost:8080/events')
            setEvents(response.data)
        }
        getEvents()
    }, [])

    const renderDayColumns = events => {
        return [0, 1, 2, 3, 4, 5, 6].map(index => {
            return <CalendarDayColumn events={events} key={index} />
        })
    }

    return (
        <div className={classes.root}>
            {renderDayColumns(events)}
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '80%'
    }
})

export default CalendarWeek