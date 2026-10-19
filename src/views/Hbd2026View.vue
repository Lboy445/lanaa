<template>
  <div class="birthday-page">
    <header class="hero" id="home">
      <span class="floating-heart heart-one">♡</span>
      <span class="floating-heart heart-two">✧</span>
      <span class="floating-heart heart-three">♡</span>

      <div class="hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">A LITTLE GIFT FOR YOU ♡</div>
          <h1>Selamat<br />Ulang <em>Tahun</em></h1>
          <p class="hero-description">
            Hari ini adalah hari yang sangat spesial. Bukan hanya tentang bertambahnya usia,
            tetapi juga tentang semua kebahagiaan yang pantas kamu dapatkan.
          </p>
          <button class="primary-btn" @click="openSpecialMessage">
            ♡ Buka Pesan Spesial &nbsp; →
          </button>
        </div>

        <div class="photo-area">
          <div class="polaroid">
            <div class="tape"></div>
            <div class="photo-placeholder">
              <span>♡</span>
              <p>A BEAUTIFUL MEMORY</p>
            </div>
            <div class="polaroid-caption">For you, always ♡</div>
          </div>
        </div>
      </div>
      <a class="scroll-hint" href="#pesan">SCROLL DOWN ↓</a>
    </header>

    <section class="letter-section" id="pesan">
      <div class="section-heading">
        <div class="small">A letter from my heart</div>
        <h2>A Little Letter for You ♡</h2>
        <p>Ada beberapa hal yang ingin aku sampaikan di hari spesialmu ini.</p>
      </div>

      <div class="letter-wrap">
        <article class="letter">
          <h3>Untukmu, seseorang yang spesial ♡</h3>
          <p>
            Hai, kamu! Selamat ulang tahun, ya. Hari ini adalah hari ketika seseorang yang
            istimewa seperti kamu hadir di dunia. Dan aku senang karena bisa mengenalmu.
          </p>
          <p>
            Terima kasih sudah menjadi dirimu sendiri. Semoga setiap langkah yang kamu ambil
            selalu membawa kamu lebih dekat dengan hal-hal yang kamu impikan.
          </p>
          <p>
            Semoga kamu selalu diberi kesehatan, kebahagiaan, hati yang tenang, dan kekuatan
            untuk melewati hari-hari yang tidak mudah. Semoga hal-hal baik datang kepadamu
            dengan cara yang paling indah.
          </p>
          <p>
            Jangan terlalu keras pada dirimu sendiri, ya. Kamu juga pantas beristirahat,
            merasa bahagia, dan menikmati hidup. Semoga tahun ini menjadi salah satu bab
            paling indah dalam ceritamu.
          </p>
          <p>
            Sekali lagi, selamat ulang tahun. Tetaplah menjadi kamu yang aku kenal.
            Semoga senyummu selalu punya alasan untuk hadir. ♡
          </p>
          <div class="signature">With love, someone who cares ♡</div>

          <div class="letter-controls">
            <button class="soft-btn" @click="toggleSecret">
              {{ secretOpened ? 'Tutup pesan kecil ♡' : 'Ada satu pesan lagi... ♡' }}
            </button>
          </div>

          <div class="secret" :class="{ show: secretVisible }">
            <p>{{ typedMessage }}<span v-if="typing">|</span></p>
            <span style="font-size: 24px;">♡ ✧ ♡</span>
          </div>
        </article>
      </div>
    </section>

    <section class="music-section" id="musik">
      <div class="section-heading">
        <div class="small">A song for you</div>
        <h2>Our Little Soundtrack ♡</h2>
        <p>Putar lagu ini sambil membaca pesan kecil yang sudah disiapkan khusus untukmu.</p>
      </div>

      <div class="music-card">
        <div class="music-top">
          <div class="album">♫</div>
          <div class="song-info">
            <h3>Musik</h3>
            <p>musik.mp3 · A little melody for your day ♡</p>
          </div>
          <span class="music-heart">♥</span>
        </div>

        <audio
          ref="audioRef"
          preload="metadata"
          @loadedmetadata="updateDuration"
          @timeupdate="updateProgress"
          @ended="onEnded"
          @error="onAudioError"
        >
          <source="musik.mp3" type="audio/mpeg" />
        </audio>

        <div class="progress" @click="seekMusic" role="slider" aria-label="Posisi musik"
             :aria-valuenow="progress" tabindex="0">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="music-time">
          <span>{{ formatTime(currentTime) }}</span>
          <span>{{ formatTime(duration) }}</span>
        </div>

        <div class="music-controls">
          <button @click="restartMusic" aria-label="Mulai ulang">↺</button>
          <button class="play-btn" @click="toggleMusic" :aria-label="isPlaying ? 'Jeda musik' : 'Putar musik'">
            {{ isPlaying ? 'Ⅱ' : '▶' }}
          </button>
          <button @click="toggleMute" :aria-label="isMuted ? 'Nyalakan suara' : 'Matikan suara'">
            {{ isMuted ? '♪̸' : '♫' }}
          </button>
        </div>
        <p class="music-note">{{ musicStatus }}</p>
      </div>
    </section>

    <section class="ending" id="akhir">
      <div class="ending-heart">♥</div>
      <h2>One More Thing...</h2>
      <p>
        Di antara banyak hal indah di dunia ini, semoga kamu selalu menemukan alasan
        untuk tersenyum dan merasa dicintai. Terima kasih sudah hadir dan menjadi bagian
        dari cerita yang indah.
      </p>
      <p style="margin-top: 20px;">
        Happy birthday, my favorite person. Semoga bahagia selalu menemukan jalan
        untuk pulang kepadamu. ♡
      </p>
      <div class="from">Made with love, just for you ♡</div>
    </section>

    <footer>MADE WITH ♡ AND A LITTLE BIT OF MAGIC</footer>

    <span
      v-for="heart in hearts"
      :key="heart.id"
      class="particle"
      :style="{
        left: heart.left,
        fontSize: heart.size,
        color: heart.color,
        animationDuration: heart.duration
      }"
    >{{ heart.symbol }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const audioRef = ref(null)
const isPlaying = ref(false)
const isMuted = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const progress = ref(0)
const musicStatus = ref('Sebuah lagu kecil untuk menemani hari spesialmu ♡')

const secretVisible = ref(false)
const secretOpened = ref(false)
const typedMessage = ref('')
const typing = ref(false)
const hearts = ref([])

const secretText =
  'Kalau suatu hari nanti kamu merasa lelah, ingat bahwa kamu sudah berjalan sejauh ini. ' +
  'Tidak apa-apa jika harus pelan-pelan. Tidak apa-apa jika sesekali beristirahat. ' +
  'Aku berharap hari-harimu dipenuhi hal-hal yang membuatmu merasa bahwa hidup ini indah. ' +
  'Selamat bertambah usia, seseorang yang spesial. ♡'

let typeTimer = null
let heartTimer = null
let heartId = 0

function createHearts(amount = 5) {
  const symbols = ['♡', '♥', '✧', '❤']
  const colors = ['#d77da3', '#f1a6c2', '#a78ab9', '#ffffff']
  const newHearts = Array.from({ length: amount }, () => {
    const id = ++heartId
    const heart = {
      id,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: `${Math.random() * 100}vw`,
      size: `${14 + Math.random() * 22}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: `${4 + Math.random() * 4}s`
    }
    setTimeout(() => {
      hearts.value = hearts.value.filter(item => item.id !== id)
    }, parseFloat(heart.duration) * 1000)
    return heart
  })
  hearts.value.push(...newHearts)
}

function openSpecialMessage() {
  document.getElementById('pesan')?.scrollIntoView({ behavior: 'smooth' })
  createHearts(12)
}

function toggleSecret() {
  if (secretVisible.value) {
    secretVisible.value = false
    return
  }

  secretVisible.value = true
  createHearts(18)

  if (secretOpened.value) return
  secretOpened.value = true
  typing.value = true
  let index = 0

  const typeNext = () => {
    if (index < secretText.length) {
      typedMessage.value += secretText.charAt(index++)
      typeTimer = setTimeout(typeNext, 35)
    } else {
      typing.value = false
    }
  }
  typeNext()
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60)
  return `${min}:${String(sec).padStart(2, '0')}`
}

async function toggleMusic() {
  const audio = audioRef.value
  if (!audio) return

  if (audio.paused) {
    try {
      await audio.play()
      isPlaying.value = true
      musicStatus.value = 'Sedang memutar lagu untukmu ♡'
    } catch {
      musicStatus.value = 'Musik belum tersedia. Pastikan file musik.mp3 berada di folder public.'
    }
  } else {
    audio.pause()
    isPlaying.value = false
    musicStatus.value = 'Musik dijeda. Lanjutkan kapan saja ♡'
  }
}

function toggleMute() {
  const audio = audioRef.value
  if (!audio) return
  audio.muted = !audio.muted
  isMuted.value = audio.muted
}

async function restartMusic() {
  const audio = audioRef.value
  if (!audio) return
  audio.currentTime = 0
  currentTime.value = 0
  progress.value = 0

  try {
    await audio.play()
    isPlaying.value = true
    musicStatus.value = 'Memutar ulang lagu ♡'
  } catch {
    musicStatus.value = 'Klik tombol putar untuk memulai musik.'
  }
}

function updateDuration() {
  duration.value = audioRef.value?.duration || 0
}

function updateProgress() {
  const audio = audioRef.value
  if (!audio) return
  currentTime.value = audio.currentTime
  duration.value = audio.duration || 0
  progress.value = duration.value ? (audio.currentTime / duration.value) * 100 : 0
}

function seekMusic(event) {
  const audio = audioRef.value
  if (!audio || !Number.isFinite(audio.duration)) return
  const rect = event.currentTarget.getBoundingClientRect()
  const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
  audio.currentTime = ratio * audio.duration
  updateProgress()
}

function onEnded() {
  isPlaying.value = false
  progress.value = 0
  musicStatus.value = 'Semoga lagu ini membuatmu tersenyum ♡'
}

function onAudioError() {
  isPlaying.value = false
  musicStatus.value = 'Tambahkan file musik.mp3 ke folder public agar lagu bisa diputar.'
}

onMounted(() => {
  heartTimer = setInterval(() => {
    if (!document.hidden) createHearts(1)
  }, 2200)
})

onBeforeUnmount(() => {
  clearInterval(heartTimer)
  clearTimeout(typeTimer)
  if (audioRef.value) audioRef.value.pause()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Quicksand:wght@400;500;600;700&display=swap');

    :root {
      --pink: #f3a9c3;
      --pink-dark: #cf7098;
      --pink-light: #fff0f5;
      --purple: #8c6a9d;
      --ink: #604b70;
      --paper: #fffaf3;
      --white: #ffffff;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :global(html) {
      scroll-behavior: smooth;
      scroll-padding-top: 80px;
    }

    :global(body) {
      font-family: 'Quicksand', sans-serif;
      color: var(--ink);
      background: var(--pink-light);
      overflow-x: hidden;
    }

    .birthday-page button {
      font: inherit;
      cursor: pointer;
    }

    .birthday-page a {
      text-decoration: none;
      color: inherit;
    }

    /* NAVIGATION */

    nav {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 24px 7%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
      color: white;
    }

    .logo {
      font-size: 19px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 26px;
    }

    .nav-links .birthday-page a {
      font-size: 12px;
      font-weight: 600;
      transition: .3s;
    }

    .nav-links a:hover {
      color: #ffd5e4;
    }

    /* HERO */

    .hero {
      min-height: 690px;
      min-height: 100svh;
      position: relative;
      display: flex;
      align-items: center;
      padding: 110px 8% 80px;
      overflow: hidden;
      background:
        linear-gradient(
          180deg,
          rgba(75, 53, 94, .28),
          rgba(188, 105, 143, .18) 55%,
          rgba(249, 185, 194, .3)
        ),
        linear-gradient(
          135deg,
          #71648e 0%,
          #ad809e 35%,
          #e6a1aa 72%,
          #f8c4bc 100%
        );
    }

    .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse at 75% 75%,
          rgba(255, 211, 161, .8), transparent 22%),
        radial-gradient(ellipse at 15% 15%,
          rgba(255, 205, 229, .24), transparent 35%);
      pointer-events: none;
    }

    .hero-grid {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 65px;
      position: relative;
      z-index: 2;
    }

    .hero-copy {
      color: white;
      text-align: center;
    }

    .eyebrow {
      display: inline-block;
      padding: 9px 18px;
      border: 1px solid rgba(255,255,255,.55);
      border-radius: 30px;
      font-size: 12px;
      letter-spacing: 2px;
      margin-bottom: 26px;
      backdrop-filter: blur(8px);
    }

    .hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(48px, 6vw, 82px);
      line-height: 1.13;
      font-weight: 500;
      margin-bottom: 24px;
    }

    .hero h1 em {
      color: #ffe2e9;
    }

    .hero-description {
      max-width: 410px;
      margin: 0 auto 32px;
      line-height: 2;
      font-size: 14px;
      color: rgba(255,255,255,.93);
    }

    .primary-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 16px 28px;
      border-radius: 50px;
      color: white;
      background: rgba(255,255,255,.17);
      border: 1px solid rgba(255,255,255,.8);
      box-shadow: 0 8px 28px rgba(87,47,75,.15);
      transition: .3s;
      font-weight: 700;
      font-size: 13px;
    }

    .primary-btn:hover {
      background: white;
      color: var(--pink-dark);
      transform: translateY(-4px);
    }

    /* POLAROID */

    .photo-are.birthday-page a {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 0;
    }

    .polaroid {
      position: relative;
      width: min(100%, 350px);
      padding: 15px 15px 58px;
      background: #fffaf1;
      box-shadow: 0 25px 60px rgba(68,39,64,.25);
      transform: rotate(4deg);
      transition: transform .5s;
    }

    .polaroid:hover {
      transform: rotate(0deg) translateY(-5px);
    }

    .tape {
      position: absolute;
      width: 95px;
      height: 26px;
      background: rgba(255, 220, 216, .75);
      top: -12px;
      left: 50%;
      transform: translateX(-50%) rotate(-5deg);
      z-index: 2;
    }

    .photo-placeholder {
      height: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 12px;
      background:
        linear-gradient(160deg,
          rgba(89,62,105,.1),
          rgba(227,143,164,.25)),
        linear-gradient(180deg, #b4a2bc, #efb4b7 65%, #f9d4bb);
      color: white;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .photo-placeholder::after {
      content: "♡";
      font-size: 100px;
      opacity: .65;
      position: absolute;
      bottom: -28px;
      right: 15px;
    }

    .photo-placeholder span {
      font-size: 58px;
    }

    .photo-placeholder p {
      font-size: 12px;
      letter-spacing: 1px;
    }

    .polaroid-caption {
      position: absolute;
      bottom: 18px;
      left: 10px;
      right: 10px;
      text-align: center;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 20px;
    }

    .floating-heart {
      position: absolute;
      color: rgba(255,255,255,.75);
      animation: float 5s ease-in-out infinite;
      pointer-events: none;
    }

    .heart-one {
      top: 22%;
      left: 5%;
      font-size: 36px;
    }

    .heart-two {
      top: 20%;
      right: 8%;
      font-size: 27px;
      animation-delay: 1s;
    }

    .heart-three {
      bottom: 12%;
      left: 45%;
      font-size: 25px;
      animation-delay: 2s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(-8deg); }
      50% { transform: translateY(-18px) rotate(8deg); }
    }

    .scroll-hint {
      position: absolute;
      bottom: 23px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      font-size: 11px;
      letter-spacing: 2px;
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%, 100% { translate: 0 0; }
      50% { translate: 0 7px; }
    }

    /* SECTION GENERAL */

    .birthday-page section:not(.hero) {
      padding: 100px 8%;
    }

    .section-heading {
      text-align: center;
      margin-bottom: 48px;
    }

    .section-heading .small {
      color: var(--pink-dark);
      font-size: 11px;
      letter-spacing: 3px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .section-heading h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(32px, 4vw, 48px);
      font-weight: 500;
      margin-top: 12px;
    }

    .section-heading p {
      font-size: 13px;
      line-height: 1.9;
      max-width: 470px;
      margin: 14px auto 0;
      color: #947d9d;
    }

    /* LETTER */

    .letter-section {
      background:
        radial-gradient(ellipse at 0% 0%,
          #f8dce7, transparent 45%),
        #fff0f3;
    }

    .letter-wrap {
      max-width: 900px;
      margin: auto;
      perspective: 1000px;
    }

    .letter {
      position: relative;
      padding: 55px 65px;
      background:
        repeating-linear-gradient(
          transparent 0px,
          transparent 35px,
          rgba(190,144,161,.13) 36px
        ),
        var(--paper);
      border-radius: 5px;
      box-shadow: 0 20px 55px rgba(115,76,103,.10);
      transform: rotate(-1deg);
      border: 1px solid #f2e3d8;
    }

    .letter::before {
      content: "♡";
      position: absolute;
      top: -23px;
      left: 25px;
      color: var(--pink-dark);
      font-size: 48px;
      transform: rotate(-15deg);
    }

    .letter h3 {
      font-family: 'Playfair Display', serif;
      font-size: 29px;
      margin-bottom: 25px;
      color: #8d547b;
    }

    .letter p {
      font-size: 14px;
      line-height: 2.15;
      margin-bottom: 17px;
      color: #6d5974;
    }

    .letter .signature {
      text-align: right;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 18px;
      margin-top: 30px;
    }

    .letter-controls {
      text-align: center;
      margin-top: 30px;
    }

    .soft-btn {
      background: white;
      color: var(--pink-dark);
      border: 1px solid #f0bfd1;
      border-radius: 30px;
      padding: 13px 24px;
      font-size: 12px;
      font-weight: 700;
      transition: .3s;
    }

    .soft-btn:hover {
      background: var(--pink-dark);
      color: white;
    }

    /* SECRET MESSAGE */

    .secret {
      display: none;
      margin-top: 22px;
      padding: 22px;
      background: #fff0f6;
      border-radius: 15px;
      text-align: center;
      line-height: 2;
      animation: reveal .5s ease;
    }

    .secret.show {
      display: block;
    }

    @keyframes reveal {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* MUSIC PLAYER */

    .music-section {
      background: linear-gradient(145deg, #f8e1eb, #f0d8ed);
    }

    .music-card {
      max-width: 600px;
      margin: auto;
      padding: 30px;
      background: rgba(255,255,255,.7);
      border: 1px solid rgba(255,255,255,.9);
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(124,77,118,.10);
    }

    .music-top {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .album {
      width: 95px;
      height: 95px;
      border-radius: 17px;
      flex-shrink: 0;
      display: grid;
      place-items: center;
      background: linear-gradient(145deg, #ad8cb8, #f3a6be, #f9d7bb);
      color: white;
      font-size: 36px;
      box-shadow: 0 8px 22px rgba(168,107,150,.2);
    }

    .song-info {
      flex: 1;
    }

    .song-info h3 {
      font-family: 'Playfair Display', serif;
      font-size: 23px;
      margin-bottom: 7px;
    }

    .song-info p {
      font-size: 12px;
      color: #a17e9f;
    }

    .music-heart {
      color: #e78cac;
      font-size: 25px;
    }

    .progress {
      width: 100%;
      height: 5px;
      background: #ead5e4;
      border-radius: 10px;
      margin: 27px 0 9px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      width: 0%;
      background: var(--pink-dark);
      border-radius: inherit;
      transition: width .15s linear;
    }

    .music-time {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #987e9c;
    }

    .music-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 28px;
      margin: 25px 0;
    }

    .music-controls .birthday-page button {
      border: 0;
      background: transparent;
      color: #92688e;
      font-size: 21px;
      transition: .2s;
    }

    .music-controls button:hover {
      transform: scale(1.12);
      color: var(--pink-dark);
    }

    .music-controls .play-btn {
      width: 58px;
      height: 58px;
      background: linear-gradient(135deg, #d87da5, #b46c9d);
      border-radius: 50%;
      color: white;
      font-size: 22px;
      box-shadow: 0 8px 20px rgba(196,100,151,.25);
    }

    .music-note {
      text-align: center;
      font-size: 12px;
      line-height: 1.9;
      color: #a17e9f;
    }

    /* FINAL SECTION */

    .ending {
      position: relative;
      text-align: center;
      background: linear-gradient(160deg, #fff0f5, #f7d6e5);
      overflow: hidden;
    }

    .ending-heart {
      font-size: 48px;
      color: #d47ca3;
      display: inline-block;
      animation: heartbeat 1.5s infinite;
      margin-bottom: 22px;
    }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      15% { transform: scale(1.17); }
      30% { transform: scale(1); }
      45% { transform: scale(1.1); }
    }

    .ending h2 {
      font-family: 'Playfair Display', serif;
      font-weight: 500;
      font-size: clamp(30px, 5vw, 48px);
      margin-bottom: 18px;
    }

    .ending p {
      max-width: 510px;
      margin: auto;
      line-height: 2;
      font-size: 14px;
      color: #8e7197;
    }

    .ending .from {
      margin-top: 25px;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: var(--pink-dark);
      font-size: 20px;
    }

    .birthday-page footer {
      background: #f1d2e0;
      text-align: center;
      padding: 22px 15px;
      font-size: 11px;
      color: #9b7995;
      letter-spacing: 1px;
    }

    /* FLOATING PARTICLES */

    .particle {
      position: fixed;
      bottom: -30px;
      z-index: 20;
      pointer-events: none;
      animation: rise linear forwards;
      opacity: .8;
    }

    @keyframes rise {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
      }
      15% { opacity: .8; }
      85% { opacity: .7; }
      100% {
        transform: translateY(-110vh) rotate(35deg);
        opacity: 0;
      }
    }

    /* RESPONSIVE */

    @media (max-width: 800px) {
      nav {
        padding: 22px 6%;
      }

      .logo {
        font-size: 15px;
      }

      .nav-links {
        gap: 14px;
      }

      .nav-links .birthday-page a {
        font-size: 11px;
      }

      .hero {
        padding: 115px 7% 85px;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 45px;
      }

      .hero h1 {
        font-size: clamp(48px, 10vw, 70px);
      }

      .photo-are.birthday-page a {
        max-width: 340px;
        width: 100%;
        margin: auto;
      }

      .polaroid {
        width: 85%;
      }

      .photo-placeholder {
        height: 280px;
      }

      .birthday-page section:not(.hero) {
        padding: 75px 6%;
      }

      .letter {
        padding: 45px 28px;
      }
    }

    @media (max-width: 480px) {
      nav {
        align-items: flex-start;
        gap: 15px;
      }

      .nav-links {
        gap: 12px;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .nav-links .birthday-page a {
        font-size: 10px;
      }

      .hero {
        padding-top: 135px;
      }

      .hero h1 {
        font-size: 48px;
      }

      .hero-description {
        font-size: 13px;
      }

      .polaroid {
        width: 90%;
      }

      .photo-placeholder {
        height: 250px;
      }

      .letter {
        padding: 42px 22px 30px;
      }

      .letter h3 {
        font-size: 25px;
      }

      .letter p {
        font-size: 13px;
      }

      .music-card {
        padding: 22px 18px;
      }

      .album {
        width: 75px;
        height: 75px;
      }

      .song-info h3 {
        font-size: 19px;
      }

      .music-controls {
        gap: 23px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
      }
    }
</style>
