🚀 Custom URL Shortener API
A scalable URL Shortener API built with Node.js, Express.js, MongoDB, and Redis, featuring:

Google Sign-In Authentication
Rate Limiting to prevent abuse
Topic-Based Grouping of URLs
Advanced Analytics for tracking clicks, devices, and OS
Docker Support for containerized deployment

🌐 Live Demo
🚀 Deployed Link 

📋 Table of Contents
Features
Tech Stack
Getting Started
Environment Variables
API Endpoints
Deployment (Optional)
Challenges Faced
License

🎯 Features
✅ Google Sign-In Authentication (OAuth 2.0)
✅ Shorten Long URLs with optional custom aliases
✅ Topic-Based Grouping (Acquisition, Activation, Retention, etc.)
✅ Advanced Analytics:
    .Total Clicks
    .Unique Users
    .OS & Device Breakdown
    .Date-wise Click Trends
✅ Rate Limiting (10 requests/hour per user)
✅ Caching with Redis for faster performance
✅ Dockerized for easy deployment

🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Caching: Redis
Authentication: Google OAuth 2.0
Rate Limiting: express-rate-limit
Deployment: Docker (optional)

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables
PORT=3000
MONGO_URI=mongodb://localhost:27017/urlshortener
REDIS_HOST=localhost
REDIS_PORT=6379
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
4️⃣ Start the Application
# For development
npm run dev
# For production
npm start
The server will run at: http://localhost:3000

🔐 Environment Variables
Variable	            Description
PORT	                Server port
MONGO_URI	            MongoDB connection string
REDIS_HOST	            Redis host (default: localhost)
REDIS_PORT	            Redis port (default: 6379)
GOOGLE_CLIENT_ID	    Google OAuth Client ID
GOOGLE_CLIENT_SECRET	Google OAuth Client Secret
JWT_SECRET	            JWT secret for token generation

📊 API Endpoints
1️⃣ Authentication
Google Sign-In:
GET /auth/google
GET /auth/google/callback
2️⃣ URL Shortening
Create Short URL:
POST /api/shorten
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
{
  "longUrl": "https://example.com",
  "customAlias": "myalias",
  "topic": "acquisition"
}
Response:
{
  "shortUrl": "http://localhost:3000/myalias",
  "createdAt": "2025-02-05T12:00:00Z"
}
Redirect to Original URL:
GET /:alias

3️⃣ Analytics
Get URL Analytics:

GET /api/analytics/:alias
Authorization: Bearer <JWT_TOKEN>

Topic-Based Analytics:

GET /api/analytics/topic/:topic
Authorization: Bearer <JWT_TOKEN>
Overall Analytics:

GET /api/analytics/overall
Authorization: Bearer <JWT_TOKEN>

4️⃣ Rate Limiting
Limit: 100 URL shorten requests per hour per user.
Exceeding the limit returns:
{
  "message": "You have exceeded the 100 requests in 1 hour limit. Please try again after an hour."
}

📦 Deployment (Optional with Docker)
1️⃣ Build and Run with Docker
docker-compose up --build
The app will run at http://localhost:3000.

⚠️ Challenges Faced
1.Rate Limiting Conflicts:
Solved using express-rate-limit with role-based middleware for flexibility.

2.Handling URL Collisions:
Implemented custom alias checks and fallback to nanoid for unique generation.

3.Efficient Analytics:
Optimized MongoDB queries using aggregation pipelines and Redis caching for real-time performance.

4.OAuth Integration Issues:
Debugged callback URLs and token expiration problems using passport-google-oauth20.

📄 License
This project is licensed under the MIT License.

🚀 Contributions
Feel free to submit pull requests or open issues if you'd like to contribute.
Happy Coding! 💻✨