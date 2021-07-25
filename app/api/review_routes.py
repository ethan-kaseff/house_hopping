from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review, db, Spot
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)

# @login_required


@review_routes.route('/', methods=['POST'])
def create_reviews():
    if request.method == 'POST':
        # create spot
        form = ReviewForm()
        review = Review(
            count=form.data['count'],
            content=form.data['content'],
            user_id=form.data['user_id'],
            spot_id=form.data['spot_id'],
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()  # returning spot object, may use to_dict in future


@review_routes.route('/<int:id>', methods=['POST', 'DELETE'])
def update_delete_reviews(id):
    if request.method == "POST":
        form = ReviewForm()
        review = Review.query.get(id)

        review.count = form.data['count']
        review.content = form.data['content']
        # review.user_id = 1
        # review.spot_id = 2

        db.session.commit()
        return review.to_dict()
    elif request.method == "DELETE":
        review = Review.query.get(id)
        db.session.delete(review)
        db.session.commit()
        return review.to_dict()


@review_routes.route('/<int:id>')
def single_review(id):
    review = Review.query.get(id)
    return review.to_dict()


@review_routes.route('/user/<int:id>')
def reviews_by_user(id):
    # reviews = Review.query.filter(Review.user_id == id).all()
    reviews = Review.query.join(Spot).filter(Review.user_id == id).all()
    print('reviews[0]🥳', dir(reviews[0].spot))
    # print('reviews[0]🥳',reviews[0].spot.to_dict())
    spotByUserReviews = {}
    for review in reviews:
        spotByUserReviews[review.spot.id] = review.spot.to_dict()
        # if ("reviews" not in spotByUserReviews[review.spot.id].keys()):
        #     spotByUserReviews[review.spot.id]["reviews"] = {}

        # for r in review.spot.reviews:
        #     spotByUserReviews[review.spot.id]["reviews"][r.id] = r.to_dict()

    return spotByUserReviews


@review_routes.route('/spot/<int:id>')
def reviews_by_spot(id):
    reviews = Review.query.filter(Review.spot_id == id).all()
    reviewsDict = {}
    for review in reviews:
        reviewsDict[review.id] = review.to_dict()
    return reviewsDict
