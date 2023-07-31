/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../../redux/hook';
import { add } from '../../../redux/slices/cartSlice';

const { width } = Dimensions.get('window');

const SpecialItem = (props: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { id, title, category, image, description, rating, price } = props;
  const handleAddItem = () => {
    dispatch(add({
      id, title, category, image, description, rating, price,
    }));
  };
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('Detail', {
        id,
        title,
        price,
        image,
        category,
        description,
        rating: {
          rate: props.rate,
          count: props.count,
        },
      });
    }}
    >
      <View
        style={{
          width: width * 0.8,
          height: 350,
          borderRadius: 40,
          marginRight: 15,
          backgroundColor: 'grey',
          overflow: 'hidden',
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            opacity: 0.5,
          }}
          source={{ uri: `${image}` }}
        />
        <Text
          numberOfLines={4}
          style={{
            color: '#fff',
            position: 'absolute',
            top: 30,
            left: 20,
            fontSize: 25,
            fontWeight: '800',
            maxWidth: '70%',
          }}
        >
          {title}
        </Text>
        <View
          style={{
            position: 'absolute',
            left: 20,
            bottom: 15,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 25,
              marginBottom: 20,
            }}
          >
            ${price}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 25,
            }}
          >
            <Image
              source={require('../../../assets/iconStar.png')}
              style={{
                width: 15,
                height: 15,
              }}
            />
            <Text
              style={{
                color: '#fff',
                fontWeight: '400',
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              {props.rate} ({props.count})
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity onPress={handleAddItem}>
              <Text
                style={{
                  paddingHorizontal: 40,
                  paddingVertical: 12,
                  backgroundColor: '#fff',
                  borderRadius: 40,
                  color: '#000',
                  fontWeight: '700',
                  fontSize: 16,
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 50,
                  marginLeft: 10,
                  backgroundColor: 'rgba(225,225,225,0.5)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={require('../../../assets/iconMessage.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 50,
                  marginLeft: 10,
                  backgroundColor: 'rgba(225,225,225,0.5)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={require('../../../assets/iconHeart.png')}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity >
  );
};

export default SpecialItem;
