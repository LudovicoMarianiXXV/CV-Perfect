document.addEventListener('DOMContentLoaded', function() {
    // Salva dati nel localStorage
    const formFields = document.querySelectorAll('input, textarea');
    
    formFields.forEach(field => {
        field.addEventListener('input', () => {
            localStorage.setItem(field.id, field.value);
        });
        
        // Ripristina valori salvati
        if(localStorage.getItem(field.id)) {
            field.value = localStorage.getItem(field.id);
        }
    });
    
    // Genera anteprima
    document.getElementById('generate-btn').addEventListener('click', generatePreview);
});

function generatePreview() {
    // Raccolta dati e redirect a preview.html
    const formData = {
        fullname: document.getElementById('fullname').value,
        // altri campi...
    };
    
    sessionStorage.setItem('cvData', JSON.stringify(formData));
    window.location.href = 'preview.html';
}