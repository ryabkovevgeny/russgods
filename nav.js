// js/nav.js
const navDeities = {
    chernobog: {
        name: "Чернобог",
        level: "naw-bg",
        title: "Владыка Нави",
        description: "Олицетворение мрака и хаоса.",
        relations: [
            {type:"Противоположность", name:"Белобог", id:"belobog", icon:"scale-balanced"},
            {type:"Отец", name:"Морана", id:"mora", icon:"user"}
        ],
        sphere: "Мрак, разрушение, смерть",
        cult: "Чёрные жертвоприношения.",
        type: "god"
    },

    mora: {
        name: "Морана",
        level: "naw-bg",
        title: "Богиня смерти и зимы",
        description: "Богиня увядания природы, связана с зимой.",
        relations: [
            {type:"Отец", name:"Чернобог", id:"chernobog", icon:"user"}
        ],
        sphere: "Зима, смерть, болезни",
        cult: "Сожжение чучела зимой.",
        type: "god"
    },

    yascher: {
        name: "Ящер",
        level: "naw-bg",
        title: "Хтонический дракон",
        description: "Чудовище подземных вод, иногда приносит дожди.",
        relations: [
            {type:"Повелитель", name:"Чернобог", id:"chernobog", icon:"dragon"}
        ],
        sphere: "Подземные воды, дожди",
        cult: "Жертвы в лесные болота.",
        type: "god"
    },

    rusalki: {
        name: "Русалки",
        level: "naw-bg",
        title: "Духи воды и полей",
        description: "Могут приносить плодородие, но и навредить.",
        relations: [
            {type:"Связь", name:"Водяной", id:"vodyanoy", icon:"water"}
        ],
        sphere: "Реки, поля, плодородие",
        cult: "Им жертвовали у воды.",
        type: "spirit"
    },

    viy: {
        name: "Вий",
        level: "naw-bg",
        title: "Владыка Нави",
        description: "Поздний образ, взглядом убивает.",
        relations: [
            {type:"Связь", name:"Чернобог", id:"chernobog", icon:"skull"}
        ],
        sphere: "Смерть, страх",
        cult: "Как отдельного культа не имел.",
        type: "spirit"
    },

    "baba-yaga": {
        name: "Баба-Яга",
        level: "naw-bg",
        title: "Ведьма лесная",
        description: "Могущественная старуха-чародейка, хранительница границы миров.",
        relations: [
            {type:"Связь", name:"Леший", id:"leshy", icon:"tree"}
        ],
        sphere: "Мудрость, испытания, магия",
        cult: "Фольклорный персонаж, дары приносились для удачи.",
        type: "spirit"
    },

    mavka: {
        name: "Мавка",
        level: "naw-bg",
        title: "Дух умерших детей",
        description: "Души некрещеных детей, часто как прекрасные девушки.",
        relations: [
            {type:"Связь", name:"Русалки", id:"rusalki", icon:"water"}
        ],
        sphere: "Души, соблазн",
        cult: "Ставили кресты и приносили угощения.",
        type: "spirit"
    },

    upyr: {
        name: "Упырь",
        level: "naw-bg",
        title: "Вампир",
        description: "Оживший мертвец, питающийся кровью.",
        relations: [
            {type:"Связь", name:"Чернобог", id:"chernobog", icon:"moon"}
        ],
        sphere: "Смерть, болезни, кровь",
        cult: "Осиновые колья в могилах.",
        type: "spirit"
    },

    volkolak: {
        name: "Волколак",
        level: "naw-bg",
        title: "Оборотень",
        description: "Человек, превращающийся в волка.",
        relations: [
            {type:"Связь", name:"Велес", id:"veles", icon:"paw"}
        ],
        sphere: "Превращение, охота",
        cult: "Жертвы в лесу.",
        type: "spirit"
    },

    likhoradki: {
        name: "Лихорадки",
        level: "naw-bg",
        title: "Духи болезней",
        description: "Демоны-старухи, насылающие болезни.",
        relations: [
            {type:"Связь", name:"Морана", id:"mora", icon:"skull"}
        ],
        sphere: "Болезни, страдания",
        cult: "Обереги и заговоры.",
        type: "spirit"
    },

    zlydni: {
        name: "Злыдни",
        level: "naw-bg",
        title: "Духи бедности",
        description: "Несут бедность и раздор.",
        relations: [
            {type:"Связь", name:"Недоля", id:"nedolya", icon:"face-frown"}
        ],
        sphere: "Нищета, несчастья",
        cult: "Труд и порядок изгоняют их.",
        type: "spirit"
    }
};