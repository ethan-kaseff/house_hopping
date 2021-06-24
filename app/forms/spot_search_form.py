from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, TextField, DateField
from wtforms.validators import DataRequired


class SpotSearchForm(FlaskForm):
    location = StringField('Location', validators=[DataRequired()])
    start_date = DateField('Start Date', validators=[DataRequired()])
    end_date = DateField('End Date', validators=[DataRequired()])

