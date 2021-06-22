from app.models import db, Booking
import datetime
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_bookings():

    booking1 = Booking(
        spot_id=1,
        user_id=2,
        start_date=datetime.datetime(2021, 7, 1),
        end_date=datetime.datetime(2021, 7, 5),
    )
    booking2 = Booking(
        spot_id=2,
        user_id=1,
        start_date=datetime.datetime(2021, 7, 1),
        end_date=datetime.datetime(2021, 7, 5),
    )


    db.session.add(booking1)
    db.session.add(booking2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the bookings table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_bookings():
    db.session.execute('TRUNCATE bookings;')
    db.session.commit()
