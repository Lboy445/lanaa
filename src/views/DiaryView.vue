
<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'

const route = useRoute()
const router = useRouter()

const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026]

const selectedYear = ref(Number(route.params.year) || 2026)
const searchQuery = ref('')
const selectedMonth = ref('Semua')
const selectedCategory = ref('Semua')

const months = [
  'Semua', 'Januari', 'Februari', 'Maret',
  'April', 'Mei', 'Juni', 'Juli',
  'Agustus', 'September', 'Oktober',
  'November', 'Desember',
]

// Contoh data. Ganti dengan cerita diary milikmu.
const diaryEntries = ref([
  {
    id: 1,
    title: 'A little thing to remember',
    excerpt: 'Terkadang hal-hal sederhana justru menjadi kenangan yang paling berarti.',
    date: '2026-01-12',
    category: 'Personal',
    mood: '♡',
    color: 'pink',
    cover: 'sunset',
    tags: ['daily life', 'memories'],
    content: 'Hari ini aku belajar bahwa kebahagiaan tidak selalu datang dari sesuatu yang besar. Kadang, percakapan singkat dan momen sederhana sudah cukup untuk membuat hari terasa istimewa.',
  },
  {
    id: 2,
    title: 'Somewhere in my mind',
    excerpt: 'Ada banyak hal yang ingin diceritakan, meskipun tidak semuanya bisa diucapkan.',
    date: '2026-02-08',
    category: 'Thoughts',
    mood: '✧',
    color: 'yellow',
    cover: 'flowers',
    tags: ['thoughts', 'self'],
    content: 'Aku ingin memberikan waktu untuk diriku sendiri, memahami apa yang sedang dirasakan, dan menghargai setiap proses yang sedang dijalani.',
  },
  {
    id: 3,
    title: 'A day worth keeping',
    excerpt: 'Satu hari biasa yang ternyata menyimpan banyak cerita kecil.',
    date: '2026-03-21',
    category: 'Daily Life',
    mood: '♥',
    color: 'peach',
    cover: 'sky',
    tags: ['daily life', 'happy'],
    content: 'Hari ini tidak harus sempurna untuk menjadi kenangan yang indah. Aku ingin menyimpan hal-hal baik yang terjadi dan mengingatnya suatu hari nanti.',
  },
  {
    id: 4,
    title: 'Letters to myself',
    excerpt: 'Untuk diriku yang sedang belajar tumbuh, terima kasih sudah bertahan.',
    date: '2026-04-15',
    category: 'Personal',
    mood: '♡',
    color: 'lavender',
    cover: 'letter',
    tags: ['self', 'growth'],
    content: 'Untuk diriku sendiri, tidak apa-apa jika perjalanan ini membutuhkan waktu. Terus melangkah, meskipun perlahan, dan jangan lupa menghargai diri sendiri.',
  },
  {
    id: 5,
    title: 'Little things, big feelings',
    excerpt: 'Beberapa momen memang sederhana, tetapi perasaan di baliknya begitu besar.',
    date: '2026-05-09',
    category: 'Memories',
    mood: '✿',
    color: 'pink',
    cover: 'garden',
    tags: ['memories', 'happy'],
    content: 'Aku ingin mengingat perasaan bahagia ini, bukan hanya peristiwanya. Semoga ketika membaca tulisan ini kembali, aku masih bisa tersenyum.',
  },
  {
    id: 6,
    title: 'A quiet afternoon',
    excerpt: 'Menikmati waktu, merapikan pikiran, dan membiarkan hari berjalan perlahan.',
    date: '2026-06-18',
    category: 'Daily Life',
    mood: '☼',
    color: 'yellow',
    cover: 'sunset',
    tags: ['daily life', 'thoughts'],
    content: 'Tidak semua hari perlu dipenuhi banyak hal. Hari yang tenang juga pantas dirayakan dengan caranya sendiri.',
  },
])

const categories = ['Semua', 'Personal', 'Daily Life', 'Thoughts', 'Memories']

