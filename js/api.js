    $(document).ready(function (){
       let urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=23d317b366b3b30dfdccd9c371411003&hash=c24351f3f619682fa518d445f03ce693';

        fetch(urlAPI)
            .then((response) => response.json())
            .then((json) => {
                for ( let heroi of json.data.results){
                    let urlHeroi = heroi.urls[0].url;

                    let divGeral = document.createElement("div");
                    divGeral.setAttribute('class', 'col-sm-6');
                    $('#geral').append($(divGeral));

                    var contentHTML = `<div class="card">
                                            <img class="card-img-top" src="${heroi.thumbnail.path}.${heroi.thumbnail.extension}" alt="${heroi.name}">
                                            <div class="card-body">
                                                <h5 class="card-title">${heroi.name}</h5>
                                                <a href="${urlHeroi}" class="btn btn-primary" target="_blank">Saber Mais</a>
                                            </div>
                                        </div>`;
                    
                    divGeral.innerHTML = contentHTML;                    
                }
                
            })
        .catch(function(error) {
            console.log(error);
        });
    }); 