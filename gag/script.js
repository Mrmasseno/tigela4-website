const inputTitulo = document.getElementById('inputTitulo');
const titulo = document.getElementById('titulo');
const inputNome1 = document.getElementById('inputP1');
const apelidopersonagem1 = document.getElementsByClassName('apelidoVermelho');
const inputNome2 = document.getElementById('inputP2');
const apelidopersonagem2 = document.getElementsByClassName('apelidoAzul');
const personagem = document.getElementsByClassName('personagem');
const conteudoTexto = document.getElementById('conteudoTexto');
const nav = document.getElementById('nav');
const side = document.getElementById('side');
const sideTitulo = document.getElementById('sideTitulo');
const sidePersonagens = document.getElementById('sidePersonagens');
const sideSubPalavra = document.getElementById('sideSubPalavra');
const sideLipograma = document.getElementById('sideLipograma');
const textoDesformatado = document.getElementById('textoDesformatado');
const textoOriginal = document.querySelector('p');
const inputLipo = document.getElementById('inputCaracter');
const botaoLipo = document.getElementById('botaoLipograma');
const loadingLipo = document.getElementById('loadingLipo');
const logo = document.getElementById('logo');
const inputPalavra1 = document.getElementById('inputPalavra1');
const inputPalavra2 = document.getElementById('inputPalavra2');
const botaoSubPalavra = document.getElementById('botaoSubPalavra');
const inputPers1 = document.getElementById('inputPers1');
const inputPers2 = document.getElementById('inputPers2');
const selTitulo = document.getElementById('selTitulo');
const selPersonagens = document.getElementById('selPersonagens');
const selSubPalavra = document.getElementById('selSubPalavra');
const selLipograma = document.getElementById('selLipograma');
const copyright = document.getElementById('copyright');
const loading = document.getElementById('loading');
const main = document.querySelector('main');

let stopLipo = new AbortController();
let lipoStopped = false;

