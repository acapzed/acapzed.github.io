# 김민재 포트폴리오 PPT 요약 자료

## 1. 기본 정보

- 이름: 김민재
- 포지션 키워드: Simulation Developer, Service Builder
- 핵심 기술 키워드: Rust, WebAssembly, TypeScript
- GitHub: <https://github.com/acapzed>
- Blog: <https://acapz.dev>
- Project: <https://lostarksim.com>
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
| 현재 | SSAFY 14기, LostArkSim 개발 및 운영 | 시뮬레이션 기반 서비스 개발 방향으로 확장 |

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

- TypeScript
- Rust
- Python

### Backend

- Java
- Kotlin
- Spring Boot
- Go

### Data

- PostgreSQL
- Redis

### Ops / Infra

- Docker
- Nginx
- Cloudflare
- GitHub Actions
- DigitalOcean

### Frontend / Runtime

- JavaScript
- React
- Vite
- WebAssembly
- Chrome Extension

## 7. 대표 프로젝트 1: LostArkSim

### 개요

- 이름: LostArkSim
- 링크: <https://lostarksim.com>
- GitHub: <https://github.com/acapzed>
- 개발기: <https://acapz.dev>
- 유형: 로스트아크 DPS / 스킬 로테이션 시뮬레이터
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
- 클라이언트 사이드 WASM 기반 연산
- 아르카나 직업 우선 지원
- 디스코드 커뮤니티 준비 중

### 사용 기술

- Rust
- WebAssembly
- TypeScript
- PostgreSQL
- Docker
- Nginx
- GitHub Actions
- Cloudflare
- DigitalOcean

## 8. LostArkSim 기술 의사결정 및 트러블슈팅

### 서버 연산에서 WASM으로 전환

- 문제: 연산집약적 시뮬레이션을 서버에서 처리하려면 고사양 서버가 필요하고 비용과 대기시간 문제가 커집니다.
- 결정: 시뮬레이션 연산을 클라이언트 사이드 WASM으로 이동했습니다.
- 결과: 서버 연산 비용을 실질적으로 0에 가깝게 낮추는 구조를 만들었습니다.

### Go에서 Rust로 전환

- 문제: WASM Worker 환경에서 하나의 캐릭터 세팅 정보, 즉 profile을 모든 Worker에 동일하게 공유해야 했습니다.
- 한계: Go는 직접 메모리 접근이 어려워 구조적으로 맞지 않았습니다.
- 결정: 직접 메모리 접근이 가능한 Rust로 전환했습니다.
- 의미: 시뮬레이션 엔진을 성능과 메모리 제어가 가능한 구조로 설계했습니다.

### MongoDB에서 PostgreSQL로 전환

- 문제: 향후 통계 처리와 분석 쿼리가 중요해질 가능성이 높았습니다.
- 결정: 관계형 데이터베이스인 PostgreSQL로 전환했습니다.
- 의미: 집계, 분석 쿼리 표현력을 선제적으로 확보했습니다.

### CRA에서 Vite로 전환

- 문제: CRA 빌드가 5-10분 이상 걸릴 정도로 느려 개발 피드백 루프가 저하되었습니다.
- 결정: Vite로 전환했습니다.
- 결과: 빌드 병목을 크게 줄였고, 이후 CRA가 공식 deprecated되면서 방향성도 맞았습니다.

### 전투정보실 파싱

- 문제: 게임사 API가 프론트 표시용 구조에 가까워 시뮬레이션에 필요한 데이터로 다시 파싱해야 했습니다.
- 배운 점: API를 소비자 관점에서 설계하고, 모듈 책임을 명확히 나누는 것이 중요합니다.
- 관련 글: 회고 2 - 전투정보실 만들어보기

### 초기 MSA 및 API Gateway 설계

- 시도: 초기에는 컨테이너와 API Gateway를 직접 구성했습니다.
- 회고: 일부는 오버엔지니어링이었습니다.
- 배운 점: 필요가 검증된 레이어만 추가해야 유지보수성이 좋아집니다.
- 관련 글: 회고 1 - 초기 설계

