
<script setup>
import { ref } from 'vue'

const stories = ref([
  {
    id: 1,
    date: 'Awal Cerita',
    title: 'Tiga Tahun Lamanya',
    text: 'Walaupun sudah tiga tahun kita masih saling berkomunikasi dan menjadi lebih dekat dari tahun seblumnya hingga akhirnya kita memiliki sebuah afinitas di game sebagai lovers, dan di hari itu kita membuat sebuah konten di game hahaha... sampai di post di tiktok mu juga. dan ditahun ini juga aku ngepost kamu untuk pertama kalinya.',
    color: 'pink',
    icon: '◈',
  },
  {
    id: 2,
    date: 'A Little Memory',
    title: 'Lovers',
    text: 'Aku tidak menyangka setelah tiga tahun kita berteman akhirnya kamu mengajak ku untuk membuat afinitas lovers digame dan walaupun waktu itu pas main, kita sering di kata-katain sama tim karena memang waktu itu kita tidak terlalu jago bermain hehe. Tapi aku tetap senang karena kita menjadi lovers digame walaupun di real kita tetap teman. Tapi meskipun cuma teman kamu sering live di IG dan penontonya cuma aku, aku akan selalu ingat betapa lucu nya kamu pas live.',
    color: 'yellow',
    icon: '✿',
  },
  {
    id: 3,
    date: 'Catatan Kecil',
    title: 'Seberapa Suka',
    text: 'Dulu aku pikir di tahun ini adalah tahun paling bucin dari tahun tahun sebelumnya tapi sepetinya tidak begitu, karena aku tidak pernah menunjukan seberapa suka aku pada mu dan mungkin kamu juga begitu. Mungkin karena kita cuma teman jadi aku tidak pernah bilang seberapa sayang dan sberapa suka aku ke kamu. Karena di tahun ini tidak ada perasaan yang diungkapkan. Tapi bagaimana jika seandainya dulu ku ungkapkan? hehehe.',
    color: 'peach',
    icon: '✧',
  },
])

</script>

<template>
  <main class="diary-2020">
    <!-- HERO -->
    <section class="diary-hero">
      <span class="decoration heart-one">♡</span>
      <span class="decoration star-one">✧</span>
      <span class="decoration flower-one">✿</span>

      <div class="hero-content">
        <span class="eyebrow">
          <span>✦</span> CERITA SINGKAT <span>✦</span>
        </span>

        <h1>
          Cerita singkat
          <span>2023.</span>
        </h1>

        <div class="hero-caption">
          <span class="caption-icon">✿</span>
          <span>Momen kecil tinggal kenangan</span>
        </div>
      </div>

      <div class="hero-illustration">
        <div class="circle circle-back"></div>
        <div class="circle circle-front"></div>

        <div class="memory-paper">
          <span class="paper-heart"><img style="width: 30px; height: 30px;" src="/src/assets/image.png" alt=""></span>
          <h2>Di tahun<br />2023,</h2>
          <p>Cerita yang<br /> paling berkesan.</p>
          <span class="paper-flower">✿</span>
        </div>

        <div class="floating-card floating-left">
          <span>✧</span>
          <p>Cerita<br />singkat</p>
        </div>

        <div class="floating-card floating-right">
          <span>✧</span>
          <p>hanya<br />kenangan</p>
        </div>
      </div>
    </section>

    <!-- STORY CONTENT -->
    <section class="story-section">
      <header class="section-heading">
        <h2>DI TAHUN <span>2023,</span></h2>
      </header>

      <div class="story-list">
        <article
          v-for="(story, index) in stories"
          :key="story.id"
          class="story-card"
          :class="story.color"
        >
          <div class="story-number">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="number-line"></span>
            <span class="number-heart">{{ story.icon }}</span>
          </div>

          <div class="story-body">
            <span class="story-date">{{ story.date }}</span>
            <h3>{{ story.title }}</h3>
            <p>{{ story.text }}</p>
          </div>

          <div class="story-decoration">
            {{ story.icon }}
          </div>
        </article>
      </div>

      <div class="closing-note">
        <div class="closing-line"></div>
        <span class="closing-heart">✿</span>
        <p>Sekian Cerita singkat.</p>
        <span class="closing-subtitle">DI TAHUN · 2023</span>
        <div class="closing-line"></div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.diary-2020 {
  --primary: #FF758F;
  --secondary: #FFB3C6;
  --accent: #FFB703;
  --background: #FFF5F6;
  --text: #222222;
  --muted: #8B7C82;
  --border: #F4DFE5;
  --white: #FFFFFF;

  width: 100%;
  min-width: 0;
  min-height: 100vh;
  overflow-x: clip;
  color: var(--text);
  background: var(--background);
  font-family: Inter, "Segoe UI", sans-serif;
}

.diary-2020 *,
.diary-2020 *::before,
.diary-2020 *::after {
  box-sizing: border-box;
}

/* HERO */

