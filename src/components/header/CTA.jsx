import React from 'react';
import CV from '../../assets/docs/Fakhreddine_Messaoudi.pdf';
import { useTranslation } from 'react-i18next';

function CTA() {
  const { t } = useTranslation();

  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {t('DOWNLOAD_RESUME_BTN')}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t('CONTACT_BTN')}
      </a>
    </div>
  );
}

export default CTA;
