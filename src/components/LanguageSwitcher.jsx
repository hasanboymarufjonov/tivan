import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <select
      onChange={handleLanguageChange}
      defaultValue={i18n.language}
      className=" rounded w-11 h-8"
    >
      <option value="en">{t("EN")}</option>
      <option value="sp">{t("SP")}</option>
      <option value="ru">{t("RU")}</option>
    </select>
  );
}

export default LanguageSwitcher;
