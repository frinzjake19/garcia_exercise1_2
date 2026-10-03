import GalleryGrid from "@/components/GalleryGrid";

export default function Gallery() {
  return (
    <div className="container page">
      <header className="page-head">
        <p className="eyebrow">Gallery</p>
        <h1>School Activities &amp; Achievements</h1>
        <p className="lead">A collection of moments from my journey as an Information Technology student, including school activities, projects, presentations, and achievements.</p>
      </header>
      <GalleryGrid />
    </div>
  );
}
