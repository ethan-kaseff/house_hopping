from app.models import db, Review
import datetime
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_reviews():

    review1 = Review(
        count=5,
        content="Best place west of the Mississippi river",
        user_id=1,
        spot_id=1,
    )
    review2 = Review(
        count=4,
        content="Should be a 5 star",
        user_id=2,
        spot_id=2,
    )



    db.session.add(review1)
    db.session.add(review2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the reviews table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()
