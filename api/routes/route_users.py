from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.session import get_db,check_current_user
from pydantic import BaseModel, EmailStr
from db.models.users import User
from core.config import settings
import jwt

router = APIRouter()
class UserCreate(BaseModel):
    email: str
    type: str
    username:str

@router.post("/login")
def login(userInfo: UserCreate, db: Session = Depends(get_db)):
    print("userInfo : ",userInfo)
    user = db.query(User).filter_by(email=userInfo.email).first()
    print("user : ",user)
    if not user:
        user = User(**userInfo.dict())
        db.add(user)
        db.commit()
    token = jwt.encode({'id':user.id,'name':user.username}, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM)
    return token

@router.post("/verify")
def authVerify(db: Session = Depends(get_db),user=Depends(check_current_user)):
    if user:
        return True
    return False