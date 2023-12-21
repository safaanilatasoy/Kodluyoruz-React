/* eslint-disable no-unused-vars */
import './App.css';
import { IntlProvider, FormattedMessage } from "react-intl";
import { useState, useEffect } from 'react';

const messages = {
  "tr-TR": {
    title: "Bu bir başlık",
    description: "{count} yeni mesajınız var",
  },
  "en-US": {
    title: "This is a title",
    description: "You have {count} new messages",
  },
};


function App() {

  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('locale',locale)
  },[locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" values={{count: 1}}/>
        </p>
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App
