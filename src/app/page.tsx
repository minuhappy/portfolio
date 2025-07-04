"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// 타입 정의
interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  category: string;
  image: string;
}

interface Profile {
  name: string;
  role: string;
  title: string;
  about: string;
  email: string;
  social: { instagram: string };
  skills: string[];
  projects: Project[];
}

export default function Home() {
  // 상태 정의 (초기값은 '로딩중...')
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setProfile(result.data);
        else setError(result.message);
      })
      .catch(() => setError("서버 연결에 실패했습니다."));
  }, []);

  return (
    <>
      <header className="hero">
        <div className="container">
          <h1 id="userName">{profile ? profile.name : "로딩중..."}</h1>
          <p className="role" id="userRole">{profile ? profile.role : "로딩중..."}</p>
          <p className="intro" id="userTitle">{profile ? profile.title : "로딩중..."}</p>
        </div>
      </header>

      <section className="about container">
        <h2>About Me</h2>
        <p id="userAbout">{profile ? profile.about : "로딩중..."}</p>
      </section>

      <section className="work container">
        <h2>Work</h2>
        <div className="work-list" id="projectsList">
          {profile
            ? profile.projects.map((project) => (
                <div className="work-item" key={project.id}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={140}
                    height={140}
                    style={{ objectFit: "cover", width: 140, height: 140, flexShrink: 0 }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/140x140?text=Project";
                    }}
                  />
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <small style={{ color: "#bfa46f", fontWeight: 500 }}>
                      {project.year} • {project.category}
                    </small>
                  </div>
                </div>
              ))
            : "로딩중..."}
        </div>
      </section>

      <section className="skills container">
        <h2>Skills</h2>
        <ul id="skillsList">
          {profile
            ? profile.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))
            : "로딩중..."}
        </ul>
      </section>

      <section className="contact container">
        <h2>Contact</h2>
        <p>
          Email: {profile ? (
            <a href={`mailto:${profile.email}`} id="userEmail">
              {profile.email}
            </a>
          ) : (
            <span id="userEmail">로딩중...</span>
          )}
        </p>
        <p>
          Instagram: {profile ? (
            <a
              href={`https://instagram.com/${profile.social.instagram.replace("@", "")}`}
              id="userInstagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.social.instagram}
            </a>
          ) : (
            <span id="userInstagram">로딩중...</span>
          )}
        </p>
      </section>

      <footer>
        <div className="container">
          &copy; 2024 <span id="footerName">{profile ? profile.name : "VMD Portfolio"}</span>. All rights reserved.
        </div>
      </footer>

      {error && (
        <div
          style={{
            background: "rgba(255,0,0,0.1)",
            border: "1px solid #ff0000",
            color: "#ff0000",
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}
    </>
  );
}
