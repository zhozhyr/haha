import React from 'react';

import './Main.css'

import networkImage from '../../assets/network.png'; 
import arrowsImage from '../../assets/arrows.svg'
import userIag from '../../assets/user.svg'
import line from '../../assets/Line 1.svg'

import Registration from '../../pages/Reg/Reg'
import Authentication from '../../pages/Reg/Authentication'


function Main() {
  return (
    <>
    <header>
      <div className="content">
      <div className="left">
      <a href="/"><h1 className="header-title">BNTPNHA API</h1></a>
      <a href=""><h3>companies list |</h3></a>
      </div>
      <div className="right">
        <a href=""><h3>| API's catalog</h3></a>
        <a href="/registration"><img src={userIag} alt="" /></a>

      </div>
      </div>
      <img className="line" src={line} alt="" />
    </header>
    
      <img className="netImg" src={networkImage} alt="Сеть" />

        
        <div className="description">
<img src={arrowsImage} alt="Стрелки" />

      <div className="text">
        <p>
         <strong>Ускоренная интеграция с партнерами:</strong>  Упрощаем процесс интеграции API.
          </p>
          <p>
          <strong>Управление доступом:</strong> Контролируйте, кто и как использует ваши API.
          </p>
          <p>
          <strong>Мониторинг и аналитика:</strong> Визуализация использования API в реальном
          времени.
          </p>
          <p>
          <strong>Соответствие стандартам:</strong> Гарантируем соблюдение регуляторных
          требований.
          </p>
          <p>
          <strong>Монетизация API:</strong> Внедряем гибкие тарифы и модели оплаты за
          использование.</p>
      </div>
      </div>
    </>
  );
};

export default Main;




