import { StyleSheet, Text, View } from 'react-native';
import { SectionContainer } from './src/components/SectionContainer/SectionContainer'

export default function Home() {
  return (
    <View style={styles.container}>
      <View><Text>Gear Icon</Text></View>
      <View>
        <Text>IMPOSTER WHO?</Text>
      </View>
      <View>
        {/* Card Players */}
      </View>
      <View>
        {/* Card Categories */}
      </View>
      <View>
          {/* Imposters */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    paddingHorizontal: 20, // optional: global side padding
    paddingVertical: 20,   // optional: global top/bottom padding
  },
});
