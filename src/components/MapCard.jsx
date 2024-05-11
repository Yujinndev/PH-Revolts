import React from 'react'
import 'leaflet/dist/leaflet.css'
import { Icon, divIcon, point } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

// create custom icon
const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/128/9131/9131546.png',
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

const REVOLTS = [
  {
    place: 'Ilocos',
    leader: 'Diego Silang',
    title: '',
    content: '',
    geocode: [17.899512, 120.504222],
  },
]

// markers
const markers = [
  {
    geocode: [14.599512, 120.984222],
    popUp: 'Hello, I am pop up 1',
  },
  {
    geocode: [15.599512, 120.584222],
    popUp: 'Hello, I am pop up 2',
  },
  {
    geocode: [17.899512, 120.504222],
    popUp: '[Ilocos] In 1762, An uprising was founded by Diego Silang',
    icon: new Icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
      iconSize: [38, 38],
    }),
  },
]

const MapCard = () => {
  return (
    <MapContainer center={[11.599512, 122.584222]} zoom={5.75}>
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

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker, idx) => (
          <Marker
            key={idx}
            position={marker.geocode}
            icon={marker.icon ? marker.icon : customIcon}
            autoPanOnFocus={true}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default MapCard
