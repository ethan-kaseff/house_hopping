from app.models import db, Spot
import datetime
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want


def seed_spots():

    spot1 = Spot(
        id=1,
        name='Cozy Downtown Couch',
        description='Best couch vibe in your gosh darn life! Great kitchen and laundry available.',
        location='Kansas City',
        pet_friendly=True,
        private=False,
        available=True,
        user_id=1,
    )
    spot2 = Spot(
        id=2,
        name='Haunted House 👻',
        description='The spookiest.',
        location='South Miami',
        pet_friendly=False,
        private=True,
        available=True,
        user_id=2,
    )
    spot3 = Spot(
        id=3,
        name='Country Inn',
        description='Feel like home',
        location='Tennessee',
        pet_friendly=False,
        private=True,
        available=True,
        user_id=3,
    )
    spot4 = Spot(
        id=4,
        name='Jackson Spring',
        description='Hotter than a pepper spout',
        location='Jackson',
        pet_friendly=False,
        private=True,
        available=True,
        user_id=4,
    )
    spot5 = Spot(
        id=5,
        name='Folsom Prison',
        description='Blues',
        location='Folsom',
        pet_friendly=False,
        private=True,
        available=True,
        user_id=5,
    )
    spot6 = Spot(
        id=6,
        name='Camp Ground',
        description='Woodsy',
        location='Kentucky',
        pet_friendly=False,
        private=True,
        available=True,
        user_id=6,
    )
    spot7 = Spot(
        id=7,
        name='Mars',
        description='Toxic',
        location='Second rock from the Sun',
        pet_friendly=False,
        private=True,
        available=True,
        user_id=5,
    )
    spot8 = Spot(
        id=8,
        name='The Abbey',
        description='Tall ceilings',
        location='England',
        pet_friendly=False,
        private=True,
        available=True,
        user_id=2,
    )
    spot9 = Spot(
        id=9,
        name='Bears Town',
        description='Provincetown',
        location='Cape Cod',
        pet_friendly=False,
        private=True,
        available=True,
        user_id=1,
    )
    spot10 = Spot(
        id=10,
        name='Post Office Cafe',
        description='Provincetown',
        location='Cape Cod',
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

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the spots table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_spots():
    db.session.execute('TRUNCATE spots;')
    db.session.commit()
