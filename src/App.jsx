import React, { useEffect, useMemo, useState } from "react";
import PhoneCase3D from "./PhoneCase3D";

const menuItems = [
  "Home",
  "About Us",
  "Products",
  "New Arrivals",
  "Custom Covers",
  "Bulk Orders",
  "Contact",
];

const productMenu = [
  "iPhone Covers",
  "Samsung Covers",
  "OnePlus Covers",
  "Vivo / Oppo Covers",
  "Custom Covers",
  "Tempered Glass",
  "Chargers & Cables",
  "Earphones",
];

const heroSlides = [
  {
    kicker: "New season drops",
    title: "Stylish Mobile Covers for Every Phone",
    text: "Premium back covers, designer cases, tempered glass and mobile accessories at the best price.",
    accent: "blue",
  },
  {
    kicker: "Custom prints",
    title: "Make Your Phone Look Personal",
    text: "Name covers, couple covers, photo covers and bulk gifting orders with fast WhatsApp enquiry.",
    accent: "orange",
  },
  {
    kicker: "Accessories hub",
    title: "Cases, Glass, Chargers and More",
    text: "A clean catalogue experience for every daily mobile essential your customers ask for.",
    accent: "purple",
  },
];

const categories = [
  "iPhone Covers",
  "Samsung Covers",
  "OnePlus Covers",
  "Vivo Covers",
  "Oppo Covers",
  "Realme Covers",
  "Designer Covers",
  "Transparent Covers",
  "Custom Name Covers",
  "Couple Covers",
  "Tempered Glass",
  "Chargers & Cables",
  "Earphones & Accessories",
];

