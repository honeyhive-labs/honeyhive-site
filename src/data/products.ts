import beforeSpoilIcon from '../assets/icon-before-spoil.png';
import list from '../assets/screenshots/list.png';
import guide from '../assets/screenshots/guide.png';
import hint from '../assets/screenshots/hint.png';
import calendar from '../assets/screenshots/calendar.png';
import edit from '../assets/screenshots/edit.png';
import empty from '../assets/screenshots/empty.png';

export interface Shot {
  src: ImageMetadata;
  caption: string;
}

/** 제품의 갈래. 새 갈래가 생기면 여기에 더한다 */
export type Kind =
  | '모바일 앱'
  | '웹 앱'
  | '데스크톱 앱'
  | '라이브러리'
  | '도구';

export interface Product {
  slug: string;
  name: string;
  kind: Kind;
  tagline: string;
  summary: string;
  icon: ImageMetadata;
  /** 프로덕션 출시 전에는 null. 출시되면 스토어 주소를 넣는다 */
  storeUrl: string | null;
  platform: string;
  price: string;
  /** 홈에서 크게 보여줄 제품. 나머지는 작은 카드로 나열된다 */
  featured?: boolean;
  shots: Shot[];
}

export const products: Product[] = [
  {
    slug: 'before-spoil',
    name: '상하기전에 먹자냥',
    kind: '모바일 앱',
    featured: true,
    tagline: '사 온 걸 적어 두면, 상하기 전에 알려드립니다.',
    summary:
      '계정도 서버도 광고도 없는 유통기한 관리 앱. 적은 것은 전부 기기 안에만 남습니다.',
    icon: beforeSpoilIcon,
    storeUrl: null,
    platform: 'Android',
    price: '무료 · 정식판 4,900원',
    shots: [
      { src: list, caption: '상하기 전에 알려드려요' },
      { src: guide, caption: '하루 한 통으로 묶어서' },
      { src: hint, caption: '며칠 두면 되는지 거들어 드려요' },
      { src: calendar, caption: '그날 상하는 것만 모아서' },
      { src: edit, caption: '넣는 건 10초면 돼요' },
      { src: empty, caption: '알림을 먼저 조르지 않습니다' },
    ],
  },
];

export const findProduct = (slug: string) =>
  products.find((product) => product.slug === slug);

/** 홈에서 크게 보여줄 제품들 */
export const featuredProducts = products.filter((product) => product.featured);

/** 크게 보여주지 않는 나머지 */
export const otherProducts = products.filter((product) => !product.featured);

/** 지금 만들어 둔 제품의 갈래. 제품이 늘면 자동으로 늘어난다 */
export const kinds = [...new Set(products.map((product) => product.kind))];
