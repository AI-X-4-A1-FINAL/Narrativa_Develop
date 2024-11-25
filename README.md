![NARRATIVA-TITLE](https://github.com/user-attachments/assets/97538156-f202-4b48-8543-9bbf835fda0e)

# Narrativa Develop

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-v3.3.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-v6.2.4-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.4.3%20LTS-4479A1?style=for-the-badge&logo=mysql&logoColor=white)<br />
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.15-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)<br />
![Python](https://img.shields.io/badge/Python-v3.12.7-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-v2.5.1-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-v0.115.4-009688?style=for-the-badge&logo=fastapi&logoColor=white)

## 🗝️ 프로젝트 소개

> 개발환경을 통일하기 위한 리포지토리입니다.

### 사전 요구사항

+ Git
+ Docker
+ Docker Compose

### 설치 단계

#### 1. 프로젝트 클론
> 프로젝트를 로컬 환경으로 가져오기 위해 다음 명령어를 실행합니다:
```bash
$ git clone https://github.com/AI-X-4-A1-FINAL/Narrativa_Develop.git
$ cd narrativa-develop
```
#### 2. 서브모듈 설정
> 프로젝트의 서브모듈을 초기화하고 업데이트하는 방법은 두 가지가 있습니다:
+ 방법 1: 기본 클론 후 서브모듈 설정
```bash
# 서브모듈 초기화
$ git submodule init

# 서브모듈 업데이트
$ git submodule update
```
+ 방법 2: 서브모듈을 포함한 직접 클론
```bash
$ git clone --recurse-submodules https://github.com/AI-X-4-A1-FINAL/Narrativa_Develop.git
```

#### 3. 서브모듈 관리
+ 서브모듈 업데이트
> 서브모듈의 내용이 변경되었을 경우 다음 명령어로 최신 변경사항을 가져올 수 있습니다
```bash
# 모든 서브모듈을 최신 버전으로 업데이트
$ git submodule update --remote

# 또는 각 서브모듈의 main 브랜치에서 풀
$ git submodule foreach git pull origin main
```

#### 4. 서비스 실행
> Docker Compose를 사용하여 전체 서비스를 빌드하고 실행합니다
```bash
$ docker-compose up --build
```

#### 문제 해결

+ 일반적인 문제

1. 서브모듈 업데이트 실패

   + 로컬 변경사항이 있는지 확인

   + git status 명령어로 상태 확인

   + 필요시 로컬 변경사항 커밋 또는 스태시

2. Docker 빌드 실패

   + Docker 데몬이 실행 중인지 확인

   + 포트 충돌 여부 확인

   + 로그 확인하여 구체적인 오류 파악

#### 참고사항

+ 서브모듈 업데이트는 정기적으로 수행하는 것이 좋습니다

+ 빌드 전 항상 최신 버전의 코드를 유지하도록 합니다

+ 문제 발생 시 프로젝트 이슈 트래커를 확인하세요

## 🗝️ 브랜치 관리 규칙

### 브랜치 구조

1. **메인 브랜치 (main)**

   - 프로덕션 배포용 안정 브랜치
   - PR을 통해서만 병합 가능

2. **개발 브랜치 (dev)**

   - 개발 중인 기능 통합 브랜치
   - 배포 전 최종 테스트 진행

3. **기능 브랜치 (feat/)**

   - 새로운 기능 개발용
   - 명명규칙: `feat/{기능명}`
   - 예: `feat/social-login`

4. **긴급 수정 브랜치 (hotfix/)**
   - 프로덕션 긴급 버그 수정용
   - 명명규칙: `hotfix/{이슈번호}`
   - 예: `hotfix/critical-bug`

### 브랜치 사용 예시

```bash
# 기능 브랜치 생성
git checkout -b feat/social-login

# 긴급 수정 브랜치 생성
git checkout -b hotfix/critical-bug
```

## 🗝️ 디렉토리 구조

```
NARRATIVA-ADMIN/
├── node_modules/            # 프로젝트 종속성 패키지
├── public/                  # 정적 파일 디렉토리
├── src/                     # 소스 코드
│   ├── assets/             # 이미지, 폰트 등 리소스 파일
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── Dashboard/      # 대시보드 관련 컴포넌트
│   │   ├── UserManagement/ # 회원 관리 관련 컴포넌트
│   │   └── Notice/         # 공지사항 관련 컴포넌트
│   ├── hooks/              # 커스텀 훅
│   ├── pages/              # 페이지 컴포넌트
│   ├── services/           # API 및 유틸리티 함수
│   └── types/              # TypeScript 타입 정의
├── .gitignore              # Git 무시 파일 목록
├── LICENSE                 # 라이센스 정보
├── package.json            # 프로젝트 설정 및 종속성
├── README.md               # 프로젝트 문서
├── tailwind.config.js      # Tailwind CSS 설정
└── tsconfig.json           # TypeScript 설정
```

## 🗝️ 팀 정보

### **Team Member**

<a href="https://github.com/stjoo0925" target="_blank">
  <img src="https://github.com/user-attachments/assets/bb285012-1e08-4bd7-9c63-d6f73c80f713" 
       alt="st" 
       width="200" 
       height="auto" 
       style="max-width: 100%; height: auto;">
</a>

## 🗝️ 문의 및 기여

프로젝트에 대한 문의사항이나 개선 제안은 이슈 탭에 등록해주세요.<br />
기여를 원하시는 분은 Fork & Pull Request를 통해 참여해주시면 감사하겠습니다.

## 🗝️ 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.

<br /><br />
![footer](https://github.com/user-attachments/assets/c30abbd9-8e89-4a4e-8823-33fe0cf843c9)
