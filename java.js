document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answers = {
        q1: { correct: 'a', explanation: 'Radioatividade é a emissão de radiações ionizantes de núcleos atômicos.' },
        q2: { correct: 'a', explanation: 'Os principais tipos de radiação são alfa, beta e gama.' },
        q3: { correct: 'b', explanation: 'Marie Curie isolou o elemento rádio durante suas pesquisas sobre radioatividade.' },
        q4: { correct: 'b', explanation: 'A radiação alfa é composta por duas partículas de prótons e nêutrons.' },
        q5: { correct: 'b', explanation: 'A exposição à radiação pode causar náuseas, fadiga e riscos a longo prazo, incluindo câncer.' }
    };

    let score = 0;
    let feedback = '';

    for (let i = 1; i <= 5; i++) {
        const question = `q${i}`;
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);

        if (userAnswer && userAnswer.value === answers[question].correct) {
            score++;
        } else {
            const correctAnswer = answers[question].correct;
            const explanation = answers[question].explanation;
            feedback += `<div class="feedback-card">Pergunta ${i}: Resposta correta é '${correctAnswer}'. ${explanation}</div>`;
        }
    }

    document.getElementById('result').innerText = `Você acertou ${score} de 5 perguntas.`;
    document.getElementById('feedback').innerHTML = feedback;
});