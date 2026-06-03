# 김민재 포트폴리오 요약 자료 v2

## 1. 기본 정보

- 이름: 김민재
- 포지션 키워드: Simulation Developer, Service Builder
- 핵심 기술 키워드: Rust, WebAssembly, TypeScript
- GitHub: https://github.com/acapzed
- Blog: https://acapz.dev
- Project: https://lostarksim.com
- Phone: 010-2697-1285
- Email: kmj9870@gmail.com

## 2. 한 줄 소개

시뮬레이터와 실제로 쓰이는 서비스를 만드는 개발자입니다. 게임, 시스템 분석, 모델링 경험을 바탕으로 문제를 데이터와 동작하는 결과물로 검증하는 것을 중요하게 생각합니다.

## 3. 성장 배경

| 시기 | 내용 | 핵심 의미 |
| --- | --- | --- |
| 중학생 시절 | 직접 만든 미니게임 출시 | 처음으로 만든 게임을 실제 배포까지 완료 |
| 고등학교 | 디미고, 게임 개발 | 게임 개발 경험을 이어가며 개발 사고방식 형성 |
| 대학교 | 한양대학교 바이오공학부 | 시스템을 분해하고 모델링하는 사고방식 학습 |
| 현재 | SSAFY 14기, LostArkSim 개발 중 | 시뮬레이션 기반 서비스 개발 방향으로 확장 |

## 4. 개발 철학

- 연습용 프로젝트보다 실제로 쓰이는 것을 만드는 것을 선호합니다.
- 기술적 의사결정은 직접 검증한 근거를 바탕으로 합니다.
- 단순 구현보다 문제 정의, 성능, 운영 비용, 사용자 흐름까지 함께 고려합니다.
- 경험담이나 감이 아니라 데이터와 시뮬레이션 결과로 판단하는 도구를 만들고자 합니다.

## 5. 학력 및 교육

- 2017.03 - 2024.06: 한양대학교 생명공학과 / 바이오공학부 졸업
- 2024.06 - 2024.08: 네이버 부스트캠프 웹·모바일 9기
- 2025.07 - 진행중: 삼성청년SW·AI아카데미, SSAFY 14기

## 6. 기술 스택

### Main
- TypeScript / Rust / Python

### Backend
- Java / Kotlin / Spring Boot / Go

### Data
- PostgreSQL / Redis

### Ops / Infra
- Docker / Nginx / Cloudflare / GitHub Actions / DigitalOcean

### Frontend / Runtime
- JavaScript / React / Vite / WebAssembly / Chrome Extension

## 7. 대표 프로젝트 1: LostArkSim

### 개요
- 링크: https://lostarksim.com
- GitHub: https://github.com/acapzed
- 개발기: https://acapz.dev
- 유형: 로스트아크 DPS / 스킬 로테이션 시뮬레이터
- **현재 상태: 개발 중** (프론트엔드, 백엔드, WASM 시뮬레이터 엔진 틀 완성 / 게임 데이터 작업 진행 중)
- 핵심 문장: "카더라 말고 데이터로"

LostArkSim은 로스트아크 캐릭터의 스킬 로테이션을 Monte Carlo 방식으로 수천 회 시뮬레이션하여 DPS 분포를 산출하는 웹 애플리케이션입니다. 현재 아르카나 직업을 시작으로 개발 중이며, 연산 전체를 클라이언트 사이드에서 처리하도록 설계해 서버 연산 비용을 실질적으로 0으로 만드는 것을 목표로 합니다.

### 문제 정의
- 아르카나처럼 카드 랜덤성과 순간 판단이 큰 직업은 단일 사이클 평균만으로 기대 DPS를 판단하기 어렵습니다.
- 커뮤니티 경험담만으로는 캐릭터 성능을 객관적으로 비교하기 어렵습니다.
- 반복 시뮬레이션, DPS 분포, 스킬별 데미지 비중, 시전 순서를 확인할 수 있는 도구가 필요했습니다.

### 주요 기능
- Monte Carlo 방식의 반복 시뮬레이션
- DPS 분포 산출
- 스킬별 데미지 비중 확인
- 스킬 시전 순서 확인
- 클라이언트 사이드 WASM 기반 연산 (서버 연산 비용 ≈ 0)
- 아르카나 직업 우선 지원

