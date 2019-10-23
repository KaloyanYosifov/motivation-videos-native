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
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.tertiary,
        borderRadius: 10,
    },
    text: {
        color: colors.secondary,
        fontSize: fontSize.button,
    },
});
