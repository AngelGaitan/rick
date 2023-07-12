
const LocationInfo = ({location}) => {
    
  return (
    <article className="location">
      <h2 className="location-title">{location?.name}</h2>
      <ul className="location-info">
        <li className="location-list"><span className="location-span">Type:</span> <span>{location?.type}</span></li>
        <li className="location-list"><span className="location-span">Dimesion:</span> <span>{location?.dimension}</span></li>
        <li className="location-list"><span className="location-span">Population</span> <span>{location?.residents.length}</span></li>
      </ul>
     </article>
  )
}

export default LocationInfo
