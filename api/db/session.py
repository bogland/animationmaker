from fastapi import HTTPException, Depends
from fastapi.security import HTTPBasicCredentials, HTTPBearer
from core.config import settings
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from typing import Generator
import jwt 
from db.models.users import User
from db.models.projects import Project
from db.models.layers import Layer
from sqlalchemy.orm import Session

SQLALCHEMY_DATABASE_URL = settings.DATABASE_URL
engine = create_engine(SQLALCHEMY_DATABASE_URL)
security = HTTPBearer()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

async def check_current_user(credentials: HTTPBasicCredentials = Depends(security),db: Session = Depends(get_db)):
    token = credentials.credentials
    userInfo = jwt.decode(token,settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM])
    print("user : ",userInfo)
    try:
        user = db.query(User).get(userInfo['id'])
        print(user)
        if not user:
            raise HTTPException(status_code=403, detail="Invalid authorization code.")
        return user
    except:  # catches any exception
        raise HTTPException(status_code=403, detail="Invalid authorization code.")