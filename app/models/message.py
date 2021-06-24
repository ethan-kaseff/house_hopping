from .db import db
class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, nullable = False, primary_key=True)
    user_id_sender = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    user_id_recipient = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    content = db.Column(db.Text, nullable= False)
    message_url = db.Column(db.Text, nullable= False)

    sender = db.relationship("User", foreign_keys=[user_id_sender], back_populates="user_sender")
    recipient = db.relationship("User", foreign_keys=[user_id_recipient], back_populates="user_recipient")

def to_dict(self):
        return {
            "id": self.id,
            "user_id_sender": self.user_id_sender,
            "user_id_recipient": self.user_id_recipient,
            "content": self.content,
            "message_url": self.message_url,
        }
