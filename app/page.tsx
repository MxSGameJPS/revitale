const WHATSAPP = "5519997939921";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar uma avaliação no Espaço REVITTALE."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;
const MAPS_LINK =
  "https://www.google.com/maps/place/Espa%C3%A7o+REVITTALE+Massoterapia,+Est%C3%A9tica+Corporal+e+Facial,+Fisioterapia+e+Pilates./@-29.5880301,-51.1035936,17z";
const FACEBOOK_LINK = "https://www.facebook.com/espacorevittale/";
const INSTAGRAM_LINK = "https://www.instagram.com/espacorevittale/";

const services = [
  {
    title: "Massoterapia",
    desc: "Massagens terapêuticas e relaxantes que aliviam tensões, reduzem o estresse e renovam suas energias.",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Estética Corporal",
    desc: "Tratamentos personalizados para modelar, tonificar e cuidar da saúde e beleza do seu corpo.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Estética Facial",
    desc: "Protocolos faciais que promovem viço, firmeza e uma pele mais saudável e radiante.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fisioterapia",
    desc: "Reabilitação e prevenção com técnicas modernas para recuperar movimentos e aliviar dores.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pilates",
    desc: "Fortalecimento, flexibilidade e equilíbrio em aulas que cuidam do corpo e da mente.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bem-estar Integral",
    desc: "Um espaço pensado para o equilíbrio entre corpo e mente, com acolhimento em cada atendimento.",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
  },
];

const benefits = [
  { icon: "🌿", title: "Cuidado Integrado", text: "Corpo e mente tratados de forma completa em um só lugar." },
  { icon: "👐", title: "Profissionais Qualificados", text: "Equipe experiente e dedicada ao seu bem-estar." },
  { icon: "💆", title: "Ambiente Acolhedor", text: "Espaço tranquilo e preparado para o seu relaxamento." },
  { icon: "⭐", title: "Atendimento Personalizado", text: "Protocolos sob medida para as suas necessidades." },
];

