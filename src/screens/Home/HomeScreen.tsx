import { StyleSheet, Text, View, Button } from 'react-native';
import SectionContainer from '@components/SectionContainer/SectionContainer';
import Item from '@components/Item/Item';
import { styles } from './Styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <View><Button title='Gear Icon'></Button></View>
      <View>
        <Text>IMPOSTER WHO?</Text>
      </View>

      <View>
        <SectionContainer>
          <Text>Players</Text>
          <View style={styles.playersSection}>
              <Item>
                  <Text>Player</Text>
              </Item>
              <Item>
                  <Text>Player</Text>
              </Item>
              <Item>
                  <Text>Player</Text>
              </Item>
              <Button title='>'></Button>
          </View>
        </SectionContainer>
      </View>


      <View>
        <SectionContainer>
          <Text>Categories</Text>
          <View style={styles.categoriesRow}>
            <View style={styles.categoriesSection}>
              <Item>
                  <Text>Animal</Text>
              </Item>
              <Item>
                  <Text>Collors</Text>
              </Item>
              <Item>
                  <Text>Foods</Text>
              </Item>
            </View>
            <View>
              <Button title='>'></Button>
            </View>
          </View>
        </SectionContainer>
      </View>


      <View>
        <SectionContainer>
            <Text>Imposters</Text>
            <View>
              <Text>1 Imposter</Text>
              <Button title='>'></Button>
            </View>
        </SectionContainer>
      </View>
    </View>
  );
}