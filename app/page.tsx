import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaCheck,
  FaStar,
  FaArrowRight,
  FaLeaf,
  FaHandHoldingHeart,
  FaSpa,
  FaRegSmile,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  GiLotusFlower,
  GiBodyBalance,
  GiFaceToFace,
  GiMuscularTorso,
  GiMeditation,
} from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";
import type { IconType } from "react-icons";

const WHATSAPP = "5519997939921";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar uma avaliação no Espaço REVITTALE."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`;
const MAPS_LINK =
  "https://www.google.com/maps/place/Espa%C3%A7o+REVITTALE+Massoterapia,+Est%C3%A9tica+Corporal+e+Facial,+Fisioterapia+e+Pilates./@-29.5880301,-51.1035936,17z";
const FACEBOOK_LINK = "https://www.facebook.com/espacorevittale/";
const INSTAGRAM_LINK = "https://www.instagram.com/espacorevittale/";

const services: { title: string; desc: string; img: string }[] = [
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

const benefits: { Icon: IconType; title: string; text: string }[] = [
  { Icon: FaLeaf, title: "Cuidado Integrado", text: "Corpo e mente tratados de forma completa em um só lugar." },
  { Icon: FaHandHoldingHeart, title: "Profissionais Qualificados", text: "Equipe experiente e dedicada ao seu bem-estar." },
  { Icon: FaSpa, title: "Ambiente Acolhedor", text: "Espaço tranquilo e preparado para o seu relaxamento." },
  { Icon: FaRegSmile, title: "Atendimento Personalizado", text: "Protocolos sob medida para as suas necessidades." },
];

const testimonials: { text: string; name: string; role: string }[] = [
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
          
          <h1>
            Bem-estar e qualidade de vida para o seu <span>Corpo & Mente</span>
          </h1>
          <p>
            No Espaço REVITTALE unimos Massoterapia, Estética, Fisioterapia e Pilates
            para proporcionar equilíbrio, saúde e renovação. Seu momento de cuidado começa aqui.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <FaWhatsapp /> Agendar pelo WhatsApp
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
              <span className="num">
                <FaStar style={{ display: "inline", verticalAlign: "-2px" }} /> 5.0
              </span>
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
                    Agendar agora <FaArrowRight style={{ display: "inline", verticalAlign: "-1px" }} />
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
              <li><span className="check"><FaCheck /></span> Atendimento humanizado e personalizado</li>
              <li><span className="check"><FaCheck /></span> Estrutura completa e ambiente tranquilo</li>
              <li><span className="check"><FaCheck /></span> Diversas especialidades em um só lugar</li>
              <li><span className="check"><FaCheck /></span> Foco em resultados e no seu conforto</li>
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
                <div className="icon"><b.Icon /></div>
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
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
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
            <FaWhatsapp /> Falar no WhatsApp agora
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
              <div className="ico"><FaMapMarkerAlt /></div>
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
              <div className="ico"><FaWhatsapp /></div>
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
              <div className="ico"><FaPhoneAlt /></div>
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

          <form className="form" action={WHATSAPP_LINK} method="get">
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
              <FaWhatsapp /> Enviar pelo WhatsApp
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
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
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
        <FaWhatsapp />
      </a>
    </>
  );
}