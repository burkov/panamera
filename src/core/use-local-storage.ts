import useSWR from 'swr/esm';

const getItemSafeSync = <T>(key: string): T | undefined => {
  try {
    const value = localStorage.getItem(key);
    return value === null ? undefined : JSON.parse(value);
  } catch (e) {
    console.error('Failed to read value from local storage', e);
    localStorage.removeItem(key);
    return undefined;
  }
};

const fetcher = async (key: string): Promise<any> => getItemSafeSync(key);

export interface LocalStorageValue<T> {
  value: T | undefined;
  setValue: (newValue: T) => void;
  removeValue: () => void;
}

export const useLocalStorage = <T>(key: string): LocalStorageValue<T> => {
  const { data, mutate } = useSWR<T>(key, fetcher, {
    initialData: getItemSafeSync(key),
  });
  const setValue = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    mutate(newValue).catch(console.error);
  };
  const removeValue = () => {
    localStorage.removeItem(key);
    mutate(undefined).catch(console.error);
  };
  return { value: data, setValue, removeValue };
};
