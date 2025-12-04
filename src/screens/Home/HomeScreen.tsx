import { Image, Text, View, TouchableOpacity } from 'react-native';
import SectionContainer from '@components/SectionContainer/SectionContainer';
import Item from '@components/Item/Item';
import Popup from '@components/Popup/Popup';
import { styles } from './Styles';
import { useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [title, setTitle] = useState('')

  function openPopup(newTitle: string) {
    setTitle(newTitle)
    setIsVisible(true); 
  }

  function closePopup() {
    setIsVisible(false);
  }

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <View style={{ width: 40, height: 40 }} />
        
        <View style={styles.titleWrapper}>
          <Text style={styles.titleTop}>IMPOSTER</Text>
          <Text style={styles.titleBottom}>WHO?</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.gearButtonCircle}>
            <Image source={require('@assets/gear_icon.png')} style={styles.icon} alt='gear icon'></Image>
          </TouchableOpacity >
        </View>
      </View>

      <View style={styles.playerContainer}>
        <SectionContainer>
          <Text style={styles.playerTitle}>PLAYERS</Text>
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
              <TouchableOpacity onPress={()=> openPopup("PLAYERS")}><Text style={styles.buttonText}>{'>'}</Text></TouchableOpacity>
          </View>
        </SectionContainer>
      </View>


      <View style={styles.categoriesContainer}>
        <SectionContainer>
          <Text style={styles.subTitleText}>CATEGORIES</Text>
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
              <TouchableOpacity onPress={()=> openPopup("CATEGORIES")}>
                  <Text style={styles.buttonText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SectionContainer>
      </View>


      <View>
        <SectionContainer>
            <Text style={styles.subTitleText}>IMPOSTERS</Text>
            <View style={styles.imposterSection}>
              <Text>1 Imposter</Text>
              <TouchableOpacity onPress={()=> openPopup("IMPOSTERS")}>
                  <Text style={styles.buttonText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
        </SectionContainer>
      </View>
    
    <Popup visible={isVisible} onClose={closePopup}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>{title}</Text>
    </Popup>

    </View>
  );
}