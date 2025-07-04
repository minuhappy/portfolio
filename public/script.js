// API 기본 URL (Railway 배포시 자동으로 현재 도메인 사용)
const API_BASE_URL = window.location.origin;

// 프로필 데이터 로드
async function loadProfile() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/profile`);
    const result = await response.json();
    
    if (result.success) {
      displayProfile(result.data);
    } else {
      console.error('프로필 로드 실패:', result.message);
      showError('프로필 정보를 불러오는데 실패했습니다.');
    }
  } catch (error) {
    console.error('API 호출 오류:', error);
    showError('서버 연결에 실패했습니다.');
  }
}

// 프로필 정보 화면에 표시
function displayProfile(profile) {
  // 기본 정보
  document.getElementById('userName').textContent = profile.name;
  document.getElementById('userRole').textContent = profile.role;
  document.getElementById('userTitle').textContent = profile.title;
  document.getElementById('userAbout').textContent = profile.about;
  document.getElementById('footerName').textContent = profile.name;
  
  // 연락처
  const emailLink = document.getElementById('userEmail');
  emailLink.textContent = profile.email;
  emailLink.href = `mailto:${profile.email}`;
  
  const instagramLink = document.getElementById('userInstagram');
  instagramLink.textContent = profile.social.instagram;
  instagramLink.href = `https://instagram.com/${profile.social.instagram.replace('@', '')}`;
  
  // 스킬 목록
  displaySkills(profile.skills);
  
  // 프로젝트 목록
  displayProjects(profile.projects);
  
  // 로딩 상태 제거
  removeLoadingState();
}

// 스킬 목록 표시
function displaySkills(skills) {
  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = '';
  
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

// 프로젝트 목록 표시
function displayProjects(projects) {
  const projectsList = document.getElementById('projectsList');
  projectsList.innerHTML = '';
  
  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'work-item';
    
    projectDiv.innerHTML = `
      <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/140x140?text=Project'">
      <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <small style="color: #bfa46f; font-weight: 500;">${project.year} • ${project.category}</small>
      </div>
    `;
    
    projectsList.appendChild(projectDiv);
  });
}

// 에러 메시지 표시
function showError(message) {
  const hero = document.querySelector('.hero');
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = `
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid #ff0000;
    color: #ff0000;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
  `;
  errorDiv.textContent = message;
  hero.appendChild(errorDiv);
}

// 로딩 상태 제거
function removeLoadingState() {
  const loadingElements = document.querySelectorAll('.loading');
  loadingElements.forEach(el => el.classList.remove('loading'));
}

// 페이지 로드시 프로필 데이터 가져오기
document.addEventListener('DOMContentLoaded', loadProfile);

// API 상태 확인 (개발용)
async function checkApiStatus() {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
    const result = await response.json();
    console.log('API 상태:', result);
  } catch (error) {
    console.error('API 상태 확인 실패:', error);
  }
}

// 개발 모드에서만 API 상태 확인
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  checkApiStatus();
} 