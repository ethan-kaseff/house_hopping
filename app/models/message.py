from .db import db
class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, nullable = False, primary_key=True)
    user_id_sender = db.Column(db.Integer, db.ForeignKey("users.id"),nullable = False)
    user_id_recipient = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    content = db.Column(db.Text, nullable= False)
    message_url = db.Column(db.Text, nullable= False)

    sender = db.relationship("User")
    recipient = db.relationship("User")