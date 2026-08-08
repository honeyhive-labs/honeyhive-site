import beforeSpoilIcon from '../assets/icon-before-spoil.png';

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
  },
];

export const findProduct = (slug: string) =>
  products.find((product) => product.slug === slug);
