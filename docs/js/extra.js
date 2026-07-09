document.addEventListener('DOMContentLoaded', function() {
    // Change "Search" to "Pesquisar"
    var searchElements = document.querySelectorAll('a[data-target="#mkdocs_search_modal"]');
    searchElements.forEach(function(el) {
        if (el.innerHTML.includes('Search')) {
            el.innerHTML = el.innerHTML.replace('Search', 'Pesquisar');
        }
    });
    
    // Change "Next" to "Próximo"
    var nextElements = document.querySelectorAll('a[rel="next"]');
    nextElements.forEach(function(el) {
        if (el.innerHTML.includes('Next')) {
            el.innerHTML = el.innerHTML.replace('Next', 'Próximo');
        }
    });
    
    // Change "Previous" to "Anterior"
    var prevElements = document.querySelectorAll('a[rel="prev"]');
    prevElements.forEach(function(el) {
        if (el.innerHTML.includes('Previous')) {
            el.innerHTML = el.innerHTML.replace('Previous', 'Anterior');
        }
    });
});