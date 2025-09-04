import React from 'react';
import HomeStyle from './Pages.module.scss';
import { Link } from 'react-router-dom';
import Avatar from './../images/image.png'

const Home = () => {
  return (
 
   <div>
      <section className={HomeStyle['about']}>
      <div className={HomeStyle['about-image']}>
          <img src={Avatar} alt="Portfolio Image" />
        </div>  
          <h2 className={HomeStyle['title-2']}>Biz haqimizda</h2>

        <div className={HomeStyle['about-desc']}>
          <p>
          Zavodimiz Toshkent viloyati, Yuqorichirchiq tumanida joylashgan bo‘lib, zamonaviy texnologiyalar asosida ishlaydi va faqat tabiiy, sinovdan o‘tgan xom ashyolardan foydalanadi.
          </p>

          <p>
          Bizning asosiy maqsadimiz – fermerlar va xonadon egalari uchun yuqori samarali, foydali va xavfsiz yem ishlab chiqarish. Mahsulotlarimiz hayvonlarning tez o‘sishi, yuqori mahsuldorligi va sog‘lom bo‘lishini ta’minlaydi.
            <Link
              to={'/portfolio/portfolio'}
              className={HomeStyle['about-link']}
            >
          <p> <button className={HomeStyle['button']}><b>Manzillarimiz</b></button></p> 
            </Link>
          </p>
        </div>

    
        <div className={HomeStyle['about-desc']}>
          <p>
            <ul>
              
              <li><b>Afzalliklarimiz:</b></li>
              <li> Har xil turdagi parrandalar va chorva mollari uchun keng assortiment.</li>
              <li> Oqsil va vitaminlarga boy muvozanatli tarkib.</li>
              <li> Hamyonbop narxlar va ulgurji chegirmalar.</li>
              <li>Respublika bo‘ylab yetkazib berish xizmati.</li>
              <li>Veterinar mutaxassislar tomonidan maslahatlar.</li>
            </ul>
 </p>
          <p>
         Biz mijozlarimizni doimo hursand qilishga harakat qilamiz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
