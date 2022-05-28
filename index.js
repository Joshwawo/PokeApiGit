function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomId(1, 800);
    fethData(random);

})

const fethData = async (id) => {

    try {
        //!BackUp const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/683/`)
        const data = await res.json();

        const rest = await fetch('https://pokeapi.co/api/v2/language/2/');
        const lang = await rest.json();
        console.log(lang)
        console.log(lang.names[0].name)
        // console.log(data)

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            id: data.id,
            hp: data.stats[0].base_stat,
            atk: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            spacial_atk: data.stats[3].base_stat,
            spacial_defense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
            tipo1: data.types[0].type.name,
            tipo2: '',
            ataque1: data.abilities[0].ability.name,
            // ataque2: data.abilities[1].ability.name,
            ataque2: '',
            ataque3: '',
            jp: lang.names[0].name
        }





        // console.log(data.stats)
        console.log(id)


        // console.log(data.stats[1].base_stat)

        if (data.types[1] != null) {
            pokemon.tipo2 = data.types[1].type.name

        }

        if (data.abilities[1] != null) {
            pokemon.ataque2 = data.abilities[1].ability.name

        }

        if (data.abilities[2] != null) {
            pokemon.ataque3 = data.abilities[2].ability.name

        }

        const comparadorTipos = () => {
            if (data.types[0] != null && data.types[0].type.name == 'rock') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let rock = document.getElementById('tipo1');
                rock.classList.add('rock')

                rock.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/rock_type'
                }

            }
            if (data.types[0].type.name == 'normal') {
                console.log(`Soy de tipo ${data.types[0].type.name} `)
                let normal = document.getElementById('tipo1');
                normal.classList.add('normal')
                normal.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/normal_type'
                }

            }


            if (data.types[0].type.name == 'fire') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let fire = document.getElementById('tipo1');
                fire.classList.add('fire')
                fire.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/fire_type'
                }
            }

            if (data.types[0].type.name == 'water') {
                console.log(`Soy un pokemon de tipo ${data.types[0].type.name}`)
                let water = document.getElementById('tipo1');
                water.classList.add('water');

                water.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/water_type'
                }


            }

            if (data.types[0].type.name == 'grass') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let grass = document.getElementById('tipo1');
                grass.classList.add('grass');
                grass.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/grass_type'
                }
            }

            if (data.types[0].type.name == 'electric') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let electric = document.getElementById('tipo1');
                electric.classList.add('electric');
                electric.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/electric_type'
                }
            }

            if (data.types[0].type.name == 'ice') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let ice = document.getElementById('tipo1');
                ice.classList.add('ice');
                ice.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/ice_type'
                }
            }

            if (data.types[0].type.name == 'fighting') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let fighting = document.getElementById('tipo1');
                fighting.classList.add('fighting');
                fighting.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/fighting_type'
                }

            }

            if (data.types[0].type.name == 'poison') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let poison = document.getElementById('tipo1');
                poison.classList.add('poison');
                poison.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/poison_type'
                }
            }

            if (data.types[0].type.name == 'ground') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let ground = document.getElementById('tipo1');
                ground.classList.add('ground');
                ground.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/ground_type'
                }
            }

            if (data.types[0].type.name == 'flying') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let flying = document.getElementById('tipo1');
                flying.classList.add('flying');
                flying.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/flying_type'
                }
            }

            if (data.types[0].type.name == 'psychic') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let psychic = document.getElementById('tipo1');
                psychic.classList.add('psychic');
                psychic.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/psychic_type'
                }
            }

            if (data.types[0].type.name == 'bug') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let bug = document.getElementById('tipo1');
                bug.classList.add('bug');


                bug.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/Bug_type'
                }

            }

            if (data.types[0].type.name == 'ghost') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let ghost = document.getElementById('tipo1');
                ghost.classList.add('ghost');

                ghost.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/ghost_type'
                }
            }

            if (data.types[0].type.name == 'dark') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let dark = document.getElementById('tipo1');
                dark.classList.add('dark');

                dark.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/dark_type'
                }
            }

            if (data.types[0].type.name == 'dragon') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let dragon = document.getElementById('tipo1');
                dragon.classList.add('dragon');

                dragon.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/dragon_type'
                }
            }

            if (data.types[0].type.name == 'steel') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let steel = document.getElementById('tipo1');
                steel.classList.add('steel');

                steel.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/steel_type'
                }
            }

            if (data.types[0].type.name == 'fairy') {
                console.log(`Soy de tipo ${data.types[0].type.name}`)
                let fairy = document.getElementById('tipo1');
                fairy.classList.add('fairy');

                fairy.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/fairy_type'
                }
            }

            //!Aqui termina el tiper tipo --------

            if (data.types[1] != null && data.types[1].type.name == 'rock') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let rock = document.getElementById('tipo2');
                rock.classList.add('rock')

                rock.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/rock_type'
                }



            }

            if (data.types[1] != null && data.types[1].type.name == 'normal') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let normal = document.getElementById('tipo2');
                normal.classList.add('normal')

                normal.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/fairy_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'fire') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let fire = document.getElementById('tipo2');
                fire.classList.add('fire')

                fire.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/fire_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'water') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let water = document.getElementById('tipo2');
                water.classList.add('water');
                water.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/water_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'grass') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let grass = document.getElementById('tipo2');
                grass.classList.add('grass');
                grass.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/grass_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'electric') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let electric = document.getElementById('tipo2');
                electric.classList.add('electric');
                electric.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/electric_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'ice') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let ice = document.getElementById('tipo2');
                ice.classList.add('ice');
                ice.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/ice_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'fighting') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let fighting = document.getElementById('tipo2');
                fighting.classList.add('fighting');

                fighting.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/fighting_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'poison') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let poison = document.getElementById('tipo2');
                poison.classList.add('poison');

                poison.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/poison_type'
                }

            }

            if (data.types[1] != null && data.types[1].type.name == 'ground') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let ground = document.getElementById('tipo2');
                ground.classList.add('ground');

                ground.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/ground_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'flying') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let flying = document.getElementById('tipo2');
                flying.classList.add('flying');

                flying.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/flying_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'psychic') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let psychic = document.getElementById('tipo2');
                psychic.classList.add('psychic');

                psychic.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/psychic_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'bug') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let bug = document.getElementById('tipo2');
                bug.classList.add('bug');

                bug.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/bug_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'ghost') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let ghost = document.getElementById('tipo2');
                ghost.classList.add('ghost');

                ghost.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/ghost_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'dark') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let dark = document.getElementById('tipo2');
                dark.classList.add('dark');

                dark.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/dark_type'
                }
            }

            if (data.types[1] != null && data.types[1].type.name == 'dragon') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let dragon = document.getElementById('tipo2');
                dragon.classList.add('dragon');

                dragon.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/dragon_type'
                }

            }

            if (data.types[1] != null && data.types[1].type.name == 'steel') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let steel = document.getElementById('tipo2');
                steel.classList.add('steel');

                steel.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/steel_type'
                }

            }

            if (data.types[1] != null && data.types[1].type.name == 'fairy') {
                console.log(`Soy de tipo ${data.types[1].type.name}`)
                let fairy = document.getElementById('tipo2');
                fairy.classList.add('fairy');

                fairy.onclick = click;
                function click(e) {
                    window.location.href = 'https://pokemon.fandom.com/wiki/fairy_type'
                }
            }
        };

      

        // pintarCard(pokemon);

        pintarCard(pokemon);
        // pintarCard(pokemon);
        // pintarCard(pokemon);
        comparadorTipos();

        if (data.sprites.other.dream_world.front_default == null) {
            console.log('No tengo SVG')
            // data.sprites.other.official.artwork.front_default
            let svg = data.sprites.other["official-artwork"].front_default
            // sprites.other["official-artwork"]
            // console.log(`no tengo svg`)
            console.log(svg)
            // document.querySelector('.card-body-img').setAttribute('src',svg)
            document.querySelector('.card-body-img').setAttribute('src',svg , )
            //! clone.querySelector('.card-body-img').setAttribute('src', pokemon.img);
            // 

            //683 


        }

        let btn = document.getElementById('btn');
        btn.addEventListener('click', () => {
            location.reload();
        })


        //TODO:Esto me puede servir mas adelanmte if (data.abilities[0].ability.name == 'rock-head') {
        //     console.log('hola soy de tipo stench')
        // }

        // comparadorTipos();
        // comparadorTipos();





    } catch (error) {
        console.log(error)
    }



}

