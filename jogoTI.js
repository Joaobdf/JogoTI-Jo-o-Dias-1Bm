let vida = 100
let inventario = []
let fisico = 10
let experiencia = 10
let diasateacompetição1 = 7
let velocidade = 65
let ritmo = 65
let carisma = 40
let determinacao = 40
let medalha = []
 
 
alert("Jogo feito por:JDProductions...")
 
alert("Bem vindo a história de Eyeru Gebru!")
let perguntainicial = prompt("(Deseja iniciar o jogo?S para sim,N para não.)")
 if(perguntainicial == "S"){
    alert("Eyeru Gebru nasceu na Etiópia,desde cedo sempre amou andar de bicicleta por diversos tipos de trilha e terrenos...")
    alert("Hoje em dia,com 23 anos.Ela já competiu diversas vezes e agora se prepara para o 'Contrarrelógio por equipes (Team time trial)',competição cujo já participou e foi ao pódio...")
    alert("A corrida é em uma semana.Então ela precisa terminar seus treinos...")
    alert("Você vai poder ir a área de treino todos os dias com seus colegas...")
while(diasateacompetição1 != 0){
alert("Dias para a competição:"+ diasateacompetição1)
alert("Sua vida é:" + vida)
alert("Seu físico é:" + fisico)
alert("Sua expêriecia é igual a:" + experiencia)
let escolha2 = prompt("Treinar ou descansar?(Ao treinar você ganha mais 10 de fisico mas perde 10 de vida por cansaço.Ao descansar você recupera 5 de vida.Ao treinar muito você pode ficar abaixo da vida necessária para competir.Por não estar descansada.")
if(escolha2 == "treinar" || escolha2 == "Treinar"){
   alert("Você se reuniu com sua equipe e  treinou com a bicicleta e com exercícios.")
   vida =(vida - 10)
   fisico =(fisico + 10)
   diasateacompetição1 =(diasateacompetição1 - 1)
}
else if(escolha2 == "descansar" || escolha2 == "Descansar"){
   alert("Você descansou com massagens para os músculos e sonos.")
   vida =(vida + 5)
   diasateacompetição1 =(diasateacompetição1 - 1)
}
}
   alert("O dia do Team Time Trial chegou...");
   alert("Sua vida é: " + vida);
   alert("Seu físico é: " + fisico);
 
   if (vida < 60 && fisico > 60) {
       alert("Você foi desqualificado por conta de cansaço. (vida menor que 60)");
       alert("Fim de jogo.");
}
if(vida > 60 & fisico < 60){
   alert("Você foi desqualificado por não ter passado no teste físico.(físico menor que 60)")
   alert("Fim de jogo.");
}
if(vida >= 60 & fisico >= 60){
alert("Parabéns.Você está totalmente preparado para competir no Team Time Trial...")
alert("A corrida começa em 1 hora.")
alert("Antes da corrida começar  você e alguns colegas de equipe foram abordadas por uma repórter de um jornal local.Ela está interessada sobre a corrida...")
   let entrevista = Number(prompt("Ela te pergunta como vocês planejam ganhar a corrida que chega ai? \n 1-Digite 1 para uma resposta modesta. \n 2-Digite 2 para uma resposta polêmica."))
   if (entrevista == 1){
   alert("Você diz:'Somos uma equipe muito competente e unida.Nosso trabalho coletivo vai nos levar ao pódio.")  
   carisma =(carisma + 10)
   alert("As pessoas gostaram da sua resposta,fazendo você ganhar +10 de carisma.")
   alert("Carisma atual:" + carisma)
   }
   if (entrevista == 2){
   alert("Você diz:'Somos as melhores,é lógica.Vamos ganhar.'")
   alert("As pessoas acham sua resposta meio egocentrica,mas admiram sua determinação.+10 Determinação.")
   determinacao =(determinacao +10)
   alert("Determinação atual:" + determinacao)
   }
alert("Após a entrevista você segue seu caminho para se preparar para a corrida...")
alert("Você se encontra com sua equipe no vestiário,cumprimenta a todos e se preparam para a corrida..")
while(true){
velocidade =(velocidade = 65)
ritmo =(ritmo = 65)
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)
let escolhaequipe = prompt("Você prefere uma abordagem de equipe mais coletiva ou com mais líderança?(coletiva = mais ritmo porém menos velocidade,liderança= mais velocidade porém menos ritmo")
if(escolhaequipe == "coletiva"){
velocidade =(velocidade - 10)
ritmo =(ritmo + 10)
alert("A corrida esta prestes a começar..")
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)
}
if(escolhaequipe == "liderança"){
velocidade =(velocidade + 10)
ritmo =(ritmo - 10)
alert("A corrida esta prestes a começar..")
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)
}
alert("A corrida começa e todos estão pedalando...")
let escolhacorrida1 = prompt("Uma curva!Acelerar ou manobrar com mais calma?")
if(escolhacorrida1 == "acelerar"){
velocidade =(velocidade + 10)
ritmo =(ritmo - 5)
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)
alert("Você ultrapassou uma equipe,mas seu ritmo foi prejudicado...")
}
if(escolhacorrida1 == "manobrar"){
velocidade =(velocidade - 5)
ritmo =(ritmo + 10)
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)
alert("Você e sua equipe manobraram com mais calma e precisão.Podem ter perdido velocidade porém o ritmo é aumentado...")
}
alert("Após a curva,há uma oportunidade de acelerar e ultrapassar a equipe na sua frente..")
let escolhacorrida2 = prompt("Acelerar?(sim/não)")
if(escolhacorrida2 == "sim" & ritmo < 70){
alert("Você escolhe acelerar...Acelera mas por conta do ritmo baixo,perde velocidade por estarem atrapalhados..")
velocidade =(velocidade - 5)
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)
}
if(escolhacorrida2 == "sim" & ritmo >= 70){
alert("Você escolhe acelerar...Acelera e ultrapassa a equipe na frente com sucesso!")
velocidade =(velocidade + 5)
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)}
if(escolhacorrida2 == "nao"){
ritmo =(ritmo + 5)
alert("Você permanece na mesma posição mas ganha mais ritmo..")
velocidade =(velocidade - 5)
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)
}
alert("Agora,em meio a ultima volta,você tem uma escolha.Um movimento arriscado mas que pode selar o destino da corrida..")
alert("Você pode arriscar passar pelo meio de duas equipes..Ou continuar como está e tentar se garantir no final...")
let escolhacorrida3 = prompt("Arriscar?(S/N)")
if(escolhacorrida3 == "S" & ritmo >=70 & velocidade >=65 || escolhacorrida3 == "S" & ritmo >=65 & velocidade >=70 ){
alert("Você faz o movimento arriscado e....")
alert("Sucesso!Você ganha ainda mais vantagem de status!!")
velocidade =(velocidade + 5)
ritmo =(ritmo + 5)
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)
}
if(escolhacorrida3 == "S" & ritmo <70 & velocidade < 65 || escolhacorrida3 == "S" & ritmo < 65 & velocidade < 70 ){
 alert("Você faz o movimento arriscado e....")
alert("Você falha na tentativa...Oque prejudica seu status...")
velocidade =(velocidade - 5)
ritmo =(ritmo - 5)
alert("Velocidade:" + velocidade )
alert("Ritmo:" + ritmo)
}
alert("Agora a corrida está na reta final..Você ultrapassa a linha de chegada com sua equipe..")
if(velocidade >= 70 & ritmo >= 70){
alert("Medalha de ouro🥇!!!")
experiencia =(experiencia + 20)
alert("Você ganhou +20 de experiencia!Experiencia atual:" + experiencia)
inventario.push("Glória de campeão e Fama")
alert("Inventário:" + inventario)
medalha.push("Medalha de ouro🥇")
alert("Medalhas:" + medalha)
alert("Vocês são parabenizados por todos gloriosamente,oque aumenta sua determinação.")
alert("Determinação + 10")
alert("Determinação atual:" + determinacao)
break;
}
if(velocidade >= 70 & ritmo <7 & velocidade){
alert("Medalha de prata🥈!!")
experiencia =(experiencia + 15)
alert("Você ganhou +15 de experiencia!Experiencia atual:" + experiencia)
medalha.push("Medalha de prata🥈")
alert("Medalhas:" + medalha)
alert("Vocês são parabenizados por todos,oque aumenta sua determinação.")
alert("Determinação + 5")
alert("Determinação atual:" + determinacao)
break;
}
if(velocidade < 70 & ritmo >= 70 & velocidade >= 65 & ritmo >= 65){
alert("Medalha de prata🥈!!")
experiencia =(experiencia + 15)
alert("Você ganhou +15 de experiencia!Experiencia atual:" + experiencia)
medalha.push("Meadalha de prata🥈")
alert("Medalhas:" + medalha)
alert("Vocês são parabenizados por todos,oque aumenta sua determinação.")
alert("Determinação + 5")
alert("Determinação atual:" + determinacao)
break;
}
if(velocidade < 70 & velocidade >= 50 & ritmo < 70 & ritmo >= 50){
alert("Medalha de bronze...(Falhou no objetivo)")
alert("Game over...Voltando ao checkpoint...")
alert("...")
alert("...")
continue;
 
}
else{
alert("Você não chegou ao pódio...(Falhou no objetivo)")
alert("Game over...Voltando ao checkpoint...")
alert("...")
alert("...")
continue;
}
}
alert("Após a corrida...")
alert("Você é chamado pela mesma repórter de antes da corrida...")
alert("Ela diz:'Parabéns pela conquista da " + medalha + "!!'.")
alert("'Oque tem a dizer após esse fim de corrida?'")
let entrevista2 = Number(prompt("Como você vai responder? \n 1-Digite 1 para uma resposta modesta. \n 2-Digite 2 para uma resposta polêmica."))
   if (entrevista2 == 1){
   alert("Você diz 'Nosso trabalho em equipe foi a peça chave.Agradeço a todos pela confiança e fico feliz em conquistar isso junto deles.'")  
   carisma =(carisma + 10)
   alert("As pessoas gostaram da sua resposta,fazendo você ganhar +10 de carisma.")
   alert("Carisma atual:" + carisma)
   }
   if (entrevista2 == 2){
   alert("Você diz:'Nunca foi uma dúvida que poderiamos fazer isso.Os melhores pertencem ao pódio.'")
   alert("As pessoas acham sua resposta meio egocentrica,mas admiram sua determinação.+10 Determinação.")
   determinacao =(determinacao +10)
   alert("Determinação atual:" + determinacao)
   }
