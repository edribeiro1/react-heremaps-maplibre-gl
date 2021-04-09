import {useEffect, useRef} from 'react';
import {Map, NavigationControl, GeolocateControl} from 'maplibre-gl';
import vetorial from './maps-styles/vetorial.json';
import hybrid from './maps-styles/hybrid.json';
import hybrid_maptiler from './maps-styles/hybrid-maptiler.json';

function App () {
  const mapContainerRef = useRef ();
  // const mapTilerKey = "get_your_own_OpIi9ZULNHzrESv6T2vL"

  useEffect (() => {
    if (mapContainerRef.current != null) {
      const map = new Map ({
        container: mapContainerRef.current,
        center: [-77.517893, -6.614297],
        zoom: 2,
        dragRotate: false,
        // `https://assets.vector.hereapi.com/styles/berlin/base/mapbox/tilezen?apikey=LF62UDMv0QGJMH6Z_YScIaHJ1CxCyTiBYFpPzNxZtzI`
        // `https://vector.hereapi.com/v2/vectortiles/base/mc?apikey=LF62UDMv0QGJMH6Z_YScIaHJ1CxCyTiBYFpPzNxZtzI`
        style: hybrid,
      });

      map.addControl (new NavigationControl (), 'top-left');
      map.scrollZoom.setWheelZoomRate(1);
    }
  });

  return (
    <div

      ref={mapContainerRef}
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: "100%"
      }}
    />
  );
}

export default App;
