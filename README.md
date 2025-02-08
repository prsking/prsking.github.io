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
        nav {
            background-color: #333;
            overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        nav ul li {
            float: left;
        }
        nav ul li a {
            display: block;
            color: white;
            padding: 14px 20px;
            text-align: center;
            text-decoration: none;
        }
        nav ul li a:hover {
            background-color: #575757;
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
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#people">People</a></li>
            <li><a href="#culture">Culture</a></li>
            <li><a href="#cuisine">Cuisine</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#history">History</a></li>
        </ul>
    </nav>
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
