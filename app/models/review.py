from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    count = db.Column(db.Integer, nullable=False)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)

    user = db.relationship("User", back_populates="reviews")
    images = db.relationship(
        "Image", back_populates="review")
    spot = db.relationship("Spot", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "count": self.count,
            "content": self.content,
            "user_id": self.user_id,
            "spot_id": self.spot_id,
        }