### 사용 기술
Rust / WebAssembly / TypeScript / PostgreSQL / Docker / Nginx / GitHub Actions / Cloudflare / DigitalOcean

### 기술 의사결정

| 전환 | 이유 |
| --- | --- |
| 서버 연산 → WASM | 연산집약적 시뮬레이션을 클라이언트로 이동, 서버 비용 최소화 |
| Go → Rust | WASM Worker 간 메모리 직접 접근이 필요. Go는 구조적으로 불가. Rust로 전환해 profile 공유 구현 |
| MongoDB → PostgreSQL | 향후 통계 집계/분석 쿼리 표현력 선제적 확보 |
| CRA → Vite | 빌드 시간 5-10분 이상 → 대폭 단축. 이후 CRA 공식 deprecated |

## 8. 대표 프로젝트 2: Perfume

### 개요
- 유형: 퍼즐 게임 (Google Play 출시)
- 개발 시기: 중고등학생 시절
- 링크: 구글 플레이 정책 변경으로 현재 접근 불가 (화면 자료 보유)

상하좌우 2칸까지 퍼져나가는 향수를 배치해 모든 빈칸을 채우는 퍼즐 게임. 같은 색상의 향수끼리는 섞일 수 있지만 다른 색상끼리는 불가. 직접 기획하고 구현.

### 핵심 내용
- Google Play 출시 완료
- 48개 난이도 직접 기획 및 구현
- 퍼즐 규칙, 색상 혼합 제약, 난이도 설계
- 기획 변경을 반복하면서도 완성까지 밀어붙인 첫 완주 경험

## 9. SSAFY 프로젝트

### 우주오락실

- 링크: https://k14d104.p.ssafy.io
- 유형: 실시간 멀티플레이 미니게임 파티 플랫폼
- **팀 규모: 6명 / 기간: 약 6-7주**
- **본인 담당: 공통 게임 프레임워크 (프론트엔드) + 마법 영창 / 드릴 다운 게임 풀스택 개발**

#### 담당 역할 상세
- **공통 게임 프레임워크**: 16종 미니게임을 모듈로 묶어 실행하는 공통 기반 설계. 라운드 흐름, 게임 로드/전환, STOMP 클라이언트 연동 틀 포함.
- **마법 영창 (SPELL_CASTING)**: 풀스택 개발
- **드릴 다운 (DRILL_DOWN)**: 풀스택 개발

#### 서비스 특징
- 회원가입 없이 닉네임 입력 즉시 JWT 게스트 세션 발급
- STOMP + Redis Pub/Sub 기반 100명 동시 매치 실시간 동기화
- 16종 미니게임 라운드마다 무작위 진행
- 실시간 랭킹 1.5초 주기 갱신

#### 기술 스택

| 영역 | 기술 |
| --- | --- |
| Backend | Spring Boot, WebSocket STOMP, JWT, Spring Data JPA |
| Realtime State | Redis 7, Pub/Sub |
| Persist | MySQL 8.0 |
| Frontend | React 19, TypeScript, Vite, Zustand |
| Monitoring | Prometheus, Grafana |
| Infra | Docker Compose, Nginx TLS |

#### 주요 트러블슈팅

| 케이스 | 진단 | 해결 |
| --- | --- | --- |
| 다른 서버 유저에게 랭킹/결과가 보이지 않음 | `convertAndSendToUser`가 로컬 SimpUserRegistry만 조회 | Redis Pub/Sub envelope으로 cross-server private routing 구현 |
| 라이브 랭킹 점수 진동 | tiebreaker가 매 활성마다 갱신되는 lastUpdatedAt 사용 | Instant.MAX + userId tiebreaker로 결정적 정렬 |
| 최종 랭킹 0점 또는 빈 화면 | 이전 라운드 stale finalRankingPublished=true 잔재 | handler.init에서 cleanupRedis 선행 호출 |
| 100명 매치 부하 spike | 게임별 broadcast 주기와 즉시 발사 패턴 혼재 | 1.5초 + PRIVATE per-user + scheduler-only 정책 통일 |

---

### 내 요리를 부탁해

