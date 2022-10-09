import { SafeAreaView } from 'react-native';
import { ListComponent as List, MapComponent as Map, ModalComponent as Modal, PanelComponent as Panel } from './src/components/';
import { FormNewPoint } from './src/components/FormNewPoint';
import { useFunctionsApp } from './src/hooks/useFunctionsApp';
import { styles } from './src/theme/globalTheme';

export default function App() {

  const con = useFunctionsApp();


  return (
    <SafeAreaView style={styles.container}>

      <Map onLongPress={con.handleLongPress} puntos={con.puntos} pointsFilter={con.pointsFilter} />

      <Panel
        onPressLeft={con.handleLista}
        textLeft='Lista'
        togglePointsFilter={con.togglePointsFilter}
        pointsFilter={con.pointsFilter}
      />

      <Modal visibility={con.visibility} >
        {con.visibilityFilter === 'new_puntos'
          ? <FormNewPoint handleChangeText={con.handleChangeText} setVisibility={con.setVisibility} handleSubmit={con.handleSubmit} />
          : <List puntos={con.puntos} closeModal={() => con.setVisibility(false)} deletePoint={con.deletePoint} />
        }
      </Modal>

    </SafeAreaView>
  );
}

