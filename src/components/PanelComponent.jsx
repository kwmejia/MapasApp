import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../theme/globalTheme';

export const PanelComponent = ({ onPressLeft, textLeft, togglePointsFilter, pointsFilter }) => {
  return (
    <View style={styles.panel}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn}
        onPress={onPressLeft}
      >
        <Ionicons name="list-outline" size={20} color="white" />
        <Text style={{ ...styles.textBtn, marginHorizontal: 5 }}>{textLeft}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn}
        onPress={togglePointsFilter}
      >
        <Ionicons name={pointsFilter ? "eye-off-outline" : "eye-outline"} size={20} color="white" />
        <Text style={{ ...styles.textBtn, marginHorizontal: 5 }}>{pointsFilter ? 'Ocultar' : 'Mostar'}</Text>
      </TouchableOpacity>

    </View>
  )
}

