const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000

//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Isto aqui é uma Rota */
app.get('/', (req, res) => {
  //console.log(req);  
  if ( nome == "Ramon") {
    res.statusCode = 200;
  // 200, 201, 404, 401, 500   
    res.json({
        mensagem: "Rota principal da API"
    });
  }
  else {
    res.statusCode = 401;
    res.json({
        mensagem: "Você não está autorizado"
    });
  }
})

app.get('/usuario/:id', (req,res) => {
    let id = req.params.id;
    //console.log(id);    
    let usuario = {
        nome: id,
        idade: 18,
        dtCadastro: '2019-03-04'
    }
    res.statusCode = 200;
    res.json(usuario);
})

// https://localhost:3000/noticia?id=4&token=50&cidade=Belo-horizonte&idMin=18&idMax=25&idade=18-25

app.get('/noticia', (req,res) => {    
    let autor = req.param('autor');
    let data = req.param('data');
    let titulo = req.param('titulo');
   /* let mesa;
    if (mesa)*/

    if (autor && data && titulo) {
        res.statusCode = 200
        res.json({
            autor: autor,
            data: data,
            titulo: titulo,
            mensagem: "Você criou uma notícia para " + autor + " no dia " + data + " com o titulo " + titulo
        })
    }
    else {
        res.statusCode = 200
        res.json({
            mensagem: "Faltam parâmetros"
        })
    }
})

app.post('/usuario', (req,res) => { 
    //console.log(req.params);
    let body = req.body;
    let status;
    let mensagem;

    let nome = body.nome
    let idade = body.idade 
    let altura = body.altura
    
    if ( idade > 18 ) {
        status = 200;
        mensagem = "Inserido com Sucesso";        
    }
    else {
        status = 200;
        mensagem = "Não é possível inserir pois é menor de idade";
    }             
    res.statusCode = status;
    res.json({mensagem: mensagem})            
});

app.get('/usuarios', (req,res) => {
    res.statusCode = 200;

    let numeros = [1,2,3,4,5];
    let nomes = ['Joao','Jose','Maria'];

    let usuarios = [
        {
            usuario: 'cleber',
            idade: 20,
            dtCadastro: '2019-05-20'
        },
        {
            usuario: 'maria',
            idade: 20,
            dtCadastro: '2019-05-20'
        }
    ];

    res.json(usuarios);
    /* FARIA UM processamento */    
    //res.json(usuarios);        
})

// www.google.com
// www.globoesporte.com
// www.globoesporte.com/cruzeiro

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})