import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Portal, Modal} from 'react-native-paper';
import {style} from '../theme/style';
const MeetInfoGiveDebtModal = ({visible, toggleModal}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={toggleModal}
          contentContainerStyle={{
            backgroundColor: '#fff',
            width: style.width / 1.2,
            height: style.height / 1.5,
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 15,
          }}>
          <ScrollView>
            <Text>Bu yerda qarz shartnomaasi buladi</Text>
          </ScrollView>
        </Modal>
      </Portal>
    </View>
  );
};

export default MeetInfoGiveDebtModal;

const styles = StyleSheet.create({});