.diary-hero {
  position: relative;
  isolation: isolate;
  width: 100%;
  max-width: 1500px;
  min-height: 410px;
  margin: 0 auto;
  padding: 55px clamp(22px, 8vw, 110px);

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  align-items: center;
  gap: 30px;

  overflow: hidden;
  background:
    radial-gradient(ellipse at 80% 35%, #FFE1E9 0%, transparent 45%),
    linear-gradient(135deg, #FFFAFB, #FFF0F4);
}

.hero-content {
  position: relative;
  z-index: 2;
  min-width: 0;
}

.eyebrow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 9px;
  color: var(--primary);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.diary-hero h1 {
  margin: 23px 0 17px;
  font-size: clamp(42px, 5vw, 65px);
  line-height: 1.08;
  letter-spacing: -2.5px;
  font-weight: 850;
}

.diary-hero h1 span {
  display: block;
  color: var(--primary);
}

.hero-content > p {
  max-width: 460px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.hero-caption {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 27px;
  color: #9A7782;
  font-family: Georgia, serif;
  font-size: 13px;
  font-style: italic;
}

.caption-icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: var(--primary);
  background: var(--white);
  font-size: 23px;
}

/* DECORATIONS */

.decoration {
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

.heart-one {
  top: 30px;
  right: 8%;
  color: var(--primary);
  font-size: 34px;
}

.star-one {
  bottom: 30px;
  left: 48%;
  color: var(--accent);
  font-size: 30px;
}

.flower-one {
  top: 42px;
  left: 49%;
  color: var(--secondary);
  font-size: 25px;
}

/* HERO SCRAPBOOK */

.hero-illustration {
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  justify-self: center;
}

.circle {
  position: absolute;
  top: 15px;
  left: 50%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translateX(-50%);
}

.circle-back {
  width: 275px;
  background: #FFDCE5;
}

.circle-front {
  top: 65px;
  width: 210px;
  background: rgba(255, 179, 198, 0.4);
}

.memory-paper {
  position: absolute;
  z-index: 2;
  top: 22px;
  left: 50%;
  width: 195px;
  min-height: 255px;
  padding: 25px 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #7E5260;
  background: #FFFEFC;
  border: 1px solid #F8E2E7;
  box-shadow: 0 15px 35px rgba(137, 75, 93, 0.14);
  text-align: center;

  transform: translateX(-50%) rotate(-5deg);
}

.paper-top {
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.paper-heart {
  margin-top: 15px;
  color: var(--primary);
  font-size: 26px;
}

.memory-paper h2 {
  margin: 10px 0;
  color: var(--primary);
  font-family: Georgia, serif;
  font-size: 38px;
  font-weight: 500;
  line-height: 1;
}

.memory-paper p {
  margin: 5px 0 0;
  font-family: Georgia, serif;
  font-size: 12px;
  font-style: italic;
  line-height: 1.7;
}

.paper-flower {
  margin-top: 13px;
  color: #E8B343;
  font-size: 24px;
}

.floating-card {
  position: absolute;
  z-index: 3;
  width: 100px;
  padding: 10px 7px;
  background: var(--white);
  box-shadow: 0 8px 20px rgba(94, 51, 64, 0.1);
  text-align: center;
}

.floating-card > span {
  color: var(--primary);
  font-size: 22px;
}

.floating-card p {
  margin: 3px 0 0;
  color: #8A737B;
  font-family: Georgia, serif;
  font-size: 11px;
  font-style: italic;
  line-height: 1.5;
}

.floating-left {
  top: 50px;
  left: 0;
  transform: rotate(-8deg);
}

.floating-right {
  right: 0;
  bottom: 20px;
  background: #FFF0D0;
  transform: rotate(7deg);
}

.floating-right > span {
  color: #D59B00;
}

/* STORY SECTION */

.story-section {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 65px 30px 70px;
}

.section-heading {
  max-width: 550px;
  margin: 0 auto 38px;
  text-align: center;
}

.section-label {
  color: var(--primary);
  font-size: 9px;
  font-weight: 850;
  letter-spacing: 2px;
}

.section-heading h2 {
  margin: 12px 0;
  font-size: clamp(30px, 4vw, 40px);
  font-weight: 850;
  letter-spacing: -1.5px;
}

.section-heading h2 span {
  color: var(--primary);
}

.section-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

/* STORY CARDS */

.story-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.story-card {
  position: relative;
  min-width: 0;
  padding: 28px 30px;

  display: grid;
  grid-template-columns: 75px minmax(0, 1fr) 35px;
  align-items: start;
  gap: 22px;

  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--white);

  box-shadow: 0 5px 18px rgba(94, 51, 64, 0.025);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.story-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(94, 51, 64, 0.07);
}

.story-card.pink {
  border-left: 4px solid var(--primary);
}

.story-card.yellow {
  border-left: 4px solid var(--accent);
}

.story-card.peach {
  border-left: 4px solid var(--secondary);
}

.story-number {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--primary);
}

.story-number > span:first-child {
  font-family: Georgia, serif;
  font-size: 25px;
  font-style: italic;
}

.number-line {
  width: 1px;
  height: 34px;
  background: #F0D8DF;
}

.number-heart {
  font-size: 18px;
}

.story-body {
  min-width: 0;
}

.story-date {
  color: #C18A98;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.story-body h3 {
  margin: 9px 0 12px;
  font-size: clamp(18px, 2.3vw, 22px);
  line-height: 1.4;
  letter-spacing: -0.5px;
  overflow-wrap: anywhere;
}

.story-body p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
  overflow-wrap: anywhere;
}

.story-decoration {
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  border-radius: 12px;
  color: var(--primary);
  background: #FFF0F3;
  font-size: 22px;
}

.story-card.yellow .story-decoration {
  color: #C38C00;
  background: #FFF4D5;
}

.story-card.peach .story-decoration {
  color: #D77991;
  background: #FFE8EF;
}

/* CLOSING */

.closing-note {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
  text-align: center;
}

.closing-line {
  width: 75px;
  height: 1px;
  background: #F0D8DF;
}

.closing-heart {
  margin-top: 20px;
  color: var(--primary);
  font-size: 30px;
}

.closing-note p {
  margin: 8px 0;
  color: #8D7780;
  font-family: Georgia, serif;
  font-size: 18px;
  font-style: italic;
}

.closing-subtitle {
  margin: 5px 0 20px;
  color: #C09AA5;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.7px;
}

/* TABLET */

@media (max-width: 800px) {
  .diary-hero {
    min-height: 350px;
    padding: 45px 30px;
    gap: 10px;
  }

  .diary-hero h1 {
    font-size: clamp(36px, 5.5vw, 48px);
  }

  .hero-illustration {
    transform: scale(0.85);
  }

  .story-section {
    padding-right: 25px;
    padding-left: 25px;
  }

  .story-card {
    padding: 24px 22px;
    grid-template-columns: 55px minmax(0, 1fr) 30px;
    gap: 17px;
  }
}

/* MOBILE */

@media (max-width: 600px) {
  .diary-hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
    padding: 38px 22px 15px;
  }

  .eyebrow {
    font-size: 9px;
    letter-spacing: 1.5px;
  }

  .diary-hero h1 {
    margin: 17px 0 13px;
    font-size: clamp(36px, 9vw, 47px);
    letter-spacing: -1.5px;
  }

  .hero-content > p {
    font-size: 13px;
    line-height: 1.85;
  }

  .hero-caption {
    margin-top: 20px;
    font-size: 12px;
  }

  .hero-illustration {
    width: 100%;
    max-width: 340px;
    min-height: 280px;
    margin: 10px auto 0;
    transform: none;
  }

  .circle-back {
    width: 240px;
  }

  .circle-front {
    width: 185px;
  }

  .memory-paper {
    width: 170px;
    min-height: 230px;
  }

  .memory-paper h2 {
    font-size: 34px;
  }

  .floating-card {
    width: 85px;
    padding: 8px 5px;
  }

  .floating-card p {
    font-size: 10px;
  }

  .floating-left {
    left: 0;
  }

  .floating-right {
    right: 0;
  }

  .heart-one {
    top: 14px;
    right: 6%;
    font-size: 26px;
  }

  .star-one {
    display: none;
  }

  .flower-one {
    top: auto;
    bottom: 35px;
    left: 6%;
    font-size: 20px;
  }

  .story-section {
    padding: 42px 18px 50px;
  }

  .section-heading {
    margin-bottom: 27px;
  }

  .section-heading h2 {
    font-size: 32px;
  }

  .section-heading p {
    font-size: 12px;
  }

  .story-list {
    gap: 14px;
  }

  .story-card {
    padding: 21px 16px;
    grid-template-columns: 35px minmax(0, 1fr);
    gap: 13px;
    border-radius: 16px;
  }

  .story-number {
    gap: 9px;
  }

  .story-number > span:first-child {
    font-size: 21px;
  }

  .number-line {
    height: 27px;
  }

  .story-body h3 {
    margin: 8px 0 9px;
    font-size: 18px;
  }

  .story-body p {
    font-size: 12px;
    line-height: 1.9;
  }

  .story-decoration {
    display: none;
  }

  .closing-note {
    margin-top: 40px;
  }

  .closing-note p {
    font-size: 16px;
  }
}

/* SMALL MOBILE */

@media (max-width: 360px) {
  .diary-hero {
    padding-right: 16px;
    padding-left: 16px;
  }

  .diary-hero h1 {
    font-size: 34px;
  }

  .hero-illustration {
    min-height: 255px;
  }

  .memory-paper {
    width: 155px;
    min-height: 215px;
  }

  .floating-card {
    width: 74px;
  }

  .story-section {
    padding-right: 13px;
    padding-left: 13px;
  }

  .story-card {
    padding: 18px 12px;
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 10px;
  }

  .story-body h3 {
    font-size: 16px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .story-card {
    transition: none;
  }
}
</style>
