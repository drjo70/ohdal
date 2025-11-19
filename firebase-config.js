// Firebase 설정
// 실제 Firebase 프로젝트를 생성한 후 아래 값들을 교체해주세요
// Firebase Console (https://console.firebase.google.com/)에서 프로젝트 설정 → 일반 → 웹 앱 추가

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Firebase 초기화
let db, auth, analytics;

// Firebase 초기화 함수
async function initializeFirebase() {
  try {
    // Firebase 앱 초기화
    const app = firebase.initializeApp(firebaseConfig);
    
    // Firestore 초기화
    db = firebase.firestore();
    
    // Authentication 초기화
    auth = firebase.auth();
    
    // Analytics 초기화 (선택사항)
    if (typeof firebase.analytics === 'function') {
      analytics = firebase.analytics();
    }
    
    console.log('Firebase 초기화 완료');
    return true;
  } catch (error) {
    console.error('Firebase 초기화 오류:', error);
    return false;
  }
}

// 제품 데이터 가져오기
async function getProducts() {
  try {
    const snapshot = await db.collection('products').orderBy('createdAt', 'desc').get();
    const products = [];
    snapshot.forEach(doc => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error('제품 데이터 가져오기 오류:', error);
    return [];
  }
}

// 제품 추가 (관리자 전용)
async function addProduct(productData) {
  try {
    const docRef = await db.collection('products').add({
      ...productData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log('제품이 추가되었습니다:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('제품 추가 오류:', error);
    throw error;
  }
}

// 주문 생성
async function createOrder(orderData) {
  try {
    const user = auth.currentUser;
    const docRef = await db.collection('orders').add({
      ...orderData,
      userId: user ? user.uid : 'anonymous',
      status: 'pending',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log('주문이 생성되었습니다:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('주문 생성 오류:', error);
    throw error;
  }
}

// 문의 생성
async function createInquiry(inquiryData) {
  try {
    const docRef = await db.collection('inquiries').add({
      ...inquiryData,
      status: 'new',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log('문의가 전송되었습니다:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('문의 전송 오류:', error);
    throw error;
  }
}

// 사용자 로그인 상태 감지
function onAuthStateChanged(callback) {
  return auth.onAuthStateChanged(callback);
}

// 익명 로그인
async function signInAnonymously() {
  try {
    const result = await auth.signInAnonymously();
    console.log('익명 로그인 성공:', result.user.uid);
    return result.user;
  } catch (error) {
    console.error('익명 로그인 오류:', error);
    throw error;
  }
}

// 로그아웃
async function signOut() {
  try {
    await auth.signOut();
    console.log('로그아웃 완료');
  } catch (error) {
    console.error('로그아웃 오류:', error);
    throw error;
  }
}

// 내보내기
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeFirebase,
    getProducts,
    addProduct,
    createOrder,
    createInquiry,
    onAuthStateChanged,
    signInAnonymously,
    signOut,
    firebaseConfig
  };
}
