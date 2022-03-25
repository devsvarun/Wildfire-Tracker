import { Icon } from '@iconify/react'
import volcanoIcon from '@iconify/icons-ic/round-volcano'
import fireIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({element, onClick }) => {
    let locationIcon = null;
    let cName = "";
    switch (element) {
        case 'wildfires':
            locationIcon = fireIcon;
            cName = "L-Icon-Red";
            break;
        case 'volcanoes':
            locationIcon = volcanoIcon;
            cName = "L-Icon-Green";
            break;
        default:
            locationIcon = fireIcon;
    }
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className={`location-icon ${cName}`} />
        </div>
    )
}

export default LocationMarker
