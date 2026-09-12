const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loadingState = document.getElementById('loading-state');
const errorState = document.getElementById('error-state');
const emptyState = document.getElementById('empty-state');
const resultsList = document.getElementById('results-list');

function hideAllStates() {
    loadingState.classList.add('hidden');
    errorState.classList.add('hidden');
    emptyState.classList.add('hidden');
    resultsList.classList.add('hidden');
}

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = searchInput.value;
    hideAllStates();
    loadingState.classList.remove('hidden');
    resultsList.innerHTML = '';

    fetch('https://api.github.com/search/repositories?q=' + query)
        .then(function (response) {
            if (!response.ok)
                throw new Error('Error');
            return response.json();
        })
        .then(function (data) {
            hideAllStates();
            if (data.items.length === 0) {
                emptyState.classList.remove('hidden');
            }
            else {
                resultsList.classList.remove('hidden');
                data.items.forEach(function (repo) {
                    const li = document.createElement('li');
                    li.textContent = repo.name;
                    resultsList.appendChild(li);
                })
            }
        })

        .catch(function (error) {
            hideAllStates();
            errorState.classList.remove('hidden');
        })
})