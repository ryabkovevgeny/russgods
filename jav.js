// js/jav.js
const javDeities = {
    // ======= Боги Яви =======
    perun: {
        name: "Перун",
        level: "jaw-bg",
        title: "Бог-громовержец, покровитель воинов",
        description: "Грозный бог, управляющий громом и молниями. Покровитель князей и дружины.",
        relations: [
            {type: "Отец", name: "Сварог", id: "svarog", icon: "user"},
            {type: "Враг", name: "Велес", id: "veles", icon: "fist-raised"}
        ],
        sphere: "Гроза, война, дружина, власть",
        cult: "Жертвы под дубами, оружие как символ.",
        type: "god"
    },

    veles: {
        name: "Велес",
        level: "jaw-bg",
        title: "Бог мудрости, скота и магии",
        description: "Покровитель животных, богатства, мудрости, магии и Нижнего мира.",
        relations: [
            {type: "Враг", name: "Перун", id: "perun", icon: "fist-raised"},
            {type: "Супруга", name: "Мокошь", id: "mokosh", icon: "heart"},
            {type: "Отец", name: "Ярило", id: "yarilo", icon: "child"}
        ],
        sphere: "Магия, богатство, подземный мир, мудрость",
        cult: "Жертвы скотом и хлебом.",
        type: "god"
    },

    mokosh: {
        name: "Мокошь",
        level: "jaw-bg",
        title: "Богиня судьбы, плодородия и ткачества",
        description: "Покровительница женщин и рукоделия, связана с влагой и землей.",
        relations: [
            {type:"Супруг", name:"Велес", id:"veles", icon:"heart"},
            {type:"Дети", name:"Доля и Недоля", id:"dolya", icon:"female"}
        ],
        sphere: "Судьба, плодородие, женские ремесла",
        cult: "Ей молились о плодородии и благополучии семьи.",
        type: "god"
    },

    lelya: {
        name: "Лёля",
        level: "jaw-bg",
        title: "Богиня весны, молодости и любви",
        description: "Дочь Лады, олицетворяет пробуждение природы и девичью любовь.",
        relations: [
            {type:"Мать", name:"Лада", id:"lada", icon:"female"},
            {type:"Возлюбленный", name:"Ярило", id:"yarilo", icon:"heart"}
        ],
        sphere: "Весна, любовь, цветение",
        cult: "В её честь плели венки и пели весенние песни.",
        type: "god"
    },

    yarilo: {
        name: "Ярило",
        level: "jaw-bg",
        title: "Бог весеннего солнца и плодородия",
        description: "Бог страсти и жизненной силы.",
        relations: [
            {type:"Отец", name:"Велес", id:"veles", icon:"user"},
            {type:"Связь", name:"Лёля", id:"lelya", icon:"heart"}
        ],
        sphere: "Весна, страсть, урожай",
        cult: "Чучело Ярилы сжигали летом.",
        type: "god"
    },

    kupala: {
        name: "Купала",
        level: "jaw-bg",
        title: "Бог летнего солнцеворота и любви",
        description: "Покровитель воды и очищающих обрядов.",
        relations: [
            {type:"Брат", name:"Ярило", id:"yarilo", icon:"user-friends"},
            {type:"Сестра", name:"Кострома", id:"kostroma", icon:"female"}
        ],
        sphere: "Солнцестояние, вода, любовь, гадания",
        cult: "Прыжки через костры на Купалу.",
        type: "god"
    },

    kostroma: {
        name: "Кострома",
        level: "jaw-bg",
        title: "Богиня плодородия, лета и любви",
        description: "Сестра Купалы, символ увядания природы.",
        relations: [
            {type:"Брат", name:"Купала", id:"kupala", icon:"user-friends"},
            {type:"Связь", name:"Морана", id:"mora", icon:"snowflake"}
        ],
        sphere: "Лето, плодородие, увядание",
        cult: "Топление чучела Костромы.",
        type: "god"
    },

    yarovit: {
        name: "Яровит",
        level: "jaw-bg",
        title: "Бог силы и урожая",
        description: "Западнославянский аналог Ярилы, покровитель урожая и воинов.",
        relations: [
            {type:"Аналог", name:"Ярило", id:"yarilo", icon:"user"}
        ],
        sphere: "Урожай, мощь, война",
        cult: "В его честь устраивались состязания.",
        type: "god"
    },

    dolya: {
        name: "Доля",
        level: "jaw-bg",
        title: "Богиня счастья и удачи",
        description: "Персонификация счастливой судьбы.",
        relations: [
            {type:"Мать", name:"Мокошь", id:"mokosh", icon:"female"},
            {type:"Сестра", name:"Недоля", id:"nedolya", icon:"female"}
        ],
        sphere: "Удача, радость, благополучие",
        cult: "Просили о доброй судьбе.",
        type: "god"
    },

    nedolya: {
        name: "Недоля",
        level: "jaw-bg",
        title: "Богиня бед и несчастья",
        description: "Персонификация злой судьбы.",
        relations: [
            {type:"Мать", name:"Мокошь", id:"mokosh", icon:"female"},
            {type:"Сестра", name:"Доля", id:"dolya", icon:"female"}
        ],
        sphere: "Бедность, несчастья",
        cult: "Обереги и чистота дома как защита.",
        type: "god"
    },

    kolyada: {
        name: "Коляда",
        level: "jaw-bg",
        title: "Бог зимнего солнцеворота",
        description: "Олицетворение нового солнечного цикла.",
        relations: [
            {type:"Связь", name:"Даждьбог", id:"dazhdbog", icon:"sun"}
        ],
        sphere: "Зимнее солнцестояние, Новый год",
        cult: "Коляда — народные гуляния и песни.",
        type: "god"
    },

    maslenitsa: {
        name: "Масленица",
        level: "jaw-bg",
        title: "Персонификация проводов зимы",
        description: "Олицетворяет праздник весны.",
        relations: [
            {type:"Связь", name:"Морана", id:"mora", icon:"snowflake"}
        ],
        sphere: "Завершение зимы, пиры",
        cult: "Неделя блинов и сжигание чучела.",
        type: "god"
    },

    // ======= Духи Яви =======
    beregini: {
        name: "Берегини",
        level: "jaw-bg",
        title: "Духи-покровительницы берегов",
        description: "Охраняют берега, ключи и детей.",
        relations: [
            {type:"Связь", name:"Мать-Земля", id:"mat-zemlya", icon:"mountain"}
        ],
        sphere: "Вода, защита, материнская опека",
        cult: "Дары у рек и ключей.",
        type: "spirit"
    },

    leshy: {
        name: "Леший",
        level: "jaw-bg",
        title: "Хозяин леса",
        description: "Повелитель зверей, может путать путников.",
        relations: [
            {type:"Связь", name:"Велес", id:"veles", icon:"tree"}
        ],
        sphere: "Лес, охота, звери",
        cult: "Дары на пнях.",
        type: "spirit"
    },

    vodyanoy: {
        name: "Водяной",
        level: "jaw-bg",
        title: "Хозяин рек и озёр",
        description: "Властитель глубин, опасен для рыбаков.",
        relations: [
            {type:"Спутницы", name:"Русалки", id:"rusalki", icon:"water"}
        ],
        sphere: "Реки, озёра, рыбалка",
        cult: "Первую рыбу отдавали в жертву.",
        type: "spirit"
    },

    domovoy: {
        name: "Домовой",
        level: "jaw-bg",
        title: "Дух-хранитель дома",
        description: "Защитник очага и семьи.",
        relations: [
            {type:"Антагонист", name:"Кикимора", id:"kikimora", icon:"ghost"}
        ],
        sphere: "Дом, семья",
        cult: "Хлеб и каша как угощение.",
        type: "spirit"
    },

    kikimora: {
        name: "Кикимора",
        level: "jaw-bg",
        title: "Дух дома-вредитель",
        description: "Путает пряжу и мучает людей.",
        relations: [
            {type:"Противник", name:"Домовой", id:"domovoy", icon:"hand-fist"}
        ],
        sphere: "Беспорядок, ночные кошмары",
        cult: "Чистота в доме как защита.",
        type: "spirit"
    },

    ovinnik: {
        name: "Овинник",
        level: "jaw-bg",
        title: "Дух овина",
        description: "Хранитель зерна.",
        relations: [
            {type:"Связь", name:"Полевик", id:"polevik", icon:"seedling"}
        ],
        sphere: "Амбары, зерно, огонь",
        cult: "Угощения в амбарах.",
        type: "spirit"
    },

    bannik: {
        name: "Банник",
        level: "jaw-bg",
        title: "Дух бани",
        description: "Управляет баней, не любит, когда его тревожат.",
        relations: [],
        sphere: "Баня, очищение",
        cult: "Оставляли мыло и веник.",
        type: "spirit"
    },

    dvorovoy: {
        name: "Дворовой",
        level: "jaw-bg",
        title: "Дух двора",
        description: "Покровитель домашних животных и двора.",
        relations: [
            {type:"Родственник", name:"Домовой", id:"domovoy", icon:"home"}
        ],
        sphere: "Двор, скотина",
        cult: "Угощения в хлевах.",
        type: "spirit"
    },

    polevik: {
        name: "Полевик",
        level: "jaw-bg",
        title: "Дух поля",
        description: " Может навредить в полуденный зной.",
        relations: [
            {type:"Связь", name:"Даждьбог", id:"dazhdbog", icon:"sun"}
        ],
        sphere: "Поля, урожай",
        cult: "Дар хлеба и зерна.",
        type: "spirit"
    },

    lugovik: {
        name: "Луговик",
        level: "jaw-bg",
        title: "Дух лугов",
        description: "Хранитель лугов и трав.",
        relations: [
            {type:"Связь", name:"Лёля", id:"lelya", icon:"leaf"}
        ],
        sphere: "Травы, медосбор",
        cult: "Часть трав жертвовали лугу.",
        type: "spirit"
    }
};