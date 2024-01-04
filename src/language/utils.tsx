/* eslint-disable react-hooks/exhaustive-deps */
import type TranslateOptions from 'i18next';
import i18n from 'i18next';
import memoize from 'lodash.memoize';
import {useCallback, useState, useEffect} from 'react';
import {NativeModules} from 'react-native';
import {I18nManager} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {resources} from './resources';
import type {Language, RecursiveKeyOf} from './types';

type DefaultLocale = typeof resources.en.translation;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

export const LOCAL = 'local';

export const getLanguage = async () => await AsyncStorage.getItem(LOCAL); // 'Marc' getItem<Language | undefined>(LOCAL);

export const translate = memoize(
  (key: TxKeyPath, options = undefined) => i18n.t(key, options) as unknown,
  (key: TxKeyPath, options: typeof TranslateOptions) =>
    options ? key + JSON.stringify(options) : key,
);

export const changeLanguage = async (lang: Language) => {
  i18n.changeLanguage(lang);
  await AsyncStorage.setItem('lang', lang);
  if (lang === 'ar') {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }
  NativeModules.DevSettings.reload();
};

export const useSelectedLanguage = () => {
  const {getItem, setItem} = useAsyncStorage(LOCAL);
  const [language, setLocalLanguage] = useState('');

  const setLanguage = useCallback(
    async (lang: Language) => {
      setLocalLanguage(lang);
      await setItem(lang);
      if (lang !== undefined) {
        changeLanguage(lang as Language);
      }
    },
    [setItem, language],
  );

  const getLocalLanguge = async () => {
    let item = await getItem();

    if (item) {
      setLocalLanguage(item);
    } else {
      setLocalLanguage('en');
    }
  };

  useEffect(() => {
    getLocalLanguge();
  }, [language]);

  return {language: language as Language, setLanguage};
};
