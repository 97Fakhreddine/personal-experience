import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { i18n, setLanguage } from '../i18n/i18n';
const LanguageSelect = () => {
  const language = localStorage.getItem('lng');

  const [select, setSelect] = useState(language ? language : 'GB');
  const onSelect = (code) => {
    setSelect(code);
    const lng = setLanguage(code);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (!language) {
      localStorage.setItem('lng', select);
    }
    if (language) {
      localStorage.removeItem(select);
      localStorage.setItem('lng', select);
    }
  }, [select, language]);

  return (
    <ReactFlagsSelect
      selected={select}
      onSelect={onSelect}
      countries={['FR', 'GB']}
      className="language__select-item"
      /*showSelectedLabel={showSelectedLabel}
    selectedSize={selectedSize}
    showOptionLabel={showOptionLabel}
    optionsSize={optionsSize}
    placeholder={placeholder}
    searchable={searchable}
    searchPlaceholder={searchPlaceholder}
    alignOptionsToRight={alignOptionsToRight}
    fullWidth={fullWidth}
    disabled={disabled} */
    />
  );
};

export default LanguageSelect;