## 9. 대표 프로젝트 2: Perfume

### 개요

- 이름: Perfume / 퍼퓸
- 유형: 퍼즐 게임
- 출시: Google Play
- 개발 시기: 중고등학생 시절

상하좌우 2칸까지 퍼져나가는 향수를 적재적소에 배치해 모든 빈칸을 채우는 퍼즐 게임입니다. 같은 색상의 향수끼리는 섞일 수 있지만, 다른 색상끼리는 섞이면 안 된다는 규칙을 기반으로 직접 기획하고 구현했습니다.

### 핵심 내용

- Google Play 출시 경험
- 48개 난이도 직접 기획 및 구현
- 퍼즐 규칙, 색상 혼합 제약, 난이도 설계 경험
- 여러 차례 기획을 변경하면서도 완성까지 밀어붙인 첫 번째 완주 경험

## 10. SSAFY 및 사이드 프로젝트

### 우주오락실

- 링크: <https://k14d104.p.ssafy.io>
- 유형: 실시간 멀티플레이 미니게임 파티 플랫폼
- 핵심 문장: 차원을 넘나들며 최대 100명이 동시에 겨루는 실시간 멀티플레이 미니게임 파티 플랫폼
- 진행 방식:
  - 매 라운드 무작위 미니게임 차원으로 워프
  - 슬롯 reveal과 차원 포탈 연출 후 미니게임 진행
  - 각 라운드 점수를 누적해 최종 우승자 결정

#### 핵심 특징

- 회원가입 없이 닉네임 입력 즉시 JWT 게스트 세션 발급
- STOMP + Redis Pub/Sub 기반 100명 동시 매치 실시간 동기화
- 16종 미니게임을 라운드마다 무작위 진행
- 실시간 랭킹 1.5초 주기 갱신
- top5와 본인 row를 항상 표시하는 랭킹 UX
- 게임별 raw score 차이를 rank-based 점수 변환으로 정규화
- 멀티 BE 클러스터 환경에서 cross-server 메시지 라우팅 지원
- 새로고침/재접속 시 10초 grace와 자동 catch-up 제공

#### 게임 플로우

```text
닉네임 입력, JWT 발급
    ↓
방 목록 조회 → 방 생성 / 입장, 최대 100명
    ↓
방장 게임 시작
    ↓
슬롯 reveal → 차원 포탈 → 미니게임 → 결과 카드 7초
    ↓
다음 미니게임 반복
    ↓
최종 결과 화면
```

#### 미니게임 16종

| ENUM | 이름 |
| --- | --- |
| DASH_DASH | 대쉬대쉬 |
| IN_THE_HEXAGON | 인더헥사곤 |
| PLAGUE_APOTHECARY | 역병 약제사 |
| RA_FALL | 라 떨구기 |
| BUBBLE_BOOM | 풍선터뜨리기 |
| MIRROR_TYPING | 거울 타자 |
| BULLET_DODGE | 총알 피하기 |
| WORD_MEMORY | 단어 외우기 |
| SPELL_CASTING | 마법 영창 |
| CARROT_RAID | 당근을 지켜라 |
| PLUM_BLOSSOM_SLASH | 매화일섬 |
| FROG_HOP | 개굴개굴 점핑 |
| DRAWING | 그림 유사도 |
| MZ_TYPING | MZ 타자 배틀 |
| ELEMENT_CLASH | 원소팡 |
| DRILL_DOWN | 드릴 다운 |

#### 기술 스택

| 영역 | 기술 |
| --- | --- |
| Backend | Spring Boot, WebSocket STOMP, JWT, Spring Data JPA |
| Realtime State | Redis 7, Pub/Sub, 매치/세션/누적점수 관리 |
| Persist | MySQL 8.0, 방 로그, 게스트, 게임 메타 |
| Frontend | React 19, TypeScript, Vite, Zustand |
| Monitoring | Prometheus, Grafana, node-exporter |
| Infra | Docker Compose, Nginx TLS reverse proxy |

