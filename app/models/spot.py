from .db import db


class Spot(db.Model):
    __tablename__ = "spots"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    pet_friendly = db.Column(db.Boolean)
    private = db.Column(db.Boolean, nullable=False)
    available = db.Column(db.Boolean, nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey(
        "locations.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="spots")
    location = db.relationship(
        "Location", back_populates="spots")
    bookings = db.relationship(
        "Booking", back_populates="spot")
    images = db.relationship(
        "Image", back_populates="spot")
    reviews = db.relationship(
        "Review", back_populates="spot")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "pet_friendly": self.pet_friendly,
            "private": self.private,
            "available": self.available,
            "location_id": self.location_id,
            "user_id": self.user_id
        }
