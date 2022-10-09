import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../theme/globalTheme';
import { ButtonComponent } from './ButtonComponent';
import { useFunctionsApp } from '../hooks/useFunctionsApp';

export const ListComponent = ({ puntos, closeModal, deletePoint }) => {



  return (
    <>
      <View style={styles.list}>
        {puntos.length < 1 && <Text style={styles.textNotFound}>Lista Vacia</Text>}
        <FlatList
          style={{ flex: 1 }}
          data={puntos.map(elm => elm.name)}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.item}>{item}</Text>
              <Ionicons name="close-circle-outline" size={20} color="red" onPress={() => deletePoint(item)} />
              {/* <Button title='X' /> */}
            </View>
          )}
          keyExtractor={item => item}
        />
      </View>
      <View>
        <ButtonComponent text='Cerrar' action={closeModal} color="#DE0001" iconName="close-circle-outline" />
      </View>
    </>
  )
}

