

    const nomeAlimento = document.querySelector('h1[itemprop="name"]').innerText;
    const codigoAlimento = document.querySelector('span[itemprop="gtin13"]').innerText;
    const genericName = document.querySelector('span[itemprop="description"]').innerText 
   
    

  
    const informacoesAlimento = {
        nome: nomeAlimento,
        codigo: codigoAlimento,
        generic: genericName,
       
    };
    


    console.log(informacoesAlimento);