let texto1 = textoDesformatado.innerText.replace(/[.,\/#?“”"!;:()]/g, "");
let texto2 = textoOriginal.innerText;
let palavras1 = texto1.replace(/\n/g, " ").split(" ");

setTimeout(function () {
    loading.style.display = "none";
    main.style.visibility = "visible";
}, 6000);

conteudoTexto.addEventListener('click', function () {
    side.style.visibility = "hidden";
    side.style.width = "0";
    conteudoTexto.style.marginRight = "0";
    conteudoTexto.style.padding = "0 20%";
    nav.style.right = "15px";
    titulo.style.fontSize = "8vw";
    logo.style.width = "10vw";
    copyright.style.color = "#191919"
});

inputTitulo.addEventListener('input', function (i) {
    titulo.textContent = i.target.value;
});

let nome1, nome2;
let apelido1, apelido2;

inputNome1.addEventListener('input', function (j) {
    const nomes = j.target.value.split(" ");
    apelido1 = nomes[nomes.length - 1];
    nome1 = j;
    subPersonagem1(nome1, apelido1);
});

inputNome2.addEventListener('input', function (k) {
    const nomes = k.target.value.split(" ");
    apelido2 = nomes[nomes.length - 1];
    nome2 = k;
    subPersonagem2(nome2, apelido2);
});

function subPersonagem1(nome, apelido) {
    let personagem1 = document.getElementsByClassName('nomeVermelho');
    console.log(personagem1);
    for (let i = 0; i < personagem1.length; i++) {
        personagem1[i].textContent = nome.target.value;
    }
    for (let i = 0; i < apelidopersonagem1.length; i++) {
        apelidopersonagem1[i].textContent = apelido;
    }
}

function subPersonagem2(nome, apelido) {
    let personagem2 = document.getElementsByClassName('nomeAzul');
    for (let i = 0; i < personagem2.length; i++) {
        personagem2[i].textContent = nome.target.value;
    }
    for (let i = 0; i < apelidopersonagem2.length; i++) {
        apelidopersonagem2[i].textContent = apelido;
    }
}

inputPers1.addEventListener('input', function (l) {
    let personalidade1 = l.target.value + "P1";
    let dialogoVermelho = document.querySelectorAll('.dialogoVermelho');
    let dialogosP1 = [];
    for (let i = 0; i < dialogoVermelho.length; i++) {
        dialogosP1.push(dialogoVermelho[i].innerHTML);
    }
    console.log(personalidade1);
    let falas1 = document.getElementById(personalidade1).innerHTML.split("\n");
    for (let i = 0; i < dialogosP1.length; i++) {
        textoOriginal.innerHTML = textoOriginal.innerHTML.replace(dialogosP1[i], falas1[i]);
        console.log(dialogosP1[i] + " " + falas1[i]);
    }
    subPersonagem2(nome2, apelido2);
    document.getElementById("textoDesformatado").innerText = document.querySelector('p').innerText;
    console.log(document.getElementById("textoDesformatado").innerText);
});

inputPers2.addEventListener('input', function (m) {
    let personalidade2 = m.target.value + "P2";
    let dialogoAzul = document.querySelectorAll('.dialogoAzul');
    let dialogosP2 = [];
    for (let i = 0; i < dialogoAzul.length; i++) {
        dialogosP2.push(dialogoAzul[i].innerHTML);
    }
    console.log(personalidade2);
    let falas2 = document.getElementById(personalidade2).innerHTML.split("\n");
    console.log(falas2);
    for (let i = 0; i < dialogosP2.length; i++) {
        textoOriginal.innerHTML = textoOriginal.innerHTML.replace(dialogosP2[i], falas2[i]);
        console.log(dialogosP2[i] + " " + falas2[i]);
    }
    subPersonagem1(nome1, apelido1);
    document.getElementById("textoDesformatado").innerText = document.querySelector('p').innerText;
    console.log(document.getElementById("textoDesformatado").innerText);
});

botaoLipo.addEventListener('click', function () {
    texto1 = textoDesformatado.innerText.replace(/[.,\/#?“”"!;:()]/g, "");
    texto2 = textoOriginal.innerText;
    palavras1 = texto1.replace(/\n/g, " ").split(" ");
    if (inputLipo) {
        console.log("pressed");
        let lipo = inputLipo.value;
        if (lipo.length === 1) {
            loadingLipo.style.display = 'block';
            for (let i = 0; i < palavras1.length; i++) {
                if (lipoStopped) {
                    lipoStopped = false;
                    console.log("break");
                    break;
                }
                //   let palavras1[i] = RegExp(palavras1[i], 'gi');
                if (palavras1[i].toUpperCase().includes(lipo.toUpperCase())) {
                    // console.log(palavras1[i].toUpperCase()+" "+lipo.toUpperCase())
                    sinonimo(palavras1[i]).then(function (dados) {
                        //   if (palavras1[i] !== lipo.toLowerCase()) {
                        if (dados[0] === undefined) {
                            //   console.log("undefined " + palavras1[i]);
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + " ", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + " ");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ",", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ",");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ";", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ";");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ":", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ":");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ".", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ".");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "?", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "?");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "!", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "!");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "'", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "'");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + " ", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + " ");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ",", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ",");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ";", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ";");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ":", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ":");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ".", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ".");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "?", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "?");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "!", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "!");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "'", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "'");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + " ", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + " ");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ",", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ",");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ";", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ";");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ":", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ":");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ".", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ".");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "?", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "?");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "!", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "!");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "'", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "'");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + " ", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + " ");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ",", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ",");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ";", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ";");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ":", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ":");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ".", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ".");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "?", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "?");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "!", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "!");
                            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "'", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "'");
                        } else {
                            let idados;
                            for (let j = 0; j < dados.length; j++) {
                                let substituida = false;
                                if (!substituida) {
                                    if (!dados[j].toLowerCase().includes(lipo)) {
                                        substituida = true;
                                        idados = j;
                                    }
                                }
                            }
                            if (idados === undefined) {
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + " ", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + " ");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ",", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ",");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ";", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ";");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ":", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ":");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ".", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ".");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "?", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "?");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "!", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "!");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "'", " " + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "'");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + " ", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + " ");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ",", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ",");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ";", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ";");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ":", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ":");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ".", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ".");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "?", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "?");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "!", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "!");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "'", ">" + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "'");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + " ", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + " ");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ",", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ",");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ";", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ";");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ":", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ":");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ".", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ".");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "?", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "?");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "!", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "!");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "'", '"' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "'");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + " ", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + " ");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ",", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ",");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ";", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ";");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ":", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ":");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ".", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + ".");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "?", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "?");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "!", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "!");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "'", '‘' + palavras1[i].split(lipo.toLowerCase()).join('').split(lipo.toUpperCase()).join('') + "'");
                            } else {
                                //     console.log(idados);
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + " ", " " + dados[idados] + " ");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ",", " " + dados[idados] + ",");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ".", " " + dados[idados] + ".");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ";", " " + dados[idados] + ";");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ":", " " + dados[idados] + ":");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "?", " " + dados[idados] + "?");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "!", " " + dados[idados] + "!");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "'", " " + dados[idados] + "'");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + " ", ">" + dados[idados] + " ");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ",", ">" + dados[idados] + ",");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ".", ">" + dados[idados] + ".");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ";", ">" + dados[idados] + ";");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ":", ">" + dados[idados] + ":");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "?", ">" + dados[idados] + "?");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "!", ">" + dados[idados] + "!");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "'", ">" + dados[idados] + "'");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + " ", '"' + dados[idados] + " ");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ",", '"' + dados[idados] + ",");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ".", '"' + dados[idados] + ".");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ";", '"' + dados[idados] + ";");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ":", '"' + dados[idados] + ":");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "?", '"' + dados[idados] + "?");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "!", '"' + dados[idados] + "!");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "'", '"' + dados[idados] + "'");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + " ", '‘' + dados[idados] + " ");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ",", '‘' + dados[idados] + ",");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ".", '‘' + dados[idados] + ".");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ";", '‘' + dados[idados] + ";");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ":", '‘' + dados[idados] + ":");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "?", '‘' + dados[idados] + "?");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "!", '‘' + dados[idados] + "!");
                                textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "'", '‘' + dados[idados] + "'");
                            }
                        }
                        // }
                    });
                }
            }
            document.getElementById("textoDesformatado").innerText = document.querySelector('p').innerText;
        } else if (lipo.length > 1) {
            alert("Only one character is allowed");
        } else if (lipo.length < 1) {
            alert("Insert a character");
        }
    } else {
        alert("Insert a character");
    }
});


