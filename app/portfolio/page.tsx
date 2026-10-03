const skills = [
  { title: "Programming", items: ["C++", "Java", "JavaScript"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "Next.js", "React", "Tailwind CSS"] },
  { title: "Database", items: ["MySQL", "phpMyAdmin", "SQL"] },
  { title: "Tools", items: ["Visual Studio Code", "Git", "GitHub", "Android Studio"] },
  { title: "Other", items: ["Basic UI design", "Basic debugging", "Basic database normalization", "Responsive web design"] },
];

const projects = [
  { name: "NoteSpace", status: "School Project", tech: ["Next.js", "React", "TypeScript", "CSS", "localStorage"],
    description: "A simple note-taking web application that allows users to create, view, update, and delete notes. The project focuses on practicing React state management and building a functional user interface." },
  { name: "Vehicle Service Database", status: "School Project", tech: ["MySQL", "phpMyAdmin", "SQL"],
    description: "A database project designed to organize vehicle owners, vehicle information, owner contact details, and service records. The project helped me practice database normalization, relationships, and SQL queries." },
  { name: "Personal Portfolio", status: "Ongoing", tech: ["Next.js", "React", "CSS"],
    description: "A personal portfolio website created to showcase my background, technical skills, projects, and school activities as an Information Technology student." },
  { name: "Simple Web Projects", status: "Practice Projects", tech: ["HTML", "CSS", "JavaScript"],
    description: "Several small web development exercises created while learning HTML, CSS, and JavaScript. These projects helped me understand layouts, forms, basic interactivity, and responsive web design." },
];

export default function Portfolio() {
  return (
    <div className="container page">
      <header className="page-head">
        <p className="eyebrow">Portfolio</p>
        <h1>My Skills &amp; Projects</h1>
        <p className="lead">Here are some of the technologies I have learned and the projects I have worked on as an Information Technology student. Most of my experience so far comes from school activities, programming exercises, and personal practice.</p>
      </header>

      <h2 className="section-title">Technical Skills</h2>
      <p className="note">Skills I have learned, practiced, or am currently developing.</p>
      <div className="skills-grid">
        {skills.map((g) => (
          <section key={g.title} className="card">
            <h3>{g.title}</h3>
            <div className="tags">{g.items.map((i) => <span key={i} className="tag">{i}</span>)}</div>
          </section>
        ))}
      </div>

      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.name} className="card project">
            <span className="status">{p.status}</span>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="tags">{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
