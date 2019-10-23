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
    label: {
        color: colors.secondary,
        fontSize: fontSize.inputLabel,
        marginBottom: 15,
    },
    input: {
        height: 27,
        paddingHorizontal: 15,
        color: colors.primary,
        backgroundColor: colors.baseColor,
        fontSize: fontSize.base,
        borderRadius: 5,
    },
});
