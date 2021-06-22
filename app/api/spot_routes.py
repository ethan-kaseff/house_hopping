from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Spot, db
from app.forms import SpotForm

spot_routes = Blueprint('spots', __name__)

# @login_required
@spot_routes.route('/create', methods=['GET', 'POST'])
def create_spots():
    if request.method == 'POST':
        #create spot
        form = SpotForm()
        spot = Spot(
            name=form.data['name'],
            description=form.data['description'],
            location=form.data['location'],
            pet_friendly=form.data['pet_friendly'],
            private=form.data['private'],
            available=True,
            user_id=1
        )
        db.session.add(spot)
        db.session.commit()
        return spot.to_dict() #returning spot object, may use to_dict in future


@spot_routes.route('/<int:id>', methods=['GET', 'POST', 'DELETE'])
def ru_spots(id):
    if request.method == "GET":
        spot = Spot.query.get(id)
        return spot.to_dict()
    elif request.method == "POST":
        form = SpotForm()
        spot = Spot(
            name=form.data['name'],
            description=form.data['description'],
            location=form.data['location'],
            pet_friendly=form.data['pet_friendly'],
            private=form.data['private'],
            available=form.data['available'],
            user_id=1
        )
        db.session.add(spot)
        db.session.commit()
        return spot.to_dict()
    elif request.method == "DELETE":
        spot = Spot.query.get(id)
        db.session.delete(spot)
        db.session.commit()
        return spot.to_dict()