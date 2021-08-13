from .db import db

class Booking(db.Model):
    __tablename__ = "bookings"

    id = db.Column(db.Integer, primary_key = True)
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    user_id = db.Column(db.Integer,  db.ForeignKey("users.id"),nullable=False)
    start_date = db.Column(db.Date, nullable = False)
    end_date = db.Column(db.Date, nullable = False)

    user = db.relationship("User", back_populates="bookings")
    spot = db.relationship("Spot", lazy='subquery', back_populates="bookings")

    def to_dict(self):
            return {
                "id": self.id,
                "spot_id": self.spot_id,
                "user_id": self.user_id,
                "start_date": self.start_date,
                "end_date": self.end_date,
                "spot": [self.spot.to_dict()],
            }