alert("Você vive muito feliz após a sua conquista.As pessoas na Etiópia começam a te admirar ainda mais e reconhecer como atleta vitoriosa")
alert("2 anos se passam...Agora as coisas no país infelizmente estão diferentes...")
alert("A guerra civil no país que teve inicio em 3 de novembro de 2020,agora está chegando a um novo patamar no norte do país em 2021..")
alert("O país está em conflito,pessoas estão morrendo..Todos estão em constante medo..")
alert("Devido a toda a tensão você decide que a melhor decisão a se fazer é sair de seu país...")
alert("Hoje é o dia da viagem,e com certeza vai ser um dia bem turbulento.")
alert("A primeira coisa a fazer agora é pegar suas coisas e ir para o aeoroporto... ")
vida =(vida = 100)
let escolhataxi = prompt("Você chama um táxi para ir até o aeoroporto.Na hora que ele te pergunta sobre o dinheiro,ele insiste em físico,você percebe que não tem dinheiro na carteira.\n1-1 para tentar uma carona de graça. \n2-2 para desistir e começar o caminho a pé.")
if (escolhataxi == 1 & carisma >= 60){
alert("O motorista aceita a sua proposta por conta de seu carisma.")
alert("Você entra no carro e ele começa a dirigir até o aeroporto.")
}
if (escolhataxi == 1 & carisma < 60){
alert("O motorista rejeita sua proposta por conta de seu baixo carisma e dirige para longe.")
alert("Agora você vai ter que seguir um caminho a pé até o aeroporto....")
alert("No meio do caminho você se depara com uma multidão de pessoas.")
alert("Você é abordado por uma pessoa que parece desesperada....")
alert("Ela quer roubar a sua mala!")
let escolhabriga = prompt("Lutar por sua mala?(S/N)")
if (escolhabriga == "S"){
alert("Você consegue se livrar do ladrão com empurrões.Você continua seu caminho mas isso diminui seu carisma.")
carisma =(carisma - 5)
alert("Carisma atual:" + carisma)
alert("Você continua seu caminho para o aeroporto.")
}
if (escolhabriga == "N"){
   alert("Você sofre um ataque do ladrão mas consegue fugir para continuar seu caminho.Você perde 5 de vida no processo.")
   vida =(vida - 5)
   alert("Vida atual:" + vida)
   alert("Você continua seu caminho para o aeroporto.")
   }
}
if (escolhataxi == 2){
   alert("Agora você vai ter que seguir um caminho a pé até o aeroporto....")
   alert("No meio do caminho você se depara com uma multidão de pessoas.")
   alert("Você é abordado por uma pessoa que parece desesperada....")
   alert("Ela quer roubar a sua mala!")
   let escolhabriga = prompt("Lutar por sua mala?(S/N)")
   if (escolhabriga == "S"){
   alert("Você consegue se livrar do ladrão com empurrões.Você continua seu caminho mas isso diminui seu carisma.")
   carisma =(carisma - 5)
   alert("Carisma atual:" + carisma)
   alert("Você continua seu caminho para o aeroporto.")
   }
if (escolhabriga == "N"){
 alert("Você sofre um ataque do ladrão mas consegue fugir para continuar seu caminho.Você perde 5 de vida no processo.")
vida =(vida - 5)
alert("Vida atual:" + vida)
 alert("Você continua seu caminho para o aeroporto.")
 }
}
alert("Agora no aeroporto você faz todas as coisas necessárias e esta a espera de seu voo.")
alert("Após a espera você vai e entra no avião.")
alert("Suas preocupações são aliviadas e está prepara para uma nova vida na França..")
alert("...Agora,se passaram 3 anos desde que você saiu da Etiópia.")
alert("Sua vida na França tem andando bem.Você recebeu apoio por ser uma atleta e teve aulas de francês...")
alert("Agora as olimpíadas de 2024 chegou.")
alert("Você está qualificada para competir representando o time dos refugiados por conta de seu histórico como atleta.")
let escolhafinal = prompt("Você deseja ir as Olimpíadas de Paris 2024?(S/N)")
if (escolhafinal == "S"){
alert("Agora você irá enfrentar novos desafios representando o time dos refugiados nas olimpíadas!")
alert("Boa sorte!!!")
alert("...")
}
if (escolhafinal == "N"){
alert("Você decide não ir as olimpíadas para manter uma vida casual e tranquila...")
alert("...")
}
}
alert("Fim.")
alert("Muito obrigado por jogar o jogo!")
}
else if(perguntainicial == "N"){
   alert("Obrigado por jogar!");
 }