const fs = require("fs");

let data = {
    books: [
        {
            name: 'Antígona',
            author: 'Sófocles',
            subject: 'Mitologia',
            resume: 'Escrita há aproximadamente 2.500 anos, a história de Antígona é um dos maiores clássicos da tragédia grega. Filha de Édipo e Jocasta, ela luta sozinha contra um rei tirânico, seu próprio tio, para garantir um funeral digno a um de seus irmãos, considerado um traidor. Firme em suas convicções, acaba se tornando vítima e símbolo dos abusos gerados pelo excesso de poder. Ao longo dos século, o drama da jovem princesa ganhou releituras nos mais diversos gêneros, meios de comunicação e idiomas. Esta edição é uma adaptação feita por dois dos autores de destaque na Literatura Infanto-Juvenil.',
            source: 'Amazon',
            publishDate: '1 de janeiro de 2006',
            fileName: 'Antigona',
            id: "antigona",
            quantity: 10,
        },
        {
            name: 'Apologia de Sócrates',
            author: 'Platão',
            subject: 'Filosofia',
            resume: 'A Apologia de Sócrates de Platão é o registro de uma das defesas mais famosas e polêmicas da história do Direito e da Justiça ocidentais. Paralelamente, trata-se de uma pequena obra-prima literária de um dos assistentes dessa defesa: Platão, um dos discípulos de Sócrates. O filósofo, que perpetuou conceitos como " conheça-te a ti mesmo " e " só sei que nada sei " foi condenado e passou dias na clausura, filosofando sobre a imortalidade da alma, antes de sua execução. Sócrates inicia seu discurso advertindo os juízes de que pronunciará exclusivamente a verdade. Assinada pelo jovem Meleto, Anito e Lícon, que, pelos costumes da época, tinham direito a fazer declaração jurada, a acusação indiciava Sócrates por não reconhecer os deuses que o Estado reconhecia, por introduzir novos cultos e, também, por corromper a juventude, motivos pelos quais receberia pena capital, caso fosse condenado.',
            source: 'Book7',
            publishDate: '24 de junho de 2019',
            fileName: 'Apologia',
            id: "apologia",
            quantity: 10,
        },
        {
            name: 'Manual de Epicteto',
            author: 'Epicteto',
            subject: 'Filosofia',
            resume: 'Epicteto, um dos principais representantes do estoicismo, deixou em seu legado ensinamentos éticos com preceitos práticos para questões atemporais sobre a arte de viver melhor. Este sucinto e primoroso Manual filosófico, compilado por seu discípulo Flávio Arriano e apresentado aqui em versão bilíngue (grego-português) , reúne 53 aforismos de teor ético que expressam a preocupação fundamental de Epicteto: a conduta e o comportamento do ser humano em sociedade, e seu reflexo na manifestação da tão sonhada felicidade.',
            source: 'Skeelo',
            publishDate: 'Fevereiro de 2021',
            fileName: 'ManualEpicteto',
            id: "manual-epicteto",
            quantity: 10,
        }, {
            name: 'Ilíada',
            author: 'Homero',
            subject: 'Mitologia',
            resume: 'Ilíada é a mais antiga e a mais extensa das obras atribuídas Homero e é também o mais antigo texto literário da literatura europeia. O nome do poema deriva de Ílion, nome alternativo da mítica cidade de Troia. Acredita-se que Ilíada tenha sido originalmente uma composição oral, memorizada e recitada em ocasiões especiais, a partir de lendas e de memórias do Período Micênico e da Idade das Trevas. O poema de 5.675 hexâmetros, constantemente citado por filósofos e outros eruditos, exerceu enorme influência tanto na literatura romana quanto na cultura ocidental e descreve apenas um episódio da guerra, com duração de cinquenta e um dias, e com especial ênfase na disputa entre Aquiles e Agamêmnon.',
            source: 'Amazon',
            publishDate: '27 de outubro de 2020',
            fileName: 'Iliada',
            id: "iliada",
            quantity: 10,
        },
        {
            name: 'Metafísica',
            author: 'Aristóteles',
            subject: 'Filosofia',
            resume: 'A obra Metafísica trata dos princípios da realidade sensível que, como a matéria e a forma, parecem ser estruturas fundamentais da realidade, dos números e da matemática. Existe até mesmo um pequeno vocabulário filosófico e uma breve “história da filosofia”, mas o ser, a essência, as formas de ser constituem o argumento central do texto.',
            source: 'Book7',
            publishDate: '1 de fevereiro de 2012',
            fileName: 'Metafisica',
            id: "metafisica",
            quantity: 10,
        },
         {
            name: 'Origens da Mitologia',
            author: 'Annette Giesecke',
            subject: 'Mitologia',
            resume: 'A mitologia é imortal e nos ajuda a entender a nossa existência. Para compreender as bases das nossas crenças, filosofia e sociedade, nada melhor que mergulhar nos mitos e personagens que ajudaram a explicar as origens da vida, os fenômenos naturais e as questões existenciais que nos atravessam. Origens da Mitologia é uma enciclopédia de a A a Z ricamente ilustrada que oferece centenas de definições fascinantes de deuses e deusas, heróis e heroínas, ninfas, espíritos, monstros e lugares importantes da mitologia greco-romana em um trabalho cuidadosamente compilado pela pesquisadora Annette Giesecke, PhD.',
            source: 'Amazon',
            publishDate: '6 de julho de 2022',
            fileName: 'OrigensMitologia',
            id: "origens-mitologia",
            quantity: 10,
        },
         {
            name: 'Essencial da Mitologia',
            author: 'Baby Siqueira Abrão Herma Wilson',
            subject: 'Mitologia',
            resume: 'Mitologia de Deuses e Heróis: procura explicar o mito da criação de o nome adribuido às histórias a Deuses, Ao longo da existência humana na Terra, cada tribo, cada povo, deu diferentes respostas a essa questão. Lembremo-nos de que, para as tribos do período matrístico, o mundo era a própria Deusa Mãe, da qual nasceram todas as coisas e todos os seres. Ela os abrigava em seu corpo, e esse corpo era o próprio mundo.Na Pré-História, as primeiras deusas e os primeiros deuses eram representados na forma de animais.Deuses Romanos e de Outras: Mitologias resume a história das principais mitologias conhecidas, destaca a saga de seus personagens principais, entre deuses, semideuses e heróis, as figuras míticas que estão presentes na nossa lembrança como referências daquilo que somos, de tudo que cremos, e da própria história da humanidade.As civilizações antigas legaram benefícios inumeráveis que continuam sendo desfrutados pela humanidade nos nossos dias. A mitologia foi gerada no arcaísmo das primeiras sociedades organizadas e se provou rica, com princípios tão bem fundamentados, a ponto de estender sua influência forte através dos séculos, se fazendo presente nas artes, na filosofia, na psicologia, em tudo que veio a formar a cultura da civilização moderna.',
            source: 'Amazon',
            publishDate: '30 de junho de 2018',
            fileName: 'Mitologia',
            id: "essencial-mitologia",
            quantity: 10,
        },
        {
            name: 'A Odisseia',
            author: 'Homero',
            subject: 'Mitologia',
            resume: 'Um dos principais poemas épicos da Grécia Antiga, a obra A Odisseia é consagrada ao retorno do rei Ulisses ou Odisseu , que durante dez anos enfrentou perigos na terra e no mar até conseguir chegar ao reino de Ítaca. Herói da Guerra de Troia, Ulisses ficou preso em uma ilha durante anos, até finalmente partir com seus doze navios e homens, em uma espetacular jornada repleta de obstáculos, para encontrar a mulher Penélope e o filho Telêmaco. A batalha contra o Ciclope, o sedutor canto das sereias e a fúria de Netuno, deus dos mares, são alguns dos episódios fabulosos dessa obra, retratados em versos ao mesmo tempo dramáticos e poéticos.Como se diz na proposição, A Odisseia é a história do herói de mil estratagemas que tanto vagueou, depois de ter destruído a cidadela sagrada de Troia, que viu cidades e conheceu costumes de muitos homens e que no mar padeceu mil tormentos, enquanto lutava pela vida e pelo regresso dos seus companheiros.',
            source: 'Skeelo',
            publishDate: '5 de outubro de 2020',
            fileName: 'Odisseia',
            id: "odisseia",
            quantity: 10,
        },
        {
            name: 'Política',
            author: 'Aristóteles',
            subject: 'Filosofia',
            resume: ' Esta obra primordial da cultura clássica encanta a todos os que buscam compreender a formação, a estrutura e o desenvolvimento da vida em comunidade. Para Aristóteles, o principal motivo desta associação humana é o bem comum, capaz de proporcionar felicidade aos seus cidadãos e prosperidade à cidade. A instituição de leis e a sua observância são fundamentais para que a cidade seja uma associação humana feliz e próspera.',
            source: 'Skeelo',
            publishDate: '1 de fevereiro 2019',
            fileName: 'Politica',
            id: "politica",
            quantity: 10,
        },
        {
            name: 'Os Pré-socráticos',
            author: 'Victor Civita',
            subject: 'Filosofia',
            resume: 'Este livro expõe, de maneira precisa, a gênese, a natureza e os desenvolvimentos da filosofia e dos problemas especulativos na Antiguidade. Apresenta os filósofos naturalistas, também conhecidos como pré-socráticos. O volume se completa com uma apresentação sintética do movimento órfico e da novidade de sua mensagem.',
            source: 'Amazon',
            publishDate: '1 de janeiro de 1996',
            fileName: 'PreSocraticos',
            id: "pre-socraticos",
            quantity: 10,
        },
    ],
};

const DATABASE_FILE_NAME = "database.json";

function readDatabase() {
    console.log("Reading database...");

    if (fs.existsSync(DATABASE_FILE_NAME)) {
        fs.readFile(DATABASE_FILE_NAME, "utf8", (error, data) => {
            if (error) {
                console.log("Couldn't read database.");
                throw error;
            }
    
            hotel = JSON.parse(data);
        });

        console.log("Database loaded successfully.");
    }
    else
        console.log("Database file doesn't exist, starting a new one...");

    console.log();
}

function saveToDatabase() {
    const json = JSON.stringify(data);
    fs.writeFile(DATABASE_FILE_NAME, json, "utf8", error => {
        if (error) {
            console.log("Couldn't write database to file.");
            throw error;
        }
    });
}

module.exports = {
    data,
    DATABASE_FILE_NAME,
    readDatabase,
    saveToDatabase,
};
