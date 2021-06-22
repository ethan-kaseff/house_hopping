from app.models import db, Spot
import datetime
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_spots():

    spot1 = Spot(
        name='Cozy Downtown Couch',
        description='Best couch vibe in your gosh darn life! Great kitchen and laundry available.',
        location='Kansas City',
        pet_friendly=True,
        private=False,
        available=True,
        user_id=1,
    )
    spot2 = Spot(
        name='Haunted House 👻',
        description='The spookiest.',
        location='South Miami',
        pet_friendly=False,
        private=True,
        available=True,
        user_id=2,
    )


    db.session.add(spot1)
    db.session.add(spot2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the spots table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_spots():
    db.session.execute('TRUNCATE spots;')
    db.session.commit()
