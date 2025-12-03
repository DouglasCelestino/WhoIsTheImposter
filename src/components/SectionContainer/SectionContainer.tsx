import {View} from "react-native"
import { styles } from "./Styles"
import { ReactNode } from "react";

interface SectionContainerProps {
    children: ReactNode
}

export default function SectionContainer({ children }: SectionContainerProps) {
    return(
        <View style={styles.container}>
            {children}
        </View>
    );
}