/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { themeColors } from '../../../theme';

const TypeItem = (props: any) => {
  const [isActive, setActive] = useState(false);

  return (
    <View
      style={{
        marginRight: 10,
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          marginTop: 5,
          fontWeight: '600',
          color: '#fff',
          paddingHorizontal: 30,
          paddingVertical: 10,
          backgroundColor: themeColors.mainColor,
          borderRadius: 20,
        }}
      >
        {props.type}
      </Text>
    </View>
  );
};

export default TypeItem;
