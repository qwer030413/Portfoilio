
import { CSSProperties, useEffect, useRef } from "react";

type Experience = {
  id: number;
  title: string;
  company: string;
  used: string[];
  date: string;
  location: string;
  bullets: string[];
};

type ExperienceCardProps = {
  exp: Experience;
  index: number;
};

export default function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
 
  useEffect(() => {
    const el = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && el) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);
 
  return (
    <div className="exp-row" ref={cardRef} style={{ '--delay': `${index * 0.07}s` } as CSSProperties}>
      <div className="exp-spine">
        <div className="exp-dot" />
        <div className="exp-line" />
      </div>
 
      <div className="exp-card">
        <div className="exp-card-header">
          <div className='titleBox'>
            <h3 className="exp-title">{exp.title}</h3>
            <span className="exp-company">{exp.company}</span>
          </div>
          <div className="exp-meta">
            <span className="exp-date">{exp.date}</span>
            <span className="exp-location">{exp.location}</span>
          </div>
        </div>
 
        <ul className="exp-bullets">
          {exp.bullets.map((b, i) => (
            <li className = "listItem" key={i}>{b}</li>
          ))}
        </ul>
 
        <div className="exp-tags">
          {exp.used.map((tag) => (
            <span className="exp-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
