import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../config/theme';

const Button = ({onPress, label}: {onPress: () => void; label: string}) => {
  return (
    <Pressable onPress={() => onPress()} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default Button;
