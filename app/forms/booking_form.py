from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField
from wtforms.validators import DataRequired


class BookingForm(FlaskForm):
    spot_id = IntegerField('Spot', validators=[DataRequired()])
    user_id = IntegerField('User', validators=[DataRequired()])
    start_date = DateField('Start Date', validators=[DataRequired()])
    end_date = DateField('End Date', validators=[DataRequired()])
