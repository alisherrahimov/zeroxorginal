import {MMKVLoader} from 'react-native-mmkv-storage';
const mmkv = new MMKVLoader().initialize();

const setItem = (key, value) => {
  try {
    mmkv.setItem(key, value);
  } catch (error) {
    return error;
  }
};

const getItem = key => {
  try {
    return mmkv.getItem(key);
  } catch (error) {
    return error;
  }
};

export {setItem, getItem};
