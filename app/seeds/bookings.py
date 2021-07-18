from app.models import db, Booking
import datetime
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_bookings():

    booking1 = Booking(
        spot_id=1,
        user_id=2,
        start_date="2021-07-01",
        end_date="2021-07-05"
    )
    booking2 = Booking(
        spot_id=2,
        user_id=1,
        start_date="2021-07-01",
        end_date="2021-07-05",
    )

    booking3 = Booking(
        spot_id=3,
        user_id=3,
        start_date="2021-07-01",
        end_date="2021-07-05"
    )
    booking4 = Booking(
        spot_id=4,
        user_id=4,
        start_date="2021-07-01",
        end_date="2021-07-05",
    )

    booking5 = Booking(
        spot_id=5,
        user_id=5,
        start_date="2021-07-01",
        end_date="2021-07-05"
    )
    booking6 = Booking(
        spot_id=6,
        user_id=6,
        start_date="2021-07-01",
        end_date="2021-07-05",
    )

    booking7 = Booking(
        spot_id=7,
        user_id=7,
        start_date="2021-07-01",
        end_date="2021-07-05"
    )
    booking8 = Booking(
        spot_id=8,
        user_id=8,
        start_date="2021-07-01",
        end_date="2021-07-05",
    )


    db.session.add(booking1)
    db.session.add(booking2)
    db.session.add(booking3)
    db.session.add(booking4)
    db.session.add(booking5)
    db.session.add(booking6)
    db.session.add(booking7)
    db.session.add(booking8)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the bookings table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_bookings():
    db.session.execute('TRUNCATE bookings;')
    db.session.commit()
