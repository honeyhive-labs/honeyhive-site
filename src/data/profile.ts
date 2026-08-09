/*
  /about 페이지의 내용.
  빈 값과 빈 배열은 페이지에 아예 나오지 않는다 — 채운 것만 보인다.

  경력증명서와 이력서 파일은 여기에 두지 않는다. 필요한 상대에게 개별로 전달한다.
*/

export interface Career {
  /** 회사명. 밝히기 곤란하면 "커머스 스타트업" 같은 업종 표기로 대신한다 */
  company: string;
  period: string;
  role: string;
  /** 한 일. 숫자로 말할 수 있는 것이 있으면 넣는다 */
  points: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile = {
  name: 'dev_honey',
  /** 한 줄 소개 — 비워 두면 나오지 않는다 */
  intro: '',
};

export const careers: Career[] = [
  // 예시 형식. 실제 경력으로 바꾼다.
  // {
  //   company: '',
  //   period: '2024.03 ~ 2026.06',
  //   role: '백엔드 개발',
  //   points: ['', ''],
  // },
];

export const skills: SkillGroup[] = [
  { label: '모바일', items: ['Flutter', 'Dart'] },
  { label: '데이터', items: ['SQLite (Drift)'] },
  { label: '상태 관리', items: ['Riverpod'] },
];
