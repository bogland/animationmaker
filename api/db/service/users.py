from sqlalchemy.orm import Session
from schemas.users import UserCreate
from db.models.users import User
from core.hashing import Hasher

def create_new_user(user: UserCreate, db: Session):
    user = User(
        username=user.username,
        email=user.email,
        # hashed_password=Hasher.get_hash_password(user.password),
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
