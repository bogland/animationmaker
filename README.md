# animationmaker

포토샵 애니메이션 제작 툴이 안좋아서 만들어봅세

### 포토샵 및 클립스튜디오의 문제점 (AS-IS)  

- 전체 레이어 기반이라 특정 개체의 애니메이션 재사용이 힘듬  

- 여러 레이어를 썼을때 (러프, 스캐치, 채색, 음영)씬 이동시 한번에 안옮겨짐  

- 레이어가 겹쳤을때 특정 부분만 위로 올리기 힘듬  

- 협업이 힘듬  

### New 애니메이션 툴의 기능 (TO-BE)  

- 애니메이션 에셋화로 애니메이션 **재사용 및 공유** 기능  

- **씬 Sync** 기능으로 씬이동시 한번에 이동  

- **Z-Layer** 기능으로 특정 Layer를 쉽게 올릴 수 있음  

- **Shared Layer** 기능을 통해서 다른 사람과 동시에 레이어 변경이 가능  

# design

https://www.figma.com/file/JuJKmG5HISDmLvOZk5j5M1/animationtool?node-id=0%3A1

## 기술명세

### front

- nextjs  
  -> 검색 엔진 노출 고려

### back

- fastapi  
  -> flask 할려다가 swagger를 더 잘 지원하는 라이브러리 찾다가 그럴바에 fastapi 쓰기로함

## API 가상환경 구성 및 실행

```
python -m venv venv
python -m pip install -r requirements.txt
uvicorn main:app --reload
```

## 프로젝트 구조 참고 URL

https://www.youtube.com/watch?v=5dfnnbCcJqM&t=1393s

## DB 관리

db 스키마가 변경되는 것을 반영해주기위해서 migration필요

```
alembic init ./migration
alembic revision --autogenerate -m "Initial"
alembic upgrade head
```

- revision 후 upgrade head를 해줘야 다음부터 적용됨
- 만약 특정 Table이 기록되길 원치 않는다면 env.py에서 include_object설정을 줌  
  실제 테이블은 아래 속성을 넣어주면 된다.

```
    __table_args__ = {
        'info':{'skip_autogenerate':True}
        }
```

## GOOGLE OAuth Login

nextjs 의 경우 .env 생성후 process.env.GOOGLE_LOGIN_API 사용시 ServerSide에선 정상 출력됨  
ClientSide에서는 아래 설정을 해줘야 나옴

```
.env 생성
.babelrc 생성
{
  "presets": ["next/babel"]
}
next.config.js 수정
env: {
  GOOGLE_LOGIN_API: process.env.GOOGLE_LOGIN_API,
}
```

## Typescript Snippets  
```
	"Creat React Typescript Functional Component": {
		"prefix": "tfc",
		"body": [
			"import React from 'react';",
			"",
			"type Props = {",
			"}",
			"",
			"const ${1:${TM_FILENAME_BASE}} = (props:Props) => {",
			"  return (",
			"    <>",
			"      ${2:}",
			"    </>",
			"  );",
			"};",
			"",
			"export default ${1:${TM_FILENAME_BASE}};"
		],
		"description": "Creat React Typescript Functional Component"
	}
}
```
