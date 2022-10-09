import React from 'react'
import { View, Text } from 'react-native';
import { InputComponent as Input, ButtonComponent } from './';

export const FormNewPoint = ({ handleSubmit, handleChangeText, setVisibility }) => {
  return (
    <>
      <Input
        title='Nombre'
        placeholder='Nombre del punto'
        onChangeText={handleChangeText}
      />
      {/* <Button title='Aceptar' onPress={handleSubmit} /> */}
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <ButtonComponent text={'Aceptar'} action={handleSubmit} color="#2FC32F" iconName="checkmark-circle-outline" />
        <ButtonComponent text={'Cancelar'} action={() => setVisibility(false)} color="#DE0001" iconName="close-circle-outline" />
      </View>
    </>
  );
}
