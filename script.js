document.getElementById('mensagemBtn').addEventListener('click',function() {
    const mensagens = [
        "50% de alguma coisa é melhor do que 100% de nada.",
        "Olha todas as pessoas lá embaixo. Elas seguem as regras, para quê? Elas se deixam guiar pelo medo.",
        "Dinheiro vem e vai, a gente sabe disso. O que realmente importa na vida são as pessoas que estão com a gente aqui… Aqui e agora.",
        "A vida é feita de escolhas. Você pode escolher viver a vida que você quer viver.",
        "A vida é simples... é tomar decisões e não se arrepender!",
        "Só sei que nada sei, e o fato de saber isso, me coloca em vantagem sobre aqueles que acham que sabem alguma coisa."
    ];

    const mensagemAleatoria = mensagens[Math.flooe(Math.random() * mensagens.length)];
    document.getElementById('mensagem').textContent = mensagemAleatoria;
})