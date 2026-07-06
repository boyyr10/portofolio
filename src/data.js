// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Muhammad Yusuf Ramadhan',
  eyebrow: '// ML & EMBEDDED SYSTEMS ENGINEER',
  // Put your photo file in src/assets/ and import it, OR use a URL.
  // Example: import photo from '../assets/photo.jpg' then set photo: photo
  // To hide the photo entirely, set this to null.
  photo: '/photo.jpg',
  tagline:
    'Final-year Computer Engineering student building machine learning systems, embedded devices, and web applications — from raw signal to deployed product.',
  links: {
    linkedin: 'https://www.linkedin.com/in/muhammad-yusuf-ramadhan-3a0bab315/',
    batikRepo: 'https://github.com/CC25-CF238-BatikEye',
    batikDemo: 'https://batikeye.netlify.app',
  },
  location: 'Malang, East Java, ID',
}

export const about = {
  bio: [
    'Final-year Computer Engineering student at Universitas Brawijaya, focused on machine learning, embedded systems, and web development.',
    'I build real-world systems end-to-end — from raw signal to deployed product — with Python, TensorFlow, and a strong drive to keep learning.',
  ],
  cards: [
    { icon: 'brain', label: 'Machine Learning', color: '#00e5c7' },
    { icon: 'code', label: 'Web Development', color: '#7c5cff' },
    { icon: 'database', label: 'Data Science', color: '#1d9e75' },
    { icon: 'cpu', label: 'Embedded / IoT', color: '#e24b4a' },
  ],
}

export const stats = [
  { num: '5+', label: 'projects shipped' },
  { num: '95%', label: 'batik model accuracy' },
  { num: '46', label: 'learners facilitated' },
]

export const experience = [
  {
    date: 'Feb 2025 — Jun 2025',
    role: 'Machine Learning Engineer',
    org: 'Coding Camp 2025 · DBS Foundation',
    points: [
      'Built a MobileNetV2 classifier for 13 Indonesian batik motifs, reaching 95% test accuracy via transfer learning and two-phase fine-tuning.',
      'Deployed the model as a public web app on Netlify for real-time motif identification.',
    ],
  },
  {
    date: 'Sep 2024 — Dec 2024',
    role: 'Finance & Web Lead',
    org: "AWMM Ojesy (Ojek Syar'i)",
    points: [
      'Led financial planning for a sharia ride-hailing student startup — Rp10.5M grant, projected P&L, BEP, and ROI modeling.',
      'Designed the UI/UX in Figma and built the responsive booking website end-to-end.',
    ],
  },
  {
    date: 'Jul 2025 — Sep 2025',
    role: 'Facilitator',
    org: 'Google Cloud Arcade 2025 · Dicoding',
    points: [
      'Guided 46 learners through hands-on Google Cloud labs covering BigQuery ML, Vertex AI, and Cloud Vision.',
      'Drove 182 total badge completions across the cohort.',
    ],
  },
]

export const projects = [
  {
    title: 'Batik Eye',
    year: '2025',
    desc: 'Image classification system for 13 Indonesian batik motifs using MobileNetV2 transfer learning with two-phase fine-tuning. Reached 95% test accuracy on the Roboflow Batik dataset and deployed as a live web app.',
    tags: ['MobileNetV2', 'TensorFlow', 'Transfer Learning', 'Netlify'],
    demo: 'https://batikeye.netlify.app',
    repo: 'https://github.com/CC25-CF238-BatikEye',
  },
  {
    title: 'Smartwatch Stress Detection',
    year: '2025 — present',
    desc: 'Undergraduate thesis. A binary stress classifier trained on 15 HRV features from the WESAD dataset, plus a lean 4-feature model compatible with a Huawei Watch Fit 3 for honest real-world validation through a Health Sync → Flask pipeline.',
    tags: ['Random Forest', 'HRV', 'WESAD', 'Flask', 'SMOTETomek'],
  },
  {
    title: 'ECG Stress Classification',
    year: '2025',
    desc: 'A wearable stress-detection device built on an AD8232 ECG sensor and ESP32-S3. Custom IIR filter chain at 250 Hz, Pan-Tompkins R-peak detection, and a Random Forest model running on-device in C++ — results shown live on an LCD.',
    tags: ['ESP32-S3', 'AD8232', 'C++', 'Signal Processing'],
  },
  {
    title: 'ShipShop',
    year: '2023',
    desc: 'An e-commerce web app backed by a normalized 11-table MySQL schema covering users, products, orders, payments, and shipping. Full DDL/DML implementation with a PHP frontend for auth, browsing, and order management.',
    tags: ['MySQL', 'PHP', 'Database Design'],
  },
  {
    title: 'Smart Cane for the Visually Impaired',
    year: '2024',
    desc: 'An assistive cane that detects obstacles with an HC-SR04 ultrasonic sensor and warns users through a buzzer in real time. Built on Arduino UNO with full system design — schematic, sequence diagram, and PCB — and field-tested against traditional canes.',
    tags: ['Arduino UNO', 'HC-SR04', 'C++', 'Assistive Tech'],
  },
]

export const skills = [
  { cat: 'ML & AI', items: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Random Forest', 'XGBoost'] },
  { cat: 'Web & Design', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'Figma'] },
  { cat: 'Embedded & IoT', items: ['ESP32-S3', 'Arduino', 'C++', 'AD8232', 'Signal Processing'] },
  { cat: 'Data & Cloud', items: ['BigQuery ML', 'Vertex AI', 'Pandas', 'MySQL'] },
]
