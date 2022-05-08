import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../../../helper/homeIcon';
import {style} from '../../../../theme/style';
import BackButton from '../../../components/BackButton';
import {useNavigation} from '@react-navigation/native';

const UseTerm = () => {
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
        <View style={styles.aboutUsContainer}>
          <ScrollView>
            <View>
              <Text style={styles.title}>Foydalanish yoriqnomasi</Text>
            </View>
            <View
              style={{
                marginTop: 20,
              }}>
              <Text style={styles.userName}>
                Barcha xizmatlarni saytdan, mobil ilovasidan, yoki shunchaki
                sutkalik aloqa markaziga qo‘ng‘iroq qilib olish mumkin. Biz
                aynan shunday konsepsiyani tanladik, chunki u bugungi kunda
                o‘zini to‘liq oqlay oladi. Mamlakat aholisi yanada mobilroq
                bo‘lib qoldi, raqamli texnologiyalardan foydalanishni va
                ko‘pgina xizmatlarni masofadan va dunyoning istalgan nuqtasidan
                sutka davomida olishni afzal ko‘radi. Shaharda bizning odatiy
                bo‘limlarimiz yo‘q, biz mamlakat bo‘ylab millionlab qurilmalarda
                erishimlimiz. Har bir mijozga nisbatan individual yondashuvni
                saqlab va ma‘lumotlarga ishlov berishda xavfsizlikni kafolatlab,
                har qanday so‘rovga maksimal operativ tarzda ishlov berish uchun
                biz ulkan sa‘y-harakatlar qildik. Barcha xizmatlarni saytdan,
                mobil ilovasidan, yoki shunchaki sutkalik aloqa markaziga
                qo‘ng‘iroq qilib olish mumkin. Biz aynan shunday konsepsiyani
                tanladik, chunki u bugungi kunda o‘zini to‘liq oqlay oladi.
                Mamlakat aholisi yanada mobilroq bo‘lib qoldi, raqamli
                texnologiyalardan foydalanishni va ko‘pgina xizmatlarni
                masofadan va dunyoning istalgan nuqtasidan sutka davomida
                olishni afzal ko‘radi. Shaharda bizning odatiy bo‘limlarimiz
                yo‘q, biz mamlakat bo‘ylab millionlab qurilmalarda erishimlimiz.
                Har bir mijozga nisbatan individual yondashuvni saqlab va
                ma‘lumotlarga ishlov berishda xavfsizlikni kafolatlab, har
                qanday so‘rovga maksimal operativ tarzda ishlov berish uchun biz
                ulkan sa‘y-harakatlar qildik. Barcha xizmatlarni saytdan, mobil
                ilovasidan, yoki shunchaki sutkalik aloqa markaziga qo‘ng‘iroq
                qilib olish mumkin. Biz aynan shunday konsepsiyani tanladik,
                chunki u bugungi kunda o‘zini to‘liq oqlay oladi. Mamlakat
                aholisi yanada mobilroq bo‘lib qoldi, raqamli texnologiyalardan
                foydalanishni va ko‘pgina xizmatlarni masofadan va dunyoning
                istalgan nuqtasidan sutka davomida olishni afzal ko‘radi.
                Shaharda bizning odatiy bo‘limlarimiz yo‘q, biz mamlakat bo‘ylab
                millionlab qurilmalarda erishimlimiz. Har bir mijozga nisbatan
                individual yondashuvni saqlab va ma‘lumotlarga ishlov berishda
                xavfsizlikni kafolatlab, har qanday so‘rovga maksimal operativ
                tarzda ishlov berish uchun biz ulkan sa‘y-harakatlar qildik.
                Barcha xizmatlarni saytdan, mobil ilovasidan, yoki shunchaki
                sutkalik aloqa markaziga qo‘ng‘iroq qilib olish mumkin. Biz
                aynan shunday konsepsiyani tanladik, chunki u bugungi kunda
                o‘zini to‘liq oqlay oladi. Mamlakat aholisi yanada mobilroq
                bo‘lib qoldi, raqamli texnologiyalardan foydalanishni va
                ko‘pgina xizmatlarni masofadan va dunyoning istalgan nuqtasidan
                sutka davomida olishni afzal ko‘radi. Shaharda bizning odatiy
                bo‘limlarimiz yo‘q, biz mamlakat bo‘ylab millionlab qurilmalarda
                erishimlimiz. Har bir mijozga nisbatan individual yondashuvni
                saqlab va ma‘lumotlarga ishlov berishda xavfsizlikni kafolatlab,
                har qanday so‘rovga maksimal operativ tarzda ishlov berish uchun
                biz ulkan sa‘y-harakatlar qildik.
              </Text>
            </View>
            <View />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default UseTerm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  userName: {
    fontSize: style.fontSize.small,
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
    lineHeight: 25,
  },
  download: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: style.StatusbarColor,
    padding: 10,
    width: style.width / 3,
    flexDirection: 'row',
  },
  downloadText: {
    color: '#fff',
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: style.height / 1.2,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 10,
  },

  title: {
    fontSize: style.fontSize.xs,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
    alignSelf: 'center',
  },
});
