import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Wrapper, LinearLine } from '../../components';
import images from '../../assets/images';
import {fontFamilys, colors} from '../../constants';

import CustomRoundedButton from '../../components/CustomRoundedButton';

const LanguageScreen = () => {
    return (
        <Wrapper isLight={false} style={{ paddingTop: '40%'}}>
            <View style={{ width:'90%', alignItems:'center', height:'100%' }}>
                <View style={styles.imgWrapper}>
                    <Image source={images.ELLIPSE} style={styles.full} />
                    <View style={{ ...styles.center, ...styles.position }}>
                        <Text style={{fontFamily: fontFamilys['700'], color: colors['white']}}>English</Text>
                    </View>
                </View>
                <LinearLine isHighlighted={true} />
                <Text style={{fontFamily: fontFamilys['700'], color: colors['dark']}}>Chinese</Text>
                <LinearLine isHighlighted={false} />

                <CustomRoundedButton 
                    propStyle={{position:'absolute', bottom: 80}}
                    title='Continue'
                    onPressHandler={() => {}}
                />  
            </View>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    imgWrapper: { width: 167, height: 167 },
    full: {
        width: '100%',
        height: '100%',
    },
    position: {
        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    },
    center: {
        justifyContent: 'center', alignItems: 'center'
    },
});


export default LanguageScreen;

