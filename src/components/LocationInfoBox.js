import { Icon } from '@iconify/react';
import closeIcon from '@iconify/icons-carbon/close';
const LocationInfoBox = ({ info, setClosedInfo }) => {
  const updateCloseInfo = setClosedInfo;
  return (
    <div className="location-info">
      <Icon icon={closeIcon} className="test" onClick={() =>{updateCloseInfo(true)}}></Icon>
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
