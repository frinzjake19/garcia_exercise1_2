const hobbies = ["Playing video games", "Exploring new technology", "Watching movies and anime", "Listening to music", "Learning programming", "Spending time with friends"];
const strengths = ["Willingness to learn", "Problem-solving", "Patience when working on difficult tasks", "Creativity", "Adaptability", "Curiosity about technology"];

export default function About() {
  return (
    <div className="container page">
      <header className="page-head">
        <p className="eyebrow">About</p>
        <h1>About Me</h1>
      </header>

      <section className="card block">
        <h3>Who I Am</h3>
        <p>I am a second-year Information Technology student at Holy Cross of Davao College. I enjoy learning about computers, programming, and different technologies that can be used to solve problems. As I continue my studies, I am working on improving both my technical skills and my ability to create useful applications.</p>
      </section>

      <section className="card block">
        <h3>Why I Chose IT</h3>
        <p>I chose Information Technology because I have always been interested in computers and how technology works. I also became interested in programming because it allows me to create something from an idea and turn it into a working application. Although I am still learning, I want to continue developing my skills and gain more experience in different areas of IT.</p>
      </section>

      <div className="two-col">
        <section className="card block">
          <h3>Hobbies</h3>
          <ul className="check-list">{hobbies.map((h) => <li key={h}>{h}</li>)}</ul>
        </section>
        <section className="card block">
          <h3>Strengths</h3>
          <ul className="check-list">{strengths.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
      </div>

      <section className="card block dark">
        <h3>Career Goal</h3>
        <p>My goal is to build a career in the IT industry, particularly in software or web development. I want to gain enough experience to become a skilled developer who can create useful and reliable applications. In the future, I hope to work with international companies and continue improving my skills through real-world experience.</p>
      </section>
    </div>
  );
}
