let cores = ['red', 'blue', 'yellow', 'green', 'orange'];
let cor = ['orange', 'green', 'red', 'yellow', 'blue'];
let posicaoX = ['7%', '27%', '47%', '67%', '87%'];
let posicaoY = ['7%', '27%', '47%', '67%', '87%'];

function mostrarBolas(){ 
    for(let i = 1; i < 6; i++){ 
        document.getElementById("b"+i).style.width = "100px";
        document.getElementById("b"+i).style.height = "100px"; 
        document.getElementById("b"+i).style.borderRadius = "50%"; 
        document.getElementById("b"+i).style.background = cores[i-1]; 
        document.getElementById("b"+i).style.position = "absolute"; 
        document.getElementById("b"+i).style.right = posicaoX[i-1]; 
        document.getElementById("b"+i).style.left = posicaoY[i-1]; 
    } 
     
        animacao();
    }

function gerarBolas (){ 
    let text = "";
    for(let i = 1; i < 6; i++){ 
        text += "<div id = \"b"+i+"\"></div>"; 
    } 
    document.getElementById("natal").innerHTML = text; mostrarBolas();
}

let troca = true;
function animacao(){ 
    console.log(troca); 
    if(troca){ 
        for(let i = 1; i < 6; i++){ 
            document.getElementById("b"+i).style.background = cor[i-1]; 
        } 
    }else{ 
        for(let i = 1; i < 6; i++)
        { 
        document.getElementById("b"+i).style.background = cores[i-1]; 
    } 
} 
    troca = !troca; 
    setTimeout(animacao, 800);
}
