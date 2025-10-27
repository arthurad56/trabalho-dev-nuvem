const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
})

//rota do cadastro de cidades
app.get("/cidades", function(req,res){
    res.send("<h1>Lista de cidades!</h1>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})


//rota com parametro opcional
app.get("/cadastro/{:nome}", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>cidade " + nome + " criada!</h1>");
    }else{
        res.send("cidade criada!");
    }
    
})


app.listen(process.env.PORT ?? PORT,function(erro){  // cria a aplicaÃ§Ã£o na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log(`Servidor Iniciado. http://localhost:${PORT}`);
    }
})
