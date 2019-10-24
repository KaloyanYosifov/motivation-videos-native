/**
 * External dependencies.
 */
import { ScaledSheet } from 'react-native-size-matters';

/**
 * Internal dependencies.
 */
import { colors, fontSize } from '@/utils/style-variables';

export default ScaledSheet.create({
    inputsContainer: {
        marginBottom: '25@ms',
    },
    input: {
        marginBottom: '27@ms',
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        marginBottom: '15@ms',
    },
    additionalText: {
        color: colors.secondary,
        fontSize: fontSize.base,
    },
    title: {
        color: colors.secondary,
        fontSize: fontSize.h1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
