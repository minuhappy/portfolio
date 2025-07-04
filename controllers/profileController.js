const express = require('express');
const router = express.Router();

// Sample user data - 실제 사용시 데이터베이스에서 가져오거나 환경변수로 관리
const userProfile = {
  id: 1,
  name: "홍길동",
  role: "Visual Merchandiser",
  title: "공간에 생명을 불어넣는 VMD",
  email: "hong.gildong@example.com",
  phone: "+82-10-1234-5678",
  location: "서울시 강남구",
  experience: "5년",
  about: "5년차 VMD로서, 브랜드의 가치를 공간에 담아내는 일을 합니다. 트렌드 분석, 매장 연출, 프로모션 기획에 강점이 있습니다.",
  skills: [
    "Photoshop",
    "Illustrator", 
    "3D Max",
    "SketchUp",
    "트렌드 분석",
    "공간 연출 기획",
    "매장 디스플레이",
    "POP 디자인"
  ],
  projects: [
    {
      id: 1,
      title: "2023 S/S 매장 디스플레이",
      description: "트렌디한 컬러와 소재를 활용한 시즌 디스플레이 연출",
      year: "2023",
      category: "매장 연출",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "브랜드 런칭 프로모션",
      description: "신규 브랜드 런칭을 위한 공간 기획 및 POP 디자인",
      year: "2023",
      category: "프로모션",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "2022 F/W 컬렉션 전시",
      description: "가을/겨울 컬렉션을 위한 테마별 매장 연출",
      year: "2022",
      category: "전시 기획",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80"
    }
  ],
  education: [
    {
      degree: "시각디자인학과",
      school: "서울예술대학교",
      year: "2019"
    }
  ],
  social: {
    instagram: "@hong_vmd",
    linkedin: "linkedin.com/in/honggildong",
    behance: "behance.net/honggildong"
  },
  languages: ["한국어", "영어"],
  certifications: [
    "VMD 전문가 자격증",
    "컬러리스트 자격증"
  ],
  updatedAt: new Date().toISOString()
};

// GET /api/profile - 사용자 프로필 정보 반환
router.get('/profile', (req, res) => {
  try {
    res.json({
      success: true,
      data: userProfile,
      message: "프로필 정보를 성공적으로 가져왔습니다."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "서버 오류가 발생했습니다.",
      message: error.message
    });
  }
});

// GET /api/profile/skills - 스킬만 반환
router.get('/profile/skills', (req, res) => {
  try {
    res.json({
      success: true,
      data: userProfile.skills,
      message: "스킬 정보를 성공적으로 가져왔습니다."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "서버 오류가 발생했습니다.",
      message: error.message
    });
  }
});

// GET /api/profile/projects - 프로젝트만 반환
router.get('/profile/projects', (req, res) => {
  try {
    res.json({
      success: true,
      data: userProfile.projects,
      message: "프로젝트 정보를 성공적으로 가져왔습니다."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "서버 오류가 발생했습니다.",
      message: error.message
    });
  }
});

module.exports = router; 