#### 아키텍처 요약

- STOMP send: 클라이언트가 `/app/room/{roomId}`로 방 이벤트 전송
- Broadcast: 서버가 `/topic/room/{roomId}`로 방 전체 메시지 발송
- Cross-server broadcast: Redis Pub/Sub을 거쳐 모든 BE 인스턴스로 전파
- Private message: `/user/queue/private`를 사용하고 Redis envelope으로 서버 간 라우팅
- 라이브 랭킹: 모든 미니게임에서 1.5초 batch broadcast 정책 통일
- 랭킹 dedup: `(userId, rank, score, ...)` snapshot 비교 후 변동 없으면 메시지 전송 생략
- 게임 종료/디스커넥트/finalize 시에는 즉시 또는 강제 broadcast로 누락 방지
- 100명 매치 랭킹 부하 기준: 약 `360B × 100명 = 36KB / 1.5s`

#### 게임 라이프사이클

```text
GameService.loadNextGame
    ↓
GameExecutor.execute(room, game, scheduledStartAt)
    ↓
handler.init(room)
    ↓
handler.start(room, scheduledStartAt)
    ↓
게임 진행 + 1.5초 ranking tick
    ↓
END_MINIGAME 또는 force-end timeout
    ↓
finalizeMatch, FINAL_RANKING, rank-based 누적점수 가산
    ↓
7초 결과 카드
    ↓
다음 게임 또는 GAME_END 후 clearRoom
```

#### 동시 시작 및 재접속 처리

- `GameService`가 `scheduledStartAt` epoch ms를 단일 소스로 계산해 broadcast합니다.
- 모든 클라이언트는 같은 절대시각까지 대기한 뒤 게임을 동시에 시작합니다.
- 늦게 mount되거나 새로고침한 사용자는 READY/ROOM_RESYNC를 보내고, BE가 PRIVATE START를 재발행합니다.
- 브라우저 새로고침이나 네트워크 끊김 발생 시 10초 grace로 leaveRoom을 지연합니다.
- 10초 내 재접속하면 leave 예약을 취소하고, GAME_LOAD와 미니게임 START를 PRIVATE로 다시 발행합니다.
- 첫 SCORE_UPDATE 수신 시 `disconnected=false`로 자동 복구하며 bestScore는 monotonic하게 보존합니다.

#### 주요 API 및 이벤트

- REST API:
  - `POST /api/v1/auth/sign-in`: 닉네임 기반 게스트 로그인
  - `POST /api/v1/auth/reissue`: JWT 재발급
  - `GET /api/v1/rooms`: 방 목록 조회
  - `POST /api/v1/rooms`: 방 생성
  - `POST /api/v1/rooms/{roomId}/join`: 방 입장
  - `GET /api/v1/games/{gameId}`: 게임 메타 조회
  - `GET /actuator/prometheus`: 메트릭 endpoint
- STOMP 이벤트:
  - `ROOM_SYNC`, `ROOM_JOIN`, `ROOM_LEAVE`, `ROOM_RESYNC`
  - `HOST_DELEGATE`, `GAME_START`, `GAME_LOAD`, `GAME_INTERMEDIATE_RANK`, `GAME_END`
  - `{GAME}_START`, `{GAME}_SCORE_UPDATE`, `{GAME}_RANKING_UPDATE`
  - `{GAME}_END_MINIGAME`, `{GAME}_FINAL_RANKING`

#### 미니게임 모듈 표준 구조

16종 미니게임은 동일한 모듈 패턴으로 구성해 신규 게임 추가 시 책임 분리를 일관되게 유지했습니다.

```text
{game}/
├── service/      GameHandler, SocketService, SessionRegistry
├── handler/      STOMP 이벤트 핸들러
├── listener/     SessionDisconnectEvent listener
├── model/        Match / Player record
├── repository/   Redis CRUD
├── dto/          request / response
├── exception/    게임별 에러 타입
└── util/         Redis key prefix
```

