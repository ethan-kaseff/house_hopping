from app.models import db, Location
import datetime
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want


def seed_locations():

    location1 = Location(
        name='Kansas City'
    )
    location2 = Location(
        name='South Miami'
    )
    location3 = Location(
        name='Mobile'
    )
    location4 = Location(
        name='Jackson Spring'
    )
    location5 = Location(
        name='Folsom'
    )
    location6 = Location(
        name='Kentucky City'
    )
    location7 = Location(
        name='Oakland'
    )
    location8 = Location(
        name='Vijayawada'
    )
    location9 = Location(
        name='Provincetown'
    )
    location10 = Location(
        name='New York City'
    )
    location11 = Location(
        name='San Francisco'
    )
    location12 = Location(
        name='Atlanta'
    )
    location13 = Location(
        name='Phoenix'
    )
    location14 = Location(
        name='Springfield'
    )
    location15 = Location(
        name='Carson City'
    )
    location16 = Location(
        name='Raleigh'
    )
    location17 = Location(
        name='Olympia'
    )
    location18 = Location(
        name='Santa Fe'
    )
    location19 = Location(
        name='Trenton'
    )
    location20 = Location(
        name='New Orleans'
    )
    location21 = Location(
        name='Denver'
    )
    location22 = Location(
        name='Juneau'
    )

    db.session.add(location1)
    db.session.add(location2)
    db.session.add(location3)
    db.session.add(location4)
    db.session.add(location5)
    db.session.add(location6)
    db.session.add(location7)
    db.session.add(location8)
    db.session.add(location9)
    db.session.add(location10)
    db.session.add(location11)
    db.session.add(location12)
    db.session.add(location13)
    db.session.add(location14)
    db.session.add(location15)
    db.session.add(location16)
    db.session.add(location17)
    db.session.add(location18)
    db.session.add(location19)
    db.session.add(location20)
    db.session.add(location21)
    db.session.add(location22)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the locations table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_locations():
    db.session.execute('TRUNCATE locations;')
    db.session.commit()
