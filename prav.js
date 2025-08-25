
// js/prav.js
const pravDeities = {
    rod: {
        name: "Род",
        level: "praw-bg",
        title: "Верховный демиург, создатель Вселенной",
        description: "Верховный бог-творец в древнерусском пантеоне. Олицетворение источника жизни, единства всех живых существ и природных явлений.",
        relations: [
            { type: "Дети", name: "Сварог", id: "svarog", icon: "child" },
            { type: "Дети", name: "Стрибог", id: "stribog", icon: "child" },
            { type: "Сотворенные", name: "Все божества", id: null, icon: "star" }
        ],
        sphere: "Творение мира, плодородие, судьба, время",
        cult: "Ему приносили жертвы в священных рощах. Связь культа сохранилась в словах род, природа, урожай.",
        type: "god"
    },

    svarog: {
        name: "Сварог",
        level: "praw-bg",
        title: "Бог неба, огня и кузнечного ремесла",
        description: "Небесный бог-кузнец, отец огня и солнца. Даровал людям орудия труда и установил законы семейной жизни.",
        relations: [
            { type: "Отец", name: "Род", id: "rod", icon: "user" },
            { type: "Супруга", name: "Лада", id: "lada", icon: "heart" },
            { type: "Дети", name: "Даждьбог", id: "dazhdbog", icon: "child" },
            { type: "Дети", name: "Перун", id: "perun", icon: "child" },
            { type: "Дети", name: "Семаргл", id: "semargl", icon: "child" }
        ],
        sphere: "Небо, огонь, кузнечное ремесло, закон, порядок",
        cult: "В его честь разжигали костры. Священным животным был огненный петух.",
        type: "god"
    },

    "mat-zemlya": {
        name: "Мать-Сыра Земля",
        level: "praw-bg",
        title: "Богиня земли и плодородия",
        description: "Олицетворение плодородной земли, почиталась как мать всего живого. Считалось, что она ощущает ложь.",
        relations: [
            { type: "Создана", name: "Родом", id: "rod", icon: "user" },
            { type: "Дети", name: "Даждьбог", id: "dazhdbog", icon: "child" },
            { type: "Дети", name: "Мокошь", id: "mokosh", icon: "child" }
        ],
        sphere: "Плодородие, земледелие, женская сила",
        cult: "Кланялись и целовали землю, просили урожая; весной совершали обряд 'кормления земли'.",
        type: "god"
    },

    lada: {
        name: "Лада",
        level: "praw-bg",
        title: "Богиня любви, весны и брака",
        description: "Супруга Сварога, мать Лёли. Богиня красоты, согласия и семейного счастья.",
        relations: [
            { type: "Супруг", name: "Сварог", id: "svarog", icon: "heart" },
            { type: "Дочь", name: "Лёля", id: "lelya", icon: "female" },
            { type: "Связь", name: "Рожаницы", id: "rojanicy", icon: "baby" }
        ],
        sphere: "Любовь, гармония, весна, плодородие",
        cult: "В её честь на праздник Ладодения (6 мая) плели венки и водили хороводы.",
        type: "god"
    },

    stribog: {
        name: "Стрибог",
        level: "praw-bg",
        title: "Бог ветров и пространства",
        description: "Древний бог ветров, считался управителем воздушных потоков. По верованиям, ветры — его внуки.",
        relations: [
            { type: "Отец", name: "Род", id: "rod", icon: "user" },
            { type: "Брат", name: "Сварог", id: "svarog", icon: "user-friends" }
        ],
        sphere: "Ветры, воздух, пространство",
        cult: "Молились моряки и земледельцы о попутном ветре.",
        type: "god"
    },

    dazhdbog: {
        name: "Даждьбог",
        level: "praw-bg",
        title: "Бог Солнца и благополучия",
        description: "Податель солнечного света, урожая и богатства. Один из главных киевских богов.",
        relations: [
            { type: "Отец", name: "Сварог", id: "svarog", icon: "user" },
            { type: "Мать", name: "Мать-Земля", id: "mat-zemlya", icon: "female" },
            { type: "Спутник", name: "Хорс", id: "hors", icon: "sun" },
            { type: "Противник", name: "Морана", id: "mora", icon: "skull" }
        ],
        sphere: "Солнце, урожай, власть, дождь",
        cult: "Даждьбогу молились о богатом урожае, устраивали летние праздники.",
        type: "god"
    },

    hors: {
        name: "Хорс",
        level: "praw-bg",
        title: "Бог солнечного диска",
        description: "Олицетворение солнечного света и диска, спутник Даждьбога.",
        relations: [
            { type: "Спутник", name: "Даждьбог", id: "dazhdbog", icon: "sun" },
            { type: "Брат", name: "Семаргл", id: "semargl", icon: "user-friends" }
        ],
        sphere: "Солнце, небесный цикл",
        cult: "Ему поклонялись с поднятыми к светилу руками.",
        type: "god"
    },

    semargl: {
        name: "Семаргл",
        level: "praw-bg",
        title: "Огненный бог-посредник",
        description: "Таинственный бог, изображавшийся в виде крылатого пса или грифона. Хранитель огня и семян.",
        relations: [
            { type: "Отец", name: "Сварог", id: "svarog", icon: "user" },
            { type: "Брат", name: "Хорс", id: "hors", icon: "user-friends" }
        ],
        sphere: "Огонь, семена, посредничество",
        cult: "Жертвы во время посевов и урожая.",
        type: "god"
    },

    rojanicy: {
        name: "Рожаницы",
        level: "praw-bg",
        title: "Богини судьбы и рождения",
        description: "Две или три богини, покровительницы рождения, судьбы и плодородия.",
        relations: [
            { type: "Связание", name: "Род", id: "rod", icon: "user" },
            { type: "Помощницы", name: "Лада", id: "lada", icon: "female" },
            { type: "Связь", name: "Мокошь", id: "mokosh", icon: "female" }
        ],
        sphere: "Судьба, рождение, плодородие",
        cult: "Им приносили дары при родах и на крестины.",
        type: "god"
    },

    belobog: {
        name: "Белобог",
        level: "praw-bg",
        title: "Бог света, добра и удачи",
        description: "Противоположность Чернобогу, олицетворение светлых сил и порядка.",
        relations: [
            { type: "Антагонист", name: "Чернобог", id: "chernobog", icon: "scale-balanced" }
        ],
        sphere: "Добро, свет, порядок",
        cult: "Ему приносили жертвы белыми хлебами, молоком и мёдом.",
        type: "god"
    },

    triglav: {
        name: "Триглав",
        level: "praw-bg",
        title: "Трехглавый бог трёх миров",
        description: "Объединяет власть над небесным, земным и подземным мирами.",
        relations: [
            { type: "Связь", name: "Род", id: "rod", icon: "user" },
            { type: "Связь", name: "Сварог", id: "svarog", icon: "user-friends" }
        ],
        sphere: "Небо, Земля, Навь",
        cult: "Его изображали с тремя головами. У славян существовали кони, посвящённые Триглаву, с помощью которых гадали.",
        type: "god"
    }
};
