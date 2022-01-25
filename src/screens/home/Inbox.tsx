import React from 'react';
import { View, SafeAreaView, Text, Image, TextInput } from 'react-native';

import { Wrapper } from '../../components';
import CustomHeader from '../../components/CustomHeader';
import images from '../../assets/images';
import styles from '../../style';
import { colors, fontFamilys } from '../../constants';

const InboxScreen = () => {
    return (
        <Wrapper isLight={false} style={{}}>
            <CustomHeader />

            <View style={{ width: '90%' }}>
                {/* search */}
                <View style={{
                    width: '100%', flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center',
                    paddingVertical: 20
                }}>
                    <View style={{
                        width: '80%', height: 36,
                        backgroundColor: colors['secondaryBg'],
                        marginLeft: 8,
                        flexDirection: 'row',
                        // justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 4
                    }}>
                        <View style={{ width: '12%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: 25, height: 25 }}>
                                <Image source={images.SEARCH} style={styles.fullScreen} />
                            </View>
                        </View>
                        <TextInput
                            placeholder='Search'
                            style={{
                                fontFamily: fontFamilys['600'],
                                fontSize: 15,
                                height: '100%',
                                lineHeight: 24,
                                width: '88%',
                                textAlignVertical: 'bottom'
                            }}
                            placeholderTextColor={colors['disable']}

                        />
                    </View>

                    <View style={{ width: 13.97, height: 13.97 }}>
                        <Image source={images.PIN} style={styles.fullScreen} />
                    </View>
                </View>

                {/* list */}
                <View></View>
            </View>
        </Wrapper>
    )
};

export default InboxScreen;