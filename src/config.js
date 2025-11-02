const advices = [
    { title: "Hydration", description: "Drinking enough water throughout the day helps maintain energy and focus.", color: "#1E90FF" },
    { title: "Balanced Diet", description: "Eat more fruits and vegetables for the essential vitamins and fiber needed for your health.", color: "#FF6347" },
    { title: "Restorative Sleep", description: "Aim for 7 to 9 hours of sleep per night for physical and mental recovery.", color: "#6A5ACD" },
    { title: "Physical Activity", description: "Exercise daily, even a short walk, to improve your mood and fitness.", color: "#32CD32" },
    { title: "Stress Management", description: "Practice mindfulness, meditation, or yoga to reduce stress and improve mental health.", color: "#FF69B4" },
];

let index = 0;
const container = document.getElementById("carousel-container");
const title = document.getElementById("advice-title");
const desc = document.getElementById("advice-description");
const indicators = document.getElementById("indicators");

function updateCarousel() {
    const advice = advices[index];
    title.textContent = advice.title;
    desc.textContent = advice.description;
    container.style.backgroundColor = advice.color;
    
    indicators.innerHTML = '';
    advices.forEach((_, i) => {
        const indicator = document.createElement('div');
        indicator.className = `w-3 h-3 rounded-full cursor-pointer ${i === index ? 'bg-white opacity-100' : 'bg-white opacity-50'}`;
        indicator.onclick = () => {
            index = i;
            updateCarousel();
        };
        indicators.appendChild(indicator);
    });
}

function navigate(direction) {
    index = (index + direction + advices.length) % advices.length;
    updateCarousel();
}

document.getElementById("next-button").onclick = () => navigate(1);
document.getElementById("prev-button").onclick = () => navigate(-1);

updateCarousel();
setInterval(() => navigate(1), 5000);


function setupArticleSearch() {
 
    const searchInput = document.getElementById('article-search-input');
    const articleGrid = document.getElementById('article-grid');

  
    if (!searchInput || !articleGrid) {
        console.error("Search elements not found. Please ensure 'article-search-input' and 'article-grid' IDs are correctly added to your HTML.");
        return;
    }

   
    const articleCards = articleGrid.querySelectorAll('.bg-white.p-6.rounded-xl');

 
    function filterArticles() {
  
        const searchTerm = searchInput.value.toLowerCase().trim();

        articleCards.forEach(card => {
    
            const cardText = card.textContent.toLowerCase();

         
            const isMatch = cardText.includes(searchTerm);

  
            if (isMatch) {
               
                card.classList.remove('hidden');
            } else {
                
                card.classList.add('hidden');
            }
        });
    }

    
    searchInput.addEventListener('input', filterArticles);
}


document.addEventListener('DOMContentLoaded', setupArticleSearch);





