from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, TextField, SubmitField
from wtforms.validators import DataRequired


class SpotForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    description = TextField('Description', validators=[DataRequired()])
    location = StringField('Location', validators=[DataRequired()])
    pet_friendly = BooleanField('Pet Friendly', validators=[])
    private = BooleanField('Private', validators=[DataRequired()])
    available =  BooleanField('Private', validators=[])
