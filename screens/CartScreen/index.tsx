/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import React from 'react';
import CartItem from './components/CartItem';
import Bill from './components/Bill';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hook';

const CartScreen = () => {
    const cartList = useAppSelector((state: RootState) => state.cart);
    const navigation = useNavigation<any>();

    return (
        <ScrollView
            style={{
                padding: 20,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TouchableWithoutFeedback
                    onPress={() => { navigation.navigate('Home'); }}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            borderColor: 'rgba(225,225,225,0.9)',
                            borderWidth: 3,
                            borderStyle: 'solid',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            style={{
                                width: '50%',
                                resizeMode: 'cover',
                                height: '50%',
                            }}
                            source={require('../../assets/iconLeft.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: '800',
                        color: '#000',
                    }}
                >
                    My Cart
                </Text>
                <View />
            </View>
            <View
                style={{
                    marginTop: 50,
                }}
            >
                {cartList.map(item => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </View>
            <View>
                <Bill />
            </View>
        </ScrollView>
    );
};

export default CartScreen;
