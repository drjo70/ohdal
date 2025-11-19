# 오달동이 웹사이트

> 해와 달의 도시 강릉에서 만드는 천연 웰니스 제품

## 📋 프로젝트 소개

오달동이는 강릉의 청정 자연에서 영감을 받아 만든 프리미엄 천연 웰니스 제품 브랜드입니다. 
이 웹사이트는 오달동이의 제품과 브랜드 스토리를 소개하는 공식 웹사이트입니다.

## 🌟 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에 최적화
- **제품 소개**: 해파랑 비누, 스프레이, 소금 등 주요 제품 상세 정보
- **영상 갤러리**: 브랜드 스토리와 제품 제작 과정 영상
- **회사 소개**: 오달동이의 철학과 비전 소개
- **간편한 문의**: 이메일을 통한 제품 주문 및 문의

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 모던 스타일링 및 반응형 디자인
- **JavaScript (Vanilla)**: 인터랙티브 기능 구현
- **Firebase**: 백엔드 서비스
  - **Firestore**: NoSQL 데이터베이스
  - **Authentication**: 사용자 인증
  - **Hosting**: 웹 호스팅
  - **Analytics**: 사용자 분석 (선택사항)
- **Intersection Observer API**: 스크롤 애니메이션

## 📁 프로젝트 구조

```
ohdal/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 파일
├── images/             # 제품 이미지 디렉토리
│   ├── soap.jpg
│   ├── spray.jpg
│   └── salt.jpg
└── README.md           # 프로젝트 문서
```

## 🚀 사용 방법

### 로컬 실행

1. 저장소 클론
```bash
git clone https://github.com/drjo70/ohdal.git
cd ohdal
```

2. 의존성 설치 (선택사항)
```bash
npm install
```

3. Firebase 설정 (선택사항)
   - `FIREBASE_SETUP.md` 파일 참고
   - `firebase-config.js`에 Firebase 프로젝트 정보 입력

4. 로컬 서버 실행

Firebase 사용:
```bash
npm start
# 또는
firebase serve
```

일반 웹 서버:
```bash
# Python 3를 사용하는 경우
python -m http.server 8000

# Node.js http-server를 사용하는 경우
npx http-server
```

5. 브라우저에서 접속
   - Firebase: `http://localhost:5000`
   - 일반 서버: `http://localhost:8000`

### Firebase 배포

자세한 내용은 `FIREBASE_SETUP.md` 참고

```bash
# Firebase 로그인
firebase login

# 프로젝트 초기화
firebase init

# 배포
npm run deploy
```

## 🎨 디자인 컨셉

- **색상 팔레트**:
  - Primary: #2c5f7f (강릉 바다의 푸른색)
  - Secondary: #e8a87c (해질녘의 따뜻한 색)
  - Accent: #d4af37 (고급스러운 골드)

- **타이포그래피**: Noto Sans KR - 한글 가독성 최적화

- **레이아웃**: 그리드 시스템을 활용한 깔끔하고 모던한 디자인

## 📱 반응형 브레이크포인트

- **데스크톱**: 1200px 이상
- **태블릿**: 768px ~ 1199px
- **모바일**: 767px 이하

## 📦 제품 정보

### 해파랑 비누 (₩10,000)
- 100% 천연 재료 사용
- 화학 첨가물 무첨가
- 모든 피부 타입 적합

### 해파랑 스프레이 (₩15,000)
- 강릉 청정 지하 암반수 100%
- 피부 진정 및 보습 효과
- 휴대용 소형 사이즈

### 해파랑 소금 (₩10,000)
- 동해 청정 바닷물 사용
- 미네랄 성분 풍부
- 요리용 & 목욕용 겸용

## 👥 회사 정보

- **대표자**: 김수정
- **설립일**: 2024.06.11
- **사업자번호**: 536-59-00642
- **업종**: 서비스업 / 디자인콘텐츠
- **주소**: 강원특별자치도 강릉시 강릉대로 348 지하1층 (포남동, 강릉축협)

## 📧 연락처

- **이메일**: mail@ohdal.kr
- **웹사이트**: www.ohdal.kr

## 🏆 수상 및 지원

**2025년도 선정**:
- 시군구연고산업육성사업
- 스마트 관광산업 콘텐츠 제작기업 육성지원 사업
- 정부 지원 총사업비: 31,500천원

## 📄 라이센스

© 2024 오달동이. All rights reserved.

## 🔄 업데이트 내역

- **v1.0.0** (2024-11-19)
  - 초기 웹사이트 릴리즈
  - 제품 소개 페이지 구현
  - 반응형 디자인 적용
  - 영상 갤러리 추가

## 🤝 기여

이 프로젝트에 기여하고 싶으시다면:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ✨ 개선 예정 사항

- [ ] 제품 이미지 추가
- [ ] 온라인 주문 시스템 구축
- [ ] 영문 버전 추가
- [ ] SEO 최적화
- [ ] 성능 최적화

---

Made with ❤️ in Gangneung, Korea
