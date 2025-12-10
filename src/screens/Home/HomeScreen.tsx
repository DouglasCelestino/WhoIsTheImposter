import { Image, Text, View, TouchableOpacity } from 'react-native';
import SectionContainer from '@components/SectionContainer/SectionContainer';
import Item from '@components/Item/Item';
import Popup from '@components/Popup/Popup';
import ContentPlayer from '@components/PopupPlayersContent/Content';
import ContentCategories from '@components/PopupCategoriesContent/Content';
import ContentImposter from '@components/PopupImposterContent/Content'
import { usePlayers } from '@hooks/usePlayers';
import { useCategories } from "@hooks/useCategories";
import { styles } from './Styles';
import { useState, useEffect } from 'react';

type PopupType = "Players" | "Categories" | "Imposter" | null;

export default function Home() {
  const { players, renamePlayer, removePlayer, addPlayer, loadingPlayers } = usePlayers();
  const {categories, categoriesSelected, addCategorie, removeCategorie, loadingCategories} = useCategories();
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
      return(<ContentPlayer
      players={players}
      renamePlayer={renamePlayer}
      removePlayer={removePlayer}
      addPlayer={addPlayer}
      loading={loadingPlayers}></ContentPlayer>);
    }

    if (popupType == 'Categories'){
        return(<ContentCategories
        categories={categories}
        categoriesSelected={categoriesSelected}
        addCategorie={addCategorie}
        removeCategorie={removeCategorie}></ContentCategories>);
    }
    if (popupType == 'Imposter') {
        return(<ContentImposter></ContentImposter>);
    }  
  }

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <View>
          <TouchableOpacity style={styles.gearButtonCircle}>
            <Image source={require('@assets/question_mark_icon.png')} style={styles.icon} alt='question mark icon'></Image>
          </TouchableOpacity >
        </View>

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
              {players.slice(0, 3).map((name, index) => (
                  <Item>
                    <Text>{name}</Text>
                  </Item>
                ))}
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