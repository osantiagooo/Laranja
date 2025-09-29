// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao");

  if (!botao) return; // Sai se não encontrar o botão

  // Cria modal
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.4)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.opacity = "0";
  modal.style.pointerEvents = "none";
  modal.style.transition = "opacity 0.3s";

  const card = document.createElement("div");
  card.style.background = "#fff";
  card.style.padding = "20px";
  card.style.borderRadius = "12px";
  card.style.textAlign = "center";
  card.style.minWidth = "280px";
  card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";

  const h3 = document.createElement("h3");
  h3.textContent = "🎉 Parabéns 🎉";
  const p = document.createElement("p");
  p.textContent = "Ta impressionada né, toma confete";
  const btnFechar = document.createElement("button");
  btnFechar.textContent = "Fechar";
  btnFechar.style.marginTop = "10px";
  btnFechar.style.padding = "8px 12px";
  btnFechar.style.border = "none";
  btnFechar.style.background = "orange";
  btnFechar.style.color = "#fff";
  btnFechar.style.borderRadius = "8px";
  btnFechar.style.cursor = "pointer";

  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(btnFechar);
  modal.appendChild(card);
  document.body.appendChild(modal);

  // Função abrir modal
  function abrirModal() {
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";
    criarConfetes(30);
  }

  // Função fechar modal
  function fecharModal() {
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    const confs = document.querySelectorAll(".confete");
    confs.forEach(c => c.remove());
  }

  btnFechar.addEventListener("click", fecharModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) fecharModal(); });

  // Confetes
  function criarConfetes(qtd) {
    for (let i = 0; i < qtd; i++) {
      const conf = document.createElement("div");
      conf.className = "confete";
      conf.style.position = "fixed";
      conf.style.width = Math.random() * 10 + 6 + "px";
      conf.style.height = Math.random() * 10 + 6 + "px";
      conf.style.background = ["#FF6B6B","#FFD166","#06D6A0","#4D96FF","#FF8FAB","#FFA500","#C084FC"][Math.floor(Math.random()*7)];
      conf.style.left = Math.random() * window.innerWidth + "px";
      conf.style.top = "-20px";
      conf.style.opacity = Math.random() * 0.7 + 0.3;
      conf.style.borderRadius = "2px";
      conf.style.zIndex = "9999";
      conf.style.pointerEvents = "none";
      conf.style.transition = "transform 3s linear, opacity 3s linear";

      document.body.appendChild(conf);

      setTimeout(() => {
        conf.style.transform = `translateY(${window.innerHeight + 50}px) rotate(${Math.random()*720}deg)`;
        conf.style.opacity = "0";
      }, 10);

      setTimeout(() => conf.remove(), 3100);
    }
  }

  // Botão principal
  botao.addEventListener("click", () => {
    abrirModal();
  });
});

