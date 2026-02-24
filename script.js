// ===============================
// ANIMAÇÃO DAS BARRAS DE PROGRESSO
// ===============================

window.addEventListener("load", () => {

    const porcentagens = {
        html: "90%",
        css: "85%",
        js: "75%"
    };

    document.querySelectorAll(".progresso").forEach(barra => {
        Object.keys(porcentagens).forEach(classe => {
            if (barra.classList.contains(classe)) {
                barra.style.width = porcentagens[classe];
            }
        });
    });

});


// ===============================
// ANIMAÇÃO AO APARECER NA TELA
// ===============================

const elements = document.querySelectorAll(
    ".skill-card, .titulo-secao, .sobre-texto, .card"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});