# Firebase 설정 가이드

이 가이드는 오달동이 웹사이트를 Firebase에 배포하고 설정하는 방법을 안내합니다.

## 📋 사전 준비

1. Google 계정
2. Node.js 설치 (v14 이상)
3. Firebase CLI 설치

## 🚀 Firebase 프로젝트 설정

### 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력: `ohdal` (또는 원하는 이름)
4. Google Analytics 설정 (선택사항)
5. 프로젝트 생성 완료

### 2. Firebase CLI 설치

```bash
npm install -g firebase-tools
```

### 3. Firebase 로그인

```bash
firebase login
```

### 4. Firebase 프로젝트 초기화

프로젝트 루트 디렉토리에서:

```bash
firebase init
```

선택 사항:
- ✅ Firestore
- ✅ Hosting

프로젝트 선택:
- 방금 생성한 Firebase 프로젝트 선택

Firestore 설정:
- Rules file: `firestore.rules` (기본값)
- Indexes file: `firestore.indexes.json` (기본값)

Hosting 설정:
- Public directory: `.` (현재 디렉토리)
- Single-page app: `Yes`

### 5. Firebase 웹 앱 추가

1. Firebase Console에서 프로젝트 선택
2. 프로젝트 설정 (⚙️ 아이콘) → 일반
3. "내 앱" 섹션에서 웹 앱 추가 (`</>` 아이콘)
4. 앱 닉네임 입력: `오달동이 웹사이트`
5. Firebase Hosting 설정 체크
6. "앱 등록" 클릭

### 6. Firebase 구성 정보 복사

앱 등록 후 표시되는 Firebase 구성 정보를 복사:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

이 정보를 `firebase-config.js` 파일의 `firebaseConfig` 객체에 붙여넣기

### 7. .firebaserc 파일 업데이트

`.firebaserc` 파일을 열어 프로젝트 ID 업데이트:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

## 🔐 Firestore 데이터베이스 설정

### 1. Firestore 데이터베이스 생성

1. Firebase Console → Firestore Database
2. "데이터베이스 만들기" 클릭
3. 보안 규칙 모드: "프로덕션 모드" 선택
4. 위치 선택: `asia-northeast3` (서울) 권장
5. "사용 설정" 클릭

### 2. Firestore 보안 규칙 배포

```bash
firebase deploy --only firestore:rules
```

### 3. 초기 제품 데이터 추가

#### 옵션 1: Firebase Console에서 수동으로 추가

1. Firestore Database → 데이터 탭
2. "컬렉션 시작" 클릭
3. 컬렉션 ID: `products`
4. 첫 번째 문서 추가

#### 옵션 2: Admin SDK 스크립트 사용 (권장)

1. Firebase Console → 프로젝트 설정 → 서비스 계정
2. "새 비공개 키 생성" 클릭
3. 다운로드한 JSON 파일을 `serviceAccountKey.json`으로 저장
4. `.gitignore`에 `serviceAccountKey.json` 추가 (이미 포함됨)
5. Firebase Admin SDK 설치:
   ```bash
   npm install firebase-admin
   ```
6. 스크립트 실행:
   ```bash
   npm run init-products
   ```

## 🔒 Firebase Authentication 설정

### 1. Authentication 활성화

1. Firebase Console → Authentication
2. "시작하기" 클릭
3. 로그인 방법 탭에서 "익명" 활성화
4. "저장" 클릭

### 2. 추가 로그인 방법 (선택사항)

- 이메일/비밀번호
- Google 로그인
- 기타 소셜 로그인

## 🚢 Firebase Hosting 배포

### 1. 첫 배포

```bash
firebase deploy
```

또는 Hosting만 배포:

```bash
npm run deploy:hosting
```

### 2. 배포 확인

배포 완료 후 제공되는 URL에서 웹사이트 확인:
- `https://your-project-id.web.app`
- `https://your-project-id.firebaseapp.com`

### 3. 커스텀 도메인 연결 (선택사항)

1. Firebase Console → Hosting
2. "도메인 추가" 클릭
3. 도메인 입력: `www.ohdal.kr`
4. DNS 레코드 설정 안내 따르기

## 📊 Firebase Analytics 설정 (선택사항)

1. Firebase Console → Analytics
2. "Analytics 시작하기" 클릭
3. 데이터 스트림 구성

## 🔧 개발 환경에서 테스트

로컬에서 Firebase Hosting 미리보기:

```bash
npm start
```

또는:

```bash
firebase serve
```

브라우저에서 `http://localhost:5000` 접속

## 📝 환경 변수 설정

프로덕션 환경과 개발 환경을 분리하려면:

1. 개발용 Firebase 프로젝트 추가:
   ```bash
   firebase use --add
   ```

2. 프로젝트 별칭 지정:
   - 프로덕션: `production`
   - 개발: `development`

3. 프로젝트 전환:
   ```bash
   firebase use production
   firebase use development
   ```

## 🔄 지속적 배포 (CI/CD) 설정

### GitHub Actions를 사용한 자동 배포

1. Firebase 토큰 생성:
   ```bash
   firebase login:ci
   ```

2. 토큰을 GitHub Secrets에 저장:
   - Repository → Settings → Secrets and variables → Actions
   - New repository secret: `FIREBASE_TOKEN`

3. `.github/workflows/deploy.yml` 파일 생성 (이미 포함됨)

4. main 브랜치에 푸시하면 자동 배포

## 📚 추가 리소스

- [Firebase 문서](https://firebase.google.com/docs)
- [Firestore 보안 규칙](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Hosting 가이드](https://firebase.google.com/docs/hosting)

## ⚠️ 주의사항

1. **보안**:
   - `serviceAccountKey.json` 파일은 절대 Git에 커밋하지 마세요
   - Firebase 구성 정보는 공개되어도 괜찮지만, 보안 규칙을 반드시 설정하세요

2. **비용**:
   - Firebase 무료 플랜(Spark)으로 시작
   - 트래픽이 증가하면 Blaze 플랜으로 업그레이드

3. **백업**:
   - Firestore 데이터는 정기적으로 백업
   - Firebase Console에서 자동 백업 설정 가능

## 🆘 문제 해결

### 배포 실패

```bash
# Firebase 로그아웃 후 다시 로그인
firebase logout
firebase login
```

### Firestore 권한 오류

- Firestore 보안 규칙 확인
- Firebase Console에서 규칙 테스트

### 로컬에서 Firebase 연결 실패

- `firebase-config.js`의 설정 정보 확인
- 브라우저 콘솔에서 오류 메시지 확인

---

문의사항: mail@ohdal.kr
