const arrayReceitas = [
    {
      titulo: "Arroz de couve",
      img: "img/arrozCouve.jpg",
      ingrediente1: "Arroz",
      ingrediente2: "Couve-Flor",
      ingrediente3: "Cebola Média",
      ingrediente4: "Azeite",
      ingrediente5: "",
      modoPreparo:
        "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe bem a panela e deixe cozinhar.",
    },
    {
      titulo: "Bolo de Café",
      img: "img/bolo_cafe.jpg",
      ingrediente1: "Farinha de trigo",
      ingrediente2: "Açúcar",
      ingrediente3: "Chocolate em pó",
      ingrediente4: "Ovos",
      ingrediente4: "Café coado",
      modoPreparo:
        " Bata o açúcar, a gema e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
    },
    {
      titulo: "Coxinha de Brigadeiro",
      img: "img/coxinhaBrigadeiro.jpg",
      ingrediente1: "Leite condensado",
      ingrediente2: "Chocolate em pó",
      ingrediente3: "Manteiga",
      ingrediente4: "Morango",
      ingrediente5: "Chocolate granulado",
      modoPreparo:
        "Junte o leite condensado, o chocolate em pó e a manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
    },
  ];
  
  const divReceitas = document.getElementById("divReceitas"); // Obtém a referência da div no HTML
  
  const receitasHTML = arrayReceitas.map((receita) => {
    // Gera o HTML para cada receita
    return `
      <div class="livro card col text-center">
        <h2>${receita.titulo}</h2>
        <div class="frente">
            <img class="imagemCard" src="${receita.img}" />
          </div>
          <div>
          <li>${receita.ingrediente1}</li>
          <li>${receita.ingrediente2}</li>
          <li>${receita.ingrediente3}</li>
          <li>${receita.ingrediente4}</li>
          <li>${receita.ingrediente5}</li> 
          <hr />
          <p>
            ${receita.modoPreparo}
          </p>
        </div>
      </div>
    `;
  });
  
  divReceitas.innerHTML = receitasHTML.join(""); // Insere o HTML gerado na div
  