import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ConfigScreen, ProductScreen} from '../screens';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={ConfigScreen} />
      <Stack.Screen name="Products" component={ProductScreen} />
    </Stack.Navigator>
  );
}
