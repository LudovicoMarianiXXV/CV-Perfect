function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const cvData = JSON.parse(sessionStorage.getItem('cvData'));

    // Watermark per utenti free
    if(localStorage.getItem('userTier') === 'free') {
        doc.setFontSize(40);
        doc.setTextColor(200, 200, 200);
        doc.text('UPGRADE TO PREMIUM', 105, 140, {angle: 45});
    }

    // Contenuto CV
    doc.setFontSize(22);
    doc.text(cvData.fullname, 105, 20, {align: 'center'});
    
    doc.save('cv-generato.pdf');
}

document.getElementById('download-pdf').addEventListener('click', generatePDF);