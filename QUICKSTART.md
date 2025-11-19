# 오달동이 웹사이트 빠른 시작 가이드

## 🚀 5분 안에 Firebase로 배포하기

### 1️⃣ Firebase 프로젝트 생성 (2분)

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. "프로젝트 추가" → 이름: `ohdal` → 생성
3. 웹 앱 추가 (`</>` 아이콘) → 앱 닉네임: `오달동이`
4. Firebase 구성 정보 복사

### 2️⃣ 로컬 설정 (1분)

```bash
# Firebase CLI 설치
npm install -g firebase-tools

# Firebase 로그인
firebase login

# 프로젝트에서
cd ohdal
npm install
```

### 3️⃣ Firebase 설정 업데이트 (1분)

**firebase-config.js 파일 수정:**
```javascript
const firebaseConfig = {
  apiKey: "여기에_복사한_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123",
  measurementId: "G-ABC123"
};
```

**.firebaserc 파일 수정:**
```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

### 4️⃣ Firebase 서비스 활성화 (1분)

**Firestore:**
1. Firebase Console → Firestore Database
2. "데이터베이스 만들기" → 프로덕션 모드
3. 위치: `asia-northeast3` (서울)

**Authentication:**
1. Firebase Console → Authentication
2. "시작하기" → 로그인 방법
3. "익명" 활성화

### 5️⃣ 배포! (30초)

```bash
# Firestore 규칙 배포
firebase deploy --only firestore

# 웹사이트 배포
firebase deploy --only hosting
```

완료! 🎉

배포된 URL:
- `https://your-project-id.web.app`
- `https://your-project-id.firebaseapp.com`

## 📝 다음 단계

### 제품 데이터 추가

**옵션 1: Firebase Console에서 수동 추가**
1. Firestore Database → 데이터 탭
2. 컬렉션 시작 → ID: `products`
3. 문서 추가

**옵션 2: 스크립트 사용 (권장)**
1. 서비스 계정 키 생성
   - Firebase Console → 프로젝트 설정 → 서비스 계정
   - "새 비공개 키 생성" → `serviceAccountKey.json`으로 저장
2. Firebase Admin 설치:
   ```bash
   npm install firebase-admin
   ```
3. 스크립트 실행:
   ```bash
   npm run init-products
   ```

### 커스텀 도메인 연결

1. Firebase Console → Hosting
2. "도메인 추가"
3. `www.ohdal.kr` 입력
4. DNS 레코드 설정

## ⚡ 주요 명령어

```bash
# 로컬 미리보기
firebase serve              # http://localhost:5000
npm start                   # 동일

# 배포
firebase deploy             # 전체 배포
npm run deploy              # 동일
npm run deploy:hosting      # 호스팅만
npm run deploy:firestore    # Firestore만

# 로그 확인
firebase functions:log
```

## 🔧 문제 해결

### "Firebase 구성 오류"
→ `firebase-config.js`의 설정 정보 확인

### "배포 실패"
```bash
firebase logout
firebase login
firebase deploy
```

### "Firestore 권한 오류"
→ Firebase Console에서 Firestore 규칙 확인

### "로컬에서 연결 안 됨"
→ 브라우저 콘솔에서 오류 확인
→ Firebase 프로젝트 ID 확인

## 📚 더 자세한 가이드

- 전체 설명: `FIREBASE_SETUP.md`
- 프로젝트 정보: `README.md`

## 💡 팁

1. **무료로 시작**: Firebase Spark 플랜으로 충분
2. **자동 백업**: Firestore 자동 백업 설정 권장
3. **Analytics**: Firebase Analytics 활성화하여 사용자 분석
4. **성능**: Firebase Performance Monitoring으로 성능 모니터링

---

문의: mail@ohdal.kr
