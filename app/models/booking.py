from .db import db

class Booking(db.Model):
    __tablename__ = "bookings"

    id = db.Column(db.Integer, primary_key = True)
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    user_id = db.Column(db.Integer,  db.ForeignKey("users.id"),nullable=False)
    start_date = db.Column(db.Date, nullable = False)
    end_date = db.Column(db.Date, nullable = False)

    user = db.relationship("User", back_populates="bookings")
    spot = db.relationship("Spot", back_populates="bookings")