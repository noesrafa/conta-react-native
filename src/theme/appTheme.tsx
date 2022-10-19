/* eslint-disable */
import { StyleSheet, Dimensions } from 'react-native'


// === Dimensions ===
const {width, height} = Dimensions.get('screen');

const globalStyles = StyleSheet.create({
    font_lg:{
        fontSize: 34,
        fontFamily: 'Axiforma-Medium',
        color: '#000000',
        lineHeight:  width / 9,
    },
    font_md:{
        fontSize: 22,
        fontFamily: 'Axiforma-Medium',
        color: '#000000',
        lineHeight:  width / 9,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        // backgroundColor: "red"
    },
    flex: {flex: 1},
    logo: {
        position: 'absolute',
        top: 2,
        left: 0,
        width: '100%',
        alignItems: 'center',
        marginTop: '20%',
      },
});

export const COLORS = {
    gray100: "#EAEAEA",
    principal: "#00B897"
}

export const FONTS = {
    light: 'Axiforma-Light',
    regular: 'Axiforma-Regular',
    medium: 'Axiforma-Medium',
    bold: 'Axiforma-Bold',
}

export default globalStyles