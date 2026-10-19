
<script setup>
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()

const memories = [
  {
    title: 'Birthday Memories',
    subtitle: 'Ucapan dan kenangan hari spesial.',
    category: 'BIRTHDAY COLLECTION',
    icon: '♡',
    color: 'pink',
    to: '/hbd/2026',
  },
  {
    title: 'Our Diary',
    subtitle: 'Cerita kecil yang selalu berarti.',
    category: 'PERSONAL JOURNAL',
    icon: '✎',
    color: 'yellow',
    to: '/diary/2026',
  },
]

const highlights = [
  {
    number: '01',
    title: 'Every Birthday',
    text: 'Lihat konten HBD dari tahun ke tahun.',
    icon: '✧',
  },
  {
    number: '02',
    title: 'Little Stories',
    text: 'Cerita sederhana dalam versi singkat.',
    icon: '✎',
  },
]
</script>

<template>
  <main class="home-page">
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-content">
        <div class="welcome-label">
          <span>✧</span>
          Selamat datang Lanaa
          <span>✦</span>
        </div>

        <h1>
          Setiap tahun,
          <span>ada hal baru.</span>
        </h1>

        <p class="hero-description">
          Walapaun nama kamu bukan Lanaa, setidaknya nama itu cukup melekat padamu. Jadi itu cukup untuk menunjukan web ini dibuat unukmu hehe.
        </p>

        <div class="hero-actions">
          <a href="https://lboy445.github.io/hbd-lanaa/" class="button button-primary">
            <span class="button-icon">✧</span>
            <span>Lihat HBD 2026</span>
            <span class="button-arrow">→</span>
          </a>

          <RouterLink to="/diary/2026" class="button button-secondary">
            <span class="button-icon">✎</span>
            <span>Baca Cerita singkat 2026</span>
            <span class="button-arrow">→</span>
          </RouterLink>
        </div>

        <div class="hero-note">
          <span class="note-line"></span>
          <span>Aku harap kamu suka</span>
          <span class="note-heart">✦</span>
        </div>
      </div>

      <!-- SCRAPBOOK ILLUSTRATION -->
      <div class="hero-art">
        <div class="art-circle"></div>

        <span class="floating-decoration heart-one">♡</span>
        <span class="floating-decoration heart-two">♥</span>
        <span class="floating-decoration star-one">✧</span>
        <span class="floating-decoration star-two">✦</span>
        <span class="floating-decoration flower-one">✿</span>

        <!-- Main photo -->
        <div class="polaroid polaroid-main">
          <div class="tape tape-main"></div>

          <div class="polaroid-photo sunset-photo">
            <span class="photo-caption">
             the moon ♡
            </span>
          </div>

          <div class="polaroid-label">
           8 jam pertama untuk pertamakalinya
            <span>✿</span>
          </div>
        </div>

        <!-- Secondary photo -->
        <div class="polaroid polaroid-small">
          <div class="tape tape-small"></div>

          <div class="polaroid-photo flower-photo">
            <span class="photo-caption">
              the earth ✧
            </span>
          </div>

          <div class="polaroid-label small-label">
            
          </div>
        </div>

        <!-- Note -->
        <div class="memory-note">
          <span class="note-decoration">♡</span>
          <p>
            Have a nice day,
            <br />
            evri day.
          </p>
          <span class="note-bottom">Bahagia, setiap tahunnya</span>
        </div>
      </div>
    </section>

    <!-- HIGHLIGHTS -->
    <section class="little-section">
      <div class="section-heading">
        <span class="eyebrow">SAVED TREASURES</span>

        <h2>
          Because every moment
          <span>matters.</span>
        </h2>
      </div>

      <div class="highlight-grid">
        <article
          v-for="item in highlights"
          :key="item.number"
          class="highlight-item"
        >
          <div class="highlight-top">
            <span class="highlight-icon">{{ item.icon }}</span>
            <span class="highlight-number">{{ item.number }}</span>
          </div>

          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>

      <div class="closing-note">
        <span class="closing-heart">♡</span>

        <p>
          “Sekarang hanya tersisa cerita yang akan kita kenang, dan mungkin kita akan tersenyum saat
          membaca cerita-cerita ini kembali.”
        </p>

        <span class="closing-caption">
          A LITTLE NOTE TO REMEMBER
        </span>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="home-footer">
      <RouterLink to="/" class="footer-brand">
        Lanaa<span>.</span>
      </RouterLink>

      <p>
        Little moments, <strong> cuma kenangan</strong>
        <span>✧</span>
      </p>

      <span class="footer-year">
        ©LateLost3 {{ currentYear }} 
      </span>
    </footer>
  </main>
