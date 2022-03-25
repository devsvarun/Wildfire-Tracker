import React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify/icons-ic/round-volcano';
import fireIcon from '@iconify/icons-mdi/fire-alert';

const EventSelector = ({ eventList, setEventList }) => {
    const updateEventList = setEventList;
    const [fireSelect, setFireSelect] = useState(true);
    const [volcSelect, setVolcSelect] = useState(false);

    function fireHandler() {
        if (eventList.includes('wildfires')) {
            updateEventList(eventList => eventList.filter(e => e !== 'wildfires'));
            setFireSelect(false);
        }
        else {
            updateEventList(prevList => [...prevList, 'wildfires']);
            setFireSelect(true);
        }
    }
    function volcanoHandler() {
        if (eventList.includes('volcanoes')) {
            updateEventList(eventList => eventList.filter(e => e !== 'volcanoes'));
            setVolcSelect(false);
        }
        else {
            updateEventList(prevList => [...prevList, 'volcanoes']);
            setVolcSelect(true);
        }
    }
    return (
        <div className="EventSelector">
            <div className={fireSelect? 'Selector-Red' : 'DeSelector'} onClick={fireHandler}>
                <Icon icon={fireIcon} className="location-icon L-Icon-Red" />
            </div>
            <div className={volcSelect ? 'Selector-Green': 'DeSelector'} onClick={volcanoHandler}>
                <Icon icon={volcanoIcon} className="location-icon L-Icon-Green" />
            </div>
        </div>
    )
}

export default EventSelector