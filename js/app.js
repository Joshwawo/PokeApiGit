const getRandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomId(1, 151);
    fethData(random);
})

const fethData = async (id) => {
    try {
        //!BackUp const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/7/`)
        const data = await res.json();
        console.log(data)
        let tipo1 = document.getElementById('tipo1');

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            tipo1: data.types[0].type.name,
            tipo2: '',
            ataque1: data.abilities[0].ability.name,
            // ataque2: data.abilities[1].ability.name,
            ataque2: '',
            ataque3: '',
        }

        if (data.types[1] != null) {
            pokemon.tipo2 = data.types[1].type.name
            // console.log('hola soy un pokemon de dos  tipos')
        }
        
        if (data.abilities[1] != null) {
            pokemon.ataque2 = data.abilities[1].ability.name
            // console.log('soy un pokemon con dos ataques');
            // console.log(`Mi Segundo ataque es de ${data.abilities[1].ability.name}`);
        }
        
        if (data.abilities[2] != null) {
            pokemon.ataque3 = data.abilities[2].ability.name
            // console.log('soy un pokemon de 3 a habilidades')
            // console.log(`Mi tercer ataque es de ${data.abilities[2].ability.name} `);
        }

        


        pintarCard(pokemon);
    } catch (error) {
        console.log(error)
    }

}

const pintarCard = (pokemon) => {
    // console.log(pokemon)
    const flex = document.querySelector('.flex');
    const template = document.getElementById('template-card').content
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img);
    clone.querySelector('.card-body-title').innerHTML = `
    ${pokemon.nombre} <span id='roto'><span id='roto'>hp♥</span> ${pokemon.hp}</span>`;
    clone.querySelector('.card-body-text').innerHTML = ` ${pokemon.tipo1}`;
    clone.getElementById('tipo2').innerHTML = ` ${pokemon.tipo2}`;
    clone.getElementById('hb1').innerHTML = `${pokemon.ataque1}`;
    clone.getElementById('hb2').innerHTML = `${pokemon.ataque2}`;
    clone.getElementById('hb3').innerHTML = `${pokemon.ataque3}`;


    // clone.querySelector('.card-footer-social') =`${pokemon.ataque1}`;
    // clone.querySelector('.card-body-text').innerHTML= `${}`
    fragment.appendChild(clone);
    flex.appendChild(fragment);

}