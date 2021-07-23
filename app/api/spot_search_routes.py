from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Booking, Spot, db
from app.forms import SpotSearchForm
from datetime import date, datetime

spot_search_routes = Blueprint('spot-search', __name__)


@spot_search_routes.route('/<int:location>/<start_date>/<end_date>')
def reviews_by_spot(location, start_date, end_date):
    # print('🌴location', location, type(location))
    # formatted_start_date = datetime.strptime(start_date, "%d/%m/%y")
    # formatted_end_date = datetime.strftime(end_date, "%d/%m/%y")

    conflictedBookings = Booking.query.filter(Booking.start_date <= end_date) \
        .filter(Booking.end_date >= start_date).all()

    conflictedBookingsSpotIdSet = {}
    for booking in conflictedBookings:
        conflictedBookingsSpotIdSet.add(booking.spot_id)
    # print("🙂dir(Spot)", dir(Spot))
    availableSpots = Spot.query.filter(
        Spot.id.notin_(conflictedBookingsSpotIdSet)) \
        .filter(Spot.location_id == location).all()

    availableSpotsDict = {}
    for spot in availableSpots:
        availableSpotsDict[spot.id] = spot.to_dict()
    return availableSpotsDict
