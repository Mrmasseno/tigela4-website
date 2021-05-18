<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Story - The Great Automatic Grammatizator</title>
    <link rel="stylesheet" href="https://use.typekit.net/coo6joj.css">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="icon" type="image/png" href="media/GAG%20Logo%20Small.svg">
</head>
<body>
<div id="loading"></div>
<main>
    <ul id="nav">
        <li><img id="selTitulo" src="media/title.svg" alt="icon title"></li>
        <li><img id="selPersonagens" src="media/characters.svg" alt="icon characters"></li>
        <li><img id="selSubPalavra" src="media/swapwords.svg" alt="icon swap words"></li>
        <li><img id="selLipograma" src="media/lipogram.svg" alt="icon lipogram"></li>
    </ul>
    <div id="conteudoTexto">
        <h1 id="titulo" spellcheck="false">The Great Automatic Grammatizator</h1>
        <p><?php include('texto/textoOriginal.txt'); ?></p>
    </div>
    <div id="side" class="hidden">
        <div id="sideTitulo">
            <h2 class="hidden">Title</h2>
            <textarea name="titulo" id="inputTitulo" spellcheck="false"
                      class="hidden">The Great Automatic Grammatizator</textarea>
        </div>
        <div id="sidePersonagens">
            <h2 class="side">Characters</h2>
            <textarea name="nome1" id="inputP1" spellcheck="false" class="hidden">Adolph Knipe</textarea>
            <label for="inputPers1" class="hidden">Personality:</label>
            <select id="inputPers1" name="personalidadeP1" class="hidden">
                <option value="default">Default</option>
                <option value="shy">Shy</option>
                <option value="sweet">Sweet</option>
                <option value="charming">Charming</option>
                <option value="unpleasant">Unpleasant</option>
                <option value="agressive">Agressive</option>
            </select>
            <textarea name="nome2" id="inputP2" spellcheck="false" class="hidden">John Bohlen</textarea>
            <label for="inputPers2" class="hidden">Personality:</label>
            <select id="inputPers2" name="personalidadeP2" class="hidden">
                <option value="default" class="hidden">Default</option>
                <option value="shy">Shy</option>
                <option value="sweet">Sweet</option>
                <option value="charming">Charming</option>
                <option value="unpleasant">Unpleasant</option>
                <option value="agressive">Agressive</option>
            </select>
        </div>
        <div id="sideSubPalavra">
            <h2>Swap Words</h2>
            <textarea name="palavra1" id="inputPalavra1" spellcheck="false">desk</textarea>
            <h3>becomes</h3>
            <textarea name="palavra2" id="inputPalavra2" spellcheck="false">shoe</textarea>
            <button type="button" id="botaoSubPalavra">Swap</button>
        </div>
        <div id="sideLipograma">
            <h2>Lipogram</h2><br>
            <h3>Delete letter:</h3>
            <input name="caracter" id="inputCaracter" spellcheck="false">
            <br>
            <button type="button" id="botaoLipograma">Delete</button>
            <br>
            <h4 id="loadingLipo">Loading...</h4>
        </div>
    </div>
    <div id="margemBaixo"></div>
    <a href="index.html"><img src="media/GAG%20Logo%20Small.svg" id="logo" alt="logo"></a>
    <div id="versao">great automatic grammatizator stable release v 5.0.0.1.2.</div>
    <div id="copyright">Copyright Bohlen-Knipe 2021. All Rights Reserved.</div>
    <div id="textoDesformatado"><?php include('texto/textoDesformatado.txt'); ?></div>
    <div id="defaultP1" class="dialogosAlter"><?php include('texto/defaultP1.txt'); ?></div>
    <div id="shyP1" class="dialogosAlter"><?php include('texto/shyP1.txt'); ?></div>
    <div id="sweetP1" class="dialogosAlter"><?php include('texto/sweetP1.txt'); ?></div>
    <div id="charmingP1" class="dialogosAlter"><?php include('texto/charmingP1.txt'); ?></div>
    <div id="unpleasantP1" class="dialogosAlter"><?php include('texto/unpleasantP1.txt'); ?></div>
    <div id="agressiveP1" class="dialogosAlter"><?php include('texto/agressiveP1.txt'); ?></div>
    <div id="defaultP2" class="dialogosAlter"><?php include('texto/defaultP2.txt'); ?></div>
    <div id="shyP2" class="dialogosAlter"><?php include('texto/shyP2.txt'); ?></div>
    <div id="sweetP2" class="dialogosAlter"><?php include('texto/sweetP2.txt'); ?></div>
    <div id="charmingP2" class="dialogosAlter"><?php include('texto/charmingP2.txt'); ?></div>
    <div id="unpleasantP2" class="dialogosAlter"><?php include('texto/unpleasantP2.txt'); ?></div>
    <div id="agressiveP2" class="dialogosAlter"><?php include('texto/agressiveP2.txt'); ?></div>
    <script src="script.js"></script>
</main>
</body>
</html>