- 유형: Unity 기반 2인 협동 / 정보 비대칭 요리 시뮬레이션
- **팀 규모: 6명 / 기간: 약 6-7주**
- **본인 담당: P2 (쿠킹 마스터) 게임 인터랙션 전체 + 리팩토링**
- **현재 상태: 데모 완성**

#### 플레이 구조
- P1, 레시피 마스터: 주문서 해독, 레시피와 재료 주의사항 브리핑
- P2, 쿠킹 마스터: 실제 조리, 특수 재료 기믹 처리

#### 본인 담당 상세
P2 쿠킹 마스터의 실제 게임 인터랙션을 담당하는 모든 시스템 구현. 구체적으로는:
- 조리 스테이션 인터랙션 (썰기, 끓이기 등 조리 행위)
- 재료 물리 상호작용 (잡기, 사용, Rigidbody 기반)
- 재료별 특수 기믹 및 실패 페널티
- 양손 인벤토리, 웨어러블 슬롯
- 전반적인 코드 리팩토링

#### 기술
Unity 6.3 LTS / Unity Netcode for GameObjects / 3D Low-Poly + Pixel Art / ScriptableObject 기반 데이터 설계

---

### ssabree

- 유형: SSAFY 커뮤니티 앱 (에브리타임 유사)
- **팀 규모: 6명 / 기간: 약 6-7주**
- **본인 담당: 메인 백엔드 헤드 + 웹**
- 플랫폼: Android, Web
- 기술 스택: Java Spring Boot
- **배포 완료** (Private repo)

---

### Gumibab

- 유형: SSAFY 구미 캠퍼스 식단 확인 Chrome Extension
- **혼자 / 하루 만에 제작**
- GitHub: https://github.com/acapzed/gumibab

#### 배경 및 의미
구미 캠퍼스 구성원들이 식단 정보를 확인하기 위해 매번 앱 스크린샷을 올리는 불편함을 해소하기 위해 제작. 삼성 공식 앱을 리버스엔지니어링해 API 구조를 파악하고 크롬 확장 프로그램으로 구현.

---

### Sharp

- 유형: AI-guided 아이디어 구조화 도구
- **혼자 / 하루 만에 제작**

#### 배경 및 의미
팀 단위로 막연한 프로젝트 아이디어를 구체화하는 과정이 반복적으로 비효율적이라는 것을 느끼고 제작. AI 기반 Q&A로 아이디어를 구조화된 계획과 마인드맵으로 변환.

---

## 10. 블로그 콘텐츠 방향 (acapz.dev)

- CRA에서 Vite로 전환한 이유
- Go에서 Rust WASM으로 전환한 이유
- MongoDB에서 PostgreSQL로 전환한 이유
- 왜 연습용 CRUD가 아닌 실제 서비스 프로젝트를 만드는가
- LostArkSim 개발기 및 회고

## 11. 현재 보완 필요 항목 (잔여)

- 각 프로젝트 스크린샷 (추후 첨부)
- ssabree GitHub 링크 (Private, 공개 불가)
- Perfume Google Play 링크 (정책 변경으로 소실, 화면 자료 보유)
- LostArkSim GitHub 저장소 상세 링크
- Sharp GitHub 링크 / 데모 링크

## 12. PPT 디자인 스타일 가이드

### 기준 이미지 스타일

- 전체 톤: 다크 테크 포트폴리오, 검정/네이비 배경 + 강한 블루 포인트
- 화면 비율: 16:9 와이드
- 인상: Backend / Systems / Realtime / Simulation 느낌이 강한 전문 개발자 포트폴리오
- 레이아웃: 좌측 텍스트 중심, 우측 3D/아이소메트릭 기술 오브젝트 또는 프로젝트 스크린샷
- 타이포그래피: 매우 큰 이름/직무 타이틀, 짧은 설명문, 하단에는 링크/연락처 바
- 장식 요소: 얇은 구분선, 네온 블루 라인, 반투명 카드, 아이콘 칩, 점선 연결선, 회로/네트워크 느낌

### 컬러 팔레트

- Background: `#03070D`, `#07111F`, `#0B1220`
- Primary Blue: `#126BFF`, `#1E7BFF`
- Glow Blue: `#2E8CFF`, `#60A5FA`
- Text Main: `#F5F7FA`
- Text Sub: `#9CA3AF`, `#B6BEC9`
- Border / Divider: `rgba(80, 130, 220, 0.25)`
- Card Fill: `rgba(8, 18, 35, 0.72)`

