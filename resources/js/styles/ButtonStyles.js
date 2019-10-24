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
        width: '200@s',
        height: '50@vs',
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