const pintarCard = (pokemon) => {
    // let btn = document.getElementById('btn');
    // btn.addEventListener('click', () => {
    //     location.reload();
    // })
    // console.log(pokemon)
    const flex = document.querySelector('.flex');
    const template = document.getElementById('template-card').content
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img);
    clone.querySelector('.card-body-title').innerHTML = `
    ${pokemon.nombre} <span id='roto'><span id='roto'>hp♥</span> ${pokemon.hp}</span>`;
    // clone.getElementById('ataque').innerHTML= `ataque ${pokemon.atk}`
    // clone.querySelector('.card-body-text').innerHTML = ` ${pokemon.tipo1}`;
    clone.getElementById('tipo1').innerHTML = `${pokemon.tipo1}`
    clone.getElementById('tipo2').innerHTML = ` ${pokemon.tipo2}`;
    clone.getElementById('hb1').innerHTML = `${pokemon.ataque1}`;
    clone.getElementById('hb2').innerHTML = `${pokemon.ataque2}`;
    clone.getElementById('hb3').innerHTML = `${pokemon.ataque3}`;
    clone.getElementById('hb4').innerHTML = `Attack: ${pokemon.atk}`;
    clone.getElementById('hb5').innerHTML = `Defense: ${pokemon.defense}`;
    clone.getElementById('hb6').innerHTML = `S-A: ${pokemon.defense}`;
    clone.getElementById('hb7').innerHTML = `S-D: ${pokemon.spacial_defense}`;
    clone.getElementById('hb8').innerHTML = `speed: ${pokemon.speed}`;
    clone.querySelector('.prueba8').innerHTML=`${pokemon.jp}`
    // clone.getElementById('no-id').innerHTML = ` ${pokemon.id}`;


    clone.getElementById('no-id').innerHTML = `No: ${pokemon.id}`;



    fragment.appendChild(clone);
    flex.appendChild(fragment);

    // const hb5 = document.getElementById('hb5');
    // hb5.classList.add('kk')
    // console.log(hb5)

    // const hb3 = document.getElementById('hb3');
    // console.log(hb3)

    // const test = document.getElementById('test')
    // console.log(test)

}