</template>

<style scoped>
/* =========================================
   1. COLOR PALETTE
========================================= */

.home-page {
  --primary: #FF758F;
  --secondary: #FFB3C6;
  --accent: #FFB703;
  --background: #FFF5F6;
  --text: #222222;
  --muted: #817780;
  --border: #F5E1E6;
  --white: #FFFFFF;
  --pink-light: #FFE8ED;

  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: 100vh;

  overflow-x: clip;
  color: var(--text);
  background: var(--background);

  font-family: Inter, "Segoe UI", sans-serif;
  line-height: 1.5;
}

.home-page *,
.home-page *::before,
.home-page *::after {
  box-sizing: border-box;
}

.home-page a {
  color: inherit;
  text-decoration: none;
}

.home-page button,
.home-page a {
  -webkit-tap-highlight-color: transparent;
}

.home-page a:focus-visible {
  outline: 3px solid rgba(255, 117, 143, 0.5);
  outline-offset: 4px;
  border-radius: 8px;
}

/* =========================================
   2. HERO LAYOUT
========================================= */

.hero {
  position: relative;
  isolation: isolate;

  width: 100%;
  max-width: 1500px;
  min-height: 620px;

  padding: 75px clamp(24px, 7vw, 105px) 100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
  align-items: center;
  gap: 30px;

  background:
    radial-gradient(
      ellipse at 80% 45%,
      rgba(255, 179, 198, 0.2),
      transparent 42%
    ),
    linear-gradient(145deg, #FFF9FA, #FFF0F3 65%, #FFF5F6);
}

.hero::before {
  content: "";
  position: absolute;
  z-index: -1;

  width: 240px;
  height: 240px;
  top: -155px;
  left: -110px;

  border-radius: 50%;
  background: rgba(255, 179, 198, 0.24);
}

.hero-content {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 610px;
  min-width: 0;
}

.welcome-label {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 22px;

  color: var(--primary);
  font-size: 13px;
  font-weight: 750;
}

.welcome-label span {
  font-size: 18px;
}

.hero h1 {
  margin: 0;

  color: var(--text);
  font-size: clamp(40px, 4.8vw, 66px);
  font-weight: 850;
  line-height: 1.1;
  letter-spacing: -2.4px;
  overflow-wrap: break-word;
}

.hero h1 span {
  display: block;
  color: var(--primary);
}

.hero-description {
  max-width: 520px;
  margin: 23px 0 28px;

  color: var(--muted);
  font-size: 15px;
  line-height: 1.9;
}

/* =========================================
   3. HERO BUTTONS
========================================= */

.hero-actions {
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.button {
  min-height: 51px;
  min-width: 0;
  padding: 0 17px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  border: 1px solid transparent;
  border-radius: 15px;

  font-size: 12px;
  font-weight: 750;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.button-icon {
  font-size: 17px;
}

.button-arrow {
  margin-left: 4px;
  font-size: 18px;
  transition: transform 0.2s ease;
}

.button-primary {
  color: var(--white) !important;
  background: linear-gradient(135deg, #FF758F, #FF6284);
  box-shadow: 0 8px 20px rgba(255, 117, 143, 0.23);
}

.button-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(255, 117, 143, 0.3);
}

.button-secondary {
  color: var(--text) !important;
  background: #FFEAC0;
}

.button-secondary:hover {
  background: #FFDF9A;
  transform: translateY(-3px);
}

.button:hover .button-arrow {
  transform: translateX(3px);
}

.hero-note {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;

  margin-top: 36px;

  color: #A18C94;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
}

.note-line {
  width: 30px;
  height: 1px;
  background: var(--secondary);
}

.note-heart {
  color: var(--primary);
  font-size: 17px;
}

/* =========================================
   4. SCRAPBOOK COLLAGE
========================================= */

.hero-art {
  position: relative;

  width: 100%;
  max-width: 530px;
  min-width: 0;
  min-height: 425px;

  justify-self: center;
}

.art-circle {
  position: absolute;

  width: min(75%, 380px);
  aspect-ratio: 1;
  top: 15px;
  left: 50%;

  border-radius: 50%;
  background: linear-gradient(145deg, #FFE6EC, #FFD5E0);

  transform: translateX(-50%);
}

.polaroid {
  position: absolute;

  padding: 11px 11px 0;
  background: var(--white);
  border-radius: 4px;

  box-shadow: 0 15px 35px rgba(96, 52, 65, 0.14);
  transition: transform 0.3s ease;
}

.polaroid-main {
  z-index: 2;

  width: 60%;
  height: 310px;
  top: 48px;
  left: 8%;

  transform: rotate(-7deg);
}

.polaroid-main:hover {
  transform: rotate(-3deg) translateY(-5px);
}

.polaroid-small {
  z-index: 3;

  width: 39%;
  height: 215px;
  top: 100px;
  right: 0;

  transform: rotate(9deg);
}

.polaroid-small:hover {
  transform: rotate(5deg) translateY(-5px);
}

.polaroid-photo {
  position: relative;

  width: 100%;
  height: calc(100% - 55px);

  overflow: hidden;
  border-radius: 3px;

  background-color: #F9D9E1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.sunset-photo {
  background-image:
    linear-gradient(
      180deg,
      transparent 45%,
      rgba(70, 45, 75, 0.25)
    ),
    url("/src/assets/suzuki.jpg");

  background-color: #EABBCB;
}

.flower-photo {
  background-image:
    linear-gradient(
      180deg,
      rgba(255, 179, 198, 0.05),
      rgba(255, 117, 143, 0.1)
    ),
    url("/src/assets/tani.jpg");

  background-color: #F4D0DC;
}

.photo-caption {
  position: absolute;
  right: 5px;
  bottom: 8px;
  left: 5px;

  color: var(--white);
  font-size: 10px;
  font-style: italic;
  text-align: center;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.45);
}

.polaroid-label {
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  color: #77717A;
  font-family: Georgia, serif;
  font-size: 13px;
  font-style: italic;
  text-align: center;
}

.polaroid-label span {
  color: var(--primary);
  font-size: 17px;
}

.small-label {
  height: 45px;
  font-size: 10px;
}

/* Tape */

.tape {
  position: absolute;
  z-index: 4;

  height: 22px;

  background-color: rgba(255, 160, 177, 0.8);
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.65) 1px,
    transparent 1px
  );
  background-size: 9px 9px;
}

.tape-main {
  width: 90px;
  top: -7px;
  left: 35%;
  transform: rotate(2deg);
}

.tape-small {
  width: 65px;
  top: -7px;
  left: 33%;
  transform: rotate(-5deg);
}

/* Floating decoration */

.floating-decoration {
  position: absolute;
  z-index: 4;
  pointer-events: none;
}

.heart-one {
  top: 110px;
  left: 0;
  color: var(--primary);
  font-size: 35px;
  transform: rotate(-18deg);
}

.heart-two {
  right: 12%;
  bottom: 25px;
  color: var(--primary);
  font-size: 28px;
}

.star-one {
  top: 45px;
  right: 0;
  color: var(--accent);
  font-size: 38px;
}

.star-two {
  top: 95px;
  right: 5%;
  color: var(--accent);
  font-size: 20px;
}

.flower-one {
  left: 50%;
  bottom: 0;
  color: #FF9BAE;
  font-size: 35px;
  transform: rotate(-15deg);
}

/* Memory note */

.memory-note {
  position: absolute;
  z-index: 5;

  right: 0;
  bottom: 22px;

  width: 115px;
  min-height: 120px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: #FFF0F0;
  box-shadow: 0 9px 22px rgba(96, 52, 65, 0.1);

  transform: rotate(7deg);
}

.note-decoration {
  color: var(--primary);
  font-size: 20px;
}

.memory-note p {
  margin: 5px 0 8px;

  color: #655760;
  font-family: Georgia, serif;
  font-size: 13px;
  font-style: italic;
  line-height: 1.5;
  text-align: center;
}

.note-bottom {
  color: #B49CA4;
  font-size: 8px;
}

/* =========================================
   5. HERO BOTTOM
========================================= */

.hero-bottom-note {
  position: absolute;
  left: clamp(24px, 7vw, 105px);
  bottom: 29px;

  display: flex;
  align-items: center;
  gap: 10px;

  color: #D98A9C;
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 1.6px;
}

.hero-bottom-note > span {
  font-size: 14px;
}

.hero-bottom-note i {
  width: 35px;
  height: 1px;
  background: var(--secondary);
}

.scroll-indicator {
  position: absolute;
  right: 25px;
  bottom: 25px;

  display: flex;
  align-items: center;
  gap: 9px;

  color: var(--muted);
  font-size: 10px;

  transition: color 0.2s ease;
}

.scroll-indicator:hover {
  color: var(--primary);
}

.scroll-icon {
  width: 28px;
  height: 28px;

  display: grid;
  place-items: center;

  color: var(--white);
  background: var(--primary);
  border-radius: 50%;
  font-size: 17px;
}

/* =========================================
   6. MEMORY SECTION
========================================= */

.memories-section {
  width: 100%;
  padding: 80px clamp(24px, 7vw, 105px);
  background: var(--white);
}

.section-heading {
  width: 100%;
  max-width: 620px;
  margin: 0 auto 40px;
  text-align: center;
}

.eyebrow {
  color: var(--primary);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2.2px;
}

.section-heading h2 {
  margin: 14px 0;

  color: var(--text);
  font-size: clamp(28px, 3.4vw, 41px);
  font-weight: 850;
  line-height: 1.2;
  letter-spacing: -1.2px;
}

.section-heading h2 span {
  color: var(--primary);
}

.section-heading > p {
  margin: 0;

  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.memory-grid {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.memory-card {
  min-width: 0;
  min-height: 225px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border: 1px solid var(--border);
  border-radius: 20px;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.memory-card.pink {
  background: linear-gradient(145deg, #FFF5F7, #FFE9EE);
}

.memory-card.yellow {
  background: linear-gradient(145deg, #FFFAEC, #FFF0CE);
}

.memory-card:hover {
  transform: translateY(-4px);
  border-color: var(--secondary);
  box-shadow: 0 12px 30px rgba(89, 40, 54, 0.08);
}

.memory-card-top {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.memory-icon {
  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  border-radius: 14px;
  background: var(--white);
  color: var(--primary);
  font-size: 24px;
}

.yellow .memory-icon {
  color: #B98000;
}

.memory-arrow {
  color: #B49CA4;
  font-size: 21px;
  transition: transform 0.2s ease;
}

.memory-card:hover .memory-arrow {
  color: var(--primary);
  transform: translate(3px, -3px);
}

.memory-category {
  margin-top: 19px;

  color: #B58A97;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.4px;
}

.memory-card h3 {
  margin: 8px 0 5px;

  color: var(--text);
  font-size: 21px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.memory-card > p {
  margin: 0;

  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.memory-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-top: 17px;

  color: #E95172;
  font-size: 12px;
  font-weight: 750;
}

.yellow .memory-link {
  color: #997000;
}

/* =========================================
   7. HIGHLIGHTS
========================================= */

.little-section {
  width: 100%;
  padding: 75px clamp(24px, 7vw, 105px);

  background:
    radial-gradient(
      ellipse at 50% 100%,
      rgba(255, 179, 198, 0.18),
      transparent 60%
    ),
    var(--background);
}

.little-section .section-heading {
  margin-bottom: 35px;
}

.highlight-grid {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 17px;
}

.highlight-item {
  min-width: 0;
  padding: 23px;

  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--border);
  border-radius: 18px;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.highlight-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(89, 40, 54, 0.06);
}

.highlight-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.highlight-icon {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  border-radius: 12px;
  color: var(--primary);
  background: #FFE8ED;
  font-size: 22px;
}

.highlight-number {
  color: #D8B8C1;
  font-size: 12px;
  font-weight: 800;
}

.highlight-item h3 {
  margin: 18px 0 8px;
  font-size: 16px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.highlight-item p {
  margin: 0;

  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

/* Closing quote */

.closing-note {
  width: 100%;
  max-width: 600px;
  margin: 55px auto 0;
  text-align: center;
}

.closing-heart {
  color: var(--primary);
  font-size: 28px;
}

.closing-note p {
  margin: 13px 0;

  color: #655760;
  font-family: Georgia, serif;
  font-size: clamp(17px, 2.3vw, 22px);
  font-style: italic;
  line-height: 1.7;
}

.closing-caption {
  color: #BD929F;
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 1.8px;
}

/* =========================================
   8. FOOTER
========================================= */

.home-footer {
  width: 100%;
  min-width: 0;
  min-height: 95px;

  padding: 23px clamp(24px, 7vw, 105px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  background: var(--white);
  border-top: 1px solid var(--border);
}

.footer-brand {
  color: var(--text);
  font-size: 21px;
  font-weight: 850;
  letter-spacing: -1px;
}

.footer-brand span {
  color: var(--primary);
}

.home-footer p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.home-footer p strong {
  color: var(--primary);
}

.home-footer p span {
  color: var(--primary);
}

.footer-year {
  color: #A49AA0;
  font-size: 11px;
}

/* =========================================
   9. TABLET
========================================= */

@media (max-width: 1000px) {
  .hero {
    min-height: 560px;
    padding: 65px 30px 90px;
    gap: 15px;
  }

  .hero h1 {
    font-size: clamp(37px, 5vw, 52px);
    letter-spacing: -1.7px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-art {
    min-height: 370px;
  }

  .polaroid-main {
    height: 275px;
  }

  .polaroid-small {
    height: 190px;
  }

  .memory-note {
    width: 100px;
    min-height: 105px;
  }

  .memories-section,
  .little-section {
    padding-right: 30px;
    padding-left: 30px;
  }

  .highlight-item {
    padding: 19px;
  }
}

/* =========================================
   10. MOBILE
========================================= */

@media (max-width: 700px) {
  .hero {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 15px;

    min-height: auto;
    padding: 42px 22px 30px;
  }

  .hero-content {
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
  }

  .welcome-label {
    margin-bottom: 18px;
    font-size: 12px;
  }

  .hero h1 {
    font-size: clamp(34px, 8vw, 49px);
    line-height: 1.14;
    letter-spacing: -1.5px;
  }

  .hero-description {
    margin: 18px 0 23px;
    font-size: 14px;
    line-height: 1.85;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .button {
    width: 100%;
    min-height: 48px;
    padding: 0 10px;
    gap: 6px;
    font-size: 11px;
  }

  .button-arrow {
    margin-left: auto;
  }

  .hero-note {
    margin-top: 25px;
    font-size: 9px;
    letter-spacing: 1px;
  }

  /* Kolase diperkecil dan tidak mendorong lebar halaman */

  .hero-art {
    width: 100%;
    max-width: 390px;
    height: 340px;
    min-height: 0;
    margin: 8px auto 0;
  }

  .art-circle {
    width: min(78vw, 310px);
    height: min(78vw, 310px);
    top: 12px;
  }

  .polaroid-main {
    width: 65%;
    height: 265px;
    top: 32px;
    left: 5%;
    padding: 9px 9px 0;
  }

  .polaroid-small {
    width: 41%;
    height: 174px;
    top: 94px;
    right: 1%;
    padding: 8px 8px 0;
  }

  .polaroid-photo {
    height: calc(100% - 49px);
  }

  .polaroid-label {
    height: 49px;
    font-size: 10px;
  }

  .small-label {
    height: 40px;
    font-size: 9px;
  }

  .tape-main {
    width: 70px;
    height: 18px;
  }

  .tape-small {
    width: 50px;
    height: 16px;
  }

  .memory-note {
    width: 88px;
    min-height: 96px;
    right: 0;
    bottom: 3px;
    padding: 7px 4px;
  }

  .memory-note p {
    font-size: 10px;
  }

  .note-bottom {
    font-size: 7px;
  }

  .heart-one {
    top: 90px;
    left: 0;
    font-size: 27px;
  }

  .heart-two {
    right: 8%;
    bottom: 10px;
    font-size: 23px;
  }

  .star-one {
    top: 30px;
    right: 3%;
    font-size: 29px;
  }

  .star-two {
    top: 75px;
    right: 3%;
    font-size: 17px;
  }

  .flower-one {
    left: 43%;
    bottom: 0;
    font-size: 28px;
  }

  /* Bagian bawah hero mengikuti alur dokumen */

  .hero-bottom-note {
    position: static;
    margin-top: 6px;
    font-size: 8px;
    letter-spacing: 0.8px;
  }

  .hero-bottom-note i {
    width: 20px;
  }

  .scroll-indicator {
    position: static;
    align-self: center;
    margin-top: 5px;
  }

  .hero::before {
    width: 150px;
    height: 150px;
  }

  .hero::after {
    display: none;
  }

  /* Memory cards */

  .memories-section {
    padding: 55px 22px;
  }

  .section-heading {
    margin-bottom: 28px;
  }

  .section-heading h2 {
    font-size: clamp(27px, 6.5vw, 34px);
    letter-spacing: -0.8px;
  }

  .section-heading > p {
    font-size: 13px;
  }

  .memory-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
  }

  .memory-card {
    min-height: 0;
    padding: 21px;
    border-radius: 17px;
  }

  .memory-card h3 {
    font-size: 20px;
  }

  /* Highlight cards */

  .little-section {
    padding: 55px 22px;
  }

  .little-section .section-heading h2 {
    font-size: clamp(25px, 6vw, 32px);
  }

  .highlight-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }

  .highlight-item {
    padding: 20px;
  }

  .highlight-item h3 {
    margin-top: 14px;
  }

  .closing-note {
    margin-top: 42px;
  }

  .closing-note p {
    font-size: 17px;
  }

  /* Footer */

  .home-footer {
    min-height: 0;
    padding: 27px 18px;

    flex-direction: column;
    justify-content: center;
    gap: 10px;

    text-align: center;
  }
}

/* =========================================
   11. SMALL MOBILE
========================================= */

@media (max-width: 420px) {
  .hero {
    padding: 34px 17px 27px;
  }

  .hero h1 {
    font-size: clamp(31px, 8.4vw, 36px);
    letter-spacing: -1.1px;
  }

  .hero-description {
    font-size: 13px;
  }

  /* Tombol vertikal pada HP sempit */

  .hero-actions {
    grid-template-columns: minmax(0, 1fr);
  }

  .button {
    min-height: 47px;
    font-size: 12px;
  }

  .button-arrow {
    margin-left: 4px;
  }

  .hero-art {
    max-width: 350px;
    height: 300px;
    margin-top: 5px;
  }

  .art-circle {
    width: min(78vw, 280px);
    height: min(78vw, 280px);
  }

  .polaroid-main {
    width: 67%;
    height: 235px;
    top: 29px;
    left: 3%;
  }

  .polaroid-small {
    width: 41%;
    height: 155px;
    top: 82px;
    right: 0;
  }

  .polaroid-photo {
    height: calc(100% - 43px);
  }

  .polaroid-label {
    height: 43px;
    font-size: 9px;
  }

  .small-label {
    height: 35px;
    font-size: 8px;
  }

  .memory-note {
    width: 78px;
    min-height: 86px;
    right: 0;
    bottom: 2px;
  }

  .memory-note p {
    font-size: 9px;
  }

  .note-decoration {
    font-size: 16px;
  }

  .note-bottom {
    font-size: 6px;
  }

  .hero-note {
    letter-spacing: 0.6px;
    font-size: 8px;
  }

  .hero-bottom-note {
    font-size: 7px;
    letter-spacing: 0.4px;
  }

  .memories-section,
  .little-section {
    padding: 45px 17px;
  }

  .memory-card {
    padding: 18px;
  }
}

/* =========================================
   12. EXTRA SMALL MOBILE
========================================= */

@media (max-width: 350px) {
  .hero {
    padding-right: 13px;
    padding-left: 13px;
  }

  .hero h1 {
    font-size: 29px;
  }

  .hero-description {
    font-size: 12px;
  }

  .hero-art {
    height: 270px;
  }

  .polaroid-main {
    height: 215px;
  }

  .polaroid-small {
    height: 140px;
  }

  .memory-note {
    width: 69px;
    min-height: 77px;
  }

  .memory-note p {
    font-size: 8px;
  }

  .hero-bottom-note {
    font-size: 6px;
    letter-spacing: 0.2px;
  }
}

/* =========================================
   13. ACCESSIBILITY
========================================= */

@media (prefers-reduced-motion: reduce) {
  .home-page *,
  .home-page *::before,
  .home-page *::after {
    animation: none !important;
    scroll-behavior: auto !important;
    transition: none !important;
  }
}
</style>
