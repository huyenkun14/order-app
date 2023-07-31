/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Dimensions, FlatList, Image, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import TypeItem from './components/TypeItem';
import SpecialItem from './components/SpecialItem';
import { themeColors } from '../../theme';
import { axiosInstance } from '../../api/request';
import { API_CONFIG } from '../../api/constants';
import { useAppDispatch } from '../../redux/hook';
import { add } from '../../redux/slices/cartSlice';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const dispatch = useAppDispatch();
    const [text, onChangeText] = useState('');
    const [isAll, setAll] = useState(true);
    const [dataOfType, setDataOfType] = useState([]);
    const [productsList, setProductsList] = useState([]);
    const [typesList, setTypesList] = useState([]);
    const handleSearch = () => {
        const results = productsList.filter((item: any) => item.title.toLowerCase().includes(text.toLowerCase()));
        if (text) {
            setDataOfType(results);
            setAll(false);
        } else {
            setAll(true);
        }
    };
    const handleAddItem = (item: any) => {
        dispatch(add(item));
    };
    const getListProducts = async () => {
        const res = await axiosInstance.get(API_CONFIG.PRODUCTS);
        setProductsList(res.data);
    };
    const getListTypes = async () => {
        const res = await axiosInstance.get(API_CONFIG.CATEGORIES);
        setTypesList(res.data);
    };
    const getDataOfType = async (type: string) => {
        const res = await axiosInstance.get(`${API_CONFIG.CATEGORY}${type}`);
        setDataOfType(res.data);
    };
    useEffect(() => {
        getListProducts();
        getListTypes();
    }, []
    );
    const getHigherRating = (list: any) => {
        let sortProducts = list.sort(
            (p1: any, p2: any) => (p1.rating.rate < p2.rating.rate ? 1 : p1.rating.rate > p2.rating.rate ? -1 : 0)
        );
        return sortProducts.slice(0, 5);
    };
    const getHigherCount = (list: any) => {
        let sortProducts = list.sort(
            (p1: any, p2: any) => (p1.rating.count < p2.rating.count ? 1 : p1.rating.count > p2.rating.count ? -1 : 0)
        );
        return sortProducts.slice(0, 5);
    };
    return (
        <ScrollView
            style={{
                paddingLeft: 20,
                paddingTop: 15,
            }}
        >
            {/* search */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 20,
                    paddingRight: 20,
                }}
            >
                <View>
                    <TextInput
                        placeholder="Search"
                        onChangeText={onChangeText}
                        style={{
                            borderColor: 'grey',
                            paddingHorizontal: 20,
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderRadius: 50,
                            width: width * 0.6,
                            height: 45,
                        }}
                    />
                </View>
                <TouchableOpacity
                    onPress={handleSearch}
                >
                    <View
                        style={{
                            height: 45,
                            width: 45,
                            backgroundColor: themeColors.mainColor,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            style={{
                                height: '50%',
                                width: '50%',
                            }}
                            source={require('../../assets/iconSearch.png')}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Cart'); }}
                >
                    <View
                        style={{
                            height: 45,
                            width: 45,
                            backgroundColor: themeColors.mainColor,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            style={{
                                height: '50%',
                                width: '50%',
                            }}
                            source={require('../../assets/iconCart.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            {/* type */}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => { setAll(true); }}
                >
                    <TypeItem
                        type={'All'}
                    />
                </TouchableOpacity>
                <FlatList
                    data={typesList}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={
                                () => {
                                    getDataOfType(item);
                                    setAll(false);
                                }
                            }
                        >
                            <TypeItem
                                type={item}
                            />
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            {isAll ?
                <View>
                    {/* popular items */}
                    <View
                        style={{
                            marginVertical: 20,
                        }}
                    >
                        <Text
                            style={{
                                marginBottom: 20,
                                fontSize: 18,
                                fontWeight: '700',
                                color: '#000',
                            }}
                        >
                            Rating items
                        </Text>
                        <FlatList
                            data={getHigherRating(productsList)}
                            horizontal
                            renderItem={({ item }: { item: any }) => (
                                <SpecialItem
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rate={item.rating.rate}
                                    count={item.rating.count}
                                    category={item.category}
                                    image={item.image}
                                    description={item.description}
                                    handleAddItem={handleAddItem}
                                />
                            )}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    {/* delicous items */}
                    <View
                        style={{
                            marginVertical: 20,
                        }}
                    >
                        <Text
                            style={{
                                marginBottom: 20,
                                fontSize: 18,
                                fontWeight: '700',
                                color: '#000',
                            }}
                        >
                            Suggest for you
                        </Text>
                        <FlatList
                            data={getHigherCount(productsList)}
                            horizontal
                            renderItem={({ item }: { item: any }) => (
                                <SpecialItem
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rate={item.rating.rate}
                                    count={item.rating.count}
                                    category={item.category}
                                    image={item.image}
                                    description={item.description}
                                    handleAddItem={handleAddItem}
                                />
                            )}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                :
                <View
                    style={{
                        marginVertical: 20,
                    }}
                >
                    <Text
                        style={{
                            marginBottom: 20,
                            fontSize: 18,
                            fontWeight: '700',
                            color: '#000',
                        }}
                    >
                        Items
                    </Text>
                    <FlatList
                        data={dataOfType}
                        horizontal
                        renderItem={({ item }: { item: any }) => (
                            <SpecialItem
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rate={item.rating.rate}
                                count={item.rating.count}
                                category={item.category}
                                image={item.image}
                                description={item.description}
                                handleAddItem={handleAddItem}
                            />
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            }
        </ScrollView>
    );
};

export default HomeScreen;
