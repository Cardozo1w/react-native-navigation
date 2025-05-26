import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {globalStyles} from '../config/theme';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/button';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Products' as never)}
        label="Go to Products Screen"
      />
      <Button
        onPress={() => navigation.navigate('Settings' as never)}
        label="Go to Settings Screen"
      />
    </View>
  );
};

export default HomeScreen;