`GameHandler` 공통 인터페이스는 게임 타입, init, start, end, resync 처리를 표준화합니다.

#### 모니터링 및 컨테이너

- Prometheus `:9090`: BE actuator 메트릭, node-exporter 시스템 메트릭 수집
- Grafana `:3001`: 대시보드 및 실시간 메트릭 시각화
- node-exporter `:9100`: 호스트 CPU, 메모리, 네트워크 메트릭
- Docker Compose 구성:
  - nginx `:80`, `:443`
  - fe `:3000`
  - be `:8080`
  - mysql `:3306`
  - redis `:6379`
  - prometheus `:9090`
  - grafana `:3001`
  - node-exporter `:9100`

#### 주요 트러블슈팅

| 케이스 | 진단 | 해결 |
| --- | --- | --- |
| 다른 서버 유저에게 랭킹/결과가 보이지 않음 | `convertAndSendToUser`가 로컬 `SimpUserRegistry`만 조회 | Redis Pub/Sub envelope으로 cross-server private routing 구현 |
| 라이브 랭킹 점수 진동 | tiebreaker가 매 활성마다 갱신되는 `lastUpdatedAt` 사용 | `Instant.MAX` 통일 + `userId` tiebreaker로 결정적 정렬 |
| 최종 랭킹 0점 또는 빈 화면 | 이전 라운드 stale `finalRankingPublished=true` 잔재 | `handler.init`에서 `cleanupRedis` 선행 호출 |
| 100명 매치 부하 spike | 게임별 broadcast 주기와 즉시 발사 패턴이 혼재 | 1.5초 + PRIVATE per-user + scheduler-only 정책 통일 |
| Prometheus TSDB corruption | 시스템 시계 점프 추정 | Graceful shutdown + NTP 동기 |

### 내 요리를 부탁해

- 유형: Unity 기반 2인 협동 / 정보 비대칭 요리 시뮬레이션
- 플레이 구조:
  - P1, 레시피 마스터: 주문서 해독, 레시피와 재료 주의사항 브리핑
  - P2, 쿠킹 마스터: 실제 조리, 특수 재료 기믹 처리
- 개발 환경:
  - Unity 6.3 LTS, 6000.3.x
  - 3D Low-Poly + Pixel Art Filter Texture
  - Rigidbody 기반 physics interaction
  - Unity Netcode for GameObjects, NGO

#### 설계 원칙

- 게임 파일은 `Assets/_Project` 아래에만 배치합니다.
- 외부 플러그인과 에셋스토어 리소스는 `Assets/ThirdParty`로 분리합니다.
- Unity `.meta` 파일을 반드시 포함해 커밋합니다.
- Version Control Mode는 Visible Meta Files, Asset Serialization은 Force Text로 설정합니다.
- 메인 씬 충돌을 줄이기 위해 프리팹 단위 작업을 권장합니다.

#### 주요 디렉토리

- `Assets/_Project/Art`: 모델, 머티리얼, 텍스처, 애니메이션, VFX, 셰이더
- `Assets/_Project/Audio`: BGM, SFX
- `Assets/_Project/Data`: ScriptableObject 기반 레시피, 재료, 타일 데이터
- `Assets/_Project/Prefabs`: 조리대, 도마, 화구, 재료, UI, 도구 프리팹
- `Assets/_Project/Scenes`: Boot, Menu, Kitchen Prototype, Gameplay
- `Assets/Settings`: URP Renderer, Quality 등 Unity 전역 그래픽 설정
- `Assets/ThirdParty`: 외부 플러그인과 외부 에셋 격리

#### Runtime Scripts 구조

