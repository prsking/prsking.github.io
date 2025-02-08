<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Discover Nepal</title>
  <style>
    /* Reset default margins and set full-height layout */
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: Arial, sans-serif;
      color: white;
    }
    /* Background slider styling */
    #background-slider {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-size: cover;
      background-position: center;
      transition: background-image 1s ease-in-out;
    }
    /* Navigation bar styling */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.8);
      padding: 10px 0;
      z-index: 1000;
    }
    .navbar ul {
      list-style: none;
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
    }
    .navbar li {
      margin: 0 15px;
    }
    .navbar a {
      color: white;
      text-decoration: none;
      font-size: 18px;
    }
    /* Main container styling; add top margin to avoid the navbar */
    .container {
      margin-top: 70px; /* height of navbar + some space */
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
    }
    /* Section styling */
    .section {
      padding: 50px;
      background: rgba(0, 0, 0, 0.7);
      margin: 20px 0;
      border-radius: 10px;
    }
    h1 {
      text-align: center;
      font-size: 3em;
      margin-top: 20px;
    }
    h2 {
      color: #f9a826;
    }
  </style>
</head>
<body>
  <!-- Background Slider -->
  <div id="background-slider"></div>
  
  <!-- Navigation Bar -->
  <div class="navbar">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#culture">Culture</a></li>
      <li><a href="#cuisine">Cuisine</a></li>
      <li><a href="#destinations">Destinations</a></li>
      <li><a href="#people">People</a></li>
      <li><a href="#history">History</a></li>
    </ul>
  </div>

  <!-- Main Content -->
  <div class="container">
    <section id="home" class="section">
      <h1>Welcome to Nepal</h1>
      <p>Experience the land of the Himalayas, vibrant cultures, and timeless traditions.</p>
    </section>
    <section id="culture" class="section">
      <h2>Culture & Traditions</h2>
      <p>Nepal boasts a rich cultural heritage influenced by Hindu and Buddhist traditions, with numerous festivals and rituals celebrated throughout the year.</p>
    </section>
    <section id="cuisine" class="section">
      <h2>Traditional Cuisine</h2>
      <p>Savor Nepali dishes such as Dal Bhat, Momo, Sel Roti, and various Newari specialties that reflect the country’s diverse culinary heritage.</p>
    </section>
    <section id="destinations" class="section">
      <h2>Famous Destinations</h2>
      <p>Explore breathtaking attractions like Mount Everest, Pokhara, Lumbini, and the historic Kathmandu Valley.</p>
    </section>
    <section id="people" class="section">
      <h2>People & Languages</h2>
      <p>Nepal is home to a mosaic of ethnic groups and languages including Nepali, Maithili, Newar, and many more, which add to its vibrant culture.</p>
    </section>
    <section id="history" class="section">
      <h2>History</h2>
      <p>Discover the rich history of Nepal, from ancient kingdoms and mythological tales to its role in modern South Asian affairs.</p>
    </section>
  </div>

  <!-- JavaScript for Background Slider -->
  <script>
    const images = [
      'https://images.unsplash.com/photo-1519861159239-b6f0c618b9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1598268397578-171bdf1e6e65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1566057522804-382e0db61a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1573164574390-4c0413b6ce92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
    ];
    
    let current = 0;
    const slider = document.getElementById('background-slider');
    
    function changeBackground() {
      slider.style.backgroundImage = 'url(' + images[current] + ')';
      current = (current + 1) % images.length;
    }
    
    // Initialize the background and update every 5 seconds
    changeBackground();
    setInterval(changeBackground, 5000);
  </script>
</body>
</html>
