/**
 * External dependencies.
 */
import { ScaledSheet } from 'react-native-size-matters';

/**
 * Internal dependencies.
 */
import { colors } from '@/utils/style-variables';

export default ScaledSheet.create({
    default: {
        backgroundColor: colors.primary,
        flex: 1,
        padding: '20@ms',
    },
    view: {
        paddingHorizontal: '20@ms',
    },
});