botaoSubPalavra.addEventListener('click', function () {
    texto1 = textoDesformatado.innerText.replace(/[.,\/#?“”"!;:()]/g, "");
    texto2 = textoOriginal.innerText;
    palavras1 = texto1.replace(/\n/g, " ").split(" ");
    let palavraSub1 = inputPalavra1.value;
    let palavraSub2 = inputPalavra2.value;
    let substituida = false;
    for (let i = 0; i < palavras1.length; i++) {
        if (palavras1[i].toUpperCase() === palavraSub1.toUpperCase()) {
            substituida = true;
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + " ", " " + palavraSub2 + " ");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ",", " " + palavraSub2 + ",");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ";", " " + palavraSub2 + ";");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ":", " " + palavraSub2 + ":");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ".", " " + palavraSub2 + ".");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "?", " " + palavraSub2 + "?");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "!", " " + palavraSub2 + "!");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "'", " " + palavraSub2 + "'");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + " ", ">" + palavraSub2 + " ");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ",", ">" + palavraSub2 + ",");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ";", ">" + palavraSub2 + ";");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ":", ">" + palavraSub2 + ":");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ".", ">" + palavraSub2 + ".");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "?", ">" + palavraSub2 + "?");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "!", ">" + palavraSub2 + "!");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "'", ">" + palavraSub2 + "'");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + " ", '"' + palavraSub2 + " ");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ",", '"' + palavraSub2 + ",");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ";", '"' + palavraSub2 + ";");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ":", '"' + palavraSub2 + ":");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ".", '"' + palavraSub2 + ".");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "?", '"' + palavraSub2 + "?");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "!", '"' + palavraSub2 + "!");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "'", '"' + palavraSub2 + "'");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + " ", '‘' + palavraSub2 + " ");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ",", '‘' + palavraSub2 + ",");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ";", '‘' + palavraSub2 + ";");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ":", '‘' + palavraSub2 + ":");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ".", '‘' + palavraSub2 + ".");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "?", '‘' + palavraSub2 + "?");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "!", '‘' + palavraSub2 + "!");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "'", '‘' + palavraSub2 + "'");
            document.getElementById("textoDesformatado").innerText = document.querySelector('p').innerText;
        } else if (palavras1[i].toUpperCase() === (palavraSub1.toUpperCase() + "S")) {
            substituida = true;
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + " ", " " + palavraSub2 + "s ");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ",", " " + palavraSub2 + "s,");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ";", " " + palavraSub2 + "s;");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ":", " " + palavraSub2 + "s:");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + ".", " " + palavraSub2 + "s.");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "?", " " + palavraSub2 + "s?");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "!", " " + palavraSub2 + "s!");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(" " + palavras1[i] + "'", " " + palavraSub2 + "s'");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + " ", ">" + palavraSub2 + "s ");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ",", ">" + palavraSub2 + "s,");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ";", ">" + palavraSub2 + "s;");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ":", ">" + palavraSub2 + "s:");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + ".", ">" + palavraSub2 + "s.");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "?", ">" + palavraSub2 + "s?");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "!", ">" + palavraSub2 + "s!");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace(">" + palavras1[i] + "'", ">" + palavraSub2 + "s'");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + " ", '"' + palavraSub2 + "s ");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ",", '"' + palavraSub2 + "s,");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ";", '"' + palavraSub2 + "s;");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ":", '"' + palavraSub2 + "s:");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + ".", '"' + palavraSub2 + "s.");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "?", '"' + palavraSub2 + "s?");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "!", '"' + palavraSub2 + "s!");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('"' + palavras1[i] + "'", '"' + palavraSub2 + "s'");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + " ", '‘' + palavraSub2 + "s ");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ",", '‘' + palavraSub2 + "s,");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ";", '‘' + palavraSub2 + "s;");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ":", '‘' + palavraSub2 + "s:");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + ".", '‘' + palavraSub2 + "s.");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "?", '‘' + palavraSub2 + "s?");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "!", '‘' + palavraSub2 + "s!");
            textoOriginal.innerHTML = textoOriginal.innerHTML.replace('‘' + palavras1[i] + "'", '‘' + palavraSub2 + "s'");
            document.getElementById("textoDesformatado").innerText = document.querySelector('p').innerText;
        }
    }
    if (!substituida) {
        alert("The word \"" + palavraSub1 + " is not present in this text.");
    }
});

