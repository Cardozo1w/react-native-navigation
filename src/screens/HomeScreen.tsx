import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {globalStyles} from '../config/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Button from '../components/button';
import { RootStackParams } from '../routes/StackNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Products')}
        label="Go to Products Screen"
      />
      <Button
        onPress={() => navigation.navigate('Settings')}
        label="Go to Settings Screen"
      />
    </View>
  );
};

export default HomeScreen;
