from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Booking, User, db
from app.forms import BookingForm

booking_routes = Blueprint('booking', __name__)


@booking_routes.route('/create', methods=['GET', 'POST'])
@login_required
def create_bookings():
    if request.method == 'POST':
        #create booking
        form = BookingForm()
        booking = Booking(
            spot_id=form.data['spot_id'],
            user_id=form.data['user_id'],
            start_date=form.data['start_date'],
            end_date=form.data['end_date'],
        )
        db.session.add(booking)
        db.session.commit()
        return booking.to_dict() #returning spot object, may use to_dict in future


@booking_routes.route('/<int:id>', methods=['POST', 'DELETE'])
def update_delete_bookings(id):
    if request.method == "POST":
        form = BookingForm()

        booking = Booking.query.get(id)

        booking.spot_id=1,
        booking.user_id=2,
        booking.start_date=form.data['start_date'],
        booking.end_date=form.data['end_data'],

        db.session.commit()
        return booking.to_dict()
    elif request.method == "DELETE":
        booking = Booking.query.get(id)
        db.session.delete(booking)
        db.session.commit()
        return booking.to_dict()


@booking_routes.route('/<int:id>')
def get_booking(id):
    print(Booking, 'BOOKING')
    # booking_by_id = Booking.query.get(id)
    bookings = Booking.query.all()
    return {'booking': [booking.to_dict() for booking in bookings]}
    # print(booking_by_id)
    # bookingDict = {}
    # return bookingDict
    # return booking_by_id.to_dict()
    # for booking in booking_by_id:
    #     bookingDict[booking.id] = booking.to_dict()
    # return bookingDict

@booking_routes.route('/')
def get_bookings():
    # bookings= Booking.query.all()
    bookings= Booking.query.filter(Booking.user_id == current_user.id).all()
    bookingsDict = {}
    # print(bookings_by_owner)
    # print('🎨 bookings',bookings)
    for booking in bookings:
        bookingsDict[booking.id] = booking.to_dict()
    return bookingsDict
