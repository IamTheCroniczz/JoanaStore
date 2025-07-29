// Validação do formulário
(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Parte II - Carregar produtos da API
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(produtos => {
        const container = document.getElementById('produtos');
        produtos.forEach(prod => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = `
                <div class="card h-100">
                    <img src="${prod.image}" class="card-img-top" alt="${prod.title}">
                    <div class="card-body">
                        <h5 class="card-title">${prod.title}</h5>
                        <p class="card-text">${prod.description.substring(0, 100)}...</p>
                    </div>
                    <div class="card-footer">
                        <strong>R$ ${prod.price.toFixed(2)}</strong>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });
    });
