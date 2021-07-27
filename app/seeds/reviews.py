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
    review3 = Review(
        count=3,
        content="Will reccomend to others!",
        user_id=3,
        spot_id=3,
    )
    review4 = Review(
        count=4,
        content="Can not wait to come back",
        user_id=4,
        spot_id=4,
    )
    review5 = Review(
        count=4,
        content="Great Garden",
        user_id=5,
        spot_id=5,
    )
    review6 = Review(
        count=4,
        content="Very Quiet",
        user_id=6,
        spot_id=6,
    )
    review7 = Review(
        count=4,
        content="Spacious bathroom",
        user_id=6,
        spot_id=7,
    )
    review8 = Review(
        count=4,
        content="Great kitchen",
        user_id=5,
        spot_id=8,
    )
    review9 = Review(
        count=2,
        content="Very convenient location",
        user_id=6,
        spot_id=9,
    )
    review10 = Review(
        count=4,
        content="Very Clean",
        user_id=2,
        spot_id=6,
    )
    review11 = Review(
        count=4,
        content="Amazing Hosts",
        user_id=3,
        spot_id=5,
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the reviews table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()
