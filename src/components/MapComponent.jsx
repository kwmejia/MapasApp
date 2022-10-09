import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../theme/globalTheme';

export const MapComponent = ({ onLongPress, puntos, pointsFilter }) => {
  return (
    <MapView
      style={styles.map}
      onLongPress={onLongPress}
    >
      {pointsFilter && puntos.map(elm =>
        <Marker
          key={elm.name}
          coordinate={elm.coordinate}
          title={elm.name}
        />
      )}
    </MapView>
  )
}
