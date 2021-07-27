from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Location, db
# from app.forms import LocationForm

location_routes = Blueprint('locations', __name__)


@location_routes.route('/')
def get_locations():
    locations = Location.query.all()
    return {"locations": [location.to_dict() for location in locations]}