const products = [
  [
    "Aurora MagSafe Case",
    "iPhone 15 Series",
    "1,299",
    "purple",
    "Best Seller",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Clear Shockproof Cover",
    "Samsung Galaxy",
    "699",
    "blue",
    "New",
    "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Matte Armor Case",
    "OnePlus / Realme",
    "899",
    "black",
    "Hot",
    "https://images.unsplash.com/photo-1633066170406-e94f91b6d87c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Custom Name Cover",
    "All Phone Models",
    "499",
    "orange",
    "Custom",
    "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Designer Marble Case",
    "Vivo / Oppo",
    "599",
    "pink",
    "Trending",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Privacy Tempered Glass",
    "Universal Fit",
    "349",
    "cyan",
    "Deal",
    "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
];

const bestSellers = [
  [
    "Carbon Shield",
    "Ultra slim grip",
    "black",
    "https://images.unsplash.com/photo-1633066170406-e94f91b6d87c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Neon Wave",
    "Glossy designer print",
    "blue",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Sunset Clear",
    "Transparent gradient",
    "orange",
    "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Royal Bloom",
    "Premium floral finish",
    "purple",
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
  ],
];

const reviews = [
  {
    name: "Aarav Mehta",
    city: "Mumbai",
    text: "The custom name cover quality felt premium and the print was sharp. Ordered again for my shop counter display.",
  },
  {
    name: "Priya Shah",
    city: "Ahmedabad",
    text: "Fast WhatsApp response, good variety, and the transparent cases did not look cheap. Very clean catalogue experience.",
  },
  {
    name: "Rohit Verma",
    city: "Delhi",
    text: "Bulk cover enquiry was smooth. They shared options quickly and the best-selling models were easy to pick.",
  },
];

const gallery = [
  [
    "Designer case wall",
    "purple",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80",
  ],
  [
    "Transparent covers",
    "blue",
    "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80",
  ],
  [
    "Custom name covers",
    "orange",
    "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80",
  ],
  [
    "Tempered glass kits",
    "black",
    "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80",
  ],
  [
    "Charging accessories",
    "cyan",
    "https://images.unsplash.com/photo-1681601988039-434de125ca06?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=1000&q=80",
  ],
  [
    "Couple cover set",
    "pink",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80",
  ],
];

function App() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const interval = window.setInterval(
      () => setHeroIndex((current) => (current + 1) % heroSlides.length),
      4300
    );
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(
      () => setReviewIndex((current) => (current + 1) % reviews.length),
      3800
    );
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(
      ".reveal, .rise-card, .slide-left, .slide-right"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const doubledCategories = useMemo(() => [...categories, ...categories], []);
  const activeSlide = heroSlides[heroIndex];
  const activeReview = reviews[reviewIndex];

  return (
    <div className="site-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <section id="home" className={`hero hero-${activeSlide.accent}`}>
          <div className="hero-copy">
            <div className="eyebrow">{activeSlide.kicker}</div>
            <div className="hero-slider-window">
              {heroSlides.map((slide, index) => (
                <div
                  className={`hero-slide ${index === heroIndex ? "active" : ""}`}
                  key={slide.title}
                >
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <a className="btn primary" href="#products">
                Shop Collection <span>-&gt;</span>
              </a>
              <a className="btn secondary" href="#custom">
                Custom Cover Order <span>-&gt;</span>
              </a>
            </div>
            <div className="hero-stats" aria-label="Store highlights">
              <span>
                <strong>500+</strong> Cover styles
              </span>
              <span>
                <strong>24h</strong> Enquiry reply
              </span>
              <span>
                <strong>Bulk</strong> Dealer pricing
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Mobile covers and accessories">
            <PhoneCase3D />
            <div className="float-card float-one">
              <span className="mini-phone purple" />
              Designer Cases
            </div>
            <div className="float-card float-two">
              <span className="mini-phone orange" />
              Custom Prints
            </div>
            <div className="float-card float-three">
              <span className="spark" />
              Best Price
            </div>
          </div>

          <div className="slide-dots">
            {heroSlides.map((slide, index) => (
              <button
                className={index === heroIndex ? "active" : ""}
                aria-label={`Show ${slide.kicker}`}
                key={slide.kicker}
                onClick={() => setHeroIndex(index)}
              />
            ))}
          </div>
        </section>

        <section id="about" className="section about reveal">
          <div className="section-heading">
            <span>About Mobile Cover Hub</span>
            <h2>Premium catalogue experience for daily phone essentials.</h2>
          </div>
          <p>
            CaseKart brings mobile covers, tempered glass, chargers, cables and
            custom printed cases into one polished, fast-browsing catalogue built
            for retail customers, resellers and bulk buyers.
          </p>
        </section>

        <section className="section categories reveal">
          <div className="section-heading row">
            <div>
              <span>Popular categories</span>
              <h2>Slide through top-selling phone cover ranges.</h2>
            </div>
            <a href="#contact" className="text-link">
              Ask availability <span>-&gt;</span>
            </a>
          </div>
          <div className="category-track" aria-label="Product category slider">
            <div className="category-marquee">
              {doubledCategories.map((category, index) => (
                <button className="category-pill" key={`${category}-${index}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section reveal">
          <div className="section-heading centered">
            <span>New arrivals</span>
            <h2>Fresh covers and accessories ready for enquiry.</h2>
          </div>
          <div className="product-grid">
            {products.map(([name, model, price, tone, badge, image, fallback], index) => (
              <ProductCard
                badge={badge}
                fallback={fallback}
                image={image}
                index={index}
                key={name}
                model={model}
                name={name}
                price={price}
                tone={tone}
              />
            ))}
          </div>
        </section>

        <section id="new-arrivals" className="section best reveal">
          <div className="section-heading row">
            <div>
              <span>Best selling covers</span>
              <h2>Fast-moving styles with premium finishes.</h2>
            </div>
          </div>
          <div className="best-strip">
            {bestSellers.map(([name, detail, tone, image, fallback]) => (
              <article className={`best-card ${tone}`} key={name}>
                <div className="best-image">
                  <img src={image} alt={name} loading="lazy" onError={swapTo(fallback)} />
                </div>
                <h3>{name}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="custom" className="section custom reveal">
          <div className="custom-copy">
            <span>Custom covers</span>
            <h2>Name, photo, couple and logo covers made to order.</h2>
            <p>
              Share your phone model and design idea. The form is styled for quick
              catalogue enquiries and pairs naturally with WhatsApp follow-up.
            </p>
            <div className="custom-preview">
              <span className="custom-phone one" />
              <span className="custom-phone two" />
            </div>
          </div>
          <form className="order-form">
            <label>
              Name
              <input placeholder="Your name" />
            </label>
            <label>
              Phone model
              <input placeholder="iPhone 15, Samsung S24..." />
            </label>
            <label>
              Cover type
              <select defaultValue="">
                <option value="" disabled>
                  Select cover type
                </option>
                <option>Name Cover</option>
                <option>Photo Cover</option>
                <option>Couple Cover</option>
                <option>Logo / Bulk Custom</option>
              </select>
            </label>
            <label>
              Design note
              <textarea placeholder="Color, name, image idea or quantity" rows="4" />
            </label>
            <button type="button" className="btn primary full">
              Send Custom Enquiry <span>-&gt;</span>
            </button>
          </form>
        </section>

        <section className="section charge-showcase">
          <div className="charge-stage">
            <div className="charge-photo-wrap">
              <div
                className="charge-photo-half charge-photo-left slide-left"
                role="img"
                aria-label="Phone charging"
              />
              <div
                className="charge-photo-half charge-photo-right slide-right"
                role="img"
                aria-label="Charging cable connected"
              />
            </div>
          </div>
          <div className="charge-copy slide-right">
            <span>Fast charging accessories</span>
            <h2>Original chargers, cables and power banks for every phone.</h2>
            <p>
              Type-C, Lightning and Micro USB cables, fast chargers and power
              banks paired with the same quick enquiry flow as our covers.
            </p>
          </div>
        </section>

        <section className="section why reveal">
          <div className="section-heading centered">
            <span>Why choose us</span>
            <h2>Built for shoppers who compare quickly.</h2>
          </div>
          <div className="why-grid">
            {[
              ["Premium Quality", "Soft-touch, shockproof and designer finishes for popular models."],
              ["Fast Catalogue", "Clean sections, clear prices and mobile-first browsing."],
              ["Custom Printing", "Name, photo, couple and logo cover enquiries in one place."],
              ["Bulk Ready", "Dealer and corporate order paths with WhatsApp follow-up."],
            ].map(([title, text], index) => (
              <article className="why-card" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reviews reveal">
          <div className="section-heading">
            <span>Customer reviews</span>
            <h2>Auto-sliding testimonials with premium card motion.</h2>
          </div>
          <div className="review-slider" aria-live="polite">
            <article className="review-card" key={activeReview.name}>
              <div className="stars">*****</div>
              <p>"{activeReview.text}"</p>
              <strong>{activeReview.name}</strong>
              <small>{activeReview.city}</small>
            </article>
          </div>
          <div className="slide-dots review-dots">
            {reviews.map((review, index) => (
              <button
                className={index === reviewIndex ? "active" : ""}
                aria-label={`Show review by ${review.name}`}
                key={review.name}
                onClick={() => setReviewIndex(index)}
              />
            ))}
          </div>
        </section>

        <section className="section gallery reveal">
          <div className="section-heading row">
            <div>
              <span>Instagram / Product gallery</span>
              <h2>Tap a tile for smooth zoom preview.</h2>
            </div>
          </div>
          <div className="gallery-grid">
            {gallery.map(([label, tone, image, fallback], index) => (
              <button
                className={`gallery-tile ${tone}`}
                key={label}
                onClick={() => setLightbox({ label, tone, image, fallback, index })}
              >
                <img src={image} alt={label} loading="lazy" onError={swapTo(fallback)} />
                <strong>{label}</strong>
              </button>
            ))}
          </div>
        </section>

        <section id="bulk-orders" className="section bulk reveal">
          <div>
            <span>Bulk order / dealer enquiry</span>
            <h2>Need 50, 100 or 500 pieces?</h2>
            <p>
              Send your model list and quantity. Dealer pricing, corporate gifting
              and custom logo covers can be handled from the same enquiry flow.
            </p>
          </div>
          <a className="btn dark" href="#contact">
            Start Bulk Enquiry <span>-&gt;</span>
          </a>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="contact-card">
            <span>Contact</span>
            <h2>Mobile Cover Hub</h2>
            <p>Shop No. 21, City Market Road, Near Main Circle</p>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <a href="mailto:hello@mobilecoverhub.com">hello@mobilecoverhub.com</a>
          </div>
          <form className="contact-form">
            <input placeholder="Name" />
            <input placeholder="Mobile number" />
            <select defaultValue="">
              <option value="" disabled>
                Product interest
              </option>
              {productMenu.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <button type="button" className="btn primary full">
              Request Callback <span>-&gt;</span>
            </button>
          </form>
        </section>
      </main>

      <a className="whatsapp" href="https://wa.me/919876543210" aria-label="Chat on WhatsApp">
        WA
      </a>

      <footer className="footer">
        <div className="brand">
          <span className="logo-mark">CK</span>
          <strong>CaseKart</strong>
        </div>
        <p>Mobile covers, custom cases, tempered glass and accessories.</p>
        <div>
          {menuItems.map((item) => (
            <a href={navHref(item)} key={item}>
              {item}
            </a>
          ))}
        </div>
      </footer>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button aria-label="Close preview" onClick={() => setLightbox(null)}>
            x
          </button>
          <div className={`lightbox-card ${lightbox.tone}`}>
            <img src={lightbox.image} alt={lightbox.label} onError={swapTo(lightbox.fallback)} />
            <h3>{lightbox.label}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="CaseKart home">
        <span className="logo-mark">CK</span>
        <span>
          <strong>CaseKart</strong>
          <small>Mobile Cover Hub</small>
        </span>
      </a>

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? "open" : ""}>
        {menuItems.map((item) =>
          item === "Products" ? (
            <div
              className="nav-dropdown"
              key={item}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                Products <span>v</span>
              </button>
              <div className={`dropdown-panel ${dropdownOpen ? "open" : ""}`}>
                {productMenu.map((product) => (
                  <a href="#products" key={product} onClick={() => setMenuOpen(false)}>
                    {product}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a href={navHref(item)} key={item} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          )
        )}
      </nav>
    </header>
  );
}

function ProductCard({ badge, fallback, image, index, model, name, price, tone }) {
  return (
    <article
      className="product-card rise-card"
      style={{ "--rise-delay": `${(index % 6) * 0.12}s` }}
    >
      <span className={`product-badge ${tone}`}>{badge}</span>
      <div className="product-image">
        <img src={image} alt={name} loading="lazy" onError={swapTo(fallback)} />
      </div>
      <h3>{name}</h3>
      <p>{model}</p>
      <div className="product-meta">
        <strong>Rs. {price}</strong>
        <small>on enquiry</small>
      </div>
      <button className="quick-btn">
        Enquire Now <span>-&gt;</span>
      </button>
    </article>
  );
}

function slug(value) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

function swapTo(fallback) {
  return (event) => {
    if (event.currentTarget.src.endsWith(fallback)) return;
    event.currentTarget.src = fallback;
  };
}

function navHref(item) {
  const routes = {
    Home: "#home",
    "About Us": "#about",
    Products: "#products",
    "New Arrivals": "#new-arrivals",
    "Custom Covers": "#custom",
    "Bulk Orders": "#bulk-orders",
    Contact: "#contact",
  };

  return routes[item] || `#${slug(item)}`;
}

export default App;
