import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/images/me.png';
import HeaderSocial from './HeaderSocial';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../../core/@ui/LanguageSelect';

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container header__container">
        <div className="languge__select">
          <LanguageSelect />
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
