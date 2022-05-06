import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';

const UserInformationOfDebt = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView>
                <View
                    style={{
                        width: style.width,
                        position: 'absolute',
                        height: style.height / 3,
                    }}>
                    <BackGroundIcon width="100%" height="100%"/>
                </View>
                <View style={styles.main}>
                    <View
                        style={{
                            marginTop: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <BackButton
                            navigation={navigation}
                            backgroundColor={'#fff'}
                            IconColor={style.blue}
                        />
                        <View style={styles.timeContainer}>
                            <Text style={styles.time}>02:00</Text>
                        </View>
                    </View>
                    <View style={styles.aboutUsContainer}>
                        <View style={{width: '100%', alignSelf: 'center'}}>
                            <View style={{alignSelf: 'center'}}>
                                <Text style={styles.title}>Qidiruv natijasi</Text>
                            </View>
                        </View>
                        <View style={styles.userImageContainer}>
                            <Image
                                style={styles.userImage}
                                source={{
                                    uri: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
                                }}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.TextInputLabelContainer}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.phoneText}>FISH :</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <TextInput
                                    value="Shavkatov Shahzod Alisherovich"
                                    keyboardType="default"
                                    style={styles.TextInput}
                                />
                            </View>
                        </View>
                        <View style={styles.TextInputLabelContainer}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.phoneText}>Ro'yxatdan o'tgan:</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <TextInput
                                    value="08.08.2001"
                                    keyboardType="default"
                                    style={styles.TextInput}
                                />
                            </View>
                        </View>
                        <View style={styles.TextInputLabelContainer}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.phoneText}>ID raqami:</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <TextInput
                                    value="00001AA"
                                    keyboardType="default"
                                    style={styles.TextInput}
                                />
                            </View>
                        </View>
                        <View style={styles.TextInputLabelContainer}>
                            <View style={styles.inputTitle}>
                                <Text style={styles.phoneText}>Status:</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <TextInput
                                    value="97%"
                                    keyboardType="default"
                                    style={styles.TextInput}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                marginTop: 20,
                                alignSelf: 'center',
                                marginHorizontal: 10,
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default UserInformationOfDebt;

const styles = StyleSheet.create({
    container: {
        backgroundColor: style.backgroundColor,
        flex: 1,
    },
    timeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
    },
    cardViewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    userImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    userImage: {
        width: style.width / 3,
        height: style.width / 3,
        borderRadius: style.width / 6,
    },
    time: {
        fontSize: style.fontSize.xs,
        fontFamily: style.fontFamilyMedium,
        color: style.textColor,
    },

    main: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    aboutUsContainer: {
        backgroundColor: '#EAF2FB',
        marginTop: 20,
        borderRadius: 10,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginBottom: 10,
        paddingVertical: 20,
    },
    TextInput: {
        width: '100%',
        height: style.textInputHeight,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        paddingLeft: 10,
        fontSize: style.fontSize.xx,
        fontFamily: style.fontFamilyMedium,
        color: style.textColor,
    },
    TextInputLabelContainer: {
        borderColor: style.textColor,
        borderWidth: 0.5,
        borderRadius: 6,
        width: '90%',
        flexDirection: 'row',
        marginTop: 30,
        alignSelf: 'center',
    },
    phoneText: {
        fontFamily: style.fontFamilyMedium,
        fontSize: style.fontSize.xx,
        color: style.textColor,
    },
    inputTitle: {
        position: 'absolute',
        marginLeft: 15,
        flex: 1,
        zIndex: 1,
        top: -10,
        backgroundColor: '#EAF2FB',
        paddingLeft: 5,
        paddingRight: 5,
    },
    containerrr: {
        flex: 1,
        width: style.width / 2.4,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 10,
    },
    sum: {
        fontSize: style.fontSize.xx,
        fontFamily: style.fontFamilyMedium,
        color: style.MoneyColor,
    },
    title: {
        fontSize: style.fontSize.s,
        fontFamily: style.fontFamilyBold,
        color: style.textColor,
    },
});
