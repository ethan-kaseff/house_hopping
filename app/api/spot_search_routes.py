from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Booking, Spot, db
from app.forms import SpotSearchForm

spot_search_routes = Blueprint('spot-search', __name__)


@spot_search_routes.route('/<location>/<start_date>/<end_date>')
def reviews_by_spot(location, start_date, end_date):


    

    conflictedBookings = Booking.query.filter(Booking.start_date <= end_date) \
                                        .filter(Booking.end_date >= start_date).all()

    conflictedBookingsSpotIdSet = {}
    for booking in conflictedBookings:
        conflictedBookingsSpotIdSet.add(booking.spot_id)

    availableSpots = Spot.query.filter(Spot.id.notin_(conflictedBookingsSpotIdSet)) \
                                .filter(Spot.location == location).all()

    availableSpotsDict = {}
    for spot in availableSpots:
        availableSpotsDict[spot.id] = spot.to_dict()

    return availableSpotsDict
 