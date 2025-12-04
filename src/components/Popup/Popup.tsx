import { View, Modal, TouchableOpacity, Text, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { ReactNode } from "react";
import { styles } from "./Styles";

interface PopupProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Popup({ visible, onClose, children }: PopupProps) {
  const slideAnim = useRef(new Animated.Value(200)).current;   // start below
  const fadeAnim = useRef(new Animated.Value(0)).current;      // transparent

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 200,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="none">
      <View style={styles.modalBackground}>
        
        <Animated.View
          style={[
            styles.modalBox,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          {children}

          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>Confirm</Text>
          </TouchableOpacity>

        </Animated.View>
      </View>
    </Modal>
  );
}
