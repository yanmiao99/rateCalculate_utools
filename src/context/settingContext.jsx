import { createContext, useEffect, useState } from 'react';

import { BASE_URL } from '@/store/Global';

export const SettingContext = createContext({});

// eslint-disable-next-line react/prop-types
export const SettingProvider = ({ children }) => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    getSetting();
  }, []);

  // 获取设置信息
  const getSetting = async () => {
    const res = await fetch(`${BASE_URL}/setting/list`);
    const data = await res.json();

    if (data.code === 200) {
      const resData = data.data;
      setSettings(resData);
    } else {
      // eslint-disable-next-line no-undef
      message.error(data.msg);
    }
  };

  return (
    <SettingContext.Provider value={settings}>
      {children}
    </SettingContext.Provider>
  );
};
