import Link from "next/link";

const summary = [
  { label: "Course", value: "BSIT" },
  { label: "Year Level", value: "Second Year" },
  { label: "School", value: "Holy Cross of Davao College" },
  { label: "Field", value: "Information Technology" },
];

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-text">
          <p className="eyebrow">Welcome to my portfolio</p>
          <h1>Frinz Jake R. Garcia</h1>
          <h2>IT Student / Future IT Professional</h2>
          <p className="lead">
            Hi! I&apos;m Frinz Jake R. Garcia, a second-year BSIT student at Holy Cross of Davao
            College. I&apos;m interested in technology, programming, and learning how software and
            websites are developed. I&apos;m continuously improving my technical skills through
            school projects and personal practice as I work toward becoming an IT professional.
          </p>
          <div className="btn-row">
            <Link href="/portfolio" className="btn btn-dark">View My Portfolio</Link>
            <Link href="/about" className="btn btn-light">About Me</Link>
          </div>
        </div>

        {/* Visual area: made with CSS only, no photo needed */}
        <div className="visual" aria-hidden="true">
          <div className="monogram">FJ</div>
          <div className="code-window">
            <div className="dots"><i /><i /><i /></div>
            <pre>{`const student = {
  name: "Frinz",
  course: "BSIT",
  year: 2,
  learning: true,
};`}</pre>
          </div>
        </div>
      </section>

      <section className="container summary">
        {summary.map((s) => (
          <div key={s.label} className="card stat">
            <small>{s.label}</small>
            <strong>{s.value}</strong>
          </div>
        ))}
      </section>
    </>
  );
}
