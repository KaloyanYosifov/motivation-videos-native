/**
 * External dependencies.
 */
import { StyleSheet } from 'react-native';

/**
 * Internal dependencies.
 */
import { colors, fontSize } from '@/utils/style-variables';

export default StyleSheet.create({
    default: {

    },
    input: {
        marginBottom: 27,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        color: colors.secondary,
        fontSize: fontSize.h1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
