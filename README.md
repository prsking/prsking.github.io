<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discover Nepal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            animation: backgroundAnimation 20s infinite alternate;
        }
        @keyframes backgroundAnimation {
            0% { background-image: url('https://source.unsplash.com/1600x900/?nepal,mountains'); }
            50% { background-image: url('https://source.unsplash.com/1600x900/?nepal,temples'); }
            100% { background-image: url('https://source.unsplash.com/1600x900/?nepal,rivers'); }
        }
        .section {
            padding: 50px;
            background: rgba(0, 0, 0, 0.7);
            margin: 20px;
            border-radius: 10px;
            opacity: 0;
            animation: fadeIn 2s forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <h1>Welcome to Nepal</h1>
    <div class="section">
        <h2>Culture</h2>
        <p>Nepal is rich in cultural heritage, with diverse traditions, festivals, and rituals from various ethnic groups.</p>
    </div>
    <div class="section">
        <h2>Food</h2>
        <p>Enjoy traditional Nepali cuisine such as Dal Bhat, Momo, and Newari delicacies.</p>
    </div>
    <div class="section">
        <h2>Places to Visit</h2>
        <p>Explore breathtaking destinations like Mount Everest, Pokhara, Kathmandu, and Lumbini.</p>
    </div>
</body>
</html>
