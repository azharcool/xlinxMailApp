import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

import { Wrapper } from '../../components';
import images from '../../assets/images';
import styles from '../../style';

import CustomRoundedButton from '../../components/CustomRoundedButton';
import {Routes, RootStackParamList} from '../../navigation/routes'

interface IProps {
    // navigation: NavigationContainerProps<>
}


const ActivateScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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

                </View>

                <View style={[styles.containerBottom]}>
                    <CustomRoundedButton
                        title='Activate Now'
                        onPressHandler={() => {
                             navigation.navigate(Routes.Login)
                        }}
                    />
                </View>
            </ImageBackground>
        </Wrapper>
    );
};

export default ActivateScreen;