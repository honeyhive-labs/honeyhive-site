# honeyhive-site

Honey Hive Labs 소개 사이트. 제품 소개와 스토어 제출용 문서(개인정보처리방침, 문의)를 담는다.

- 배포 주소: https://honeyhive-labs.com
- 프레임워크: Astro (정적 빌드)
- 호스팅: Cloudflare Pages

## 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 파일 생성
npm run preview  # 빌드 결과 확인
```

## 구조

```
src/
├── data/
│   ├── site.ts        연락처·외부 링크
│   └── products.ts    제품 목록 — 새 제품은 여기에 더한다
├── layouts/
│   ├── Base.astro     모든 페이지의 뼈대 (head, 헤더, 푸터)
│   └── Doc.astro      마크다운 문서용 레이아웃
├── styles/
│   ├── tokens.css     색·간격·폰트 — 디자인을 바꿀 때 여기만 고친다
│   └── base.css       리셋과 기본 타이포
└── pages/
    ├── index.astro
    ├── support.astro
    └── products/before-spoil/
        ├── index.astro
        └── privacy.md
```

## 제품을 추가할 때

1. `src/assets/`에 아이콘과 스크린샷을 넣는다
2. `src/data/products.ts`에 항목을 더한다 — 홈의 제품 목록은 자동으로 늘어난다
3. `src/pages/products/<slug>/`에 소개 페이지와 개인정보처리방침을 만든다

## 스토어 출시 후에 할 일

`src/data/products.ts`의 `storeUrl`이 `null`이면 "출시 준비 중"으로 표시된다.
프로덕션 출시 후 스토어 주소를 넣으면 다운로드 버튼으로 바뀐다.
