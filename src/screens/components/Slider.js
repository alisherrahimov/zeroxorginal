import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';
import {useNavigation} from '@react-navigation/native';
const data = [
  {
    id: 1,
    title: 'Zeroxdagi uzgarishlar haqida',
    desc: 'Zeroxdagi uzgarishlar haqida batafsil maqola',
    img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
  },
  {
    id: 1,
    title: 'Zeroxdagi uzgarishlar haqida',
    desc: 'Zeroxdagi uzgarishlar haqida batafsil maqola',
    img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
  },
  {
    id: 1,
    title: 'Zeroxdagi uzgarishlar haqida',
    desc: 'Zeroxdagi uzgarishlar haqida batafsil maqola',
    img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
  },
];
const Slider = () => {
  const navigation = useNavigation();
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, 200);
  const RenderList = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AboutUs');
        }}
        style={{width: '100%', height: style.height / 4}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{maxWidth: '70%'}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
          <View>
            <Image
              source={{uri: item.img}}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{padding: 10}}
        data={data}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        pointerEvents={'box-only'}
        scrollEventThrottle={16}
        pagingEnabled
        decelerationRate="fast"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({index, item}) => <RenderList item={item} index={index} />}
      />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          top: 0,
          bottom: 0,
          right: 0,
          justifyContent: 'center',
        }}>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 8,
                width: 8,
                backgroundColor: style.blue,
                margin: 5,
                borderRadius: 20,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
  },
  desc: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
  },
});
