from flask_wtf import FlaskForm
from wtforms import IntegerField, TextField
from wtforms.validators import DataRequired
from app.models import Spot

class SpotForm(FlaskForm):
    count = IntegerField('Count', validators=[DataRequired()])
    content = TextField('Content', validators=[DataRequired()])
    user_id = IntegerField('User ID', validators=[DataRequired()])
    spot_id = IntegerField('Spot ID', validators=[DataRequired()])
