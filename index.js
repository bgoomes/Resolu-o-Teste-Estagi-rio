

 // O codigo foi desenvolvido para ser testado em qualquer produto da lista.
 // Ele ira buscar a informação e trazer como um Objeto, info que Não tiver fornecida na pagina, sera infomado no Objeto.
 // Basta acessar o site https://br.openfoodfacts.org/ escolher um produto e colar o codigo no console.
    
    
    
    const nome = document.querySelector('h1[itemprop="name"]')
    const codigo = document.querySelector('span[itemprop="gtin13"]')
    const generico = document.querySelector('span[itemprop="description"]')
    const quantidade = document.querySelector('span[id="field_quantity_value"]')
    const embalagem = document.querySelector('span[id="field_packaging_value"]')
    const marca = document.querySelector('span[id="field_brands_value"]')
    const categoria = document.querySelector('span[id="field_categories_value"]')
    const etiquetas = document.querySelector('span[id="field_labels_value"]')
    const fabricao = document.querySelector('span[id="field_manufacturing_places_value"]')
    const lojas = document.querySelector('span[id="field_stores_value"]')
    const paises = document.querySelector('span[id="field_countries_value"]')

    
    let nomeAliemnto, codigoAlimento, nomeGenerico, embalagemalimento, marcaAlimento, categoriaAlimento, etiquetasAlimento, fabricaoAlimento, lojasAlimento, paisesAlimento, quantidadeAliemnto

    if(nome != null){
        nomeAliemnto = nome.innerText
    }else{
        nomeAliemnto = 'Não Possui Nome este Aliemnto!'
    }

    if(codigo != null){
        codigoAlimento = codigo.innerText
    }else{
        codigoAlimento = 'Não Possui Código este Aliemnto!'
    }

    if(generico != null){
        nomeGenerico = generico.innerText
    }else{
        nomeGenerico = 'Não Possui Nome Genérico este Aliemnto!'
    }

    if(quantidade != null){
        quantidadeAliemnto = quantidade.innerText
    }else{
        quantidadeAliemnto = 'Não Possui quantidade este Aliemnto!'
    }

    if(embalagem != null){
        embalagemalimento = embalagem.innerText
    }else{
        embalagemalimento = 'Não Possui embalagem este Aliemnto!'
    }

    if(marca != null){
        marcaAlimento = marca.innerText
    }else{
        marcaAlimento = 'Não Possui Marca este Aliemnto!'
    }

    if(categoria != null){
        categoriaAlimento = categoria.innerText
    }else{
        categoriaAlimento = 'Não Possui categoria este Aliemnto!'
    }

    if(etiquetas != null){
        etiquetasAlimento = etiquetas.innerText
    }else{
        etiquetasAlimento = 'Não Possui etiquetas este Aliemnto!'
    }

    if(fabricao != null){
        fabricaoAlimento = fabricao.innerText
    }else{
        fabricaoAlimento = 'Não Possui fabricação este Aliemnto!'
    }

    if(lojas != null){
        lojasAlimento = lojas.innerText
    }else{
        lojasAlimento = 'Não Possui loja este Aliemnto!'
    }

    if(paises != null){
        paisesAlimento = paises.innerText
    }else{
        paisesAlimento = 'Não Possui Paises este Aliemnto!'
    }

    const informacoesAlimento = {
        nome: nomeAliemnto,
        codigo: codigoAlimento,
        generic: nomeGenerico,
        embalagem: embalagemalimento,
        marca: marcaAlimento,  
        quantidade: quantidadeAliemnto,
        categoria: categoriaAlimento,
        etiquetas: etiquetasAlimento,
        fabricao: fabricaoAlimento,
        lojas: lojasAlimento,
        paises: paisesAlimento 
    };
    


    console.log(informacoesAlimento);


