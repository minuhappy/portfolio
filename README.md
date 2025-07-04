# VMD Portfolio Server

VMD 포트폴리오를 위한 Node.js API 서버입니다.

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 서버 실행
```bash
# 개발 모드 (nodemon 사용)
npm run dev

# 프로덕션 모드
npm start
```

서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## API 엔드포인트

### 1. 전체 프로필 정보
```
GET /api/profile
```

**응답 예시:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "홍길동",
    "role": "Visual Merchandiser",
    "title": "공간에 생명을 불어넣는 VMD",
    "email": "hong.gildong@example.com",
    "phone": "+82-10-1234-5678",
    "location": "서울시 강남구",
    "experience": "5년",
    "about": "5년차 VMD로서, 브랜드의 가치를 공간에 담아내는 일을 합니다...",
    "skills": ["Photoshop", "Illustrator", "3D Max", "SketchUp", ...],
    "projects": [...],
    "education": [...],
    "social": {...},
    "languages": ["한국어", "영어"],
    "certifications": ["VMD 전문가 자격증", "컬러리스트 자격증"],
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "message": "프로필 정보를 성공적으로 가져왔습니다."
}
```

### 2. 스킬 정보만
```
GET /api/profile/skills
```

### 3. 프로젝트 정보만
```
GET /api/profile/projects
```

## 테스트

브라우저에서 다음 URL들을 확인해보세요:

- `http://localhost:3000` - 서버 상태 확인
- `http://localhost:3000/api/profile` - 전체 프로필 정보
- `http://localhost:3000/api/profile/skills` - 스킬 정보
- `http://localhost:3000/api/profile/projects` - 프로젝트 정보

## 커스터마이징

`controllers/profileController.js` 파일에서 사용자 정보를 수정할 수 있습니다:

- 이름, 이메일, 연락처
- 스킬 목록
- 프로젝트 정보
- 소셜 미디어 링크
- 학력 및 자격증

## 환경 변수

필요시 `.env` 파일을 생성하여 포트를 변경할 수 있습니다:

```
PORT=4000
```

## 기술 스택

- Node.js
- Express.js
- CORS (Cross-Origin Resource Sharing) 