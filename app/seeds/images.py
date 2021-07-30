from app.models import db, Image

# Adds a demo user, you can add other users here if you want


def seed_images():

    image1 = Image(
        image_url='https://i.imgur.com/Zbisx6O.jpeg',
        spot_id=1
    )
    image2 = Image(
        image_url='https://i.imgur.com/V4OiZBJ.jpeg',
        spot_id=2
    )
    image3 = Image(
        image_url='https://i.imgur.com/Mw3jdsx.jpeg',
        spot_id=3
    )
    image4 = Image(
        image_url='https://i.imgur.com/llXnMrp.jpeg',
        spot_id=4
    )
    image5 = Image(
        image_url='https://i.imgur.com/k0wUfka.jpeg',
        spot_id=5
    )
    image6 = Image(
        image_url='https://i.imgur.com/YGPfvsY.jpeg',
        spot_id=6
    )
    image7 = Image(
        image_url='https://i.imgur.com/5qYHJgJ.jpeg',
        spot_id=7
    )
    image8 = Image(
        image_url='https://i.imgur.com/Z7H3GRb.jpeg',
        spot_id=8
    )
    image9 = Image(
        image_url='https://i.imgur.com/dc5Nq15.jpeg',
        spot_id=9
    )
    image10 = Image(
        image_url='https://i.imgur.com/3v5M1WI.jpeg',
        spot_id=10
    )
    image11 = Image(
        image_url='https://i.imgur.com/bUBNNlS.jpeg',
        spot_id=11
    )


    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)

    db.session.commit()



def undo_images():
    db.session.execute('TRUNCATE images;')
    db.session.commit()
