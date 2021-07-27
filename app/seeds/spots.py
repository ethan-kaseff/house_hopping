from app.models import db, Spot
import datetime
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want


def seed_spots():

    spot1 = Spot(
        name='Cozy Downtown Couch',
        description='Best couch vibe in your gosh darn life! Great kitchen and laundry available.',
        location_id=1,
        pet_friendly=True,
        private=False,
        available=True,
        user_id=1,
    )
    spot2 = Spot(
        name='Haunted House 👻',
        description='The spookiest.',
        location_id=2,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=2,
    )
    spot3 = Spot(
        name='Country Inn',
        description='Feel like home',
        location_id=3,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=3,
    )
    spot4 = Spot(
        name='Jackson Spring',
        description='Hotter than a pepper spout',
        location_id=4,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=4,
    )
    spot5 = Spot(
        name='Folsom Prison',
        description='Blues',
        location_id=5,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=5,
    )
    spot6 = Spot(
        name='Camp Ground',
        description='Woodsy',
        location_id=6,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=6,
    )
    spot7 = Spot(
        name='Mars',
        description='Toxic',
        location_id=7,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=5,
    )
    spot8 = Spot(
        name='The Abbey',
        description='Tall ceilings',
        location_id=8,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=2,
    )
    spot9 = Spot(
        name='Bears Town',
        description='Provincetown',
        location_id=9,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=1,
    )
    spot10 = Spot(
        name='Post Office Cafe',
        description='Provincetown',
        location_id=9,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=6,
    )
    spot11 = Spot(
        name='Upper East Side Apartment',
        description='Close to train',
        location_id=10,
        pet_friendly=False,
        private=True,
        available=True,
        user_id=6,
    )

    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)
    db.session.add(spot4)
    db.session.add(spot5)
    db.session.add(spot6)
    db.session.add(spot7)
    db.session.add(spot8)
    db.session.add(spot9)
    db.session.add(spot10)
    db.session.add(spot11)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the spots table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_spots():
    db.session.execute('TRUNCATE spots;')
    db.session.commit()
