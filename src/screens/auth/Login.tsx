import React from 'react';
import { View, StyleSheet, ImageBackground, Image, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Wrapper } from '../../components';
import { fontFamilys, colors } from '../../constants';
import images from '../../assets/images';
import styles from '../../style';

import CustomRoundedButton from '../../components/CustomRoundedButton';
import CustomInput from '../../components/CustomInput';

const LoginScreen = () => {

    return (
        <Wrapper isLight={true} style={{}}>
            <ImageBackground source={images.BACKGROUND} style={[styles.fullScreen, { alignItems: 'center' }]}>
                <View style={[styles.containerTop, { paddingTop: '45%' }]}>
                    <View>
                        <Image
                            source={images.XLOGO}
                            style={{ width: 180, height: 180 }}
                        />
                    </View>
                    <CustomInput
                        placeholderTxt='Please enter your X-LINX Mail'
                        rightText='@xlinxmail.com'
                    />
                    <CustomInput
                        placeholderTxt='Please enter your one time password'
                        rightText=''
                    />
                </View>


                <View style={[styles.containerBottom]}>
                    <CustomRoundedButton
                        title='Login'
                        onPressHandler={() => { }}
                    />
                </View>

            </ImageBackground>
        </Wrapper>
    );
};

export default LoginScreen;