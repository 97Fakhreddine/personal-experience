import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/images/me.png';
import HeaderSocial from './HeaderSocial';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../../core/@ui/LanguageSelect';
import SwitcherBtn from '../../core/@ui/SwitcherBtn';

function Header() {
  const { t } = useTranslation();

  const isDarkModeFromLocalStorage = JSON.parse(
    localStorage.getItem('isDarkModeActive')
  );

  const [isDarkModeActive, setDarkMode] = useState(
    !!isDarkModeFromLocalStorage ? isDarkModeFromLocalStorage : false
  );

  const getCssProperty = (cssVariable) => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      cssVariable
    );
    return color;
  };

  const setColor = (cssVariable, newCss) => {
    document.documentElement.style.setProperty(cssVariable, newCss);
  };

  const changeToDarkMode = () => {
    if (isDarkModeActive) {
      localStorage.removeItem('isDarkModeActive');
      localStorage.setItem('isDarkModeActive', isDarkModeActive);
      // --color-bg: #000000;
      // --color-bg-variant: #150050;
      // --color-primary: #FB2576;
      // --color-primary-variant: rgba(63, 0, 133, 1);
      // --color-white: #fff;
      // --color-light: rgba(255, 255, 255, 0.6);

      // const colorBg = getCssProperty('--color-bg');
      // const colorBgVariant = getCssProperty('--color-bg-variant');
      // const colorPrimary = getCssProperty('--color-primary');
      // const colorPrimaryVariant = getCssProperty(' --color-primary-variant');
      setColor('--color-bg', '#000000');
      setColor('--color-bg-variant', '#150050');
      setColor('--color-primary', '#FB2576');
      setColor('--color-primary-variant', 'rgba(63, 0, 133, 1)');
      setColor('--color-primary-variant', 'rgba(63, 0, 133, 1)');
    } else {
      localStorage.removeItem('isDarkModeActive');
      localStorage.setItem('isDarkModeActive', isDarkModeActive);
      setColor('--color-bg', '#1f1f38');
      setColor('--color-bg-variant', '#2c2c6c');
      setColor('--color-primary', '#4db5ff');
      setColor('--color-primary-variant', 'rgba(77, 181, 255, 0.4)');
    }
  };

  useEffect(() => {
    if (!isDarkModeFromLocalStorage) {
      setDarkMode(isDarkModeActive);
      localStorage.setItem('isDarkModeActive', isDarkModeActive);
    } else {
      setDarkMode(isDarkModeActive);
    }
    changeToDarkMode();
  }, [isDarkModeActive]);

  return (
    <header>
      <div className="container header__container">
        <div className="languge__select">
          <LanguageSelect />
        </div>
        <div className="dark__mode-btn">
          <SwitcherBtn onChange={setDarkMode} value={isDarkModeActive} />
        </div>
        <h5>{t('GREETINGS')}</h5>
        <h1>{t('MY_NAME')}</h1>
        <h5 className="text-light">{t('PROFFENCY')}</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" className="img" />
        </div>

        <a href="#contact" className="scroll__down">
          {t('SCROLL_DOWN')}
        </a>
      </div>
    </header>
  );
}

export default Header;