### 폰트 방향

- 영문: Inter, Pretendard, SF Pro 계열
- 한글: Pretendard, Noto Sans KR
- 제목: ExtraBold 또는 Bold, 큰 크기
- 본문: Medium 또는 Regular, 줄간격 넉넉하게
- 코드/기술 키워드: 작은 pill/chip 형태로 정리

### 슬라이드 공통 레이아웃

- 상단: 좌측에 `</>` 아이콘 + 섹션명, 우측에 `01 / Portfolio` 같은 페이지 번호
- 중앙 좌측: 큰 제목과 1-2줄 설명
- 중앙 우측: 프로젝트 스크린샷, 시스템 아키텍처, 3D 서버/클라우드/게임 아이콘
- 하단: 기술 키워드 chip 또는 연락처/링크 바
- 각 슬라이드의 텍스트는 3-5개 핵심 bullet 이하로 제한

### 추천 첫 장 문구

```text
Kim Minjae —
Simulation Developer

I build real services, realtime systems,
and simulation tools backed by data.
```

한국어 버전:

```text
김민재 —
Simulation Developer

실제로 쓰이는 서비스와
데이터 기반 시뮬레이션 도구를 만듭니다.
```

### 프로젝트별 시각화 방향

| 프로젝트 | 추천 비주얼 |
| --- | --- |
| LostArkSim | DPS 분포 차트, 스킬별 데미지 비중, WASM/Rust 엔진 구조 |
| 우주오락실 | 100명 실시간 매치, STOMP/Redis Pub/Sub 아키텍처, 미니게임 그리드 |
| 내 요리를 부탁해 | P1/P2 정보 비대칭 구조, 조리 인터랙션, Unity 씬 스크린샷 |
| Perfume | 퍼즐 보드, Google Play 출시 화면, 48개 난이도 |
| ssabree/Gumibab/Sharp | 작은 카드 3개로 요약, 플랫폼 아이콘과 담당 역할 강조 |

### 슬라이드 구성 추천 v2

| 슬라이드 | 제목 | 디자인 포인트 |
| --- | --- | --- |
| 1 | 김민재 | 기준 이미지처럼 이름 + Simulation Developer를 크게 배치 |
| 2 | About | 성장 타임라인을 네온 라인 위 4개 노드로 표현 |
| 3 | Tech Stack | Rust/WASM/TypeScript/Spring/Redis를 아이콘 chip으로 표현 |
| 4 | LostArkSim | 좌측 문제 정의, 우측 DPS/시뮬레이터 스크린샷 |
| 5 | LostArkSim Decisions | 4개 전환을 카드로 배치: WASM, Rust, PostgreSQL, Vite |
| 6 | 우주오락실 | 100명/16게임/1.5초 랭킹을 큰 숫자로 강조 |
| 7 | 우주오락실 Architecture | STOMP → BE Cluster → Redis Pub/Sub → User Private Queue 흐름도 |
| 8 | 우주오락실 Troubleshooting | 문제/진단/해결 4개 카드를 어두운 테이블 형태로 정리 |
| 9 | 내 요리를 부탁해 | P1/P2 역할을 좌우 분할, 중앙에 조리 시스템 |
| 10 | Other Projects | Perfume, ssabree, Gumibab, Sharp를 2x2 카드로 요약 |
| 11 | Blog & Philosophy | 기술 전환 기록과 실서비스 지향 철학 |
| 12 | Contact | GitHub, Blog, Email, LostArkSim 링크 |

### 주의할 점

- 기준 이미지가 Backend Developer 문구라서 그대로 따라가면 포지션이 좁아 보일 수 있습니다. 김민재 포트폴리오는 `Simulation Developer`를 메인으로 두고, `Realtime / WASM / Systems`를 보조 키워드로 쓰는 편이 더 정확합니다.
- 우주오락실은 내용이 많으므로 한 장에 모두 넣지 말고 서비스 개요와 아키텍처/트러블슈팅을 분리하는 것이 좋습니다.
- `sum.md`의 내용은 PPT 원천 자료로 충분하지만, 실제 슬라이드에는 문장을 줄이고 숫자와 역할을 크게 보여주는 방식이 더 잘 맞습니다.
