import React from 'react'
import 'leaflet/dist/leaflet.css'
import { Icon, divIcon, point } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { useNavigate } from 'react-router-dom'

// create custom icon
const redIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/128/9131/9131546.png',
  iconSize: [38, 38],
})

const blackIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
  iconSize: [38, 38],
})

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: point(33, 33, true),
  })
}

const MapCard = ({ items }) => {
  const navigate = useNavigate()

  return (
    <MapContainer center={[11.599512, 122.084222]} zoom={5.75}>
      <TileLayer
        attribution="Google Maps"
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        // url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        // minZoom={5.75}
        maxZoom={20}
        minNativeZoom={5}
        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
      />

      {/* <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      > */}
      {items.map((item, idx) => (
        <Marker
          key={idx}
          position={item.geocodes}
          icon={item.icon ? blackIcon : redIcon}
          autoPanOnFocus={true}
          eventHandlers={{
            click: () => {
              navigate(`/${item.href ? item.href : ''}`)
            },
          }}
        >
          <Popup>
            <b>{item.place}</b> - {item.title}
          </Popup>
        </Marker>
      ))}
      {/* </MarkerClusterGroup> */}
    </MapContainer>
  )
}

export default MapCard
