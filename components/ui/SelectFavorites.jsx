import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window')

const SelectFavorites = () => {
  const navigation = useNavigation()
  const [selectedItems, setSelectedItems] = useState([])

  const categories = [
    'அத்துமாற',
    'தொல்காப்பியம்',
    'நற்றிணை',
    'குறுந்தொகை',
    'கங்கும்வரல்',
    'அகநானூறு',
    'பூநானுள்',
    'பரிபாடல்',
    'கதிர்தொகை'
  ]

  const handleItemPress = item => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selected => selected !== item))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const handleConfirm = () => {
    navigation.navigate('WelcomeScreen')
  }

  const renderCategoryItem = (item, index) => {
    const isSelected = selectedItems.includes(item)

    return (
      <TouchableOpacity
        key={index}
        style={[styles.categoryItem, isSelected && styles.selectedItem]}
        onPress={() => handleItemPress(item)}
      >
        <Text style={[styles.categoryText, isSelected && styles.selectedText]}>
          {item}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={styles.headerBackground}
        resizeMode='cover'
      ></ImageBackground>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => console.log('Back pressed')}
      >
        <AntDesign name='left' size={20} />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Select Your Favorites</Text>

        <View style={styles.categoriesContainer}>
          {categories.map((item, index) => renderCategoryItem(item, index))}
        </View>

        <TouchableOpacity
          style={[
            styles.confirmButton,
            selectedItems.length === 0 && styles.disabledButton
          ]}
          onPress={handleConfirm}
          disabled={selectedItems.length === 0}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  headerBackground: {
    width: '100%',
    height: hp('30%'),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: hp('2%')
  },
  backButton: {
    position: 'absolute',
    top: hp('5%'),
    left: wp('4%'),
    zIndex: 10,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: wp('2%')
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: wp('6%'),
    paddingTop: hp('8%'),
    paddingBottom: hp('4%')
  },
  header: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: hp('5%')
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: hp('6%')
  },
  categoryItem: {
    width: wp('28%'),
    backgroundColor: '#e0e0e0',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('2%'),
    borderRadius: wp('4%'),
    marginBottom: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: hp('6%')
  },
  selectedItem: {
    backgroundColor: '#FF6A3D',
    borderWidth: 2,
    borderColor: '#FF6A3D'
  },
  categoryText: {
    fontSize: wp('3.5%'),
    color: '#666',
    textAlign: 'center',
    fontWeight: '500'
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600'
  },
  confirmButton: {
    backgroundColor: '#000',
    paddingVertical: hp('2%'),
    borderRadius: wp('6%'),
    alignItems: 'center',
    marginTop: hp('4%')
  },
  disabledButton: {
    backgroundColor: '#ccc'
  },
  confirmText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '600'
  }
})

export default SelectFavorites
