from .db import db


class Location(db.Model):
    __tablename__ = "locations"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    spots = db.relationship(
        "Spot", back_populates="location")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
