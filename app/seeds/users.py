from werkzeug.security import generate_password_hash
from app.models import db, User
import datetime
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():

    # demo = User(username='Demo', email='demo@aa.io',
    #             password='password')
    demo1 = User(
        id=1,
        email='demo@aa.io',
        first_name='Demo',
        last_name='User',
        birth_date= "2018-06-01",
        about_me='junior dev',
        is_host=False,
        password='password',
        profile_url=''
    )
    demo2 = User(
        id=2,
        email=fake.email(),
        first_name=fake.first_name(),
        last_name=fake.last_name(),
        birth_date= "2018-06-01",
        about_me=fake.text(),
        is_host=False,
        password=fake.password(),
        profile_url=fake.url()
    )

    db.session.add(demo1)
    db.session.add(demo2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
