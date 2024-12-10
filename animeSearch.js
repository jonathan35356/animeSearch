const apiUrl = "https://api.jikan.moe/v4/anime";

document.getElementById('search-btn').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value;
    const response = await fetch(`${apiUrl}?q=${query}`);
    const data = await response.json();

    const results = document.getElementById('results');
    results.innerHTML = '';

    data.data.forEach(anime => {
        const resultCard = `
            <div class="anime-card">
                <h3>${anime.title}</h3>
                <p>Episodes: ${anime.episodes || 'N/A'}</p>
                <a href="${anime.url}" target="_blank">More Info</a>
            </div>`;
        results.innerHTML += resultCard;
    });
});
