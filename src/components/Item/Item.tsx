import { View, Text } from 'react-native'
import { styles } from './Styles';
import { ReactNode } from 'react';

interface propsItem {
    children: ReactNode
}


export default function Item({children}: propsItem) {
    return(
        <View style={styles.container}>
            {children}
        </View>
    );
}