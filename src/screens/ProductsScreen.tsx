import React from 'react';
import {View} from 'react-native';
import {FlatList, Text} from 'react-native-gesture-handler';
import Button from '../components/button';
import {globalStyles} from '../config/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { type RootStackParams } from '../routes/StackNavigator';

const products = [
  {id: 1, name: 'Product1'},
  {id: 2, name: 'Product2'},
  {id: 3, name: 'Product3'},
  {id: 4, name: 'Product4'},
  {id: 5, name: 'Product5'},
];

const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 30, fontWeight: '400', marginBottom: 10}}>
        Product Screen
      </Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Button
            onPress={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
              })
            }
            label={item.name}
          />
        )}
      />
      <Text style={{fontSize: 30, fontWeight: '400', marginBottom: 10}}>
        Settings
      </Text>
      <Button
        onPress={() => navigation.navigate('Settings')}
        label="Go to settings"
      />
    </View>
  );
};

export default ProductsScreen;
