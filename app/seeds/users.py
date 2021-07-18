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
        email='demo1@aa.io',
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

    demo3 = User(
        id=3,
        email='demo3@aa.io',
        first_name='Elvis',
        last_name='Presley',
        birth_date= "2018-06-01",
        about_me='Rock & Roll Singer',
        is_host=False,
        password='password',
        profile_url=''
    )
    demo4 = User(
        id=4,
        email='demo4@aa.io',
        first_name='June ',
        last_name='Carter',
        birth_date= "2014-06-01",
        about_me='Eukelaylee Player',
        is_host=False,
        password='password',
        profile_url=''
    )
    demo5 = User(
        id=5,
        email='demo5@aa.io',
        first_name='Johnny ',
        last_name='Cash',
        birth_date= "2015-06-01",
        about_me='Country Singer',
        is_host=False,
        password='password',
        profile_url=''
    )
    demo6 = User(
        id=6,
        email='demo6@aa.io',
        first_name='Britney',
        last_name='Spears',
        birth_date= "2016-06-01",
        about_me='Pop Singer',
        is_host=False,
        password='password',
        profile_url=''
    )

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
