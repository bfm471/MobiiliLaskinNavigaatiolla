import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaskinScreen from './screens/LaskinScreen';
import HistoriaScreen from './screens/HistoriaScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#D4F1F7',
          }
        }}
      >
        <Stack.Screen name="Laskin" component={LaskinScreen} />
        <Stack.Screen name="Historia" component={HistoriaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
