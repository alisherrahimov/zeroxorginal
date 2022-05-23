import {MMKVLoader} from 'react-native-mmkv-storage';
const mmkv = new MMKVLoader().initialize();

const setItem = (key, value) => {
  try {
    mmkv.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

const getItem = async key => {
  try {
    const a = await mmkv.getItem(key);
    console.log(a);
    return a;
  } catch (error) {
    console.error(error);
  }
};

export {setItem, getItem};
