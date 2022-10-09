import React from 'react';
import { View, Text, Modal } from 'react-native';
import { styles } from '../theme/globalTheme';

export const ModalComponent = ({ children, visibility }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visibility}
      style={styles.modal}
    >
      <View style={styles.center}>
        <View style={styles.modalView}>
          {children}
        </View>
      </View>

    </Modal>
  )
}

