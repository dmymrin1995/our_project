from typing import List, Optional
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass

class User(Base):

    __tablename__ = "user_account"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(30))
    fullname: Mapped(Optional[str])

    addresses: Mapped[List["Address"]] = relationship(back_populates="user",
                                                      cascade='all, delete-orphan')
    
    def __repr__(self) -> str:
        return f"User({self.id}, {self.name}, {self.fullname})"