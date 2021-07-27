from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    birth_date = db.Column(db.Date, nullable=False)
    about_me = db.Column(db.Text, nullable=False)
    is_host = db.Column(db.Boolean, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_url = db.Column(db.Text)

    spots = db.relationship("Spot", back_populates="user")
    bookings = db.relationship(
        "Booking", back_populates="user")
    reviews = db.relationship(
        "Review", back_populates="user")

    user_sender = db.relationship(
        "Message", foreign_keys="Message.user_id_sender", back_populates="sender")
    user_recipient = db.relationship(
        "Message", foreign_keys="Message.user_id_recipient", back_populates="recipient")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "birth_date": str(self.birth_date),
            "about_me": self.about_me,
            "is_host": self.is_host,
            "profile_url": self.profile_url,
        }
