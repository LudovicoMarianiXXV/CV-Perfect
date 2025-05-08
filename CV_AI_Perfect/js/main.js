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
// Esempio: Pulsante di caricamento
document.getElementById('generate-btn').addEventListener('click', function() {
  this.classList.add('btn-loading');
  this.textContent = 'Generazione in corso';
  
  setTimeout(() => {
    this.classList.remove('btn-loading');
    this.textContent = 'Genera CV';
  }, 2000);
});