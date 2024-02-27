<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog Breed Recommendation</title>
    <style>
        /* Add your CSS styles here */
    </style>
</head>
<body>
    <!-- Dog Breed Information Section -->
    <section id="breed-info">
        <h2>Dog Breed Information</h2>
        <div id="breed-list">
            <!-- Breed information will be dynamically populated here -->
        </div>
    </section>

    <!-- User Input and Breed Recommendation Section -->
    <section id="user-input">
        <h2>User Input and Breed Recommendation</h2>
        <label for="lifestyle">Select Your Lifestyle:</label>
        <select id="lifestyle">
            <!-- Options for lifestyle will be dynamically populated here -->
        </select>
        <!-- Add more drop-down menus for user input if needed -->
        <button id="run-btn">Run</button>
        <div id="recommendation">
            <!-- Breed recommendation will be displayed here -->
        </div>
    </section>

    <!-- Demographic Charts and Maps Section -->
    <section id="demographics">
        <h2>Demographic Charts and Maps for NYC Dog Owners</h2>
        <div id="charts">
            <!-- Demographic charts will be dynamically populated here -->
        </div>
        <div id="maps">
            <!-- Maps for NYC dog owners will be dynamically populated here -->
        </div>
    </section>

    <script src="script.js"></script> <!-- Include JavaScript file -->
</body>
</html>
