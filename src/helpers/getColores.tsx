import ImageColors from "react-native-image-colors"



export const getImageColors = async (uri: string) => {


    const result = await ImageColors.getColors(uri, {});
    let primary;
    let secondary;


    switch (result.platform) {
        case 'android':
            primary = result.dominant;
            secondary = result.average;
            break
        case 'ios':
            // iOS result properties
            primary = result.primary;
            secondary = result.secondary;
            
            break
        case 'web':
            // web result properties
            const lightVibrantColor = result.lightVibrant
            break
        default:
            throw new Error('Unexpected platform key')
    }

    return [primary, secondary]
}