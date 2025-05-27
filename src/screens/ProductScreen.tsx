import {RouteProp, StackActions, useNavigation, useRoute} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../routes/StackNavigator';
import { globalStyles } from '../config/theme';
import Button from '../components/button';

const ProductScreen = () => {
  const {id, name} = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation()

  useEffect(()=>{
    navigation.setOptions({
      title: name,
    });
  },[])

  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
        }}>
        {id} - {name}
      </Text>
      <Button
        onPress={() => navigation.dispatch(StackActions.popToTop())}
        label="Go to home"
      />
    </View>
  );
};

export default ProductScreen;
