from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from db.base_class import Base


class User(Base):
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(30), unique=True, nullable=False)
    type = Column(Integer)
    email = Column(String(30), unique=True, nullable=False)
    # hashed_password = Column(String(100), nullable=False)
