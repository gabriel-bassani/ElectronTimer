const fs = require('fs');
const jsonfile = require('jsonfile-promised')
module.exports = {
    salvaDados(curso, tempoEstudado){
        let arquivoDoCurso = `${__dirname}/data/${curso}_data.json`;
        if(fs.existsSync(arquivoDoCurso)){
            this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
        }
        else{
            this.CriaArquivo(arquivoDoCurso, {})
                .then(() => {
                    this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
                })
        }
    },
    adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado){
        let dados = {
            ultimoEstudo: new Date().toString(),
            tempo: tempoEstudado
        }
        jsonfile.writeFile(arquivoDoCurso, dados)
            .then(() => {
                console.log('Tempo salvo com sucesso');
            })
            .catch((err) => {
                console.log(err);
            })
    },
    CriaArquivo(nomeArquivo, conteudoArquivo){
        return jsonfile.writeFile(nomeArquivo, conteudoArquivo)
            .then(() => {
                console.log('Arquivo criado')
            })
            .catch((err) => {
                console.log(err);
            });
    },
    pegaDadosCurso(curso){
        arquivoDoCurso = `${__dirname}/data/${curso}_data.json`;
        //console.log(arquivoDoCurso);
        return jsonfile.readFile(arquivoDoCurso);
    },
    // data.js

// restante do código omitido

    pegaNomeDosCursos() {
        let arquivos = fs.readdirSync(__dirname + '/data/');
        let cursos = arquivos.map((arquivo) => {
            return arquivo.substr(0, arquivo.lastIndexOf('_'));
        });

        return cursos;
    }
}