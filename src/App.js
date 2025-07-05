import React, { useState } from 'react';
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

// Компонент модального окна
const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-image">{product.image}</div>
          <div className="modal-title-section">
            <h2 className="modal-title">{product.name}</h2>
            <div className="modal-price">{product.price}</div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Описание</h3>
            <p>{product.fullDescription}</p>
          </div>

          <div className="modal-section">
            <h3>Полезные свойства</h3>
            <div className="effects-list">
              {product.effects.split('•').filter(effect => effect.trim()).map((effect, index) => (
                <div key={index} className="effect-item">
                  • {effect.trim()}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>Способ приготовления</h3>
            <div className="brewing-info">
              <div className="brewing-item">
                <span className="brewing-icon">🌡️</span>
                <span>Температура: {product.temperature}</span>
              </div>
              <div className="brewing-item">
                <span className="brewing-icon">⏱️</span>
                <span>Время заваривания: {product.brewingTime}</span>
              </div>
              <div className="brewing-item">
                <span className="brewing-icon">🥄</span>
                <span>Пропорция: {product.proportion}</span>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h3>Состав</h3>
            <p className="ingredients">{product.ingredients}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="order-button">Заказать за {product.price}</button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      name: "Дянь Хун. Золотая почка",
      description: "Бодрящий черный чай с кедровыми орешками",
      fullDescription: "Элитный красный чай из провинции Юньнань, известный своими золотистыми типсами и насыщенным медовым вкусом. Этот чай обладает глубоким янтарным настоем с нотками солода, меда и легкой перчинкой в послевкусии. Идеально подходит для утреннего чаепития и придает энергию на весь день.",
      effects: "• Мягко бодрит и проясняет мысли • Снижает усталость глаз, освежает в жару • Богат катехинами — поддерживает иммунитет и здоровье сосудов • Деликатно стимулирует пищеварение • Улучшает концентрацию внимания",
      price: "4₽",
      image: "🌅",
      temperature: "95-100°C",
      brewingTime: "3-5 минут",
      proportion: "1 ч.л. на 200 мл воды",
      ingredients: "Красный чай Дянь Хун, золотые типсы, натуральные ароматизаторы"
    },
    {
      name: "Фэн Хуан Дань Цун.",
      description: "Успокаивающий травяной сбор с мятой и чабрецом",
      fullDescription: "Изысканный улун из горного района Фэнхуан, известный своим уникальным ароматом медовой орхидеи. Этот чай проходит особую обработку, которая придает ему сложный цветочно-медовый букет. Настой имеет золотисто-янтарный цвет и долгое сладковатое послевкусие с нотками тропических фруктов.",
      price: "3₽",
      effects: "• Мягко тонизирует без резкого подъёма кофеина • Расслабляет и снимает напряжение • Улучшает пищеварение • Восстанавливает силы после тренировки • Утоляет жажду, помогает достичь эмоционального равновесия • Обладает антиоксидантными свойствами",
      image: "🌙",
      temperature: "85-90°C",
      brewingTime: "2-3 минуты",
      proportion: "1 ч.л. на 150 мл воды",
      ingredients: "Улун Фэн Хуан Дань Цун, натуральные цветочные ароматы"
    },
    {
      name: "Тай Пин Хоу Куй",
      description: "Крепкий чай с ягодами и корнем женьшеня",
      price: "5₽",
      fullDescription: "Легендарный зеленый чай из провинции Аньхой, известный своими крупными плоскими листьями и нежным орхидейным ароматом. Этот чай имеет светло-зеленый настой с освежающим вкусом и сладковатым послевкусием. Считается одним из десяти знаменитых чаев Китая и ценится за свою элегантность и утонченность.",
      effects: "• Бодрит и проясняет ум • Улучшает пищеварение и утоляет жажду • Деликатно прогревает тело, активизируя обмен веществ • Считается 'чайным тоником' для длительных умственных нагрузок • Богат витаминами и минералами • Обладает омолаживающим эффектом",
      image: "🐻",
      temperature: "80-85°C",
      brewingTime: "2-3 минуты",
      proportion: "1 ч.л. на 200 мл воды",
      ingredients: "Зеленый чай Тай Пин Хоу Куй, молодые чайные почки"
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Наши Чаи</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card" 
              onClick={() => openModal(product)}
            >
              <div className="product-image">{product.image}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">{product.price}</div>
              <button className="product-button">Подробнее</button>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
      />
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