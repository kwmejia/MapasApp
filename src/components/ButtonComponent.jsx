import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/globalTheme';
import Ionicons from '@expo/vector-icons/Ionicons';

export const ButtonComponent = ({ text, action, color, iconName }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={color ? { ...styles.btn, marginBottom: 20, backgroundColor: color } : { ...styles.btn, marginBottom: 20 }}
      onPress={action}
    >
      {iconName && <Ionicons name={iconName} size={20} color="white" style={{ marginHorizontal: 4 }} />}
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  )
}
