/**
 * External dependencies.
 */
import { ScaledSheet } from 'react-native-size-matters';

/**
 * Internal dependencies.
 */
import { colors, fontSize } from '@/utils/style-variables';

export default ScaledSheet.create({
    default: {

    },
    label: {
        color: colors.secondary,
        fontSize: fontSize.inputLabel,
        marginBottom: '15@ms',
    },
    input: {
        height: '30@vs',
        paddingHorizontal: '15@ms',
        color: colors.primary,
        backgroundColor: colors.baseColor,
        fontSize: fontSize.base,
        borderRadius: 5,
    },
});