- `Core`: GameState 상태머신, 이벤트, 타이머 등 공통 기반 레이어
- `Interaction`: P2 손, 잡기, 사용, 물리 상호작용, 양손 인벤토리, 웨어러블 슬롯
- `Cooking`: 조리 스테이션, 썰기, 끓이기 등 조리 행위
- `Ingredients`: 재료별 성질, 특수 기믹, 실패 페널티
- `Orders`: P1 주문서, 레시피 매칭, 주문서 해독, 정답 판정
- `MapGen`: 그리드 기반 절차 생성 타일 배치 및 검증
- `UI`: P1 관전/오더 UI, P2 1인칭 HUD
- `Editor`: 커스텀 인스펙터, 레시피/재료 데이터 생성 도구 등 Editor 전용 코드

#### 콘텐츠 확장 방식

- 레시피는 `RecipeDefinition` ScriptableObject로 추가합니다.
- 재료는 `IngredientDefinition`과 프리팹, Behaviour 컴포넌트로 추가합니다.
- 특수 재료는 실패 페널티와 점수 판정 조건을 함께 연결합니다.
- 프로젝트가 커질 경우 asmdef 모듈 분리, 데이터 에디터 툴, 자동 테스트/빌드 CI를 고려합니다.

#### 협업 리스크 관리

- 상태 동기화가 필요한 값은 일반 변수 대신 `NetworkVariable` 사용을 권장합니다.
- 서버 권한 로직 `IsServer`와 클라이언트 로직 `IsOwner`, `IsClient`를 분리합니다.
- 씬/프리팹 충돌이 잦으면 프리팹화, Unity VCS checkout/lock으로 작업 단위를 나눕니다.
- 절차 맵 생성, 특수재료, 레시피 확장은 스프린트 단위로 단계적으로 확장합니다.

### ssabree

- 유형: SSAFY community app for Android / Web
- 설명: SSAFY 구성원을 위한 커뮤니티 앱입니다.
- 플랫폼: Android, Web
- PPT 보완 필요:
  - 핵심 기능
  - 담당 역할
  - 사용 기술
  - 팀 규모 및 기간
  - 배포 여부
  - 스크린샷 또는 데모 링크

### Gumibab

- 유형: SSAFY 구미 캠퍼스 식단 관리 Chrome Extension
- 목적: 일상적으로 확인하는 식단 정보를 더 쉽게 관리하는 브라우저 기반 도구
- PPT 보완 필요:
  - 대상 사용자
  - 사용 흐름
  - 핵심 기능
  - manifest 버전
  - 사용한 Chrome Extension API
  - 배포 여부
  - GitHub 링크
  - 스크린샷

### Sharp

- 유형: AI-guided Q&A tool
- 목적: 막연한 프로젝트 아이디어를 질문으로 구체화하고, 구조화된 계획과 마인드맵으로 정리하는 도구
- PPT 보완 필요:
  - Q&A 흐름
  - 마인드맵 화면
  - 사용한 AI API 또는 모델
  - 팀 규모 및 담당 역할
  - 데모 링크 또는 GitHub 링크

## 11. 블로그 콘텐츠 방향

### ACAPZ.DEV

블로그에서는 실서비스 프로젝트를 만들며 겪은 기술 전환과 의사결정 과정을 기록합니다.

### 주요 글 주제

- CRA에서 Vite로 전환한 이유
- Go에서 Rust WASM으로 전환한 이유
- MongoDB에서 PostgreSQL로 전환한 이유
- 왜 연습용 CRUD가 아닌 실제 서비스 프로젝트를 만드는가
- 실서비스 프로젝트에서만 마주하는 문제와 성장 과정
- LostArkSim 개발기 및 회고

## 12. PPT에 넣기 좋은 핵심 메시지

### 자기소개 슬라이드

> 실제로 쓰이는 서비스를 만들고, 문제를 데이터와 시뮬레이션으로 검증하는 개발자 김민재입니다.

### LostArkSim 슬라이드

> LostArkSim은 로스트아크 캐릭터의 스킬 로테이션을 수천 회 시뮬레이션해 DPS 분포와 스킬별 데미지 비중을 보여주는 웹 기반 시뮬레이터입니다.

### 기술 의사결정 슬라이드