titulo.addEventListener('click', function (a) {
    ecraTitulo();
    a.stopPropagation();
});

selTitulo.addEventListener('click', function () {
    ecraTitulo();
});

selPersonagens.addEventListener('click', function () {
    ecraPersonagens();
});

for (let i = 0; i < personagem.length; i++) {
    personagem[i].addEventListener('click', function (a) {
        ecraPersonagens();
        a.stopPropagation();
    });
}


selSubPalavra.addEventListener('click', function () {
    ecraSubPalavras();
});

selLipograma.addEventListener('click', function () {
    lipoStopped = false;
    ecraLipograma();
});


function ecraTitulo() {
    loadingLipo.style.display = 'none';
    sideTitulo.style.display = 'block';
    sidePersonagens.style.display = 'none';
    sideSubPalavra.style.display = 'none';
    sideLipograma.style.display = 'none';
    side.style.visibility = "visible";
    side.style.width = "28%";
    conteudoTexto.style.marginRight = "28%";
    conteudoTexto.style.padding = "0 14%";
    nav.style.right = "calc(28vw + 15px)";
    titulo.style.fontSize = "6.5vw";
    logo.style.width = "6.5vw";
    copyright.style.color = "white";
    console.log('Fetch abortado');
    stopLipo.abort();
    lipoStopped = true;
    console.log("Titulo")
}

