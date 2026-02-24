const form = document.getElementById("musicForm");
const player = document.getElementById("player");

// ▶️ tocar música ao selecionar
document.querySelectorAll('input[name="music"]').forEach(radio => {
    radio.addEventListener("change", () => {
        const file = radio.getAttribute("data-file");

        if (file) {
            player.src = file;
            player.style.display = "block";
            player.play();
        }
    });
});

// 🗳️ enviar voto para o Google Forms
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedMusic = document.querySelector('input[name="music"]:checked');

    if (!selectedMusic) {
        alert("Selecione uma música para votar.");
        return;
    }

    // ✅ DADOS DO SEU GOOGLE FORMS
    const formId = "1FAIpQLSc4Usu3m_fLJlBQw9t5mXVYuiPchkKqz38h_LH3kd1hpyej1A";
    const entryId = "entry.1935072396";

    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse?${entryId}=${encodeURIComponent(selectedMusic.value)}`;

    fetch(url, {
        method: "POST",
        mode: "no-cors"
    });

    alert("Voto registrado com sucesso! Obrigado pela participação 😊");
    form.reset();
});