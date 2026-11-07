---
layout: "page"
title: "동기화·저장·정리"
description: "동기화 범위를 이해하고 기기의 파일을 관리합니다."
lang: "ko"
ref: "guide-storage"
guide: true
guide_chapter: "storage"
chapter_order: 10
permalink: "/ko/guide/storage/"
---

# 동기화·저장·정리

{% include guide-screens.html group='storage' %}

| 내용 | 저장 위치 |
| --- | --- |
| 노트, 주제와 저장한 결과물 | 로컬과 개인 iCloud |
| 채팅 기록, 채팅 첨부, 생성한 파일 | 기기의 AI 작업 공간. iCloud 동기화 없음 |
| Skills, 앱 도구와 설정 | 로컬 관리. 민감한 설정은 기기 키체인 |

AI를 사용하면 관련 노트, 이미지, 음성, 파일이나 허용한 기기 데이터가 설정한 AI 서비스로 전송됩니다. Sandbox가 기기에서 실행된다고 AI 추론도 기기에서 실행되는 것은 아닙니다.

**설정 > 도구 및 스킬 > Sandbox**에서 작업 공간을 삭제하면 해당 대화와 파일이 삭제됩니다. 원본 노트와 주제는 유지됩니다. 필요한 결과물은 먼저 내보내세요. Rootfs 재설정은 기본 Linux 환경을 복원하고 그 환경에서 변경한 내용을 없앱니다.
