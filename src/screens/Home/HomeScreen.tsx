import { Image, Text, View, TouchableOpacity } from 'react-native';
import SectionContainer from '@components/SectionContainer/SectionContainer';
import Item from '@components/Item/Item';
import Popup from '@components/Popup/Popup';
import Content from '@components/PopupPlayersContent/Content';
import { styles } from './Styles';
import { useState } from 'react';

type PopupType = "Players" | "Categories" | "Imposter" | null;

export default function Home() {
  const [popupType, setPopupType] = useState<PopupType>(null);
  const [isVisible, setIsVisible] = useState(false);

  function openPopup(popupContent: PopupType) {
    setPopupType(popupContent);
    setIsVisible(true); 
  }

  function closePopup() {
    setIsVisible(false);
  }

  function renderPopup() {
    if (popupType === 'Players'){
      return(<Content></Content>);
    }

    if (popupType == 'Categories'){

    }
    if (popupType == 'Imposter') {

    }  
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
              <TouchableOpacity onPress={()=> openPopup("Players")}><Text style={styles.buttonText}>{'>'}</Text></TouchableOpacity>
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
              <TouchableOpacity onPress={()=> openPopup("Categories")}>
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
              <TouchableOpacity onPress={()=> openPopup("Imposter")}>
                  <Text style={styles.buttonText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
        </SectionContainer>
      </View>
    
    <Popup visible={isVisible} onClose={closePopup}>
        {renderPopup()}
    </Popup>

    </View>
  );
}