/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { remove, incrementQuantity, decrementQuantity } from '../../../redux/slices/cartSlice';

const CartItem = (props: any) => {

  const dispatch = useAppDispatch();
  const handleRemoveItem = (id: number) => {
    dispatch(remove(id));
  };
  const handleIncreaseQuantity = (id: number) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecreaseQuantity = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 40,
        height: 100,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View>
          <Image
            style={{
              width: 110,
              height: 120,
              resizeMode: 'contain',
              borderRadius: 20,
            }}
            source={{ uri: `${props.image}` }}
          />
        </View>
        <View
          style={{
            marginLeft: 15,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              fontWeight: '600',
              fontSize: 18,
              color: '#000',
              width: 120,
            }}
          >
            {props.title}
          </Text>
          <Text
            style={{
              marginTop: 15,
              marginBottom: 20,
              fontWeight: '600',
            }}
          >${props.price}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <TouchableHighlight
              onPress={() => { handleDecreaseQuantity(props.id); }}
            >
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderColor: 'grey',
                  borderRadius: 50,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../../assets/iconMinus.png')}
                  style={{
                    height: '50%',
                    width: '50%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </TouchableHighlight>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
              }}
            >
              {props.quantity || 0}
            </Text>
            <TouchableHighlight
              onPress={() => { handleIncreaseQuantity(props.id); }}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderColor: 'grey',
                  borderRadius: 50,
                  borderStyle: 'solid',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../../assets/iconPlus.png')}
                  style={{
                    height: '50%',
                    width: '50%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => {
            handleRemoveItem(props.id);
          }}
        >
          <View
            style={{
              height: 30,
              width: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../../assets/iconX.png')}
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
        </TouchableHighlight>
      </View>
    </View >
  );
};

export default CartItem;
