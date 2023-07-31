/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, Image } from 'react-native';
import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hook';

const Bill = () => {
    const cartList = useAppSelector((state: RootState) => state.cart);
    const subTotal = cartList.reduce((total, item) => (
        total + item.price * item.quantity
    ), 0);
    const fee = subTotal === 0 ? 0 : 10.00;
    const delivery = subTotal === 0 ? 0 : 5.00;
    return (
        <View>
            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        fontWeight: '600',
                    }}
                >
                    Sub total
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                    }}
                >
                    ${subTotal.toFixed(2)}
                </Text>
            </View>
            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        fontWeight: '600',
                    }}
                >
                    Taxes & Fees
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                    }}
                >
                    ${fee}
                </Text>
            </View>
            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        fontWeight: '600',
                    }}
                >
                    Delivery Fee
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                    }}
                >
                    ${delivery}
                </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'rgba(225,225,225,1)',
                    borderBottomWidth: 2,
                    borderStyle: 'dashed',
                    marginTop: 20,
                }}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 20,
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        fontWeight: '800',
                    }}
                >
                    Total
                </Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        fontWeight: '800',
                    }}
                >
                    ${(subTotal + fee + delivery).toFixed(2)}
                </Text>
            </View>
        </View>
    );
};

export default Bill;
