// js/nav.js
const navDeities = {
    chernobog: {
        name: "Чернобог",
        level: "naw-bg",
        title: "Владыка Нави",
        source: "letopis", // западнославянский, но в восточнославянской традиции реконструируется
        description: "Олицетворение мрака и хаоса. В источниках известен у балтийских славян; в восточнославянской традиции его образ реконструируется как антагонист Белобога.",
        relations: [
            { type: "Отец", name: "Морана", id: "mora", icon: "user" }
        ],
        sphere: "Мрак, разрушение, смерть",
        cult: "Чёрные жертвоприношения.",
        type: "god"
    },

    mora: {
        name: "Морана",
        level: "naw-bg",
        title: "Богиня смерти и зимы",
        source: "obryad", // обрядовый
        description: "Богиня увядания природы, связана с зимой.",
        relations: [
            { type: "Отец", name: "Чернобог", id: "chernobog", icon: "user" }
        ],
        sphere: "Зима, смерть, болезни",
        cult: "Сожжение чучела зимой.",
        type: "god"
    },

    yascher: {
        name: "Ящер",
        level: "naw-bg",
        title: "Хтонический дракон",
        source: "folklor",
        description: "Чудовище подземных вод, иногда приносит дожди. Хтоническое существо, связанное с водой и подземным миром.",
        relations: [],
        sphere: "Подземные воды, дожди",
        cult: "Жертвы в лесные болота.",
        type: "god"
    },

    rusalki: {
        name: "Русалки",
        level: "naw-bg",
        title: "Духи воды и полей",
        source: "folklor",
        description: "Могут приносить плодородие, но и навредить. Часто связаны с утопленницами или некрещеными детьми.",
        relations: [
            { type: "Связь", name: "Водяной", id: "vodyanoy", icon: "water" }
        ],
        sphere: "Реки, поля, плодородие",
        cult: "Им жертвовали у воды.",
        type: "spirit"
    },

    viy: {
        name: "Вий",
        level: "naw-bg",
        title: "Демон со смертельным взглядом",
        source: "literatura", // литературный
        description: "В фольклоре — демон, чей взгляд убивает. Литературный образ из повести Гоголя. Как отдельного культа не имел.",
        relations: [
            { type: "Связь", name: "Чернобог", id: "chernobog", icon: "skull" }
        ],
        sphere: "Смерть, страх",
        cult: "Как отдельного культа не имел.",
        type: "spirit"
    },

    "baba-yaga": {
        name: "Баба-Яга",
        level: "naw-bg",
        title: "Ведьма лесная",
        source: "folklor",
        description: "Могущественная старуха-чародейка, хранительница границы миров.",
        relations: [
            { type: "Связь", name: "Леший", id: "leshy", icon: "tree" }
        ],
        sphere: "Мудрость, испытания, магия",
        cult: "Фольклорный персонаж, дары приносились для удачи.",
        type: "spirit"
    },

    mavka: {
        name: "Мавка",
        level: "naw-bg",
        title: "Дух умерших детей",
        source: "folklor",
        description: "Души некрещеных детей, часто как прекрасные девушки. Украинский персонаж.",
        relations: [
            { type: "Связь", name: "Русалки", id: "rusalki", icon: "water" }
        ],
        sphere: "Души, соблазн",
        cult: "Ставили кресты и приносили угощения.",
        type: "spirit"
    },

    upyr: {
        name: "Упырь",
        level: "naw-bg",
        title: "Вампир",
        source: "folklor",
        description: "Оживший мертвец, питающийся кровью.",
        relations: [
            { type: "Связь", name: "Навьи", id: "navyi", icon: "skull" }
        ],
        sphere: "Смерть, болезни, кровь",
        cult: "Осиновые колья в могилах.",
        type: "spirit"
    },

    volkolak: {
        name: "Волколак",
        level: "naw-bg",
        title: "Оборотень",
        source: "folklor",
        description: "Человек, превращающийся в волка.",
        relations: [
            { type: "Связь", name: "Велес", id: "veles", icon: "paw" }
        ],