function ecraPersonagens() {
    loadingLipo.style.display = 'none';
    sideTitulo.style.display = 'none';
    sidePersonagens.style.display = 'block';
    sideSubPalavra.style.display = 'none';
    sideLipograma.style.display = 'none';
    side.style.visibility = "visible";
    side.style.width = "28%";
    conteudoTexto.style.marginRight = "28%";
    conteudoTexto.style.padding = "0 14%";
    nav.style.right = "calc(28vw + 15px)";
    titulo.style.fontSize = "6.5vw";
    logo.style.width = "6.5vw";
    copyright.style.color = "white";
    console.log('Fetch abortado');
    stopLipo.abort();
    lipoStopped = true;
    console.log("Personagens")
}

function ecraSubPalavras() {
    loadingLipo.style.display = 'none';
    sideTitulo.style.display = 'none';
    sidePersonagens.style.display = 'none';
    sideSubPalavra.style.display = 'block';
    sideLipograma.style.display = 'none';
    side.style.visibility = "visible";
    side.style.width = "28%";
    conteudoTexto.style.marginRight = "28%";
    conteudoTexto.style.padding = "0 14%";
    nav.style.right = "calc(28vw + 15px)";
    titulo.style.fontSize = "6.5vw";
    logo.style.width = "6.5vw";
    copyright.style.color = "white";
    console.log('Fetch abortado');
    stopLipo.abort();
    lipoStopped = true;
    console.log("Palavras")
}

function ecraLipograma() {
    loadingLipo.style.display = 'none';
    sideTitulo.style.display = 'none';
    sidePersonagens.style.display = 'none';
    sideSubPalavra.style.display = 'none';
    sideLipograma.style.display = 'block';
    side.style.visibility = "visible";
    side.style.width = "28%";
    conteudoTexto.style.marginRight = "28%";
    conteudoTexto.style.padding = "0 14%";
    nav.style.right = "calc(28vw + 15px)";
    titulo.style.fontSize = "6.5vw";
    logo.style.width = "6.5vw";
    copyright.style.color = "white";
    console.log("Lipograma")
}


async function getSynonymsFromWordsAPI(apiKey, palavra, includeHeaders) {
    const url = 'https://wordsapiv1.p.rapidapi.com/words/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey,
        },
    };
    const request = new Request(url + palavra + "/synonyms", options);
    const res = await fetch(request);
    const headers = Object.fromEntries(res.headers);
    if (res.ok) {
        const json = await res.json();
        if (includeHeaders) return {headers, json};
        else return json;
    } else throw new Error('http error in fetch operation');
}

function makeNewAsyncAPICallFunction(apiKey, includeHeaders) {
    return async palavra => await getSynonymsFromWordsAPI(apiKey, palavra, includeHeaders);
}

const key = '';
const sinonimos = makeNewAsyncAPICallFunction(key, true);

async function sinonimo(word) {
    try {
        const {headers, json} = await sinonimos(word);
        return json.synonyms;
    } catch (err) {
        throw err;
    }
}

