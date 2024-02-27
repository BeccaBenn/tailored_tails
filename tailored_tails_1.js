document.addEventListener("DOMContentLoaded", function() {
    // Fetch CSV data
    fetch('/Resources/top50breeds.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV data
            const rows = data.split('\n').slice(1); // Skip header row
            const breeds = rows.map(row => {
                const columns = row.split(',');
                return {
                    name: columns[0],
                    temperament: columns[2],
                    demeanor: columns[12],
                    size: columns[18],
                    energy: columns[8],
                    trainingNeeded: columns[10],
                    shedding: columns[6],
                    groomingNeeded: columns[4],
                    lifeExpentancy: columns[14],
                    image: columns[19],
                    // Add more properties as needed
                };
            });

            // Populate breed information section
            const breedList = document.getElementById('breed-list');
            breeds.forEach(breed => {
                const breedInfo = document.createElement('div');
                breedInfo.innerHTML = `<h3>${breed.name}</h3>
                                        <p><strong>Temperament:</strong> ${breed.temperament}</p>
                                        <p><strong>Demeanor:</strong> ${breed.demeanor}</p>
                                        <p><strong>Size:</strong> ${breed.size}</p>
                                        <p><strong>Energy Level:</strong> ${breed.energy}</p>
                                        <p><strong>Trainability:</strong> ${breed.trainingNeeded}</p>
                                        <p><strong>Shedding:</strong> ${breed.shedding}</p>
                                        <p><strong>Grooming Requirements:</strong> ${breed.groomingNeeded}</p>
                                        <p><strong>Average Life Expenctancy:</strong> ${breed.lifeExpentancy}</p>
                                        <p><strong>How Cute:</strong> ${breed.image}</p>`
                                        
                                        
                breedList.appendChild(breedInfo);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Event listener for the "Run" button
    const runButton = document.getElementById('run-btn');
    runButton.addEventListener('click', function() {
        // Retrieve user input
        const lifestyle = document.getElementById('lifestyle').value;
        // Add more input retrieval if needed

        // Perform recommendation logic
        const recommendation = recommendBreed(lifestyle); // Implement this function
        displayRecommendation(recommendation); // Implement this function
    });

    // Recommendation logic function
    function recommendBreed(lifestyle) {
        // Implement your recommendation logic here
        // This function should return the recommended breed based on user input
    }

    // Function to display recommendation
    function displayRecommendation(recommendation) {
        const recommendationDiv = document.getElementById('recommendation');
        recommendationDiv.innerHTML = `<p>Recommended Breed: ${recommendation}</p>`;
    }
});
