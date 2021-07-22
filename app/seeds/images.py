from app.models import db, Image

# Adds a demo user, you can add other users here if you want


def undo_images():
    db.session.execute('TRUNCATE images;')
    db.session.commit()