> 서버 비용, 성능, 메모리 제어, 통계 분석 가능성을 기준으로 WASM, Rust, PostgreSQL, Vite 전환을 결정했습니다.

### 성장 방향 슬라이드

> 게임 개발 경험, 바이오공학 기반의 시스템 모델링 사고, 실제 서비스 운영 경험을 연결해 시뮬레이션 개발 역량을 확장하고 있습니다.

### 마무리 슬라이드

> 연습용 프로젝트보다 실제로 쓰이는 것을 만들고, 기술 선택의 이유를 직접 검증하는 개발자가 되고자 합니다.

## 13. PPT 구성 추천

| 슬라이드 | 제목 | 핵심 내용 |
| --- | --- | --- |
| 1 | 김민재 | Simulation Developer, Rust/WASM/TypeScript, 링크 |
| 2 | About | 중학생 게임 출시, 디미고, 한양대, SSAFY, LostArkSim |
| 3 | Tech Stack | Rust, WASM, TypeScript, PostgreSQL, Docker, Cloudflare |
| 4 | LostArkSim | 문제 정의, Monte Carlo, DPS 분포, 클라이언트 WASM |
| 5 | LostArkSim Decisions | 서버 연산→WASM, Go→Rust, MongoDB→PostgreSQL, CRA→Vite |
| 6 | Perfume | Google Play 출시, 48개 난이도, 퍼즐 규칙 설계 |
| 7 | 우주오락실 | 100명 실시간 멀티플레이, STOMP, Redis Pub/Sub, 16종 미니게임 |
| 8 | 우주오락실 Troubleshooting | cross-server private routing, 랭킹 dedup, 재접속 복구, 부하 제어 |
| 9 | Unity Project | 내 요리를 부탁해, 2인 협동, 정보 비대칭, NGO, ScriptableObject 데이터 설계 |
| 10 | Other SSAFY Projects | ssabree, Gumibab, Sharp |
| 11 | Blog & Philosophy | 실서비스 중심, 기술 전환 회고, 직접 검증 |
| 12 | Conclusion | 실제로 쓰이는 것, 데이터 기반 판단, 연락처 |

## 14. 이미지 첨부 후보

- 프로필 사진
- LostArkSim 메인 화면
- LostArkSim 시뮬레이션 결과 화면
- DPS 분포 차트
- 스킬별 데미지 비중 화면
- 스킬 시전 순서 화면
- Perfume Google Play 화면 또는 게임 플레이 화면
- 우주오락실 랜딩/방 목록 화면
- 우주오락실 슬롯 reveal/차원 포탈 연출 화면
- 우주오락실 미니게임 플레이 화면
- 우주오락실 실시간 랭킹 화면
- 우주오락실 Grafana 대시보드 화면
- 내 요리를 부탁해 2인 협동 플레이 화면
- 내 요리를 부탁해 레시피 마스터 UI
- 내 요리를 부탁해 쿠킹 마스터 1인칭 HUD
- ssabree Android/Web 화면
- Gumibab 확장 프로그램 화면
- Sharp Q&A 또는 마인드맵 화면
- acapz.dev 블로그 화면

## 15. 현재 자료에서 확인된 보완 필요 항목

- Phone과 Email은 현재 placeholder입니다.
- 우주오락실에서 본인 담당 역할, 팀 규모, 개발 기간이 필요합니다.
- 내 요리를 부탁해에서 본인 담당 역할, 팀 규모, 개발 기간, 현재 구현 범위가 필요합니다.
- ssabree의 핵심 기능, 사용 기술, 담당 역할, 배포 여부가 필요합니다.
- Gumibab의 팀 규모, 담당 역할, 기간, 배포 여부가 필요합니다.
- Sharp의 사용 기술, AI 모델/API, 담당 역할, 결과물이 필요합니다.
- LostArkSim의 GitHub 저장소 상세 링크가 필요합니다.
- Perfume의 Google Play 링크가 필요합니다.
- 프로젝트별 실제 스크린샷이 필요합니다.