const visibleEntries = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return diaryEntries.value
    .filter((entry) => {
      const date = new Date(`${entry.date}T12:00:00`)
      const matchesYear = date.getFullYear() === selectedYear.value
      const matchesMonth =
        selectedMonth.value === 'Semua' ||
        date.getMonth() === months.indexOf(selectedMonth.value) - 1

      const matchesCategory =
        selectedCategory.value === 'Semua' ||
        entry.category === selectedCategory.value

      const matchesSearch =
        !query ||
        entry.title.toLowerCase().includes(query) ||
        entry.excerpt.toLowerCase().includes(query) ||
        entry.category.toLowerCase().includes(query) ||
        entry.tags.some((tag) => tag.toLowerCase().includes(query))

      return matchesYear && matchesMonth && matchesCategory && matchesSearch
    })
    .sort((a, b) => b.date.localeCompare(a.date))
})

const formattedDate = (dateString) => {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${dateString}T12:00:00`))
}

const monthLabel = (dateString) => {
  return new Intl.DateTimeFormat('id-ID', {
    month: 'long',
  }).format(new Date(`${dateString}T12:00:00`))
}

const totalForYear = computed(() =>
  diaryEntries.value.filter(
    (entry) => new Date(`${entry.date}T12:00:00`).getFullYear() === selectedYear.value,
  ).length,
)

watch(
  () => route.params.year,
  (year) => {
    const parsedYear = Number(year)
    if (years.includes(parsedYear)) {
      selectedYear.value = parsedYear
    }
  },
)

watch(selectedYear, (year) => {
  if (Number(route.params.year) !== year) {
    router.push(`/diary/${year}`)
  }
})

const openEntry = (entry) => {
  router.push({
    name: 'diary-detail',
    params: {
      year: selectedYear.value,
      id: entry.id,
    },
  })
}
</script>

<template>
  <main class="diary-page">
    <!-- HERO -->
    <section class="diary-hero">
      <div class="hero-decoration decoration-one">♡</div>
      <div class="hero-decoration decoration-two">✧</div>
      <div class="hero-decoration decoration-three">✿</div>

      <div class="diary-hero-content">
        <div class="eyebrow">
          <span>✦</span>
          OUR LITTLE JOURNAL
          <span>✦</span>
        </div>

        <h1>
          Dear diary,
          <span>this is our story.</span>
        </h1>

        <p>
          Kumpulan cerita, perasaan, dan momen kecil yang ingin
          disimpan. Karena setiap halaman punya cerita tersendiri.
        </p>

        <div class="hero-stat">
          <div class="stat-icon">✎</div>
          <div>
            <strong>{{ totalForYear }} cerita</strong>
            <span>tersimpan di tahun {{ selectedYear }}</span>
          </div>
        </div>
      </div>

      <div class="diary-hero-art">
        <div class="hero-art-circle"></div>

        <div class="hero-book">
          <div class="book-spine"></div>
          <div class="book-content">
            <span class="book-heart">♡</span>
            <span class="book-small">MY PERSONAL JOURNAL</span>
            <strong>little<br />moments</strong>
            <span class="book-script">written with love</span>
            <span class="book-flower">✿</span>
          </div>
        </div>

        <div class="floating-note note-left">
          <span>♡</span>
          <p>remember<br />this feeling</p>
        </div>

        <div class="floating-note note-right">
          <span>✧</span>
          <p>dear<br />myself...</p>
        </div>
      </div>
    </section>

    <!-- YEAR SELECTOR -->
    <section class="diary-content">
      <div class="year-section">
        <div>
          <span class="section-eyebrow">YOUR TIMELINE</span>
          <h2>Our diary <span>journey.</span></h2>
          <p>Pilih tahun untuk membuka kembali cerita lama.</p>
        </div>

        <label class="year-select-wrap">
          <span class="select-label">Tahun diary</span>
          <select v-model.number="selectedYear" class="year-select">
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
          <span class="select-arrow">⌄</span>
        </label>
      </div>

      <div class="year-list">
        <button
          v-for="year in years"
          :key="year"
          type="button"
          class="year-chip"
          :class="{ active: selectedYear === year }"
          @click="selectedYear = year"
        >
          <span>{{ year }}</span>
          <span v-if="selectedYear === year" class="chip-heart">♥</span>
        </button>
      </div>

      <!-- SEARCH AND FILTERS -->
      <div class="diary-toolbar">
        <label class="search-box">
          <span class="search-icon">⌕</span>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Cari cerita, kenangan, atau perasaan..."
            aria-label="Cari diary"
          />
          <button
            v-if="searchQuery"
            type="button"
            class="clear-search"
            aria-label="Hapus pencarian"
            @click="searchQuery = ''"
          >
            ×
          </button>
        </label>

        <label class="category-select-wrap">
          <span class="sr-only">Kategori diary</span>
          <select v-model="selectedCategory" class="filter-select">
            <option v-for="category in categories" :key="category" :value="category">
              {{ category === 'Semua' ? 'Semua kategori' : category }}
            </option>
          </select>
        </label>
      </div>

      <!-- MONTH FILTER -->
      <div class="month-list">
        <button
          v-for="month in months"
          :key="month"
          type="button"
          class="month-chip"
          :class="{ active: selectedMonth === month }"
          @click="selectedMonth = month"
        >
          {{ month }}
        </button>
      </div>

      <!-- JOURNAL HEADER -->
      <div class="entries-heading">
        <div>
          <span class="section-eyebrow">THE JOURNAL</span>
          <h2>Stories from <span>{{ selectedYear }}</span></h2>
        </div>

        <span class="entry-count">
          {{ visibleEntries.length }} cerita
        </span>
      </div>

      <!-- JOURNAL GRID -->
      <div v-if="visibleEntries.length" class="diary-grid">
        <article
          v-for="(entry, index) in visibleEntries"
          :key="entry.id"
          class="diary-card"
          :class="entry.color"
        >
          <div class="card-cover" :class="`cover-${entry.cover}`">
            <div class="cover-overlay"></div>

            <span class="cover-category">{{ entry.category }}</span>
            <span class="cover-mood">{{ entry.mood }}</span>

            <div class="cover-date">
              <span>{{ monthLabel(entry.date) }}</span>
              <strong>{{ entry.date.slice(8, 10) }}</strong>
            </div>

            <span class="cover-index">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>

          <div class="card-body">
            <div class="card-meta">
              <span>✎ JOURNAL ENTRY</span>
              <time :datetime="entry.date">
                {{ formattedDate(entry.date) }}
              </time>
            </div>

            <h3>{{ entry.title }}</h3>
            <p>{{ entry.excerpt }}</p>

            <div class="card-bottom">
              <div class="tag-list">
                <span v-for="tag in entry.tags.slice(0, 2)" :key="tag">
                  #{{ tag }}
                </span>
              </div>

              <button
                type="button"
                class="read-button"
                :aria-label="`Baca ${entry.title}`"
                @click="openEntry(entry)"
              >
                <span>Baca cerita</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </article>
      </div>

      <!-- EMPTY STATE -->
      <div v-else class="empty-state">
        <div class="empty-icon">♡</div>
        <h3>Belum ada cerita di sini</h3>
        <p>
          Coba pilih bulan atau kategori lain, atau cari cerita
          dengan kata kunci berbeda.
        </p>
        <button
          type="button"
          class="reset-button"
          @click="
            searchQuery = '';
            selectedMonth = 'Semua';
            selectedCategory = 'Semua'
          "
        >
          Tampilkan semua cerita
        </button>
      </div>

      <!-- BOTTOM NOTE -->
      <div class="diary-bottom-note">
        <span class="bottom-heart">♡</span>
        <p>Some memories deserve their own little corner.</p>
        <span class="bottom-caption">KEPT WITH LOVE · {{ selectedYear }}</span>
      </div>
    </section>
  </main>
</template>

<style>
/* =====================================
   DIARY PAGE - OURSTORY
===================================== */

.diary-page {
  --primary: #FF758F;
  --secondary: #FFB3C6;
  --accent: #FFB703;
  --background: #FFF5F6;
  --text: #222222;
  --muted: #8B7C82;
  --border: #F2DFE4;
  --white: #FFFFFF;

  width: 100%;
  min-width: 0;
  min-height: 100vh;
  overflow-x: clip;

  color: var(--text);
  background: var(--background);

  font-family: Inter, "Segoe UI", sans-serif;
  line-height: 1.5;
}

.diary-page *,
.diary-page *::before,
.diary-page *::after {
  box-sizing: border-box;
}

.diary-page button,
.diary-page input,
.diary-page select {
  font: inherit;
}

.diary-page button {
  -webkit-tap-highlight-color: transparent;
}

.diary-page button:focus-visible,
.diary-page input:focus-visible,
.diary-page select:focus-visible {
  outline: 3px solid rgba(255, 117, 143, 0.4);
  outline-offset: 3px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* HERO */

.diary-hero {
  position: relative;
  isolation: isolate;

  width: 100%;
  max-width: 1500px;
  min-height: 390px;
  margin: 0 auto;
  padding: 60px clamp(22px, 7vw, 100px);

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  align-items: center;
  gap: 25px;

  overflow: hidden;

  background:
    radial-gradient(ellipse at 80% 40%, #FFE4EA 0%, transparent 43%),
    linear-gradient(135deg, #FFF9FA, #FFF0F4);
}

.diary-hero-content {
  position: relative;
  z-index: 2;
  min-width: 0;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;

  color: var(--primary);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.diary-hero h1 {
  margin: 20px 0 16px;

  font-size: clamp(37px, 4.5vw, 59px);
  line-height: 1.12;
  letter-spacing: -2px;
  font-weight: 850;
}

.diary-hero h1 span {
  display: block;
  color: var(--primary);
}

.diary-hero-content > p {
  max-width: 500px;
  margin: 0;

  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.hero-stat {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 25px;
}

.stat-icon {
  width: 43px;
  height: 43px;

  display: grid;
  place-items: center;

  border-radius: 14px;
  background: var(--white);
  color: var(--primary);
  font-size: 24px;

  box-shadow: 0 5px 15px rgba(255, 117, 143, 0.1);
}

.hero-stat strong,
.hero-stat div:last-child span {
  display: block;
}

.hero-stat strong {
  font-size: 13px;
}

.hero-stat div:last-child span {
  margin-top: 2px;
  color: var(--muted);
  font-size: 11px;
}

/* HERO DECORATION */

.hero-decoration {
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

.decoration-one {
  top: 30px;
  right: 10%;
  color: var(--primary);
  font-size: 35px;
}

.decoration-two {
  bottom: 40px;
  left: 48%;
  color: var(--accent);
  font-size: 29px;
}

.decoration-three {
  top: 55px;
  left: 49%;
  color: #FF9CAF;
  font-size: 23px;
}

/* BOOK ILLUSTRATION */

.diary-hero-art {
  position: relative;
  width: 100%;
  max-width: 420px;
  min-height: 290px;
  justify-self: center;
}

.hero-art-circle {
  position: absolute;
  top: 5px;
  left: 50%;

  width: min(75%, 290px);
  aspect-ratio: 1;

  border-radius: 50%;
  background: linear-gradient(145deg, #FFE1E8, #FFC6D5);

  transform: translateX(-50%);
}

.hero-book {
  position: absolute;
  z-index: 2;

  top: 18px;
  left: 50%;

  width: 195px;
  height: 255px;
  padding: 12px;

  border-radius: 8px 15px 15px 8px;
  background: #FF8DA5;
  box-shadow: 13px 17px 28px rgba(141, 70, 90, 0.2);

  transform: translateX(-50%) rotate(-6deg);
}

.book-spine {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;

  width: 8px;
  border-left: 1px solid rgba(255, 255, 255, 0.45);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
}

.book-content {
  height: 100%;
  padding: 23px 12px 12px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 3px 8px 8px 3px;

  color: #FFFDFE;
  text-align: center;
}

.book-heart {
  font-size: 28px;
}

.book-small {
  margin-top: 8px;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 1.3px;
}

.book-content strong {
  margin-top: 13px;
  font-family: Georgia, serif;
  font-size: 34px;
  line-height: 1.05;
  font-weight: 500;
}

.book-script {
  margin-top: 12px;
  font-family: Georgia, serif;
  font-size: 11px;
  font-style: italic;
}

.book-flower {
  margin-top: 9px;
  font-size: 21px;
  color: #FFE5A3;
}

.floating-note {
  position: absolute;
  z-index: 3;

  width: 105px;
  padding: 10px;

  background: #FFFDF9;
  box-shadow: 0 8px 22px rgba(80, 47, 56, 0.1);
  text-align: center;
}

.floating-note > span {
  color: var(--primary);
  font-size: 22px;
}

.floating-note p {
  margin: 3px 0 0;

  color: #8A737B;
  font-family: Georgia, serif;
  font-size: 12px;
  font-style: italic;
  line-height: 1.5;
}

.note-left {
  top: 45px;
  left: 0;
  transform: rotate(-8deg);
}

.note-right {
  right: 0;
  bottom: 15px;
  background: #FFF0D0;
  transform: rotate(7deg);
}

.note-right > span {
  color: #D59B00;
}

/* CONTENT CONTAINER */

.diary-content {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 54px clamp(20px, 5vw, 65px) 65px;
}

/* YEAR SECTION */

.year-section {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 22px;
}

.section-eyebrow {
  color: var(--primary);
  font-size: 9px;
  font-weight: 850;
  letter-spacing: 1.8px;
}

.year-section h2,
.entries-heading h2 {
  margin: 7px 0;

  font-size: clamp(25px, 3vw, 34px);
  font-weight: 850;
  letter-spacing: -1px;
}

.year-section h2 span,
.entries-heading h2 span {
  color: var(--primary);
}

.year-section > div > p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.year-select-wrap {
  position: relative;
  width: 120px;
  flex-shrink: 0;
}

.select-label {
  display: block;
  margin-bottom: 7px;
  color: var(--muted);
  font-size: 10px;
}

.year-select,
.filter-select {
  width: 100%;
  min-height: 44px;
  padding: 0 35px 0 13px;

  appearance: none;
  -webkit-appearance: none;

  color: var(--text);
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;

  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.select-arrow {
  position: absolute;
  right: 13px;
  bottom: 9px;
  pointer-events: none;
  color: var(--primary);
  font-size: 19px;
}

/* YEAR CHIPS */

.year-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 25px 0 30px;
}

.year-chip {
  min-width: 68px;
  min-height: 38px;
  padding: 0 13px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  color: #82747A;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 11px;

  font-size: 12px;
  font-weight: 750;
  cursor: pointer;

  transition: 0.2s ease;
}

.year-chip:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.year-chip.active {
  color: var(--white);
  background: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 5px 13px rgba(255, 117, 143, 0.2);
}

.chip-heart {
  font-size: 10px;
}

/* SEARCH */

.diary-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.search-box {
  flex: 1;
  min-width: 0;
  min-height: 48px;
  padding: 0 14px;

  display: flex;
  align-items: center;
  gap: 10px;

  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--white);
}

.search-icon {
  color: var(--primary);
  font-size: 25px;
}

.search-box input {
  width: 100%;
  min-width: 0;
  padding: 12px 0;

  border: 0;
  outline: none;
  background: transparent;

  color: var(--text);
  font-size: 12px;
}

.search-box input::placeholder {
  color: #B3A4AA;
}

.clear-search {
  width: 28px;
  height: 28px;
  flex-shrink: 0;

  border: 0;
  border-radius: 50%;
  color: var(--muted);
  background: #FFF0F3;
  cursor: pointer;
}

.category-select-wrap {
  position: relative;
  width: 165px;
  flex-shrink: 0;
}

.category-select-wrap::after {
  content: "⌄";
  position: absolute;
  top: 9px;
  right: 13px;
  color: var(--primary);
  pointer-events: none;
}

.filter-select {
  padding-right: 32px;
  font-weight: 600;
}

/* MONTH FILTER */

.month-list {
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 3px 0 15px;
  margin-bottom: 28px;

  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: #F1C5D0 transparent;
}

.month-chip {
  min-height: 33px;
  padding: 0 13px;
  flex-shrink: 0;

  border: 1px solid transparent;
  border-radius: 10px;

  color: #95858C;
  background: transparent;

  font-size: 11px;
  cursor: pointer;
  transition: 0.2s ease;
}

.month-chip:hover {
  color: var(--primary);
  background: #FFEAF0;
}

.month-chip.active {
  color: #D94D6E;
  background: #FFE4EB;
  border-color: #FFD0DC;
  font-weight: 750;
}

/* ENTRIES HEADING */

.entries-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 23px;
}

.entries-heading h2 {
  margin-bottom: 0;
}

.entry-count {
  flex-shrink: 0;
  padding: 7px 12px;

  border-radius: 20px;
  background: #FFE6EC;

  color: #D94D6E;
  font-size: 11px;
  font-weight: 750;
}

/* DIARY GRID */

.diary-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 20px;
}

.diary-card {
  min-width: 0;
  overflow: hidden;

  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 18px;

  box-shadow: 0 4px 14px rgba(94, 51, 64, 0.025);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.diary-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 13px 28px rgba(94, 51, 64, 0.09);
}

.card-cover {
  position: relative;
  isolation: isolate;

  height: 190px;
  overflow: hidden;

  background: linear-gradient(135deg, #FFC5D4, #FFE6EC);
}

.cover-overlay {
  position: absolute;
  z-index: -1;
  inset: 0;

  background: linear-gradient(
    180deg,
    rgba(40, 25, 35, 0.05),
    rgba(40, 25, 35, 0.15)
  );
}

.cover-sunset {
  background:
    linear-gradient(180deg, transparent, rgba(67, 36, 52, 0.38)),
    url("https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80")
    center / cover,
    #F2B5C7;
}

.cover-flowers {
  background:
    linear-gradient(180deg, transparent, rgba(67, 36, 52, 0.25)),
    url("https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80")
    center / cover,
    #F2C6D2;
}

.cover-sky {
  background:
    linear-gradient(180deg, transparent, rgba(67, 36, 52, 0.28)),
    url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80")
    center / cover,
    #F2C6D2;
}

.cover-letter {
  background:
    linear-gradient(180deg, transparent, rgba(67, 36, 52, 0.2)),
    url("https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80")
    center / cover,
    #F2C6D2;
}

.cover-garden {
  background:
    linear-gradient(180deg, transparent, rgba(67, 36, 52, 0.25)),
    url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80")
    center / cover,
    #F2C6D2;
}

.cover-category {
  position: absolute;
  top: 13px;
  left: 13px;

  max-width: calc(100% - 65px);
  padding: 6px 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 8px;

  color: var(--white);
  background: rgba(50, 35, 43, 0.35);
  backdrop-filter: blur(8px);

  font-size: 9px;
  font-weight: 750;
  letter-spacing: 0.7px;
}

.cover-mood {
  position: absolute;
  top: 12px;
  right: 13px;

  width: 31px;
  height: 31px;

  display: grid;
  place-items: center;

  color: #E85D7C;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 50%;
  font-size: 19px;
}

.cover-date {
  position: absolute;
  left: 16px;
  bottom: 15px;

  display: flex;
  flex-direction: column;
  color: var(--white);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
}

.cover-date span {
  font-size: 10px;
  font-weight: 650;
}

.cover-date strong {
  font-size: 27px;
  line-height: 1.1;
}

.cover-index {
  position: absolute;
  right: 14px;
  bottom: 14px;

  color: rgba(255, 255, 255, 0.85);
  font-family: Georgia, serif;
  font-size: 24px;
  font-style: italic;
}

/* CARD BODY */

.card-body {
  padding: 18px 17px 16px;
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
}

.card-meta > span {
  color: var(--primary);
  font-size: 8px;
  font-weight: 850;
  letter-spacing: 1px;
}

.card-meta time {
  color: #A6989E;
  font-size: 9px;
}

.card-body h3 {
  margin: 13px 0 7px;

  color: var(--text);
  font-size: 17px;
  line-height: 1.4;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.card-body > p {
  min-height: 60px;
  margin: 0;

  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
  overflow-wrap: anywhere;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 17px;
  padding-top: 13px;

  border-top: 1px solid #F7EBEE;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tag-list span {
  color: #B77F8D;
  font-size: 9px;
}

.read-button {
  min-height: 35px;
  padding: 0 10px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  border: 0;
  border-radius: 10px;

  color: #D94D6E;
  background: #FFF0F3;

  font-size: 10px;
  font-weight: 750;
  cursor: pointer;

  transition: 0.2s ease;
}

.read-button:hover {
  color: var(--white);
  background: var(--primary);
}

.read-button span:last-child {
  font-size: 15px;
}

/* EMPTY STATE */

.empty-state {
  padding: 55px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px dashed #E9C8D1;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.65);

  text-align: center;
}

.empty-icon {
  width: 58px;
  height: 58px;

  display: grid;
  place-items: center;

  border-radius: 50%;
  color: var(--primary);
  background: #FFE5EC;
  font-size: 31px;
}

.empty-state h3 {
  margin: 17px 0 7px;
  font-size: 19px;
}

.empty-state p {
  max-width: 400px;
  margin: 0;

  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.reset-button {
  min-height: 42px;
  margin-top: 19px;
  padding: 0 17px;

  color: var(--white);
  background: var(--primary);
  border: 0;
  border-radius: 12px;

  font-size: 12px;
  font-weight: 750;
  cursor: pointer;
}

/* BOTTOM NOTE */

.diary-bottom-note {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;
  padding-top: 30px;

  border-top: 1px solid var(--border);
  text-align: center;
}

.bottom-heart {
  color: var(--primary);
  font-size: 28px;
}

.diary-bottom-note p {
  margin: 9px 0;

  color: #8D7780;
  font-family: Georgia, serif;
  font-size: 17px;
  font-style: italic;
}

.bottom-caption {
  color: #C09AA5;
  font-size: 9px;
  font-weight: 750;
  letter-spacing: 1.7px;
}

/* =====================================
   RESPONSIVE: TABLET
===================================== */

@media (max-width: 1000px) {
  .diary-hero {
    padding: 50px 35px;
    min-height: 350px;
  }

  .diary-hero h1 {
    font-size: clamp(35px, 5vw, 48px);
  }

  .diary-hero-art {
    transform: scale(0.9);
  }

  .diary-content {
    padding-right: 28px;
    padding-left: 28px;
  }

  .diary-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .card-cover {
    height: 185px;
  }
}

/* =====================================
   RESPONSIVE: MOBILE
===================================== */

@media (max-width: 650px) {
  .diary-hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;

    padding: 39px 22px 20px;
    min-height: 0;
  }

  .diary-hero-content {
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
  }

  .eyebrow {
    font-size: 9px;
    letter-spacing: 1.5px;
  }

  .diary-hero h1 {
    margin: 16px 0 13px;
    font-size: clamp(33px, 8.5vw, 45px);
    line-height: 1.14;
    letter-spacing: -1.3px;
  }

  .diary-hero-content > p {
    font-size: 13px;
    line-height: 1.85;
  }

  .hero-stat {
    margin-top: 20px;
  }

  .diary-hero-art {
    width: 100%;
    max-width: 350px;
    min-height: 270px;
    margin: 8px auto 0;
    transform: none;
  }

  .hero-art-circle {
    width: 230px;
    max-width: 75%;
  }

  .hero-book {
    top: 10px;
    width: 165px;
    height: 220px;
  }

  .book-content strong {
    font-size: 29px;
  }

  .note-left {
    top: 35px;
    left: 0;
  }

  .note-right {
    right: 0;
    bottom: 15px;
  }

  .floating-note {
    width: 90px;
    padding: 8px;
  }

  .floating-note p {
    font-size: 11px;
  }

  .decoration-one {
    top: 15px;
    right: 7%;
    font-size: 25px;
  }

  .decoration-two {
    display: none;
  }

  .decoration-three {
    top: auto;
    bottom: 55px;
    left: 5%;
  }

  .diary-content {
    padding: 38px 20px 45px;
  }

  .year-section {
    align-items: flex-end;
    gap: 12px;
  }

  .year-section h2,
  .entries-heading h2 {
    font-size: 26px;
  }

  .year-section > div > p {
    max-width: 260px;
    font-size: 11px;
  }

  .year-select-wrap {
    width: 95px;
  }

  .year-select {
    min-height: 41px;
  }

  .year-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 7px;
    margin: 22px 0;
  }

  .year-chip {
    min-width: 0;
    min-height: 39px;
    padding: 0 5px;
    gap: 4px;
    font-size: 11px;
  }

  .diary-toolbar {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .search-box {
    width: 100%;
    min-height: 46px;
  }

  .search-box input {
    font-size: 11px;
  }

  .category-select-wrap {
    width: 100%;
  }

  .filter-select {
    min-height: 43px;
  }

  .category-select-wrap::after {
    top: 8px;
  }

  .month-list {
    gap: 6px;
    margin-bottom: 25px;
    padding-bottom: 12px;
  }

  .month-chip {
    min-height: 34px;
    padding: 0 12px;
  }

  .entries-heading {
    align-items: flex-end;
    gap: 8px;
    margin-bottom: 17px;
  }

  .entries-heading h2 {
    font-size: 24px;
  }

  .entry-count {
    padding: 6px 9px;
    font-size: 10px;
  }

  .diary-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 17px;
  }

  .diary-card {
    border-radius: 16px;
  }

  .card-cover {
    height: 190px;
  }

  .card-body {
    padding: 17px;
  }

  .card-body h3 {
    font-size: 17px;
  }

  .card-body > p {
    min-height: 0;
    font-size: 12px;
  }

  .card-bottom {
    margin-top: 15px;
  }

  .diary-bottom-note {
    margin-top: 42px;
    padding-top: 25px;
  }

  .diary-bottom-note p {
    max-width: 300px;
    font-size: 15px;
  }
}

/* =====================================
   RESPONSIVE: SMALL MOBILE
===================================== */

@media (max-width: 380px) {
  .diary-hero {
    padding: 32px 16px 15px;
  }

  .diary-hero h1 {
    font-size: 32px;
    letter-spacing: -1px;
  }

  .diary-hero-art {
    max-width: 310px;
    min-height: 250px;
  }

  .hero-book {
    width: 150px;
    height: 205px;
  }

  .floating-note {
    width: 78px;
    padding: 7px 4px;
  }

  .floating-note p {
    font-size: 10px;
  }

  .diary-content {
    padding-right: 15px;
    padding-left: 15px;
  }

  .year-section h2,
  .entries-heading h2 {
    font-size: 22px;
  }

  .year-section > div > p {
    max-width: 200px;
    font-size: 10px;
  }

  .year-select-wrap {
    width: 82px;
  }

  .year-chip {
    font-size: 10px;
  }

  .card-cover {
    height: 170px;
  }

  .card-meta time {
    font-size: 8px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .diary-page *,
  .diary-page *::before,
  .diary-page *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
