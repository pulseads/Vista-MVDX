import { ArrowUpRight, ArrowDown, ArrowUp, MapPin } from 'lucide-react';
import Motion from './motion';
const instagram = 'https://www.instagram.com/vistamalvadex/';
const gallery =
  'https://lightroom.adobe.com/shares/09e9e57a785f499a8cee09548f49d703';
const whatsapp =
  'https://wa.me/5527992921782?text=' +
  encodeURIComponent(
    'Olá! Vim pelo site da Malvadex e gostaria de saber mais sobre as peças.',
  );
const maps =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Rua São Luiz, 292, IBES, Vila Velha, ES');
const external = { target: '_blank', rel: 'noopener noreferrer' };
function Action({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      className={'button ' + (secondary ? 'secondary' : 'primary')}
      href={href}
      {...external}
    >
      {children}
      <ArrowUpRight size={20} />
    </a>
  );
}
function Label({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number} /</span>
      <span>{children}</span>
    </div>
  );
}
const business = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Malvadex',
  alternateName: 'MVDX',
  description:
    'Loja física de roupas e acessórios streetwear no IBES, em Vila Velha.',
  url: 'https://vista-malvadex.profissionalpulseads.chatgpt.site',
  telephone: '+55 27 99292-1782',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua São Luiz, 292 — IBES',
    addressLocality: 'Vila Velha',
    addressRegion: 'ES',
    addressCountry: 'BR',
  },
  sameAs: [instagram],
};
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="header">
        <a className="wordmark" href="#inicio" aria-label="Malvadex, início">
          <span>VISTA</span>MALVADEX<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#loja">Loja</a>
          <a href="#pecas">Peças</a>
          <a href="#sobre">Sobre</a>
          <a href="#local">Local</a>
        </nav>
        <a className="header-social" href={instagram} {...external}>
          Instagram <ArrowUpRight size={16} />
        </a>
      </header>
      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-top">
            <span className="eyebrow">
              <span className="tiny-square" />
              Streetwear · Cultura · Atitude
            </span>
            <span className="eyebrow">IBES / Vila Velha — ES</span>
          </div>
          <div className="hero-stage">
            <div className="hero-photo">
              <img
                src="/images/selection-210-960.webp"
                srcSet="/images/selection-210-640.webp 640w, /images/selection-210-960.webp 960w"
                sizes="(max-width:700px) 65vw, 40vw"
                alt="Bucket verde da seleção Malvadex exposto em manequim"
                width="960"
                height="1280"
                fetchPriority="high"
              />
            </div>
            <div className="hero-vertical" aria-hidden="true">
              DO SEU JEITO. VISTA MVDX.
            </div>
            <h1 id="hero-title">
              <span>VISTA</span>
              <span>
                MALVADEX<span className="brand-dot">.</span>
              </span>
            </h1>
          </div>
          <div className="hero-bottom">
            <p>
              Streetwear com presença.
              <br />
              Encontre a sua próxima peça na MVDX.
            </p>
            <div className="hero-actions">
              <Action href={whatsapp}>Falar no WhatsApp</Action>
              <a className="text-link" href="#loja">
                Conhecer a loja <ArrowDown size={18} />
              </a>
            </div>
            <span className="hero-index" aria-hidden="true">
              01 / 08
            </span>
          </div>
        </section>
        <div className="marquee-wrap">
          <div
            className="marquee"
            aria-label="MVDX — Streetwear — Malvadex — Atitude"
          >
            <div aria-hidden="true">
              {[0, 1].map((group) => (
                <span className="marquee-group" key={group}>
                  {[0, 1].map((n) => (
                    <span className="marquee-message" key={n}>
                      MVDX <ArrowUpRight className="marquee-arrow" aria-hidden="true" strokeWidth={2.5} /> STREETWEAR{' '}
                      <i className="marquee-star" /> MALVADEX{' '}
                      <ArrowUpRight className="marquee-arrow" aria-hidden="true" strokeWidth={2.5} /> ATITUDE{' '}
                      <i className="marquee-star" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <Motion />
        </div>
        <section className="section manifesto" id="sobre">
          <Label number="02">O que nos move</Label>
          <div className="manifesto-title" data-reveal>
            <h2>
              <span className="identity-line">MALVADEX É NOME.</span>
              <span className="serif invitation-line">
                VISTA É<br />
                CONVITE.
              </span>
            </h2>
          </div>
          <div className="manifesto-copy">
            <span className="eyebrow">Malvadex / Do seu jeito</span>
            <p>
              Da escolha da peça ao jeito de usar. A Malvadex reúne roupas e
              acessórios que combinam com você, no IBES, em Vila Velha.
            </p>
            <p>Passa na loja, experimenta e troca uma ideia com a gente.</p>
            <a className="text-link" href="#loja">
              Vem conhecer <ArrowDown size={18} />
            </a>
          </div>
        </section>
        <section className="section selection" id="pecas">
          <div className="section-top">
            <div>
              <Label number="03">Na seleção</Label>
              <h2 data-reveal>
                A ESCOLHA
                <br />
                <span className="serif">É SUA.</span>
              </h2>
            </div>
            <div className="section-intro">
              <p>
                Peças para compor o seu dia.
                <br />
                Veja a seleção e fale com a gente
                <br />
                sobre tamanhos e disponibilidade.
              </p>
              <a href={gallery} className="text-link" {...external}>
                Explorar as peças <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="category-grid">
            <a href={gallery} {...external} className="category-editorial">
              <div className="category-photo">
                <img
                  src="/images/selection-8-960.webp"
                  srcSet="/images/selection-8-640.webp 640w, /images/selection-8-960.webp 960w"
                  sizes="(max-width:700px) 88vw, 33vw"
                  alt="Camiseta preta com estampa gráfica, exposta em cabide"
                  width="960"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="category-meta">
                <span className="eyebrow">01</span>
                <h3>Camisetas</h3>
                <ArrowUpRight size={24} />
              </div>
              <span className="category-link">Ver peças na galeria ↗</span>
            </a>
            <a href={gallery} {...external} className="category-editorial">
              <div className="category-photo">
                <img
                  src="/images/selection-158-960.webp"
                  srcSet="/images/selection-158-640.webp 640w, /images/selection-158-960.webp 960w"
                  sizes="(max-width:700px) 88vw, 33vw"
                  alt="Bermuda esportiva cinza da galeria Malvadex"
                  width="960"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="category-meta">
                <span className="eyebrow">02</span>
                <h3>Bermudas</h3>
                <ArrowUpRight size={24} />
              </div>
              <span className="category-link">Ver peças na galeria ↗</span>
            </a>
            <a href={gallery} {...external} className="category-editorial">
              <div className="category-photo">
                <img
                  src="/images/selection-180-960.webp"
                  srcSet="/images/selection-180-640.webp 640w, /images/selection-180-960.webp 960w"
                  sizes="(max-width:700px) 88vw, 33vw"
                  alt="Boné preto exposto na loja Malvadex"
                  width="960"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="category-meta">
                <span className="eyebrow">03</span>
                <h3>Bonés</h3>
                <ArrowUpRight size={24} />
              </div>
              <span className="category-link">Ver peças na galeria ↗</span>
            </a>
          </div>
        </section>
        <section className="section lookbook" id="galeria">
          <div className="section-top">
            <div>
              <Label number="04">Lookbook</Label>
              <h2 data-reveal>
                ESCOLHA A PEÇA.
                <br />
                <span className="serif">VISTA MALVADEX.</span>
              </h2>
            </div>
            <a className="text-link" href={gallery} {...external}>
              Ver galeria completa <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="lookbook-images">
            <figure>
              <a
                href={gallery}
                {...external}
                className="photo"
                aria-label="Estampa em evidência: abrir galeria completa"
              >
                <img
                  src="/images/selection-24-960.webp"
                  srcSet="/images/selection-24-640.webp 640w, /images/selection-24-960.webp 960w"
                  sizes="(max-width:700px) 88vw, 33vw"
                  alt="Camiseta branca com estampa vermelha exposta no painel da loja"
                  width="960"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>
                <span>Estampa em evidência</span>
                <span>01</span>
              </figcaption>
            </figure>
            <figure>
              <a
                href={gallery}
                {...external}
                className="photo"
                aria-label="O detalhe completa: abrir galeria completa"
              >
                <img
                  src="/images/selection-190-960.webp"
                  srcSet="/images/selection-190-640.webp 640w, /images/selection-190-960.webp 960w"
                  sizes="(max-width:700px) 88vw, 33vw"
                  alt="Boné preto em close sobre a prateleira da loja"
                  width="960"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>
                <span>O detalhe completa</span>
                <span>02</span>
              </figcaption>
            </figure>
            <figure>
              <a
                href={gallery}
                {...external}
                className="photo"
                aria-label="Um ponto de cor: abrir galeria completa"
              >
                <img
                  src="/images/selection-56-960.webp"
                  srcSet="/images/selection-56-640.webp 640w, /images/selection-56-960.webp 960w"
                  sizes="(max-width:700px) 88vw, 33vw"
                  alt="Camiseta vermelha em sua cor original"
                  width="960"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>
                <span>Um ponto de cor</span>
                <span>03</span>
              </figcaption>
            </figure>
            <figure>
              <a
                href={gallery}
                {...external}
                className="photo"
                aria-label="De perto, outro olhar: abrir galeria completa"
              >
                <img
                  src="/images/selection-76-960.webp"
                  srcSet="/images/selection-76-640.webp 640w, /images/selection-76-960.webp 960w"
                  sizes="(max-width:700px) 88vw, 33vw"
                  alt="Detalhe de acabamento e estampa na barra de uma camiseta preta"
                  width="960"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>
                <span>De perto, outro olhar</span>
                <span>04</span>
              </figcaption>
            </figure>
          </div>
          <div className="gallery-caption">
            <span className="eyebrow">Uma seleção do nosso universo.</span>
            <span>
              Gostou de uma peça?{' '}
              <a href={whatsapp} {...external}>
                Chama no WhatsApp ↗
              </a>
            </span>
          </div>
        </section>
        <section className="store-section" id="loja">
          <img
            className="store-photo"
            src="/images/hoodie-900.webp"
            alt="Capuz de moletom cinza com textura em destaque e interior escuro"
            width="900"
            height="1200"
            loading="lazy"
            decoding="async"
          />
          <div
            className="store-address-art"
            aria-label="Loja física na Rua São Luiz, 292, IBES"
          >
            <span className="eyebrow">Vila Velha / Espírito Santo</span>
            <div>
              <span className="store-street">RUA SÃO LUIZ</span>
              <strong>
                292<span>.</span>
              </strong>
              <span className="store-district">
                IBES — PRÓXIMO AO TERMINAL.
              </span>
            </div>
            <a href={maps} {...external} className="text-link">
              Traçar o caminho <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="store-copy">
            <Label number="05">A loja</Label>
            <h2 data-reveal>
              DA TELA
              <br />
              <span className="serif">PRA RUA.</span>
            </h2>
            <p>O próximo encontro é na MVDX.</p>
            <p>
              De perto, você sente o tecido, confere o caimento e encontra a
              peça que faz sentido no seu dia. A gente te recebe na Rua São
              Luiz, 292.
            </p>
            <a className="text-link" href="#local">
              Encontre a Malvadex <ArrowDown size={18} />
            </a>
          </div>
        </section>
        <section className="brand-moment" aria-labelledby="brand-title">
          <span className="eyebrow">06 / Presença que fica</span>
          <div className="brand-art">
            <img
              src="/images/mvdx-chrome.webp"
              alt="MVDX em lettering cromado com reflexos vermelhos"
              width="1400"
              height="933"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h2 id="brand-title" data-reveal>
            O LOOK PASSA.
            <br />
            <span className="serif">A PRESENÇA FICA.</span>
          </h2>
          <span className="brand-signature">MALVADEX / PRESENÇA & ATITUDE</span>
        </section>
        <section className="section location" id="local">
          <div className="section-top">
            <div>
              <Label number="07">No IBES, Próximo ao terminal</Label>
              <h2 data-reveal>
                ONDE
                <br />
                <span className="serif">ESTAMOS.</span>
              </h2>
            </div>
            <a className="map-link" href={maps} {...external}>
              <MapPin size={20} /> Vila Velha — ES <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="location-map">
            <iframe
              title="Mapa da Malvadex — Rua São Luiz, 292, IBES, Vila Velha"
              src={
                'https://maps.google.com/maps?q=' +
                encodeURIComponent('Rua São Luiz, 292, IBES, Vila Velha, ES') +
                '&z=17&output=embed'
              }
              width="1200"
              height="460"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-caption">
              <span>
                <strong>MALVADEX</strong>Rua São Luiz, 292 · IBES · Vila Velha —
                ES
              </span>
              <a className="text-link" href={maps} {...external}>
                Abrir no Google Maps <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="contact-grid">
            <div className="contact-item">
              <h3>Vem na loja</h3>
              <address>
                Rua São Luiz, 292
                <br />
                IBES · Vila Velha — ES
              </address>
              <a className="text-link" href={maps} {...external}>
                Abrir no mapa <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="contact-item">
              <h3>Troca uma ideia</h3>
              <a className="contact-value" href={whatsapp} {...external}>
                +55 27 99292-1782
              </a>
              <p>Peças, tamanhos e atendimento.</p>
              <a className="text-link" href={whatsapp} {...external}>
                Falar agora <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="contact-item">
              <h3>Acompanha por lá</h3>
              <a className="contact-value" href={instagram} {...external}>
                @vistamalvadex
              </a>
              <p>O dia a dia da Malvadex.</p>
              <a className="text-link" href={instagram} {...external}>
                Ver Instagram <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="contact-item">
              <h3>Horário</h3>
              <span className="contact-value">A confirmar</span>
              <p>Consulte antes de vir.</p>
              <a className="text-link" href={whatsapp} {...external}>
                Consultar horário <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
        <section className="closing section">
          <Label number="08">O convite tá feito</Label>
          <h2 data-reveal>
            VEM CONHECER.
            <br />
            <span className="serif">VISTA MALVADEX.</span>
          </h2>
          <div className="closing-actions">
            <Action href={whatsapp}>Falar no WhatsApp</Action>
            <Action href={instagram} secondary>
              Ver Instagram
            </Action>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-main">
          <a className="wordmark" href="#inicio" aria-label="Malvadex, início">
            <span>VISTA</span>MALVADEX<span className="brand-dot">.</span>
          </a>
          <address>
            Rua São Luiz, 292 — IBES
            <br />
            Vila Velha — ES
            <br />
            <a href={whatsapp} {...external}>
              +55 27 99292-1782
            </a>
          </address>
          <div className="footer-links">
            <a href={whatsapp} {...external}>
              WhatsApp ↗
            </a>
            <a href={instagram} {...external}>
              @vistamalvadex ↗
            </a>
            <a href={gallery} {...external}>
              Galeria ↗
            </a>
          </div>
          <a className="back-top" href="#inicio" aria-label="Voltar ao início">
            <ArrowUp size={24} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Malvadex.</span>
          <span>Fotos da seleção: Fhilipe Silva</span>
          <a
            className="pulse-credit"
            href="https://www.instagram.com/pulseadss/"
            {...external}
          >
            Desenvolvido por Pulse Ads <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(business).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}

