from flask.cli import AppGroup
from .users import seed_users, undo_users
from .locations import seed_locations, undo_locations
from .spots import seed_spots, undo_spots
from .images import undo_images
from .reviews import seed_reviews, undo_reviews
from .bookings import seed_bookings, undo_bookings

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_locations()
    seed_spots()
    seed_reviews()
    seed_bookings()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_reviews()
    undo_images()
    undo_bookings()
    undo_spots()
    undo_locations()
    undo_users()
    # Add other undo functions here
