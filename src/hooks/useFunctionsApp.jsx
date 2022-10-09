import { useState } from 'react'

export const useFunctionsApp = () => {

  const [puntos, setPuntos] = useState([]);
  const [puntoTem, setPuntoTem] = useState({});
  const [nombre, setNombre] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState('new_puntos');
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(true);

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setPuntoTem(nativeEvent.coordinate);
    setVisibilityFilter('new_puntos');
    setVisibility(true);
  }

  const handleChangeText = (text) => {
    setNombre(text);
  }

  const handleSubmit = () => {
    if (nombre === '') return

    const newPoint = { coordinate: puntoTem, name: nombre }
    setPuntos([...puntos, newPoint]);
    setVisibility(false);
    setNombre('');
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos');
    setVisibility(true);
  }

  const deletePoint = (name) => {
    let updatePoints = puntos.filter(point => point.name !== name);
    setPuntos(updatePoints);
  }

  return {
    puntos,
    setPuntos,
    puntoTem,
    setPuntoTem,
    nombre,
    setNombre,
    visibilityFilter,
    setVisibilityFilter,
    visibility,
    setVisibility,
    pointsFilter,
    setPointsFilter,
    togglePointsFilter,
    handleLongPress,
    handleChangeText,
    handleSubmit,
    handleLista,
    deletePoint
  }


}
