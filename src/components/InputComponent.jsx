import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../theme/globalTheme';

export const InputComponent = ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ margin: 10 }}>{title}</Text>
      <TextInput {...rest} style={styles.input} />
    </View>
  )
}

