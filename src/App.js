import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import EventSelector from "./components/EventSelector";
import FetchFailed from "./components/FetchFailed";
import MapMarkers from "./components/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(true);
  const [eventList, setEventList] = useState(['wildfires']);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [closedInfo, setClosedInfo] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };
    Promise.race([
      fetchEvents(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 20000)) // Wait for 20 seconds
    ]).catch(function fetchFailedHandler() {
      setFetchFailed(true);
      setLoading(false);
    })
  }, []);

  return (
    <div>
      <Header />
      {fetchFailed ? <FetchFailed /> :
        !loading ?
          <>
            <MapMarkers eventData={eventData} theme={theme} eventList={eventList} closedInfo={closedInfo}
              setClosedInfo={setClosedInfo} />
            <div className="actionmenu">
              <ThemeButton theme={theme} setTheme={setTheme} />
              <EventSelector eventList={eventList} setEventList={setEventList} />
            </div>
          </> : <Loader />
      }

    </div>
  );
}

export default App;
