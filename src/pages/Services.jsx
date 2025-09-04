import React from 'react';
import ServiceStyle from './Pages.module.scss';

const Services = () => {
  return (
    <div>
      <section className={ServiceStyle['services']}>
        <h2 className={ServiceStyle['title-2']}>Bizning Mahsulotlar</h2>

        <ul className={ServiceStyle['services-list']}>
          <li>Broyler yemlari </li>

          <li>Qora mol yemlari </li>

          <li>Bedani yemlari</li>

          <li>
            Hashaki tovuqlar uchun yemlar
          </li>

          <li>
            Nesushka tovuqlar uchun yemlar
          </li>
        </ul>

        <p className={ServiceStyle['services-text']}>
         <h3> Parrandalar uchun yemlar</h3>
         
        <li> Broyler yemlari: Predstart, Start, O‘sish, Finish – tez o‘sish va yuqori go‘sht chiqishi uchun.</li>
         <li> Tuxum tovuqlari yemlari: yuqori tuxum qo‘yish va sifatli tuxum qobig‘i uchun.</li> 
         <li>Bedana yemlari: tuxum va go‘sht yo‘nalishi uchun maxsus balanslangan aralashmalar.</li>

          <p> <h3>Chorvachilik uchun yem</h3>
             <li>Buzoqlar uchun yem: immunitetni mustahkamlash va sog‘lom o‘sish uchun.</li>
           <li> Sutli sigirlar uchun yem: ko‘p sut va yuqori sifatli mahsulot olishga yordam beradi.</li> 
           <li> Go‘sht yo‘nalishidagi qoramol uchun yem: tez vazn yig‘ish va sifatli go‘sht uchun.</li> </p>

        </p>

        <h3 className={ServiceStyle['title-3']}>
          Narxlar
        </h3>

        <ul className={ServiceStyle['services-list']}>
         <h4>Broyler</h4>
          <li>Предстарт - 0,58 $ (23,00%)</li>

          <li>Старт- 0,56 $ (22,50%)</li>

          <li>Рост- 0,53 $ (21,50%)</li>

          <li>Финиш- 0,51 $ (20,50%)</li>

          <h4>Bedana</h4>

          <li>Беданa- 4 600 сум</li>

          <li>Бедана рост- 5 000 сум
          </li>

          <h4>Qora mol</h4>
          <li>Бузоклар учун (телята) 0-4ой 6000сум  </li>
          <li>Сигир зотли (дойные) 4500 сум </li>
          <li>Бурдоки учун (откорм) - 4 000 сум </li>
          <li>Ғунажин (Нетель) - 3 600 сум </li>
          <li>Сухостой учун - 4 200 сум </li>
          <li>Мол жайдари (местный)-3 600 сум </li>
          <li>Қўй бўрдоқи (баран откорм)- 3 800 сум </li>
        </ul>

        <p className={ServiceStyle['services-text']}>
        Yodda tuting zavod narxlari korsatilgan boshqa dokonlardan farq qilishi mumkin.
        </p>


      </section>
    </div>
  );
};

export default Services;
