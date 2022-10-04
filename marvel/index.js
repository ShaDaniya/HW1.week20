let json = `[{
    "name": "Бэтмен",
    "urlPhoto": "https://i.pinimg.com/originals/b7/f9/74/b7f974d9d26f23b2d3c581d7721f88ee.jpg",
    "universe": "DC Comics",
    "alterEgo": "Брюс Уэйн",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость"
}, {
    "name": "Супермен",
    "urlPhoto": "https://a.d-cd.net/6f6fac04k3c5-1920.jpg",
    "universe": "DC Comics",
    "alterEgo": "Кларк Кент",
    "occupation": "борец за справедливость",
    "friends": "собака Крипто",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
}, {
    "name": "Железный человек",
    "urlPhoto": "http://pm1.narvii.com/7128/97dd5cd169db45917f2340d862377f74e8136cddr1-1200-750v2_uhq.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpower": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
}, {
    "name": "Человек-паук",
    "urlPhoto": "https://kinofilmpro.ru/wp-content/uploads/2022/04/4-31.jpeg",
    "universe": "Marvel Comics",
    "alterEgo": "Питер Паркер",
    "occupation": "борец за справедливость, студент, фотограф",
    "friends": "Мстители, Фантастическая четверка, Люди Икс",
    "superpower": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"
}, {
    "name": "Капитан Америка",
    "urlPhoto": "https://proprikol.ru/wp-content/uploads/2020/01/kapitan-amerika-kartinki-supergeroya-30.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Стивен Роджерс",
    "occupation": "супер-солдат",
    "friends": "Мстители",
    "superpower": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
}, {
    "name": "Toр",
    "urlPhoto": "https://i.pinimg.com/originals/16/b9/d0/16b9d038a1d96b0ca03ef53cfbf6e55c.png",
    "universe": "Marvel Comics",
    "alterEgo": "нет; полное имя — Тор Одинсон",
    "occupation": "борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "superpower": "все, что может бог, плюс молот Мьелнир"
}, {
    "name": "Халк",
    "urlPhoto": "https://all-t-shirts.ru/goods_images/ru122097II00086a4a2d83d57be058b49cac33e99ddd2.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Брюс Беннер",
    "occupation": "супергерой, борец за справедливость, ученый-биохимик",
    "friends": "Мстители",
    "superpower": "сверхчеловеческая сила искорость, выносливость, полет"
}, {
    "name": "Чудо-женщина",
    "urlPhoto": "https://wallpaperbat.com/img/390295-wonder-woman-fanart-2017-hd-superheroes-4k-wallpaper-image.jpg",
    "universe": "DC Comics",
    "alterEgo": "Диана Принс",
    "occupation": "супергероиня, секретарь-референт",
    "friends": "Лига Справедливости, Бэтмен, Супермен",
    "superpower": "сверхчеловеческая сила искорость, выносливость, полет"
}, {
    "name": "Черная вдова",
    "urlPhoto": "https://cdn.fishki.net/upload/post/2021/05/31/3776637/820b2eeaadd622d8a8a992bd3a694065.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Наташа Романофф",
    "occupation": "супергероиня, шпионка",
    "friends": "Мстители",
    "superpower": "пик человеческого физического потенциала, замедленное старение, знание многих языков"
}, {
    "name": "Дэдпул",
    "urlPhoto": "https://proprikol.ru/wp-content/uploads/2020/01/dedpul-kartinki-supergeroya-7.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Уэйд Уинстон Уилсон",
    "occupation": "антигерой, наемник",
    "friends": "частично Мстители, Человек-паук, Росомаха",
    "superpower": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
}]`;

document.addEventListener("DOMContentLoaded", function(event) {
    let superheroes = JSON.parse(json);
    //console.log(superheroes);

    let surepheroesContent = "";
    for (let superhero of superheroes) {
        surepheroesContent += `<div class='superhero'>
        <h2>${superhero.name}</h2>
        <div><img src=${superhero.urlPhoto} alt="photo" width="50%"></div>
        <div>Вселенная: ${superhero.universe}</div>
        <div>Альтер эго: ${superhero.alterEgo}</div>
        <div>Альтер эго: ${superhero.occupation}</div>
        <div>Альтер эго: ${superhero.friends}</div>
        <div>Альтер эго: ${superhero.superpower}</div>
        </div>`
    }
    document.getElementById("superheroesContainer").innerHTML = surepheroesContent;
})

