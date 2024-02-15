function contar(callback) {
    const inicio = document.querySelector("#inicio");
    const passo = document.querySelector("#passo");
    const fim = document.querySelector("#fim");
    const res = document.querySelector("div#res");
    res.textContent = " ";
    if (Number(inicio.value) == 0 || Number(passo.value == 0) || Number(fim.value) == 0) {
        alert("Error!!!");
    } else {
        res.style.margin = "25px auto";
        res.style.fontSize = "18px";
        const i = Number(inicio.value);
        const p = Number(passo.value);
        const f = Number(fim.value);
        res.textContent += `Contando... `;
        if (i < f) {
            for (let s = i; s <= f; s += p) {
                res.textContent += `${s} \u{1F449}`;
            }
        } else if (i > f) {
            for (let s = i; s >= f; s -= p) {
                res.textContent += `${s} \u{1F448}`;
            }
        }
    }
    res.textContent += ` \u{1F3C1}`;
    inicio.value = " ";
    passo.value = " ";
    fim.value = " ";
    inicio.focus();
}