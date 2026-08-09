/*
  제품별 마일스톤. 새 단계가 생기면 여기에 한 줄씩 더한다.
  근거는 앱 저장소의 docs/08-guide/03-release-log.md 에 있다.
*/

export type Stage = '기획' | '개발' | '디자인' | '출시 준비' | '테스트' | '프로덕션';

export interface Milestone {
  date: string;
  stage: Stage;
  title: string;
  detail?: string;
  /** 아직 하지 않은 일은 planned로 둔다 */
  status?: 'done' | 'planned';
}

export const timelines: Record<string, Milestone[]> = {
  'before-spoil': [
    {
      date: '2026-07-31',
      stage: '기획',
      title: '아이템 선정과 설계 확정',
      detail:
        '유통기한 관리 앱을 고른 근거와 데이터 모델을 문서로 남기고 프로젝트를 만들었다.',
    },
    {
      date: '2026-07-31 ~ 08-01',
      stage: '개발',
      title: '핵심 로직',
      detail: '날짜 계산, 데이터베이스 스키마, 알림 예약.',
    },
    {
      date: '2026-08-03',
      stage: '개발',
      title: '화면 구현',
      detail: '목록·등록·달력·설정 화면, 바코드 스캔, 백업과 복원.',
    },
    {
      date: '2026-08-04',
      stage: '개발',
      title: '인앱결제와 릴리스 서명',
      detail: '정식판 구매와 무료 한도를 붙이고 배포용 서명을 설정했다.',
    },
    {
      date: '2026-08-05 ~ 08-06',
      stage: '디자인',
      title: '먹자냥 리디자인',
      detail: '하단 탭, 선반형 목록, 마스코트, 인트로, 알림 묶기.',
    },
    {
      date: '2026-08-07',
      stage: '출시 준비',
      title: '보관 기간 규칙표와 스토어 자료',
      detail: '식재료 56종의 보관 기간을 출처와 함께 정리하고 아이콘·스크린샷을 만들었다.',
    },
    {
      date: '2026-08-08',
      stage: '출시 준비',
      title: 'Play Console 등록',
      detail: '앱 생성, 인앱 상품 활성, 광고 ID 미사용 선언.',
    },
    {
      date: '2026-08-08',
      stage: '테스트',
      title: '1.0.0 비공개 테스트 업로드',
      detail: '심사를 통과하고 실기기 설치를 확인했다.',
    },
    {
      date: '2026-08-08',
      stage: '테스트',
      title: '1.0.1 — 실기기에서 나온 문제 4건 수정',
      detail:
        '탭바가 시스템 내비게이션에 가리던 문제 등, 에뮬레이터에서는 보이지 않던 것들이다.',
    },
    {
      date: '2026-08-09',
      stage: '테스트',
      title: '결제 동작 확인',
      detail: '테스트 카드로 정식판 구매가 정상 처리되는 것을 확인했다.',
    },
    {
      date: '예정',
      stage: '프로덕션',
      title: '프로덕션 출시',
      detail: '신규 개인 계정은 테스터 12명이 14일을 채워야 프로덕션 트랙을 쓸 수 있다.',
      status: 'planned',
    },
  ],
};
