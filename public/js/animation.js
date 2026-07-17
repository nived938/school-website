const page = location.pathname.split("/").pop();
const details = {
  "about.html": {
    label: "Our campus story",
    title: "A school built for everyday discovery.",
    text: "From bright classrooms and learning labs to the canteen, playground and performance stages, our campus gives students a place to study, create, rest and connect.",
    cards: [
      [
        "fa-solid fa-building",
        "Campus buildings",
        "Purposeful spaces for focused learning, collaboration and student wellbeing.",
      ],
      [
        "fa-solid fa-utensils",
        "Food and canteen",
        "A hygienic, welcoming place for students to enjoy refreshments and recharge.",
      ],
      [
        "fa-solid fa-tree",
        "Open spaces",
        "A playground and shared outdoor areas where friendships and team spirit grow.",
      ],
    ],
  },
  "academics.html": {
    label: "How we learn",
    title: "Strong foundations, meaningful progress.",
    text: "Each stage of learning blends curriculum knowledge with projects, discussion, experiments and regular feedback. Students become active learners, not just listeners.",
    cards: [
      [
        "fa-solid fa-book-open",
        "Language and literacy",
        "Reading, writing and speaking skills for every subject.",
      ],
      [
        "fa-solid fa-square-root-variable",
        "Mathematics",
        "Reasoning and problem-solving with confidence.",
      ],
      [
        "fa-solid fa-atom",
        "Science and discovery",
        "Practical investigation supported by our science lab.",
      ],
    ],
  },
  "facilities.html": {
    label: "Campus spaces",
    title: "Every space has a purpose.",
    text: "Our facilities are designed to support a balanced school day. Students can research in the library, create in the art room, experiment in labs, play outdoors and perform on stage.",
    cards: [
      [
        "fa-solid fa-book",
        "Library room",
        "Books, reading corners and resources for research.",
      ],
      [
        "fa-solid fa-laptop-code",
        "IT laboratory",
        "Digital skills and technology-supported learning.",
      ],
      [
        "fa-solid fa-masks-theater",
        "Three main stages",
        "Places for assemblies, arts festivals and proud moments.",
      ],
    ],
  },
  "admission.html": {
    label: "Your next steps",
    title: "A simple, friendly admission journey.",
    text: "Our team is happy to explain programmes, help with the form and arrange a campus visit. Admissions are available from Class 5 through Plus Two.",
    cards: [
      [
        "fa-solid fa-phone",
        "Talk with us",
        "Call the school office for programme and vacancy details.",
      ],
      [
        "fa-solid fa-school",
        "Visit campus",
        "See classrooms, facilities and school life first-hand.",
      ],
      [
        "fa-solid fa-file-signature",
        "Apply",
        "Submit the completed form with supporting documents.",
      ],
    ],
  },
  "contact.html": {
    label: "Visit and connect",
    title: "We are here to help.",
    text: "Whether you are exploring admissions, arranging a visit or looking for a school update, the office team will point you in the right direction.",
    cards: [
      [
        "fa-solid fa-clock",
        "Office hours",
        "Monday to Friday, 9:00 AM to 4:00 PM.",
      ],
      [
        "fa-solid fa-location-dot",
        "School location",
        "School Address, Your City, India.",
      ],
      [
        "fa-solid fa-envelope",
        "Email us",
        "hello@schoolname.edu.in for general enquiries.",
      ],
    ],
  },
};

function addDetailSection(data) {
  const section = document.createElement("section");
  section.className = "extra-content section soft-bg";
  section.innerHTML = `<div class="container"><div class="section-heading centered"><p class="eyebrow dark"><span></span>${data.label}</p><h2>${data.title}</h2><p>${data.text}</p></div><div class="detail-cards">${data.cards.map((card) => `<article><i class="${card[0]}"></i><h3>${card[1]}</h3><p>${card[2]}</p></article>`).join("")}</div></div>`;
  document.querySelector("main")?.append(section);
}

if (details[page]) addDetailSection(details[page]);

if (page === "gallery.html") {
  const categories = [
    [
      "Campus Building",
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85",
      "Our welcoming school building and shared campus spaces.",
    ],
    [
      "School Canteen",
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=85",
      "Fresh, hygienic refreshments for a happy school day.",
    ],
    [
      "Library Room",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85",
      "A peaceful place to read, research and imagine.",
    ],
    [
      "IT Laboratory",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
      "Technology learning and digital creativity.",
    ],
    [
      "Science Laboratory",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
      "Experiments, observation and hands-on discovery.",
    ],
    [
      "Art Room",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
      "Colour, imagination and student expression.",
    ],
    [
      "Playground",
      "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?auto=format&fit=crop&w=900&q=85",
      "Movement, teamwork and outdoor fun.",
    ],
    [
      "Main Stages",
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85",
      "Celebrating culture, talent and achievement.",
    ],
  ];
  const section = document.createElement("section");
  section.className = "facility-gallery section soft-bg";
  section.innerHTML = `<div class="container"><div class="section-heading centered"><p class="eyebrow dark"><span></span> Campus by category</p><h2>Explore our <em>school spaces.</em></h2><p>Temporary photos for each facility can be replaced with real school photographs later.</p></div><div class="category-gallery">${categories.map(([title, src, description]) => `<article><img src="${src}" alt="Temporary photo of ${title}"><div><h3>${title}</h3><p>${description}</p></div></article>`).join("")}</div></div>`;
  document.querySelector("main")?.append(section);
}

