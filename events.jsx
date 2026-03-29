// i added the imports form line 2 and 4
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

function Events() {
    // stating variables with imported libraries 
  const [events, setEvents] = useState([]); //all events from api
  const [filteredEvents, setFilteredEvents] = useState([]); //allows events to be retreived via filter
  const [categories, setCategories] = useState([]); //list of offered categories from NASA
  const [selectedCategory, setSelectedCategory] = useState("all"); //shows current filter
  const [loading, setLoading] = useState(true); // shows user map data is loading

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() { //grab categories
      try { //try to do the following
        const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/categories");
        const data = await res.json();
        setCategories(data.categories || []); //saves categories in state
      } catch (error) {
        console.error("Error fetching categories:", error); //commuicates if there is an error to user
      }
    }
    fetchCategories();
  }, []);

  // Grab events
  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events"); //link to where events are
        const data = await res.json();
        setEvents(data.events || []); //save data of events
        setFilteredEvents(data.events || []); // load filtered events
      } catch (error) {
        console.error("Error fetching events:", error); //error handling
      } finally {
        setLoading(false); //hides the loading process
      }
    }
    fetchEvents();
  }, []);

  // Filter events when category changes 
// i wrote lines 47-57
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredEvents(events); //shows all events (not filtered yet)
    } else { 
      setFilteredEvents(
        events.filter(
          (event) => event.categories?.[0]?.id === selectedCategory //if statement for if user has selected a category
        )
      );
    }
  }, [selectedCategory, events]);

  // Leaflet marker icon
  // sets size of map created from leaflet
  const eventIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
      // i wrote this little part
    <div style={{ height: "100%", width: "100%" }}> 
      <h1>🌍 NASA Natural Events</h1>

      {/* Filter dropdown */}
      <label>
        Filter by category:{" "}
        <select
          value={selectedCategory} //chnages events based on category
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((cat) => ( //cat is a placeholder name for the leaflet to wait for a filter
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>
      </label>

      {loading ? (
        <p>Loading events...</p>
      ) : (
        <>
          {/* Full-width, tall map */}
          <MapContainer
            center={[20, 0]}
            zoom={2} // add the option for user to zoom out of map
            style={{
              height: "70vh", // take most of screen height
              width: "100%",  // stretch across screen
              margin: "20px 0",
            }}
          >
            <TileLayer
            // code for mapping (chatgpt)
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {filteredEvents.map((event) => {
              const coords = event.geometry?.[0]?.coordinates;
              if (!coords) return null;
              const [lng, lat] = coords; //coordinates of events
              return (
                <Marker key={event.id} position={[lat, lng]} icon={eventIcon}>
                  <Popup>
                    <strong>{event.title}</strong> <br />
                    {event.categories?.[0]?.title || "Unknown"} <br />
                    {event.geometry?.[0]?.date} 
                  </Popup>
                </Marker> //markers are for each indivdual event
              );
            })}
          </MapContainer>

          {/* Event list below map for users to read if they wish*/}
          <ul>
            {filteredEvents.map((event) => (
              <li key={event.id}>
                <strong>{event.title}</strong> —{" "} 
                {event.categories?.[0]?.title || "Unknown"}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Events; //export events to app.jsx

