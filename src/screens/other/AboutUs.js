import {
  //   ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackGroundIcon, TwoPhoneIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
const AboutUs = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: 0.4}}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View style={styles.main}>
        <View style={{marginTop: 15}}>
          <BackButton
            navigation={navigation}
            backgroundColor={'#fff'}
            IconColor={style.blue}
          />
        </View>
        <View>
          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.paginationButton}>
              <Icon name="chevron-left" size={15} color={style.textColor} />
            </TouchableOpacity>
            <View
              style={[
                styles.paginationButton,
                {marginLeft: 5, marginRight: 5},
              ]}>
              <Text style={styles.paginationNumber}>1</Text>
            </View>
            <TouchableOpacity style={styles.paginationButton}>
              <Icon name="chevron-right" size={15} color={style.textColor} />
            </TouchableOpacity>
          </View>

          <View style={styles.aboutUsContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{borderRadius: 15}}
              nestedScrollEnabled>
              <View style={styles.aboutUs}>
                <Text style={styles.title}>Bizning mobil ilova</Text>
                <Text style={styles.aboutUsText}>
                  Biz tashrif buyurmasdan siz va sizning biznesingiz uchun bank
                  xizmatlarini to‘liq taqdim etamiz.
                </Text>
                <TwoPhoneIcon width="100%" height={200} />

                <Text style={styles.aboutUsText}>
                  Barcha xizmatlarni saytdan, mobil ilovasidan, yoki shunchaki
                  sutkalik aloqa markaziga qo‘ng‘iroq qilib olish mumkin. Biz
                  aynan shunday konsepsiyani tanladik, chunki u bugungi kunda
                  o‘zini to‘liq oqlay oladi. Mamlakat aholisi yanada mobilroq
                  bo‘lib qoldi, raqamli texnologiyalardan foydalanishni va
                  ko‘pgina xizmatlarni masofadan va dunyoning istalgan
                  nuqtasidan sutka davomida olishni afzal ko‘radi. Shaharda
                  bizning odatiy bo‘limlarimiz yo‘q, biz mamlakat bo‘ylab
                  millionlab qurilmalarda erishimlimiz. Har bir mijozga nisbatan
                  individual yondashuvni saqlab va ma‘lumotlarga ishlov berishda
                  xavfsizlikni kafolatlab, har qanday so‘rovga maksimal operativ
                  tarzda ishlov berish uchun biz ulkan sa‘y-harakatlar qildik.
                  Barcha xizmatlarni saytdan, mobil ilovasidan, yoki shunchaki
                  sutkalik aloqa markaziga qo‘ng‘iroq qilib olish mumkin. Biz
                  aynan shunday konsepsiyani tanladik, chunki u bugungi kunda
                  o‘zini to‘liq oqlay oladi. Mamlakat aholisi yanada mobilroq
                  bo‘lib qoldi, raqamli texnologiyalardan foydalanishni va
                  ko‘pgina xizmatlarni masofadan va dunyoning istalgan
                  nuqtasidan sutka davomida olishni afzal ko‘radi. Shaharda
                  bizning odatiy bo‘limlarimiz yo‘q, biz mamlakat bo‘ylab
                  millionlab qurilmalarda erishimlimiz. Har bir mijozga nisbatan
                  individual yondashuvni saqlab va ma‘lumotlarga ishlov berishda
                  xavfsizlikni kafolatlab, har qanday so‘rovga maksimal operativ
                  tarzda ishlov berish uchun biz ulkan sa‘y-harakatlar qildik.
                  Barcha xizmatlarni saytdan, mobil ilovasidan, yoki shunchaki
                  sutkalik aloqa markaziga qo‘ng‘iroq qilib olish mumkin. Biz
                  aynan shunday konsepsiyani tanladik, chunki u bugungi kunda
                  o‘zini to‘liq oqlay oladi. Mamlakat aholisi yanada mobilroq
                  bo‘lib qoldi, raqamli texnologiyalardan foydalanishni va
                  ko‘pgina xizmatlarni masofadan va dunyoning istalgan
                  nuqtasidan sutka davomida olishni afzal ko‘radi. Shaharda
                  bizning odatiy bo‘limlarimiz yo‘q, biz mamlakat bo‘ylab
                  millionlab qurilmalarda erishimlimiz. Har bir mijozga nisbatan
                  individual yondashuvni saqlab va ma‘lumotlarga ishlov berishda
                  xavfsizlikni kafolatlab, har qanday so‘rovga maksimal operativ
                  tarzda ishlov berish uchun biz ulkan sa‘y-harakatlar qildik.
                  Barcha xizmatlarni saytdan, mobil ilovasidan, yoki shunchaki
                  sutkalik aloqa markaziga qo‘ng‘iroq qilib olish mumkin. Biz
                  aynan shunday konsepsiyani tanladik, chunki u bugungi kunda
                  o‘zini to‘liq oqlay oladi. Mamlakat aholisi yanada mobilroq
                  bo‘lib qoldi, raqamli texnologiyalardan foydalanishni va
                  ko‘pgina xizmatlarni masofadan va dunyoning istalgan
                  nuqtasidan sutka davomida olishni afzal ko‘radi. Shaharda
                  bizning odatiy bo‘limlarimiz yo‘q, biz mamlakat bo‘ylab
                  millionlab qurilmalarda erishimlimiz. Har bir mijozga nisbatan
                  individual yondashuvni saqlab va ma‘lumotlarga ishlov berishda
                  xavfsizlikni kafolatlab, har qanday so‘rovga maksimal operativ
                  tarzda ishlov berish uchun biz ulkan sa‘y-harakatlar qildik.
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  paginationButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationNumber: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
  },
  main: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
  aboutUsContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 15,
    flex: 1,
    height: style.height / 1.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  aboutUsText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
    lineHeight: 25,
    marginTop: 5,
  },
  aboutUs: {
    marginHorizontal: 15,
    marginVertical: 20,
    flex: 1,
  },
  title: {
    fontSize: style.fontSize.xs,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
    alignSelf: 'center',
  },
});
