import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">🌲</span>
          <span className="logo-text">Чайная Тайга</span>
        </div>
        <nav className="nav">
          <a href="#about">О нас</a>
          <a href="#products">Чай</a>
          <a href="#contact">Контакты</a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Добро пожаловать в
          <span className="highlight"> Чайную Тайгу</span>
        </h1>
        <p className="hero-subtitle">
          Откройте для себя мир настоящего чая из глубин сибирской тайги
        </p>
        <button className="cta-button">Попробовать чай</button>
      </div>
      <div className="hero-image">
        <div className="tea-cup">☕</div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Наша История</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              В глубине сибирской тайги, где воздух чист и природа нетронута, 
              мы собираем уникальные травы и создаем неповторимые чайные композиции.
            </p>
            <p>
              Каждый наш чай — это путешествие в мир вкусов и ароматов, 
              которые дарит нам дикая природа Сибири.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">🌿</span>
              <h3>Натуральные ингредиенты</h3>
              <p>Только дикорастущие травы из экологически чистых районов</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🏔️</span>
              <h3>Сибирское качество</h3>
              <p>Суровый климат делает наши травы особенно ароматными</p>
            </div>
            <div className="feature">
              <span className="feature-icon">✨</span>
              <h3>Уникальные рецепты</h3>
              <p>Авторские композиции, созданные мастерами чайного дела</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    {
      name: "Таёжный Утренний",
      description: "Бодрящий черный чай с кедровыми орешками",
      price: "450₽",
      image: "🌅"
    },
    {
      name: "Сибирский Вечер",
      description: "Успокаивающий травяной сбор с мятой и чабрецом",
      price: "380₽",
      image: "🌙"
    },
    {
      name: "Медвежья Сила",
      description: "Крепкий чай с ягодами и корнем женьшеня",
      price: "520₽",
      image: "🐻"
    },
    {
      name: "Лесная Свежесть",
      description: "Зеленый чай с листьями смородины и малины",
      price: "420₽",
      image: "🍃"
    }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Наши Чаи</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">{product.price}</div>
              <button className="product-button">Заказать</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Свяжитесь с нами</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Адрес</h4>
                <p>г. Новосибирск, ул. Таёжная, 15</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Телефон</h4>
                <p>+7 (383) 123-45-67</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@chainaya-taiga.ru</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Ваше имя" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Сообщение" rows="5"></textarea>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">🌲</span>
            <span className="logo-text">Чайная Тайга</span>
          </div>
          <p>© 2024 Чайная Тайга. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;