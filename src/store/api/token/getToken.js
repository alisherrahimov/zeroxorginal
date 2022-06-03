import {MMKVLoader} from 'react-native-mmkv-storage';
const mmkv = new MMKVLoader().initialize();

const setItem = (key, value) => {
  try {
    mmkv.setItem(key, value);
  } catch (error) {
    return error;
  }
};

const getItem = async key => {
  try {
    const a = await mmkv.getItem(key);
    return a;
  } catch (error) {
    return error;
  }
};

export {setItem, getItem};