//функция рейтинга для бетмена
function set_rateBatman(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateBatman').innerHTML = 'Batman Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//функция рейтинга для супермена
function set_rateSuperman(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateSuperman').innerHTML = 'Superman Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//функция рейтинга для железного человека
function set_rateIronman(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateIronman').innerHTML = 'Ironman Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//функция рейтинга для человека-паука
function set_rateSpiderman(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateSpiderman').innerHTML = 'Spiderman Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//функция рейтинга для капитана америка
function set_rateCaptainAmerica(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateCaptainAmerica').innerHTML = 'Captain America Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//функция рейтинга для капитана америка
function set_rateTor(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateTor').innerHTML = 'Tor Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//функция рейтинга для халка
function set_rateHulk(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateHulk').innerHTML = 'Hulk Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//функция рейтинга для чудо-женщины
function set_rateWonderWoman(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateWonderWoman').innerHTML = 'Wonder Woman Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//функция рейтинга для черной вдовы
function set_rateBlackWidow(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateBlackWidow').innerHTML = 'Black Widow Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//функция рейтинга для дэдпула
function set_rateDeadpool(event, el) {

    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate = Math.ceil(event.clientX / el.clientWidth * 5);

        document.getElementById('rateDeadpool').innerHTML = 'Deadpool Rate is ' + rate;
        el.getElementsByTagName('div')[0].style.width = rate * 20 + '%';
    }
}

//проверка local Storage
document.addEventListener('DOMContentLoaded', function (event) {
    let batmanRate = localStorage.getItem('batmanRate');
    let supermanRate = localStorage.getItem('supermanRate');
    let ironmanRate = localStorage.getItem('ironmanRate');
    let spidermanRate = localStorage.getItem('spidermanRate');
    let captainAmericaRate = localStorage.getItem('captainAmericaRate');
    let torRate = localStorage.getItem('torRate');
    let hulkRate = localStorage.getItem('hulkRate');
    let wonderWomanRate = localStorage.getItem('wonderWomanRate');
    let blackWidowRate = localStorage.getItem('blackWidowRate');
    let deadpoolRate = localStorage.getItem('deadpoolRate');

    if (batmanRate != null) {
        document.getElementById('rateBatman').innerText = batmanRate;
    };
    
    if (supermanRate != null) {
        document.getElementById('rateSuperman').innerText = supermanRate;
    };
    
    if (ironmanRate != null) {
        document.getElementById('rateIronman').innerText = ironmanRate;
    };

    if (spidermanRate != null) {
        document.getElementById('rateSpiderman').innerText = spidermanRate;
    };
    if (captainAmericaRate != null) {
        document.getElementById('rateCaptainAmerica').innerText = captainAmericaRate;
    };
    if (torRate != null) {
        document.getElementById('rateTor').innerText = torRate;
    };
    if (hulkRate != null) {
        document.getElementById('rateHulk').innerText = hulkRate;
    };
    if (wonderWomanRate != null) {
        document.getElementById('rateWonderWoman').innerText = wonderWomanRate;
    };
    if (blackWidowRate != null) {
        document.getElementById('rateBlackWidow').innerText = blackWidowRate;
    };
    if (deadpoolRate != null) {
        document.getElementById('rateDeadpool').innerText = deadpoolRate;
    };
})

//функция для записи рейтинга бетмена в local storage
function BatRateLocalStorage () {
    let batRateLocal = document.getElementById('rateBatman').innerText;
    if (localStorage.getItem('batmanRate') == null) {
        localStorage.setItem('batmanRate', batRateLocal);
    }
}

//функция для записи рейтинга супермена в local storage
function SupermanRateLocalStorage () {
    let supermanRateLocal = document.getElementById('rateSuperman').innerText;
    if (localStorage.getItem('supermanRate') == null) {
        localStorage.setItem('supermanRate', supermanRateLocal);
    }
}

//функция для записи рейтинга железного человека в local storage
function IronmanRateLocalStorage () {
    let ironmanRateLocal = document.getElementById('rateIronman').innerText;
    if (localStorage.getItem('ironmanRate') == null) {
        localStorage.setItem('ironmanRate', ironmanRateLocal);
    }
}

//функция для записи рейтинга человека паука в local storage
function SpidermanRateLocalStorage () {
    let spidermanRateLocal = document.getElementById('rateSpiderman').innerText;
    if (localStorage.getItem('spidermanRate') == null) {
        localStorage.setItem('spidermanRate', spidermanRateLocal);
    }
}

//функция для записи рейтинга капитана америки в local storage
function CaptainAmericaRateLocalStorage () {
    let captainAmericaRateLocal = document.getElementById('rateCaptainAmerica').innerText;
    if (localStorage.getItem('captainAmericaRate') == null) {
        localStorage.setItem('captainAmericaRate', captainAmericaRateLocal);
    }
}

//функция для записи рейтинга тора в local storage
function TorRateLocalStorage () {
    let torRateLocal = document.getElementById('rateTor').innerText;
    if (localStorage.getItem('torRate') == null) {
        localStorage.setItem('torRate', torRateLocal);
    }
}

//функция для записи рейтинга халка в local storage
function HulkRateLocalStorage () {
    let hulkRateLocal = document.getElementById('rateHulk').innerText;
    if (localStorage.getItem('hulkRate') == null) {
        localStorage.setItem('hulkRate', hulkRateLocal);
    }
}

//функция для записи рейтинга чудо-женщины в local storage
function WonderWomanRateLocalStorage () {
    let wonderWomanRateLocal = document.getElementById('rateWonderWoman').innerText;
    if (localStorage.getItem('wonderWomanRate') == null) {
        localStorage.setItem('wonderWomanRate', wonderWomanRateLocal);
    }
}

//функция для записи рейтинга чудо-женщины в local storage
function BlackWidowRateLocalStorage () {
    let blackWidowRateLocal = document.getElementById('rateBlackWidow').innerText;
    if (localStorage.getItem('blackWidowRate') == null) {
        localStorage.setItem('blackWidowRate', blackWidowRateLocal);
    }
}

//функция для записи рейтинга дэдпула в local storage
function DeadpoolRateLocalStorage () {
    let deadpoolRateLocal = document.getElementById('rateDeadpool').innerText;
    if (localStorage.getItem('deadpoolRate') == null) {
        localStorage.setItem('deadpoolRate', deadpoolRateLocal);
    }
}






