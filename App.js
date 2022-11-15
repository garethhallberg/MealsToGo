import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { SearchView } from './src/components/SearchView'
import { RestaurantListView } from './src/components/RestaurantListView'

console.log(StatusBar.currentHeight);

export default function App() {
  const isAndroid = Platform.OS === 'android';
  return (
    <>
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.searchViewContainer}>
        <Text style={styles.textStyle}>searching</Text>
      </View>
      <View style={styles.restaurantContainer}>
        <Text style={styles.textStyle}>lists</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10,
    backgroundColor: 'white',
  },
  restaurantContainer: {
    flex:1, 
    backgroundColor: 'blue',
    borderColor: 'darkblue',
    borderWidth: 2,
    padding: 10,
  },
  searchViewContainer: {
    padding: 10,
    backgroundColor: 'green',
  },
  textStyle: {
      // top: 5,
      left: 10,
  }
});



