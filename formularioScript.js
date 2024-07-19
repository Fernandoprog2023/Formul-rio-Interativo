function direcionar( ){
    let resposta = document.getElementById("resp").value;
    let elemento = document.getElementById("questionario");
    if (resposta =="") {
         alert("A resposta está em branco, favor inserir a sua resposta");    
    }
    else if (resposta == "Desenvolvedor") {
       elemento.innerHTML="Na DNC temos cursos para Desenvolvedores vários segmentos. Como Front-End, Back-End ou FullStack. Escolha sua opcão??<br><br>";       
    } 
    else if (resposta == "Front-End") {
        elemento.innerHTML="No Front-End, veremos o HTML, CSS, JavaScript e o PHP. Para voltar a pergunta inicial responda Voltar<br><br>";       
    }
    else if (resposta == "Back-End") {
        elemento.innerHTML="No Back-End, veremos JavaScript, PHP, FrameWorks e tecnologias, como Django, Sprong, Ruby on Rais, Node.js e Bancos de Dados SQL ou NoSQL. Para voltar a pergunta inicial responda Voltar<br><br>";       
    }
    else if (resposta == "FullStack") {
        elemento.innerHTML="No FullSack veremos todas as linguagens e FrameWorks do Front-End e Back-End. Para voltar a pergunta inicial responda Voltar<br><br>";       
    }
    else if (resposta == "Cientista de Dados") {
        elemento.innerHTML="O Cientista de Dados apreenderá cáculos matemático e estátisca, as linguagens R, Julia, Scala, C++, Pyntho. Para voltar a pergunta inicial responda Voltar<br><br>";       
    }
    else if (resposta == "Voltar") {
        elemento.innerHTML="Aqui na DNC temos cursos na área da Tecnologia da Informação que tem tudo ver com seu perfil. Qual seria a sua preferência. Desenvolvedor ou Cientista de Dados ??<br><br>";       
     }
    else {
        alert("Resposta Invalida. Favor de inserir a resposta correta!");
    }
}