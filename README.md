# animationmaker
포토샵 애니메이션 제작 툴이 안좋아서 만들어봅세

# design
https://www.figma.com/file/JuJKmG5HISDmLvOZk5j5M1/Untitled?node-id=0%3A1

## 기술명세  
### front  
 + vanilla js  
-> canvas 기능이 주가 될 것 같아, vaniila도 ok,   
-> 추후 상용을 위해서는 react나 nextjs 변환이 필요하지 않을까 싶긴함   
### back  
 + fastapi  
-> flask 할려다가 swagger를 더 잘 지원하는 라이브러리 찾다가 그럴바에 fastapi 쓰기로함  

## API 가상환경 구성 및 실행
```
python -m venv venv
python -m pip install -r requirements.txt
uvicorn main:app --reload
```

## requirements로 의존성 저장
```
pip freeze > requirements.txt
```
  
  