if (page === "gallery.html") {
  const achievementSection = document.createElement("section");
  achievementSection.className = "achievements section";
  achievementSection.innerHTML = `<div class="container"><div class="section-heading centered"><p class="eyebrow dark"><span></span> Achievements</p><h2>Celebrating <em>every achievement.</em></h2><p>Replace the sample student names, grades, trophies and photographs below with verified school results.</p></div><div class="trophy-strip"><article><i class="fa-solid fa-trophy"></i><b>School Trophy</b><span>Overall championship / runner-up</span></article><article><i class="fa-solid fa-medal"></i><b>Sports Trophy</b><span>School Sports & Games</span></article><article><i class="fa-solid fa-award"></i><b>Arts Trophy</b><span>School Kalolsavam</span></article></div><div class="competition-list"><article><h3><i class="fa-solid fa-masks-theater"></i> Kerala School Kalolsavam</h3><p>Sub-district → District → State level arts competitions.</p></article><article><h3><i class="fa-solid fa-flask"></i> Kerala School Sasthrolsavam</h3><p>Science, mathematics, social science, work experience and IT activities.</p></article><article><h3><i class="fa-solid fa-person-running"></i> Kerala School Sports & Games</h3><p>Sports competitions from sub-district and district through state and national qualification.</p></article></div><h3 class="student-title">A Grade achievers — sample records</h3><div class="student-grid"><article><img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=85" alt="Temporary student achiever photo"><div><span>A Grade · Sub-district Kalolsavam</span><h3>Student Name</h3><p>Item: Classical Music / Dance</p></div></article><article><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85" alt="Temporary student achiever photo"><div><span>A Grade · District Sasthrolsavam</span><h3>Student Name</h3><p>Item: Science Project / Maths Fair</p></div></article><article><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85" alt="Temporary student achiever photo"><div><span>State Selection · School Sports</span><h3>Student Name</h3><p>Item: Athletics / Games</p></div></article></div></div>`;
  document.querySelector("main")?.append(achievementSection);
}

const style = document.createElement("style");
style.textContent =
  ".detail-cards,.category-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.detail-cards article{background:#fff;padding:32px 26px}.detail-cards i{color:var(--coral);font-size:24px;margin-bottom:17px}.detail-cards h3,.category-gallery h3{font:700 23px var(--serif)}.detail-cards p,.category-gallery p{color:var(--muted);font-size:14px;margin-top:8px}.category-gallery{grid-template-columns:repeat(4,1fr)}.category-gallery article{background:#fff;overflow:hidden}.category-gallery img{height:190px;object-fit:cover;transition:transform .25s}.category-gallery article:hover img{transform:scale(1.05)}.category-gallery div{padding:18px}.achievements{background:#fff}.trophy-strip,.competition-list,.student-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.trophy-strip article{background:var(--teal);color:#fff;padding:28px;text-align:center}.trophy-strip i{font-size:34px;color:var(--gold);display:block;margin-bottom:11px}.trophy-strip b,.trophy-strip span{display:block}.trophy-strip span{font-size:13px;color:#d4e3e2;margin-top:5px}.competition-list{margin:30px 0}.competition-list article{padding:24px;background:var(--cream);border-left:3px solid var(--coral)}.competition-list h3{font:700 21px var(--serif)}.competition-list i{color:var(--coral);margin-right:8px}.competition-list p{font-size:14px;color:var(--muted);margin-top:8px}.student-title{font:700 30px var(--serif);margin:42px 0 19px}.student-grid article{background:var(--cream);overflow:hidden}.student-grid img{height:250px;object-fit:cover}.student-grid div{padding:18px}.student-grid span{font-size:11px;font-weight:700;letter-spacing:.4px;color:var(--coral)}.student-grid h3{font:700 22px var(--serif);margin-top:5px}.student-grid p{font-size:14px;color:var(--muted)}@media(max-width:800px){.detail-cards{grid-template-columns:1fr}.category-gallery,.trophy-strip,.competition-list,.student-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:480px){.category-gallery,.trophy-strip,.competition-list,.student-grid{grid-template-columns:1fr}}";
document.head.append(style);

const targets = document.querySelectorAll(".section,.page-hero");
targets.forEach((target) => target.classList.add("reveal"));
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.08 },
);
targets.forEach((target) => observer.observe(target));
