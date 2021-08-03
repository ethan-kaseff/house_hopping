from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Image, db, Spot

image_routes = Blueprint('images', __name__)



@image_routes.route('/')
def get_all_images():
    images = Image.query.all()
    # print(images)
    imagesDict = {}
    for image in images:
        imagesDict[image.id] = image.to_dict()
    # return {"imagesDict": [image.to_dict() for image in images]}
    return imagesDict


@image_routes.route('/spot/<int:id>')
def images_by_spot(id):
    images = Image.query.filter(Image.spot_id == id).all()
    # print('IMAGESSSSSS', images)
    imagesDict = {}
    for image in images:
        imagesDict = image.to_dict()
    return imagesDict
