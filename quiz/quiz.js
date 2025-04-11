document.addEventListener("DOMContentLoaded", () => {
    const botaoEnviar = document.querySelector("button[type='submit']");
  
    botaoEnviar.addEventListener("click", function (event) {
      event.preventDefault();
  
      let pontuacao = 0;
  
      // Pergunta 1: múltipla escolha
      const respostaP1 = document.querySelector("input[name='pergunta1']:checked");
      if (respostaP1 && respostaP1.nextElementSibling.textContent.trim() === "HTML") {
        pontuacao++;
      }
  
      // Pergunta 2: dissertativa com acento e variações
      const respostaP2 = document.getElementById("p2").value
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
  
      if (respostaP2 === "dominio") {
        pontuacao++;
      }
  
      // Pergunta 3: senha forte (exemplo simples: mínimo 8 caracteres, letras e números)
      const respostaP3 = document.getElementById("p3").value;
      const senhaForte = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#\$%\^\&*\)\(+=._-]{8,}$/;
      if (senhaForte.test(respostaP3)) {
        pontuacao++;
      }
  
      // Pergunta 4: data
      const respostaP4 = document.getElementById("p4").value;
      const ano = new Date(respostaP4).getFullYear();
      if (ano === 1991) {
        pontuacao++;
      }
  
      // Pergunta 5: múltipla seleção (JavaScript e Java são linguagens)
      const linguagens = ["JavaScript", "Java"];
      const selecionadas = Array.from(document.querySelectorAll("input[name='pergunta5']:checked"))
        .map((el) => el.value);
  
      const corretas = linguagens.every((lang) => selecionadas.includes(lang)) &&
                       selecionadas.length === linguagens.length;
  
      if (corretas) {
        pontuacao++;
      }
  
      // Pergunta 6: arquivo (extensão .html)
      const arquivo = document.getElementById("p6").files[0];
      if (arquivo && arquivo.name.endsWith(".html")) {
        pontuacao++;
      }
  
      // Pergunta 7: menu suspenso
      const respostaP7 = document.getElementById("p7").value;
      if (respostaP7 === "type") {
        pontuacao++;
      }
  
      // Pergunta 8: texto com tolerância (ex: "Java")
      const respostaP8 = document.getElementById("p8").value
        .trim()
        .toLowerCase();
  
      if (respostaP8 === "java") {
        pontuacao++;
      }
  
      // Mostrar pontuação ao lado do botão
      mostrarPontuacao(pontuacao);
    });
  
    function mostrarPontuacao(pontos) {
      let resultado = document.getElementById("resultado");
      if (!resultado) {
        resultado = document.createElement("p");
        resultado.id = "resultado";
        resultado.style.fontWeight = "bold";
        resultado.style.marginTop = "10px";
        document.querySelector("form button[type='submit']").after(resultado);
      }
  
      resultado.textContent = `Sua pontuação: ${pontos}/8`;
    }
  });
  