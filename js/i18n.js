var TRANSLATIONS = {
  // ── Shared labels ──────────────────────────────────────────────
  'label.role':     { pl: 'Rola:',              en: 'Role:' },
  'label.tech':     { pl: 'Technologie:',       en: 'Technologies:' },
  'label.desc':     { pl: 'Opis:',              en: 'Description:' },
  'label.client':   { pl: 'Klient:',            en: 'Client:' },
  'label.contrib':  { pl: 'Kluczowe wkłady:',   en: 'Key Contributions:' },
  'label.features': { pl: 'Kluczowe funkcje:',  en: 'Key Features:' },

  // ── Navigation ─────────────────────────────────────────────────
  'nav.home':     { pl: 'Home',     en: 'Home' },
  'nav.resume':   { pl: 'Resume',   en: 'Resume' },
  'nav.projects': { pl: 'Projects', en: 'Projects' },

  // ── Hero — index.html ──────────────────────────────────────────
  'hero.badge':        { pl: 'Backend Developer', en: 'Backend Developer' },
  'hero.role':         { pl: 'Backend Developer', en: 'Backend Developer' },
  'hero.headline':     {
    pl: 'Buduję systemy backendowe, które skalują się razem z biznesem',
    en: 'Building backend systems that scale with the business'
  },
  'hero.btn.resume':   { pl: 'Resume',   en: 'Resume' },
  'hero.btn.projects': { pl: 'Projects', en: 'Projects' },

  // ── About — index.html ─────────────────────────────────────────
  'about.title': { pl: 'O mnie', en: 'About Me' },
  'about.p1': {
    pl: 'Jestem Daniel Strielnikow — Backend Developer z komercyjnym doświadczeniem w budowaniu systemów i integracji usług. Rozumiem kod od środka, co pozwala mi szybko diagnozować problemy i skutecznie komunikować się zarówno z zespołami technicznymi, jak i klientami.',
    en: "I'm Daniel Strielnikow — a Backend Developer with commercial experience building systems and integrating services. I understand code from the inside, which helps me quickly diagnose issues and communicate effectively with both technical teams and end users."
  },
  'about.p2': {
    pl: 'Pracowałem komercyjnie przy projektach w różnych technologiach — Java/Spring Boot (platforma logistyczna SeeTrade), C#/.NET (marketplace OMOM), Flutter/Dart (aplikacja mobilna dla UM Poznań). Mam praktyczne doświadczenie z Jira, Postman, Swagger, Docker i Git. Poza pracą interesuję się IoT — zbudowałem system telemetryczny BMW na OBDII i urządzenie śledzenia czasu na ESP32. Kieruję się podejściem inżynierskim: rozumiem problem zanim zacznę działać.',
    en: 'I have commercial experience across multiple stacks — Java/Spring Boot (SeeTrade logistics platform), C#/.NET (OMOM marketplace), Flutter/Dart (mobile app for the City of Poznań). I work daily with Jira, Postman, Swagger, Docker, and Git. Outside work I build IoT projects — a BMW telemetry system using OBDII and a time-tracking device based on ESP32. I take an engineering mindset: I understand the problem before I start solving it.'
  },

  // ── Contact ────────────────────────────────────────────────────
  'contact.headline':   { pl: 'Zbudujmy coś razem',     en: "Let's build something together" },
  'contact.subheading': { pl: 'Skontaktuj się ze mną',  en: 'Contact me' },

  // ── Projects page — section titles ────────────────────────────
  'projects.commercial.title': { pl: 'Projekty komercyjne',      en: 'Commercial Projects' },
  'projects.personal.title':   { pl: 'Projekty osobiste',        en: 'Personal Projects' },
  'projects.iot.title':        { pl: 'IoT i Systemy wbudowane',  en: 'IoT & Embedded Systems' },

  // ── OMOM project card ─────────────────────────────────────────
  'omom.role': { pl: 'Backend Developer', en: 'Backend Developer' },
  'omom.desc': {
    pl: 'Wieloplatformowy marketplace food & lifestyle oparty na mikroserwisach (.NET 10, Python/FastAPI, RabbitMQ). Klienci składają jeden zamówienie obejmujące wielu sprzedawców — system automatycznie dzieli płatność i zarządza cyklem życia zamówień.',
    en: 'A multi-vendor food & lifestyle marketplace built on microservices (.NET 10, Python/FastAPI, RabbitMQ). Customers place a single order across multiple vendors — the system automatically splits payments and manages the full order lifecycle.'
  },
  'omom.feat1': { pl: 'Integracja Stripe — jeden checkout dla całego koszyka z automatycznym podziałem środków między sprzedawców (Hangfire delayed jobs)', en: 'Stripe integration — single checkout for the full cart with automated fund splitting between vendors via Hangfire delayed jobs' },
  'omom.feat2': { pl: 'System powiadomień dual-channel: email transakcyjny (MailKit/SMTP) i powiadomienia real-time przez SSE (Server-Sent Events) via RabbitMQ', en: 'Dual-channel notification system: transactional email (MailKit/SMTP) and real-time in-app notifications via SSE (Server-Sent Events) backed by RabbitMQ' },
  'omom.feat3': { pl: 'Obsługa zwrotów, śledzenie statusu płatności i zarządzanie kontami sprzedawców w PostgreSQL',  en: 'Refund handling, payment status tracking, and vendor account management persisted in PostgreSQL' },

  // ── Digital Passport card ─────────────────────────────────────
  'dp.role': { pl: 'Backend Developer', en: 'Backend Developer' },
  'dp.desc': {
    pl: 'Platforma cyfrowych paszportów produktowych zgodna z regulacjami UE wymagającymi kodów QR dla produkowanych wyrobów. Opracowałem backend API do rejestracji produktów, generowania kodów QR i pobierania danych.',
    en: 'Digital product passport platform aligning with EU regulations requiring QR codes for manufactured products. Developed backend API for product registration, QR code generation, and data retrieval.'
  },
  'dp.feat1': { pl: 'Zaimplementowano endpointy RESTful API do zarządzania cyklem życia produktu', en: 'Implemented RESTful API endpoints for product lifecycle management' },
  'dp.feat2': { pl: 'Zaprojektowano schemat bazy danych dla danych produktowych i metryk zrównoważonego rozwoju', en: 'Designed database schema for product data and sustainability metrics' },
  'dp.feat3': { pl: 'Zintegrowano zewnętrzną bibliotekę do generowania kodów QR', en: 'Integrated third-party QR code generation library' },

  // ── SeeTrade card ─────────────────────────────────────────────
  'st.role': { pl: 'Backend Developer', en: 'Backend Developer' },

  'st.summary': {
    pl: 'Zaawansowane MVP platformy logistycznej do transportu pojazdów. Klienci składają zlecenia podając szczegóły pojazdu i trasy; przewoźnicy przeglądają dostępne zlecenia i je podejmują. System zarządza pełnym cyklem życia zlecenia — od złożenia, przez przydzielenie przewoźnika, po śledzenie statusu transportu.',
    en: 'Advanced logistics MVP for vehicle transport. Customers submit orders with vehicle and route details; carriers browse available requests and accept them. The system manages the full order lifecycle — from creation through carrier assignment to transport status tracking.'
  },

  'st.contrib.title': { pl: 'Moje zadania', en: 'My Contributions' },
  'st.contrib1': { pl: 'System powiadomień event-driven obsługujący 50+ typów zdarzeń — licznik nieprzeczytanych, paginowany feed, routing per rola użytkownika', en: 'Event-driven notification system handling 50+ event types — unread count tracking, paginated feed, per-role routing' },
  'st.contrib2': { pl: 'Moduł zarządzania dokumentami — upload/download/delete plików (PDF, obrazy) z walidacją MIME, workflow zatwierdzania przez admina i event-driven aktualizacją statusu', en: 'Document management module — upload/download/delete for PDFs and images with MIME validation, admin approval workflow, and event-driven status updates' },
  'st.contrib3': { pl: 'Panel admina do zarządzania cyklem życia zleceń i weryfikacji przewoźników w systemie trzech ról (Klient, Przewoźnik, Admin)', en: 'Admin panel for order lifecycle management and carrier verification in a three-role system (Client, Carrier, Admin)' },
  'st.contrib4': { pl: 'Projektowanie REST API, modelowanie domeny i optymalizacja SQL z indeksami złożonymi; testy jednostkowe i integracyjne (JUnit, Mockito)', en: 'REST API design, domain modelling, and SQL optimisation with composite indexes; unit and integration tests (JUnit, Mockito)' },

  // ── Lornety card ──────────────────────────────────────────────
  'ln.role':   { pl: 'Deweloper mobilny', en: 'Mobile Developer' },
  'ln.client': { pl: 'Urząd Miasta Poznania',         en: 'Poznań City Hall' },
  'ln.desc': {
    pl: 'Mobilna aplikacja VR prezentująca historyczną wizualizację Ostrowa Tumskiego w Poznaniu z XI i XVI wieku. Dostępna na Androida i iOS.',
    en: 'VR mobile application providing historical visualization of Ostrów Tumski in Poznań from 11th and 16th centuries. Available on both Android and iOS.'
  },
  'ln.feat1': { pl: 'Przeglądarka panoram 360° z interaktywnymi hotspotami ładującymi modele 3D (.glb) przez ARCore/WebView (model_viewer_plus)', en: '360° panorama viewer with interactive hotspots loading 3D models (.glb) via ARCore/WebView (model_viewer_plus)' },
  'ln.feat2': { pl: 'Synchronizacja contentu CMS przez HTTP — diffing manifestu plików, równoległe pobieranie z retry logic, tryb offline', en: 'HTTP-based CMS content sync — file manifest diffing, parallel downloads with retry logic, offline mode fallback' },
  'ln.feat3': { pl: 'Odblokowywanie lokacji przez skanowanie kodów QR (mobile_scanner); optymalizacja pre-ładowania modeli 3D', en: 'QR-code gated location unlock flow (mobile_scanner); 3D model pre-loading optimisation for mobile performance' },

  // ── Electri-Shop card ─────────────────────────────────────────
  'es.role': { pl: 'Projekt własny — migracja monolit → mikroserwisy', en: 'Personal Project — monolith → microservices migration' },

  'es.summary': {
    pl: 'Projekt tutorialowy (monolit Java + React) celowo zmigrowany do architektury mikroserwisowej — nie dla produktu, ale żeby praktycznie zrozumieć systemy rozproszone. W trakcie migracji pojawiło się pytanie: kiedy ta zmiana ma sens, a kiedy jest przedwczesna optymalizacją? To pytanie stało się tematem pracy inżynierskiej. Projekt w finalnej fazie MVP.',
    en: 'A tutorial project (Java + React monolith) intentionally migrated to a microservices architecture — not to ship a product, but to understand distributed systems in practice. The migration raised a natural question: when does this transition actually make sense, and when is it premature? That question became the topic of my engineering thesis. Project in final MVP phase.'
  },

  'es.resp1': { pl: 'Dekompozycja monolitu na 8 serwisów — praktyczna nauka wyznaczania granic domenowych i tego, co coupling naprawdę oznacza', en: 'Decomposed a monolith into 8 services — hands-on practice in defining domain boundaries and understanding what coupling actually means' },
  'es.resp2': { pl: 'Świadomy dobór protokołów: Kafka dla async event-driven flow (zamówienie → płatność → magazyn), gRPC dla wewnętrznych wywołań serwis-serwis, REST dla API klienckiego', en: 'Deliberate protocol selection: Kafka for async event-driven flow (order → payment → stock), gRPC for internal service-to-service calls, REST for client-facing APIs' },
  'es.resp3': { pl: 'Implementacja API Gateway (Spring Cloud Gateway) — routing, scentralizowana autoryzacja JWT, jeden punkt wejścia dla frontendu React', en: 'Implemented API Gateway (Spring Cloud Gateway) — routing, centralised JWT authorisation, single entry point for the React frontend' },
  'es.resp4': { pl: 'Porównanie obu architektur dało podstawę pod pracę inżynierską: kiedy zespoły powinny migrować z monolitu na mikroserwisy i jaki jest rzeczywisty koszt tej decyzji', en: 'Comparing both architectures provided the foundation for my engineering thesis: when teams should migrate from monolith to microservices and what the real cost of that decision is' },

  // ── IoT cards ─────────────────────────────────────────────────
  'iot.bmw.role': { pl: 'Twórca (Projekt IoT)', en: 'Author (IoT Project)' },
  'iot.bmw.desc': {
    pl: 'System diagnostyki pojazdu w czasie rzeczywistym zbudowany na protokole OBDII. Odczytuje dane na żywo z magistrali CAN — obroty, temperatura silnika, napięcie, kody błędów — i przesyła je przez WebSocket do panelu przeglądarki.',
    en: 'Real-time vehicle diagnostics system built on the OBDII protocol. Reads live data from the CAN bus — RPM, engine temperature, voltage, fault codes — and streams it over WebSocket to a browser dashboard.'
  },
  'iot.bmw.feat1': { pl: 'Parsowanie ramek OBDII i mapowanie PID',                              en: 'OBDII frame parsing and PID mapping' },
  'iot.bmw.feat2': { pl: 'Strumieniowanie danych w czasie rzeczywistym przez WebSocket do live dashboardu', en: 'Real-time data streaming via WebSocket to a live dashboard' },
  'iot.bmw.feat3': { pl: 'Odczyt i kasowanie kodów błędów (DTC)',                               en: 'Fault code (DTC) reading and clearing' },

  'iot.esp32.role': { pl: 'Twórca (Projekt IoT)', en: 'Author (IoT Project)' },
  'iot.esp32.desc': {
    pl: 'Fizyczne urządzenie do śledzenia czasu: kostka oparta na ESP32, która wykrywa własną orientację i bezprzewodowo wysyła zdarzenia do backendu Java. Każda ściana kostki odpowiada innemu zadaniu lub projektowi.',
    en: 'A physical time-tracking device: an ESP32-based cube that detects its own orientation and sends events wirelessly to a Java backend. Each face of the cube maps to a different task or project.'
  },
  'iot.esp32.feat1': { pl: 'Wykrywanie orientacji przez akcelerometr (MPU-6050)',           en: 'Orientation detection via accelerometer (MPU-6050)' },
  'iot.esp32.feat2': { pl: 'Bezprzewodowa transmisja danych przez WiFi do REST API',         en: 'Wireless data transmission over WiFi to a REST API' },
  'iot.esp32.feat3': { pl: 'Backend Java agregujący wpisy czasowe i generujący raporty',    en: 'Java backend aggregating time entries and generating reports' },

  // ── Resume page ───────────────────────────────────────────────
  'resume.page.title':        { pl: 'Resume',                   en: 'Resume' },
  'resume.exp.title':         { pl: 'Doświadczenie zawodowe',   en: 'Work Experience' },
  'resume.download':          { pl: 'Pobierz Resume',           en: 'Download Resume' },
  'resume.edu.title':         { pl: 'Edukacja',                 en: 'Education' },
  'resume.skills.langs.title':{ pl: 'Języki i Frameworki',      en: 'Languages & Frameworks' },
  'resume.skills.pro.title':  { pl: 'Umiejętności zawodowe',    en: 'Professional Skills' },
  'resume.skills.lang.title': { pl: 'Języki',                   en: 'Languages' },

  // ── OMOM experience entry (resume) ────────────────────────────
  'exp.omom.period':   { pl: '03.2026 — 06.2026',              en: '03.2026 — 06.2026' },
  'exp.omom.title':    { pl: 'C# Developer (freelance)',        en: 'C# Developer (Freelance)' },
  'exp.omom.company':  { pl: 'OMOM',                           en: 'OMOM' },
  'exp.omom.location': { pl: 'Zdalnie (Freelance)',             en: 'Remote (Freelance)' },
  'exp.omom.feat1':    {
    pl: 'Udział w migracji marketplace z WordPress do architektury mikroserwisów C# — praktyczne zrozumienie lokalizowania awarii w systemach rozproszonych',
    en: 'Contributed to marketplace migration from WordPress to C# microservices — hands-on experience diagnosing failures in distributed systems'
  },
  'exp.omom.feat2':    {
    pl: 'Budowa serwisu powiadomień (email, in-app, SMS) — bezpośrednia praca z kanałami komunikacji z użytkownikiem końcowym',
    en: 'Built notification service (email, in-app, SMS) — direct work with end-user communication channels'
  },
  'exp.omom.feat3':    {
    pl: 'Integracja logiki biznesowej płatności ze Stripe — diagnostyka i obsługa przepływów płatniczych',
    en: 'Integrated payment business logic with Stripe — diagnosing and handling payment flows'
  },

  // ── UM Poznań experience (resume) ────────────────────────────
  'exp.poznan.period':   { pl: '02.2026 — 05.2026',            en: '02.2026 — 05.2026' },
  'exp.poznan.title':    { pl: 'Flutter Developer (freelance)', en: 'Flutter Developer (Freelance)' },
  'exp.poznan.company':  { pl: 'UM Poznań',                    en: 'UM Poznań' },
  'exp.poznan.location': { pl: 'Zdalnie (Freelance)',           en: 'Remote (Freelance)' },
  'exp.poznan.feat1':    {
    pl: 'Samodzielna realizacja projektu mobilnego (Android/iOS) dla klienta instytucjonalnego — komunikacja z klientem, zbieranie wymagań, raportowanie postępów',
    en: 'Independent mobile project delivery (Android/iOS) for institutional client — client communication, requirements gathering, progress reporting'
  },
  'exp.poznan.feat2':    {
    pl: 'Rozwiązywanie problemów technicznych i integracyjnych w środowisku produkcyjnym (synchronizacja CMS, ARCore 3D)',
    en: 'Solving technical and integration issues in production environment (CMS sync, ARCore 3D)'
  },

  // ── SeeTrade experience (resume) ─────────────────────────────
  'exp.seetrade.period':   { pl: '08.2025 — 03.2026',                      en: '08.2025 — 03.2026' },
  'exp.seetrade.title':    { pl: 'Java Developer / QA i wsparcie (freelance)', en: 'Java Developer / QA & Support (Freelance)' },
  'exp.seetrade.company':  { pl: 'SeeTrade',                               en: 'SeeTrade' },
  'exp.seetrade.location': { pl: 'Zdalnie (Freelance)',                    en: 'Remote (Freelance)' },
  'exp.seetrade.feat1':    {
    pl: 'Rejestrowanie, klasyfikowanie i śledzenie błędów w Jira z pełnym opisem kroków reprodukcji i zrzutami ekranu — weryfikacja poprawek po każdej zmianie',
    en: 'Logging, classifying and tracking bugs in Jira with full reproduction steps and screenshots — verifying fixes after each change'
  },
  'exp.seetrade.feat2':    {
    pl: 'Weryfikacja poprawności działania API i zachowania systemu przy użyciu Postman i Swagger — identyfikacja odchyleń od specyfikacji',
    en: 'Verifying API correctness and system behaviour using Postman and Swagger — identifying deviations from spec'
  },
  'exp.seetrade.feat3':    {
    pl: 'Ścisła współpraca z Product Ownerem w celu wyjaśniania wymagań funkcjonalnych i przekładania ich na jasne specyfikacje techniczne',
    en: 'Close collaboration with Product Owner to clarify functional requirements and translate them into clear technical specs'
  },
  'exp.seetrade.feat4':    {
    pl: 'Wsparcie procesu modernizacji aplikacji — aktualizacja zależności, identyfikacja i naprawa problemów po zmianach w systemie',
    en: 'Supporting application modernisation — dependency updates, identifying and fixing issues after system changes'
  },

  // ── Education (resume) ────────────────────────────────────────
  'edu.wsb.period':   { pl: '10.2023 — obecnie', en: '10.2023 — present' },
  'edu.wsb.location': { pl: 'Chorzów, Śląsk',    en: 'Chorzów, Silesia' },
  'edu.wsb.degree':   { pl: 'Inżynier',          en: 'Engineer of' },
  'edu.wsb.field':    { pl: 'Informatyki',        en: 'Computer Science' },
  'edu.wsb.desc': {
    pl: 'Student inżynierii informatycznej w trybie niestacjonarnym na Uczelni WSB Merito w Chorzowie.',
    en: 'Part-time Computer Science engineering student at WSB Merito University in Chorzów.'
  },

  // ── Natural languages (resume) ────────────────────────────────
  'lang.polish':  { pl: 'Polski — Ojczysty', en: 'Polish — Native' },
  'lang.russian': { pl: 'Rosyjski — C1',     en: 'Russian — C1' },
  'lang.english': { pl: 'Angielski — B1+',   en: 'English — B1+' }
};

function applyLang(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang] !== undefined) {
      el.textContent = TRANSLATIONS[key][lang];
    }
  });
  var btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = lang === 'pl' ? 'EN' : 'PL';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('lang') || 'pl';
  applyLang(saved);
  var btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', function() {
      var current = localStorage.getItem('lang') || 'pl';
      applyLang(current === 'pl' ? 'en' : 'pl');
    });
  }
});
