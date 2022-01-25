import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { fontFamilys, colors } from '../constants';
import styles from '../style';

interface IProps {
    placeholderTxt: string,
    rightText: string,
}

const CustomInput = (props: IProps) => {
    const { placeholderTxt, rightText } = props;
    return (
        <View style={[styles.center, { width: '100%', height: 36, marginTop: 26 }]}>
            <TextInput
                style={customStyle.textInput}
                placeholder={placeholderTxt}
            />
            <View style={customStyle.rightSide}>
                <Text
                    style={customStyle.rightText}
                >{rightText}</Text>
            </View>
        </View>
    )
};


const customStyle = StyleSheet.create({
    textInput: {
        width: '90%',
        height: '100%',
        backgroundColor: colors['secondaryBg'],
        borderRadius: 4,
        fontFamily: fontFamilys['400'],
        fontSize: 12,
        paddingLeft: 10
    },
    rightSide: { position: 'absolute', right: 30, height: '100%', justifyContent: 'center' },
    rightText: {
        fontFamily: fontFamilys['400'],
        fontSize: 13,
        color: colors['body']
    }
})

export default CustomInput;