/*
  /about 페이지의 내용.
  빈 값과 빈 배열은 페이지에 아예 나오지 않는다 — 채운 것만 보인다.

  경력증명서와 이력서 파일은 여기에 두지 않는다. 필요한 상대에게 개별로 전달한다.
  고객사 이름은 적지 않는다. 업종으로만 쓴다.
*/

export interface Career {
  company: string;
  period: string;
  role: string;
  summary: string;
  points: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Keyword {
  text: string;
  /** 1(작게) ~ 5(크게). 요즘 시간을 많이 쓰는 것일수록 크게 */
  weight: 1 | 2 | 3 | 4 | 5;
}

export const profile = {
  name: 'dev_honey',
  intro: '보안 제품을 만드는 백엔드·풀스택 개발자입니다. 요즘은 AI 에이전트로 일하는 방식을 바꾸는 데 시간을 쓰고 있습니다.',
};

export const story = [
  '2022년 가을에 SaaS 백엔드로 시작했습니다. Java와 Spring으로 서비스를 만들고 DB를 운영했고, 오래된 Laravel 코드도 함께 맡았습니다. 2년 반 동안 "돌아가게 만드는 일"과 "돌아가는 것을 계속 돌아가게 하는 일"이 다르다는 걸 배웠습니다.',
  '2025년부터는 보안으로 옮겼습니다. Tenable Nessus 컴플라이언스 진단 스크립트를 쓰면서 운영체제·데이터베이스·웹서버·네트워크 장비의 설정을 하나씩 들여다봤습니다. 진단 대상을 이해하지 못하면 스크립트를 쓸 수 없어서, 자연스럽게 인프라 전반을 훑게 됐습니다. 이어서 취약점 관리 솔루션을 풀스택으로 만들었습니다. 스캔 결과를 티켓으로 만들고, 결재를 태우고, 재스캔으로 조치 여부를 검증하는 흐름을 설계했습니다.',
  '개인적으로는 앱 하나를 처음부터 끝까지 냈습니다. 아이템 선정 근거를 문서로 남기고, 설계를 확정한 뒤 테스트를 먼저 쓰고, 스토어 심사와 결제까지 붙였습니다. 회사에서는 조각으로만 만지던 것들을 한 사람이 전부 통과해 보는 경험이었습니다.',
];

export const howIWork = [
  {
    title: '결정한 이유를 남깁니다',
    body: '아이템을 왜 골랐는지, 왜 이 구조인지를 문서로 남깁니다. 반년 뒤에 "왜 이렇게 했지"에 답할 수 있어야 같은 논쟁을 두 번 하지 않습니다.',
  },
  {
    title: '검증하지 않은 것을 완료라고 하지 않습니다',
    body: '"될 겁니다" 대신 실행 결과를 냅니다. 테스트 몇 개가 통과했는지, 빌드가 어떤 코드로 끝났는지를 함께 보고합니다.',
  },
  {
    title: '버그는 재현부터 합니다',
    body: '코드만 보고 원인을 짐작해 패치하지 않습니다. 재현 → 원인 좁히기 → 수정 → 확인 순서를 지킵니다. 증상만 가리면 원인은 남습니다.',
  },
  {
    title: '규칙을 코드 밖에도 씁니다',
    body: '커밋·브랜치·문서·검증 절차를 팀이 공유할 수 있는 형태로 정리해 둡니다. 사람이 바뀌어도 같은 품질이 나오게 하는 쪽이 개인기보다 오래 갑니다.',
  },
];

export const careers: Career[] = [
  {
    company: '호두시스템즈',
    period: '2026.01 ~ 2026.07',
    role: '풀스택 개발',
    summary: '취약점 관리 솔루션(AEGIS CTEM)과 고객사 납품용 경량 버전(AEGIS LITE)을 웹 애플리케이션으로 개발했습니다.',
    points: [
      '자산·취약점(CVE)·컴플라이언스(CCE) 관리와 위젯 기반 대시보드를 프런트와 백엔드 양쪽에서 구현',
      '티켓 결재 플로우 설계 — 보안담당자가 올린 조치를 승인 단계로 태우고, 티켓 상태를 취약점 데이터와 동기화',
      '재스캔 결과로 조치 여부를 판정하는 검증 로직 — 전산상 조치 처리했더라도 재스캔에서 잡히면 미조치로 되돌림',
      '위험 수용(Accept Risk)과 심각도 재조정(Recast Risk) — 기간을 정한 예외 처리가 이후 스캔에도 유지되도록 처리',
      '스캐너 크레덴셜의 담당자별 접근 분리와 권한·인가 체계 정리',
      '고객사 요구에 맞춘 SI 버전을 별도 라인으로 개발',
    ],
  },
  {
    company: '에스케어',
    period: '2025.05 ~ 2026.01',
    role: '보안 솔루션 개발',
    summary: 'Tenable Nessus 기반 컴플라이언스 진단 스크립트를 개발하고, 진단 결과를 자동으로 보고서화하는 시스템을 만들었습니다.',
    points: [
      'Custom Audit 스크립트 개발 — Windows·Linux, MySQL·MariaDB·PostgreSQL·Oracle·MSSQL·MongoDB, Tomcat·Nginx·JEUS·WebLogic, 네트워크 장비(Cisco·Arista·Fortigate) 대상 컴플라이언스 진단',
      'Nessus API 연동 취약점 진단 자동화 — 스캔 결과 수집, DB 적재, 이전 스캔과의 비교로 조치 완료·미조치 판별',
      '다중 시트 엑셀 보고서 자동 생성과 메일 발송, 누락된 스캔 건 자동 감지',
      '파일 포인터 대신 RDBMS로 스캔 작업 상태를 관리하도록 설계해 시계열 이력 조회가 가능하도록 구성',
    ],
  },
  {
    company: '메디푸드플랫폼',
    period: '2022.10 ~ 2025.04',
    role: '백엔드 개발',
    summary: 'SaaS 서비스의 백엔드를 개발하고 데이터베이스를 운영했습니다.',
    points: [
      'Java·Spring 기반 SaaS 백엔드 기능 개발',
      '데이터베이스 운영과 관리',
      'Laravel 기반 프로젝트 개발과 유지보수',
    ],
  },
];

export const skills: SkillGroup[] = [
  { label: '언어', items: ['Java', 'Python', 'TypeScript', 'PHP', 'Dart'] },
  { label: '백엔드', items: ['Spring', 'FastAPI', 'Laravel'] },
  { label: '데이터', items: ['PostgreSQL', 'MySQL', 'MariaDB', 'Oracle', 'MSSQL', 'MongoDB', 'SQLite'] },
  { label: '보안', items: ['Tenable Nessus / SC', '컴플라이언스 진단 (CCE)', '취약점 관리 (CVE)', 'ISMS-P 리포팅'] },
  { label: '모바일', items: ['Flutter'] },
  { label: 'AI', items: ['LLM 연동', 'RAG', 'MCP', '멀티 에이전트 오케스트레이션'] },
];

/** 요즘 시간을 쓰는 것들. 크기는 쏟는 시간에 비례한다 */
export const keywords: Keyword[] = [
  { text: 'Claude Code', weight: 5 },
  { text: '생성형 AI', weight: 5 },
  { text: 'LLM', weight: 4 },
  { text: 'AI 에이전트', weight: 5 },
  { text: 'MCP', weight: 4 },
  { text: '멀티 에이전트', weight: 4 },
  { text: '에이전트 하네스', weight: 3 },
  { text: 'RAG', weight: 3 },
  { text: 'LangChain', weight: 2 },
  { text: '컨텍스트 엔지니어링', weight: 3 },
  { text: '프롬프트 설계', weight: 2 },
  { text: '오케스트레이션', weight: 3 },
  { text: '보안 자동화', weight: 4 },
  { text: 'CTEM', weight: 3 },
  { text: '취약점 관리', weight: 3 },
  { text: 'Flutter', weight: 2 },
  { text: '개발 방법론', weight: 2 },
  { text: 'TDD', weight: 2 },
];
