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

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  icon: ImageMetadata;
  /** 프로덕션 출시 전에는 null. 출시되면 스토어 주소를 넣는다 */
  storeUrl: string | null;
  platform: string;
  price: string;
  shots: Shot[];
}

export const products: Product[] = [
  {
    slug: 'before-spoil',
    name: '상하기전에 먹자냥',
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
