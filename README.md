<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Nepal</title>
  <style>
    /* Reset & Basic Setup */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body {
      height: 100%;
      font-family: Arial, sans-serif;
      overflow-x: hidden;
    }
    /* Background Slider Container */
    #background-slider {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: -1;
      opacity: 0;
      animation: fadeInBackground 2s forwards;
    }
    @keyframes fadeInBackground {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    /* Navigation Bar Styling */
    .navbar {
      position: fixed;
      top: 20px;
      width: 100%;
      text-align: center;
      z-index: 1000;
    }
    .navbar a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      margin: 0 15px;
      transition: transform 0.3s, color 0.3s;
    }
    .navbar a:hover {
      transform: scale(1.2);
      color: #f9a826;
    }
    /* Main Content Container */
    .container {
      position: relative;
      z-index: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
      animation: slideUp 1s ease-out;
    }
    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    /* Animated Title */
    h1 {
      font-size: 3.5em;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
      animation: bounce 2s infinite;
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-20px); }
      60% { transform: translateY(-10px); }
    }
    /* Paragraph Styling */
    p {
      font-size: 1.2em;
      margin-bottom: 30px;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
    }
    /* Button Styling & Animation */
    .button {
      padding: 15px 30px;
      font-size: 1.2em;
      background: #f9a826;
      color: #000;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.3s, transform 0.3s;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    }
    .button:hover {
      background: #ffbf00;
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <!-- Background Slider Container -->
  <div id="background-slider"></div>

  <!-- Navigation Bar -->
  <div class="navbar">
    <a href="index.html">Home</a>
    <a href="culture.html">Culture</a>
    <a href="cuisine.html">Cuisine</a>
    <a href="destinations.html">Destinations</a>
    <a href="people.html">People</a>
    <a href="history.html">History</a>
  </div>

  <!-- Main Content Container -->
  <div class="container">
    <h1>Welcome to Nepal</h1>
    <p>
      Discover the majestic beauty, vibrant culture, and rich history of Nepal.
      Explore our pages to learn more about its people, traditions, and breathtaking landscapes.
    </p>
    <a href="people.html" class="button">Explore People</a>
  </div>

  <!-- JavaScript for Background Slider -->
  <script>
    // Array of Nepal-themed background images
    const images = [
      'https://images.unsplash.com/photo-1519861159239-b6f0c618b9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1589044041392-c0fd1edb78c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1598268397578-171bdf1e6e65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1566057522804-382e0db61a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    ];
    let current = 0;
    const slider = document.getElementById('background-slider');
    
    function changeBackground() {
      // Fade out effect before changing image
      slider.style.opacity = 0;
      setTimeout(() => {
        slider.style.backgroundImage = 'url(' + images[current] + ')';
        slider.style.opacity = 1;
        current = (current + 1) % images.length;
      }, 1000); // Adjust timing to match fade-out duration
    }
    
    // Initialize the background slider and update every 6 seconds
    changeBackground();
    setInterval(changeBackground, 6000);
  </script>
</body>
</html>
