/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../redux/hook';
import { add } from '../../redux/slices/cartSlice';

const { width, height } = Dimensions.get('window');

const DetailScreen = (props: any) => {
    const navigation = useNavigation<any>();
    const { route } = props;
    const dispatch = useAppDispatch();
    const { id, title, category, image, description, rating, price } = route.params;
    const handleAddItem = () => {
        dispatch(add({
            id, title, category, image, description, rating, price,
        }));
    };
    return (
        <View
            style={{
                padding: 20,
                minHeight: height,
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <TouchableOpacity
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
                    </TouchableOpacity>
                    <TouchableOpacity>
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
                                    height: '50%',
                                    resizeMode: 'contain',
                                }}
                                source={require('../../assets/iconHeart.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        marginTop: 30,
                        fontSize: 20,
                        fontWeight: '800',
                    }}
                >
                    {title}
                </Text>
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
                            fontWeight: '600',
                        }}
                    >
                        {category}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            style={{
                                height: 20,
                                width: 20,
                            }}
                            source={require('../../assets/iconStar.png')}
                        />
                        <Text
                            style={{
                                fontWeight: '600',
                                marginLeft: 5,
                            }}
                        >
                            {rating.rate} ({rating.count})
                        </Text>
                    </View>
                </View>
                <Image
                    style={{
                        width: width - 40,
                        height: 350,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        borderRadius: 40,
                        marginTop: 20,
                    }}
                    source={{ uri: `${image}` }}
                />
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '700',
                        marginTop: 20,
                    }}
                >
                    Details
                </Text>
                <Text
                    style={{
                        marginTop: 20,
                        paddingBottom: 100,
                    }}
                >
                    {description}
                </Text>
            </ScrollView>
            <TouchableOpacity
                onPress={handleAddItem}
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                }}
            >
                <Text
                    style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        paddingVertical: 10,
                        fontSize: 16,
                        borderRadius: 30,
                        width: width - 40,
                        textAlign: 'center',

                    }}
                >
                    Add to Cart
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailScreen;
