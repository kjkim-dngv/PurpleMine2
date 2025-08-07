> [!팁]
> 유지 관리되는 Redmine 6.x 포크는 [Opale](https://github.com/gagnieray/opale)을 참조하세요.

# 퍼플마인 2

SCSS로 작성된 무료 Redmine 3.0+ 테마입니다.

![The MIT License](https://img.shields.io/badge/license-MIT-584492.svg) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) ![Run linters](https://github.com/mrliptontea/PurpleMine2/workflows/Run%20linters/badge.svg) [![Issues](https://img.shields.io/github/issues/mrliptontea/PurpleMine2.svg)](https://github.com/mrliptontea/PurpleMine2/issues)

---

![Screenshot](https://github.com/mrliptontea/PurpleMine2/raw/master/screenshots/issues.png)

[SCSS]로 작성되었습니다. [normalize.css]를 사용하고 믹스인, 구조 등과 같은 [Bootstrap][bootstrap-sass]의 일부 부분을 활용합니다.

## 주요 기능

- 더 크고 읽기 쉬운 글꼴,
- Github와 같은 위키 콘텐츠 모양,
- 사이드바는 더 나은 인체 공학을 위해 왼쪽으로 이동했습니다.
- 색칠 추적기 링크(목록, 문제 페이지 및 위키 콘텐츠에서도),
- Jira에서 영감을 받은 우선 순위 아이콘,
- 사이드바 가시성 전환,
- 변수를 통해 쉽게 사용자 정의할 수 있습니다.

## 설치 방법

PurpleMine을 설치하려면 [.zip](https://github.com/mrliptontea/PurpleMine2/archive/master.zip) 다운로드하여 Redmine의 `public/themes` 폴더에 압축을 풀면 됩니다.

그런 다음 Redmine > 관리 > 설정 > 디스플레이로 이동하여 목록에서 PurpleMine2를 선택하고 변경 사항을 저장합니다.

## 플러그인

이 테마는 [Redmine Backlogs][redmine_backlogs] 플러그인의 새로운 모습도 제공합니다. 설치하려면 스타일 `PurpleMine2/plugins/redmine_backlogs` 시트를 복사하고 파일을 덮어쓴 `{redmine}/plugins/redmine_backlogs/assets/stylesheets` 다음 Redmine을 다시 시작하기만 하면 됩니다.

또한, [Redmine Time Tracker][redmine_time_tracker] 및및 [Redmine People][redmine_crm_people] 플러그인은 PurpleMine과 함께 멋지게 보여야 합니다.

## 사용자 정의 방법

필요에 맞게 PurpleMine을 사용자 정의하려면 먼저 [node.js](http://nodejs.org/) 설치했는지 확인하고 터미널에서 `npm` 을 사용할 수 있는지 확인하십시오.

그런 다음 PurpleMine이 포함된 디렉토리에서 다음을 실행합니다:

    npm install

이제 모든 종속성을 사용할 준비가 되었습니다. 명령을 하나 더 실행합니다:

    npm run watch

그리고 이제 그런트는 `src/` 폴더에 있는 파일의 변경 사항을 감시하고 있습니다. 필요한 것을 변경하기만 하면 Sass 전처리기가 자동으로 실행됩니다.

안타깝게도 Sass에서는 선택적 파일 포함이 불가능하므로 예를 들어 `application.scss` 파일의 시작 부분으로 가져 오는 것과 같이 `src/sass/_custom-variables.scss` 새 파일을 만드는 것이 좋습니다. 이렇게 하면 `!default` 플래그가 있는 모든 변수를 재정의할 수 있습니다.

경로 `src/sass/_custom-variables.scss` 가 `.gitignore`에 추가되므로 PurpleMine의 소스에서 변경한 유일한 것이 `@import "custom-variables";`와 함께 이 한 줄을 추가하는 것이었다는 점을 감안할 때 변경 사항을 유지하면서 PurpleMine을 업그레이드할 수 있습니다.

[Redmine Backlogs][redmine_backlogs]의 스타일을 사용자 정의해야 하는 경우 `src/sass/plugins/redmine_backlogs/_common.scss` `_custom-variables.scss`를 에 포함하는 것을 잊지 마십시오.

## Windows 빌드 및 개발 가이드

윈도우 환경에서 빌드 및 개발 시 발생할 수 있는 오류를 방지하기 위해 다음과 같은 환경 설정을 권장합니다.

- **Node.js 버전: 14~16 버전**을 사용하세요. 최신 버전(18 이상)에서는 deasync 네이티브 모듈 빌드가 실패할 수 있습니다.

- **Visual Studio Build Tools: 'C++를 사용한 데스크톱 개발'** 워크로드에서 MSVC v143, Windows 10/11 SDK, CMake 최소구성으로 설치하세요. node-gyp 실행에 필요한 C++ 컴파일 환경을 제공합니다.

- **Python 버전: 3.11 이하 버전**을 사용하세요. Python 3.12 이상에서는 distutils 모듈이 제거되어 빌드 실패 오류가 발생할 수 있습니다.

## Changelog

[Changelog](./CHANGELOG.md).

[SCSS]: http://sass-lang.com/
[normalize.css]: https://github.com/necolas/normalize.css
[bootstrap-sass]: https://github.com/twbs/bootstrap-sass
[redmine_backlogs]: https://github.com/backlogs/redmine_backlogs
[redmine_time_tracker]: https://github.com/hicknhack-software/redmine_time_tracker
[redmine_crm_people]: http://www.redminecrm.com/projects/people/
[stuff_to_do]: https://github.com/raafael911/stuff_to_do_plugin
