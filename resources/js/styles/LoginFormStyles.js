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
    inputsContainer: {
        marginBottom: 35,
    },
    input: {
        marginBottom: 27,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        marginBottom: 15,
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
