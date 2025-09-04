import React from 'react';
import ContactStyle from './Pages.module.scss';

const Contacts = () => {
  return (
    <div>
      <section className={ContactStyle['contact']}>
        <h2 className={ContactStyle['title-2']}>Contacts</h2>

        <p className={ContactStyle['contact-text']}>
         Telefon raqam: +998888008588
        </p>

        <h3 className={ContactStyle['title-3']}>Bizning Sahifalar</h3>

        <ul className={ContactStyle['contact-list']}>
          <li>
            <a href="https://www.instagram.com/kombikorm_yik_ota_yem?igsh=MXN2bmYxd2ducHNyNg==" target="_blank">
              Instagram
            </a>
          </li>

          {/* <li>
            <a href="https://github.com/procuberz" target="_blank">
              GitHub
            </a>
          </li> */}

          <li>
            <a href="https://t.me/https://t.me/yikotayem_agrokorm" target="_blank">
              Telegram
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contacts;
