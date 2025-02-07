<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Discover Nepal</title>
  <style>
    /* Ensure full-height layout and remove default margins */
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: Arial, sans-serif;
      color: white;
    }
    /* The background slider covers the entire viewport */
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
    /* Main container overlays the background */
    .container {
      position: relative;
      z-index: 1;
      padding: 20px;
    }
    /* Style for content sections */
    .section {
      background: rgba(0, 0, 0, 0.7);
      margin: 20px auto;
      max-width: 800px;
      padding: 20px;
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
  <!-- Background slider element -->
  <div id="background-slider"></div>
  
  <!-- Main content container -->
  <div class="container">
    <h1>Welcome to Nepal</h1>
    <div class="section">
      <h2>About Nepal</h2>
      <p>
        Nepal is a landlocked country in South Asia, known for its diverse cultures, breathtaking landscapes, and historic sites.
      </p>
    </div>
    <div class="section">
      <h2>Culture & Traditions</h2>
      <p>
        Nepal boasts a rich cultural heritage influenced by Hindu and Buddhist traditions, with numerous festivals and rituals.
      </p>
    </div>
    <div class="section">
      <h2>Traditional Cuisine</h2>
      <p>
        Enjoy Nepali dishes such as Dal Bhat, Momo, Sel Roti, and Newari specialties that reflect the nation’s diverse culinary heritage.
      </p>
    </div>
    <div class="section">
      <h2>Famous Destinations</h2>
      <p>
        Visit must-see attractions like Mount Everest, Pokhara, Lumbini, and the historical sites of Kathmandu Valley.
      </p>
    </div>
    <div class="section">
      <h2>People & Languages</h2>
      <p>
        Nepal is home to multiple ethnic groups and languages, including Nepali, Maithili, and Newar, showcasing its cultural diversity.
      </p>
    </div>
  </div>

  <!-- JavaScript for background slider -->
  <script>
    // Array of Nepal-themed background image URLs (hosted on Unsplash)
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
    
    // Initialize slider and change background every 5 seconds
    changeBackground();
    setInterval(changeBackground, 5000);
  </script>
</body>
</html>
