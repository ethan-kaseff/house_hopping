from .db import db

class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key = True)
    image_url = db.Column(db.Text, nullable = False)
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"))
    review_id = db.Column(db.Integer, db.ForeignKey("reviews.id"))

    spot = db.relationship("Spot", back_populates="images")
    review = db.relationship("Review", back_populates="images")


    def to_dict(self):
        return {
            "id": self.id,
            "image_url": self.image_url,
            "spot_id": self.spot_id,
            "review_id": self.review_id,
        }