const testimonials = [
  {
    text: "Ambiente maravilhoso e profissionais atenciosos. Saio de cada sessão renovada. Recomendo demais!",
    name: "Ana Paula",
    role: "Cliente de Massoterapia",
  },
  {
    text: "As aulas de Pilates mudaram minha rotina. Minhas dores nas costas praticamente sumiram.",
    name: "Carlos Eduardo",
    role: "Aluno de Pilates",
  },
  {
    text: "Tratamento facial excelente, minha pele nunca esteve tão bonita. Equipe nota mil!",
    name: "Juliana Reis",
    role: "Cliente de Estética Facial",
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a href="#inicio" className="logo">
            <span className="logo-name">REVITTALE</span>
            <span className="logo-tag">Corpo & Mente</span>
          </a>
          <nav className="nav">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
              Agendar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="inicio">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">✨ Dois Irmãos / RS — Espaço de Bem-estar</span>
          <h1>
            Bem-estar e qualidade de vida para o seu <span>Corpo & Mente</span>
          </h1>
          <p>
            No Espaço REVITTALE unimos Massoterapia, Estética, Fisioterapia e Pilates
            para proporcionar equilíbrio, saúde e renovação. Seu momento de cuidado começa aqui.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn btn-outline" style={{ color: "#fff", borderColor: "#fff" }}>
              Conheça os serviços
            </a>
          </div>
          <div className="hero-trust">
            <div className="item">
              <span className="num">+800</span>
              <span className="lbl">Clientes satisfeitos</span>
            </div>
            <div className="item">
              <span className="num">5</span>
              <span className="lbl">Especialidades</span>
            </div>
            <div className="item">
              <span className="num">⭐ 5.0</span>
              <span className="lbl">Avaliação dos clientes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section" id="servicos">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Nossos Serviços</span>
            <h2>Cuidado completo para você</h2>
            <p>
              Reunimos as principais especialidades de saúde e bem-estar em um único espaço acolhedor.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <article className="service-card" key={s.title}>
                <div className="service-img" style={{ backgroundImage: `url(${s.img})` }} />
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="service-link">
                    Agendar agora →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section section-alt" id="sobre">
        <div className="container about">
          <div
            className="about-img"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1000&q=80)",
            }}
          />
          <div className="about-text">
            <span className="eyebrow">Sobre o Espaço REVITTALE</span>
            <h2>Nosso maior objetivo é o seu bem-estar</h2>
            <p>
              Localizado em Dois Irmãos/RS, o Espaço REVITTALE nasceu com um propósito claro:
              proporcionar bem-estar e qualidade de vida através de um cuidado integrado entre
              corpo e mente.
            </p>
            <p>
              Aqui você encontra um time de profissionais dedicados, um ambiente acolhedor e
              tratamentos pensados especialmente para as suas necessidades.
            </p>
            <ul className="about-list">
              <li><span className="check">✓</span> Atendimento humanizado e personalizado</li>
              <li><span className="check">✓</span> Estrutura completa e ambiente tranquilo</li>
              <li><span className="check">✓</span> Diversas especialidades em um só lugar</li>
              <li><span className="check">✓</span> Foco em resultados e no seu conforto</li>
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Quero agendar minha avaliação
            </a>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Por que escolher a REVITTALE</span>
            <h2>Você merece o melhor cuidado</h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((b) => (
              <div className="benefit" key={b.title}>
                <div className="icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section section-alt" id="depoimentos">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Depoimentos</span>
            <h2>O que dizem nossos clientes</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="author">
                  <div className="avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="cta-bg" />
        <div className="container cta-inner">
          <h2>Pronto para renovar corpo e mente?</h2>
          <p>
            Agende agora mesmo sua avaliação e descubra o cuidado que você merece.
            Estamos esperando por você em Dois Irmãos/RS.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            Falar no WhatsApp agora
          </a>
        </div>
      </section>

      {/* Contato */}
      <section className="section" id="contato">
        <div className="container contact">
          <div className="contact-info">
            <span className="eyebrow">Fale conosco</span>
            <h2>Agende seu horário</h2>
            <p>
              Entre em contato pelos nossos canais ou preencha o formulário. Teremos prazer
              em atender você.
            </p>
            <div className="contact-item">
              <div className="ico">📍</div>
              <div>
                <div className="label">Endereço</div>
                <div className="value">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                    Dois Irmãos — Rio Grande do Sul
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico">💬</div>
              <div>
                <div className="label">WhatsApp</div>
                <div className="value">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    (19) 99793-9921
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ico">📱</div>
              <div>
                <div className="label">Redes sociais</div>
                <div className="value">
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">Instagram</a>
                  {" · "}
                  <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          <form
            className="form"
            action={WHATSAPP_LINK}
            method="get"
            onSubmit={undefined}
          >
            <h3>Solicite seu agendamento</h3>
            <div className="form-group">
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" name="nome" type="text" placeholder="Seu nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone / WhatsApp</label>
              <input id="telefone" name="telefone" type="tel" placeholder="(00) 00000-0000" required />
            </div>
            <div className="form-group">
              <label htmlFor="servico">Serviço de interesse</label>
              <select id="servico" name="servico">
                <option>Massoterapia</option>
                <option>Estética Corporal</option>
                <option>Estética Facial</option>
                <option>Fisioterapia</option>
                <option>Pilates</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={3} placeholder="Conte-nos como podemos ajudar" />
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Enviar pelo WhatsApp
            </a>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-logo">
              <span className="logo-name">REVITTALE</span>
              <p>
                Espaço de bem-estar em Dois Irmãos/RS. Massoterapia, Estética, Fisioterapia
                e Pilates para o equilíbrio do seu corpo e mente.
              </p>
              <div className="social-row">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">👍</a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
              </div>
            </div>
            <div>
              <h5>Serviços</h5>
              <ul>
                <li><a href="#servicos">Massoterapia</a></li>
                <li><a href="#servicos">Estética Corporal</a></li>
                <li><a href="#servicos">Estética Facial</a></li>
                <li><a href="#servicos">Fisioterapia</a></li>
                <li><a href="#servicos">Pilates</a></li>
              </ul>
            </div>
            <div>
              <h5>Navegação</h5>
              <ul>
                <li><a href="#sobre">Sobre nós</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">Como chegar</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Espaço REVITTALE — Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}