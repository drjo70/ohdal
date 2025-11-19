// Firestore에 초기 제품 데이터를 추가하는 스크립트
// 실행 방법: node scripts/init-products.js

const admin = require('firebase-admin');

// Firebase Admin SDK 초기화
// 서비스 계정 키 파일이 필요합니다
// Firebase Console > 프로젝트 설정 > 서비스 계정 > 새 비공개 키 생성
try {
  const serviceAccount = require('../serviceAccountKey.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (error) {
  console.error('서비스 계정 키 파일을 찾을 수 없습니다.');
  console.error('Firebase Console에서 서비스 계정 키를 다운로드하여 serviceAccountKey.json으로 저장하세요.');
  process.exit(1);
}

const db = admin.firestore();

// 초기 제품 데이터
const products = [
  {
    id: 'soap',
    name: '해파랑 비누',
    price: 10000,
    description: '강릉의 청정 자연 재료로 만든 프리미엄 해파랑 비누입니다. 피부에 자극 없이 부드럽게 세정하며, 보습 효과까지 뛰어납니다.',
    features: [
      '100% 천연 재료 사용',
      '화학 첨가물 무첨가',
      '모든 피부 타입 적합',
      '친환경 포장재 사용',
      '글리세린 보습 성분 함유'
    ],
    category: 'skincare',
    image: 'images/soap.jpg',
    stock: 100,
    featured: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    id: 'spray',
    name: '해파랑 스프레이',
    price: 15000,
    description: '강릉의 청정 지하 암반수를 활용한 미네랄 워터 스프레이입니다. 피부 진정과 보습 효과가 뛰어나며, 언제 어디서나 상쾌함을 선사합니다.',
    features: [
      '강릉 청정 지하 암반수 100% 사용',
      '피부 진정 및 보습 효과',
      '휴대용 소형 사이즈',
      '미네랄 성분 풍부',
      '화학 방부제 무첨가'
    ],
    category: 'skincare',
    image: 'images/spray.jpg',
    stock: 150,
    featured: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    id: 'salt',
    name: '해파랑 소금',
    price: 10000,
    description: '청정 바닷물에서 추출한 미네랄이 풍부한 천연 바다 소금입니다. 요리용과 목욕용으로 다양하게 활용하실 수 있습니다.',
    features: [
      '동해 청정 바닷물 사용',
      '미네랄 성분 풍부',
      '요리용 & 목욕용 겸용',
      '전통 천일염 제조법',
      '화학 처리 없는 자연 소금'
    ],
    category: 'wellness',
    image: 'images/salt.jpg',
    stock: 200,
    featured: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }
];

// Firestore에 제품 데이터 추가
async function initProducts() {
  console.log('제품 데이터를 Firestore에 추가하는 중...');
  
  try {
    for (const product of products) {
      const { id, ...productData } = product;
      await db.collection('products').doc(id).set(productData);
      console.log(`✓ ${product.name} 추가 완료`);
    }
    
    console.log('\n모든 제품 데이터가 성공적으로 추가되었습니다!');
    console.log(`총 ${products.length}개의 제품이 추가되었습니다.`);
  } catch (error) {
    console.error('제품 데이터 추가 중 오류 발생:', error);
  } finally {
    process.exit(0);
  }
}

// 스크립트 실행
initProducts();
