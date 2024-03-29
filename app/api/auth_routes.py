import re
from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from datetime import datetime
auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


# @auth_routes.route('/signup', methods=['POST'])
# def sign_up():
#     """
#     Creates a new user and logs them in
#     """
    # regex = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
    # form = SignUpForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    #     if re.match(regex, form.data['email']):
    #         user = User(
    #             email=form.data['email'],
    #             first_name=form.data['first_name'],
    #             last_name=form.data['last_name'],
    #             birth_date=form.data['birth_date'],
    #             # birth_date="2016-02-17",
    #             about_me=form.data['about_me'],
    #             is_host=True,
    #             password=form.data['password'],
    #             profile_url=""
    #         )
    #         db.session.add(user)
    #         db.session.commit()
    #         login_user(user)
    #         return user.to_dict()
    #     else:
    #         return {"errors": "Unable to sign up, please review your information above."}
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    regex = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
    if form.validate_on_submit():
        if re.match(regex, form.data['email']):
            user = User(
                email=form.data['email'],
                first_name=form.data['first_name'],
                last_name=form.data['last_name'],
                birth_date="2016-02-17",
                about_me=form.data['about_me'],
                is_host=True,
                password=form.data['password'],
                profile_url=""
            )
            db.session.add(user)
            db.session.commit()
            login_user(user)
            return user.to_dict()
        else:
            return {"errors": "Unable to sign up, please review your email information"}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
