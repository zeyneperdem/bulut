from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy.engine import URL

app = Flask(__name__)
application = app 
CORS(app)

url_object = URL.create(
    "mysql+pymysql",
    username="admin",
    password="eTtycte16092",
    host="bookarchive.cvg444ckev8y.eu-north-1.rds.amazonaws.com", 
    port=3306,
    database="bookarchive"
)

app.config['SQLALCHEMY_DATABASE_URI'] = url_object
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255))      
    review_text = db.Column(db.Text)          
    created_at = db.Column(db.DateTime)       

@app.route('/api/reviews/intermezzo', methods=['GET'])
def get_reviews():
    try:
        # Veritabanından verileri çekmeyi dene
        results = Review.query.all()
        output = [
            {
                "user": r.username, 
                "text": r.review_text, 
                "date": str(r.created_at) if r.created_at else None
            } for r in results
        ]
        return jsonify(output)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run()