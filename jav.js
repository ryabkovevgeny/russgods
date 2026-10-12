// js/jav.js
const javDeities = {
    // ======= Боги Яви =======
    perun: {
        name: "Перун",
        level: "jaw-bg",
        title: "Бог-громовержец, покровитель воинов",
        source: "letopis",
        description: "Грозный бог, управляющий громом и молниями. Покровитель князей и дружины. Глава киевского пантеона Владимира.",
        relations: [
            { type: "Враг", name: "Велес", id: "veles", icon: "fist-raised" }
        ],
        sphere: "Гроза, война, дружина, власть",
        cult: "Жертвы под дубами, оружие как символ.",
        type: "god"
    },

    veles: {
        name: "Велес",
        level: "jaw-bg",
        title: "Бог мудрости, скота и магии",
        source: "letopis",
        description: "Покровитель животных, богатства, мудрости, магии и Нижнего мира. «Скотий бог». В «Слове о полку Игореве» Боян назван «Велесовым внуком».",
        relations: [
            { type: "Враг", name: "Перун", id: "perun", icon: "fist-raised" },
            { type: "Отец", name: "Ярило", id: "yarilo", icon: "child" }
        ],
        sphere: "Магия, богатство, подземный мир, мудрость",
        cult: "Жертвы скотом и хлебом.",
        type: "god"
    },

    mokosh: {
        name: "Мокошь",
        level: "jaw-bg",
        title: "Богиня судьбы, плодородия и ткачества",
        source: "letopis",
        description: "Покровительница женщин и рукоделия, связана с влагой и землей. Единственное женское божество в киевском пантеоне.",
        relations: [
            { type: "Дети", name: "Доля и Недоля", id: "dolya", icon: "female" }
        ],
        sphere: "Судьба, плодородие, женские ремесла",
        cult: "Ей молились о плодородии и благополучии семьи.",
        type: "god"
    },

    lelya: {
        name: "Лёля",
        level: "jaw-bg",
        title: "Богиня весны, молодости и любви",
        source: "spornoe", // спорно
        description: "Дочь Лады, олицетворяет пробуждение природы и девичью любовь.",
        relations: [
            { type: "Мать", name: "Лада", id: "lada", icon: "female" },
            { type: "Возлюбленный", name: "Ярило", id: "yarilo", icon: "heart" }
        ],
        sphere: "Весна, любовь, цветение",
        cult: "В её честь плели венки и пели весенние песни.",
        type: "god"
    },

    yarilo: {
        name: "Ярило",
        level: "jaw-bg",
        title: "Бог весеннего солнца и плодородия",
        source: "obryad", // обрядовый
        description: "Бог страсти и жизненной силы. Обрядовый персонаж, чьё чучело сжигали летом.",
        relations: [
            { type: "Отец", name: "Велес", id: "veles", icon: "user" },
            { type: "Связь", name: "Лёля", id: "lelya", icon: "heart" }
        ],
        sphere: "Весна, страсть, урожай",
        cult: "Чучело Ярилы сжигали летом.",
        type: "god"
    },

    kupala: {
        name: "Купала",
        level: "jaw-bg",
        title: "Бог летнего солнцеворота и любви",
        source: "obryad", // обрядовый
        description: "Покровитель воды и очищающих обрядов. Обрядовый персонаж, связанный с праздником Ивана Купалы.",
        relations: [
            { type: "Брат", name: "Ярило", id: "yarilo", icon: "user-friends" },
            { type: "Сестра", name: "Кострома", id: "kostroma", icon: "female" }
        ],
        sphere: "Солнцестояние, вода, любовь, гадания",
        cult: "Прыжки через костры на Купалу.",
        type: "god"
    },

    kostroma: {
        name: "Кострома",
        level: "jaw-bg",
        title: "Богиня плодородия, лета и любви",
        source: "obryad", // обрядовый
        description: "Сестра Купалы, символ увядания природы. Обрядовый персонаж.",
        relations: [
            { type: "Брат", name: "Купала", id: "kupala", icon: "user-friends" },
            { type: "Связь", name: "Морана", id: "mora", icon: "snowflake" }
        ],
        sphere: "Лето, плодородие, увядание",
        cult: "Топление чучела Костромы.",
        type: "god"
    },

    dolya: {
        name: "Доля",
        level: "jaw-bg",
        title: "Богиня счастья и удачи",
        source: "folklor",
        description: "Персонификация счастливой судьбы. В фольклоре не всегда дочь Мокоши — часто просто персонификация судьбы.",
        relations: [
            { type: "Мать", name: "Мокошь", id: "mokosh", icon: "female" },
            { type: "Сестра", name: "Недоля", id: "nedolya", icon: "female" }
        ],
        sphere: "Удача, радость, благополучие",
        cult: "Просили о доброй судьбе.",
        type: "god"
    },

    nedolya: {
        name: "Недоля",
        level: "jaw-bg",
        title: "Богиня бед и несчастья",
        source: "folklor",
        description: "Персонификация злой судьбы.",
        relations: [
            { type: "Мать", name: "Мокошь", id: "mokosh", icon: "female" },
            { type: "Сестра", name: "Доля", id: "dolya", icon: "female" }
        ],
        sphere: "Бедность, несчастья",
        cult: "Обереги и чистота дома как защита.",
        type: "god"
    },

    kolyada: {
        name: "Коляда",
        level: "jaw-bg",
        title: "Бог зимнего солнцеворота",
        source: "obryad", // обрядовый
        description: "Олицетворение нового солнечного цикла. Обрядовый персонаж.",
        relations: [
            { type: "Связь", name: "Даждьбог", id: "dazhdbog", icon: "sun" }
        ],
        sphere: "Зимнее солнцестояние, Новый год",
        cult: "Коляда — народные гуляния и песни.",
        type: "god"
    },

    maslenitsa: {
        name: "Масленица",
        level: "jaw-bg",
        title: "Персонификация проводов зимы",
        source: "obryad", // обрядовый
        description: "Олицетворяет праздник весны. Обрядовый персонаж.",
        relations: [
            { type: "Связь", name: "Морана", id: "mora", icon: "snowflake" }
        ],
        sphere: "Завершение зимы, пиры",
        cult: "Неделя блинов и сжигание чучела.",
        type: "god"
    },

    trojan: {
        name: "Троян",
        level: "jaw-bg",
        title: "Божество трёх миров",
        source: "letopis",
        description: "Персонаж «Слова о полку Игореве» и поучений. Символ древности, возможно, божество, связанное с тремя мирами или тремя головами.",
        relations: [],
        sphere: "Три мира, древность",
        cult: "Упоминается в «Слове о полку Игореве».",
        type: "god"
    },

    div: {
        name: "Див",
        level: "jaw-bg",
        title: "Вещая птица или грифон",
        source: "letopis",
        description: "Существо из «Слова о полку Игореве», возможно, грифон или вещая птица. Связан с предзнаменованиями.",
        relations: [],
        sphere: "Предзнаменования, небо",
        cult: "Упоминается в «Слове о полку Игореве».",
        type: "spirit"
    },

    // ======= Духи Яви =======
    beregini: {
        name: "Берегини",
        level: "jaw-bg",
        title: "Духи-покровительницы берегов",
        source: "folklor",
        description: "Охраняют берега, ключи и детей.",
        relations: [
            { type: "Связь", name: "Мать-Земля", id: "mat-zemlya", icon: "mountain" }
        ],
        sphere: "Вода, защита, материнская опека",
        cult: "Дары у рек и ключей.",
        type: "spirit"
    },

    leshy: {
        name: "Леший",
        level: "jaw-bg",
        title: "Хозяин леса",
        source: "folklor",
        description: "Повелитель зверей, может путать путников. Дух-хозяин леса.",
        relations: [
            { type: "Связь", name: "Велес", id: "veles", icon: "tree" }
        ],
        sphere: "Лес, охота, звери",
        cult: "Дары на пнях.",
        type: "spirit"
    },

    vodyanoy: {
        name: "Водяной",
        level: "jaw-bg",
        title: "Хозяин рек и озёр",
        source: "folklor",
        description: "Властитель глубин, опасен для рыбаков. Живёт в омутах.",
        relations: [
            { type: "Спутницы", name: "Русалки", id: "rusalki", icon: "water" }
        ],
        sphere: "Реки, озёра, рыбалка",
        cult: "Первую рыбу отдавали в жертву.",
        type: "spirit"
    },

    domovoy: {
        name: "Домовой",
        level: "jaw-bg",
        title: "Дух-хранитель дома",
        source: "folklor",
        description: "Защитник очага и семьи. Живёт за печкой.",
        relations: [
            { type: "Антагонист", name: "Кикимора", id: "kikimora", icon: "ghost" }
        ],
        sphere: "Дом, семья",
        cult: "Хлеб и каша как угощение.",
        type: "spirit"
    },

    kikimora: {
        name: "Кикимора",
        level: "jaw-bg",
        title: "Дух дома-вредитель",
        source: "folklor",
        description: "Путает пряжу и мучает людей.",
        relations: [
            { type: "Противник", name: "Домовой", id: "domovoy", icon: "hand-fist" }
        ],
        sphere: "Беспорядок, ночные кошмары",
        cult: "Чистота в доме как защита.",
        type: "spirit"
    },

    ovinnik: {
        name: "Овинник",
        level: "jaw-bg",
        title: "Дух овина",
        source: "folklor",
        description: "Хранитель зерна.",
        relations: [
            { type: "Связь", name: "Полевик", id: "polevik", icon: "seedling" }
        ],
        sphere: "Амбары, зерно, огонь",
        cult: "Угощения в амбарах.",
        type: "spirit"
    },

    bannik: {
        name: "Банник",
        level: "jaw-bg",
        title: "Дух бани",
        source: "folklor",
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
        source: "folklor",
        description: "Покровитель домашних животных и двора.",
        relations: [
            { type: "Родственник", name: "Домовой", id: "domovoy", icon: "home" }
        ],
        sphere: "Двор, скотина",
        cult: "Угощения в хлевах.",
        type: "spirit"
    },

    polevik: {
        name: "Полевик",
        level: "jaw-bg",
        title: "Дух поля",
        source: "folklor",
        description: "Может навредить в полуденный зной.",
        relations: [
            { type: "Связь", name: "Даждьбог", id: "dazhdbog", icon: "sun" }
        ],
        sphere: "Поля, урожай",
        cult: "Дар хлеба и зерна.",
        type: "spirit"
    },

    lugovik: {
        name: "Луговик",
        level: "jaw-bg",
        title: "Дух лугов",
        source: "folklor",
        description: "Хранитель лугов и трав.",
        relations: [
            { type: "Связь", name: "Лёля", id: "lelya", icon: "leaf" }
        ],
        sphere: "Травы, медосбор",
        cult: "Часть трав жертвовали лугу.",
        type: "spirit"
    },

    gumennik: {
        name: "Гуменник",
        level: "jaw-bg",
        title: "Дух гумна и овина",
        source: "folklor",
        description: "Дух гумна — места для молотьбы. Следит за порядком и может наказать за лень.",
        relations: [
            { type: "Связь", name: "Овинник", id: "ovinnik", icon: "seedling" }
        ],
        sphere: "Гумно, зерно, молотьба",
        cult: "Угощения на гумне.",
        type: "spirit"
    },

    kletnik: {
        name: "Клетник",
        level: "jaw-bg",
        title: "Дух клети",
        source: "folklor",
        description: "Дух клети — хозяйственной постройки для хранения зерна и вещей.",
        relations: [
            { type: "Связь", name: "Овинник", id: "ovinnik", icon: "home" }
        ],
        sphere: "Клеть, запасы",
        cult: "Угощения в клети.",
        type: "spirit"
    },

    podpolye: {
        name: "Подпольник",
        level: "jaw-bg",
        title: "Дух подполья",
        source: "folklor",
        description: "Дух, живущий в подполье дома. Может пугать, но иногда помогает.",
        relations: [
            { type: "Связь", name: "Домовой", id: "domovoy", icon: "home" }
        ],
        sphere: "Подполье, дом",
        cult: "Угощения в подполье.",
        type: "spirit"
    },

    bolotnik: {
        name: "Болотник",
        level: "jaw-bg",
        title: "Дух болота",
        source: "folklor",
        description: "Хозяин болота. Затягивает людей в трясину, может пугать огоньками.",
        relations: [
            { type: "Связь", name: "Водяной", id: "vodyanoy", icon: "water" }
        ],
        sphere: "Болото, трясина",
        cult: "Дары у болота.",
        type: "spirit"
    }
};
