import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    minWidth: Dimensions.get('window').width - 100,
    backgroundColor: '#FFF',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },

  list: {
    minHeight: Dimensions.get('window').height - 200,
    minWidth: Dimensions.get('window').width - 100,
  },

  item: {
    borderBottomWidth: 1,
    borderColor: '#53215F',
    height: 50,
    width: '80%',
    justifyContent: 'space-around',
    padding: 15,
    fontSize: 16
  },

  panel: {
    flex: 1,
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30
  },

  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#53215F',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 0
    }
  },

  textBtn: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: .4,
    textAlign: 'center'
  },

  wrapper: {
    padding: 20
  },

  modal: {
    borderRadius: 20
  },

  input: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 3,
  },

  textNotFound: {
    textAlign: 'center',
    marginTop: '50%',
    color: '#AFACAC',
    fontSize: 20
  }

});
