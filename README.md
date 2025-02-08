<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Nepal</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            text-align: center;
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('background.jpg') no-repeat center center/cover;
            color: white;
            margin: 0;
            padding: 0;
        }
        .info-bar {
            background: rgba(255, 255, 255, 0.2);
            padding: 15px;
            font-size: 18px;
            backdrop-filter: blur(10px);
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .info-bar span {
            margin: 0 15px;
        }
        .container {
            margin-top: 120px;
        }
        h1 {
            font-size: 50px;
            text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
        }
        p {
            font-size: 20px;
            margin-bottom: 30px;
        }
        .btn {
            display: inline-block;
            padding: 15px 30px;
            margin: 10px;
            font-size: 20px;
            color: white;
            background: #e63946;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease-in-out;
        }
        .btn:hover {
            background: #ff4d6d;
            transform: translateY(-3px);
        }
    </style>
</head>
<body>
    <div class="info-bar">
        <span>🌍 Discover Nepal</span>
        <span>🏔️ Home of the Himalayas</span>
        <span>🎭 Rich Cultural Heritage</span>
        <span>🍛 Delicious Cuisine</span>
        <span>📍 Must-Visit Destinations</span>
    </div>
    <div class="container">
        <h1>Welcome to Nepal</h1>
        <p>Discover the majestic beauty, vibrant culture, and rich history of Nepal. Explore the pages to learn more!</p>
        <a href="people.html" class="btn">Explore People</a>
        <a href="culture.html" class="btn">Explore Culture</a>
        <a href="cuisine.html" class="btn">Explore Cuisine</a>
        <a href="destinations.html" class="btn">Explore Destinations</a>
        <a href="history.html" class="btn">Explore History</a>
    </div>
</body>
</html>
