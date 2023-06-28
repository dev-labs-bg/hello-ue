const data = [
    {
        name: "floor-zero",
        title: "Нулев етаж",
        imgUrl: "../images/schema0.png",
        areas: [
            { name: "Кафене", shape: "poly", coords: [636, 472, 754, 667, 912, 574, 795, 377], fillColor: "#D1DEDE", },
            { name: "Тестови център", shape: "rect", coords: [217, 41, 365, 70], fillColor: "#D1DEDE", },
            { name: "WC - м/ж", shape: "rect", coords: [187, 50, 225, 76], fillColor: "#D1DEDE", },
            { name: "Компютърни зали", shape: "circle", coords: [106, 146, 23], fillColor: "D1DEDE" },
            { name: "Компютърни зали", shape: "circle", coords: [145, 206, 45], fillColor: "D1DEDE" }
        ]
    },
    {
        name: "floor-one",
        title: "Първи етаж",
        imgUrl: "../images/schema1.png",
        areas: [
            { name: "Вход", shape: "circle", coords: [147, 230, 14], fillColor: "#D1DEDE" },
            { name: "Кариерен център", shape: "rect", coords: [234, 110, 255, 147], fillColor: "#D1DEDE" },
            { name: "Книжарница", shape: "rect", coords: [211, 110, 234, 147], fillColor: "#D1DEDE" },
            { name: "Студентски съвет", shape: "rect", coords: [183, 111, 212, 146], fillColor: "#D1DEDE" },
            { name: "Международен офис", shape: "rect", coords: [157, 117, 184, 147], fillColor: "#D1DEDE" },
            { name: "Банка", shape: "rect", coords: [124, 129, 167, 150], fillColor: "#D1DEDE" },
            { name: "Стипендии & Общижития", shape: "rect", coords: [141, 182, 192, 206], fillColor: "#D1DEDE" },
            { name: "Информационен център", shape: "poly", coords: [107, 176, 131, 166, 97, 137], fillColor: "#D1DEDE" },
            { name: "Център магистри", shape: "rect", coords: [290, 242, 316, 270], fillColor: "#D1DEDE" },
            { name: "Фитнес", title: "Fitness", shape: "rect", coords: [418, 1, 487, 48], fillColor: "#D1DEDE" },
            { name: "Малка зала баскетбол", shape: "rect", coords: [416, 49, 455, 119], fillColor: "#D1DEDE" },
            { name: "Аула", title: "Aula-room", shape: "rect", coords: [451, 205, 499, 364], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-two",
        title: "Втори етаж",
        imgUrl: "../images/schema2.png",
        areas: [
            { name: "Студентски стол", shape: "circle", coords: [345, 85, 46], fillColor: "#D1DEDE" },
            { name: "Фронт офис", shape: "rect", coords: [277, 260, 304, 323], fillColor: "#D1DEDE" },
            { name: "WC - мъже", shape: "rect", coords: [266, 120, 294, 156], fillColor: "#D1DEDE" },
            { name: "WC - жени", shape: "rect", coords: [241, 121, 265, 157], fillColor: "#D1DEDE" },
            { name: "Финансов отдел", shape: "rect", coords: [158, 119, 210, 157], fillColor: "#D1DEDE" },
            { name: "Зала баскетбол", shape: "rect", coords: [404, 21, 473, 122], fillColor: "#D1DEDE" },
            { name: "Художествена гимнастика", shape: "rect", coords: [441, 123, 474, 205], fillColor: "#D1DEDE" },
            { name: "Зала за тенис на маса", shape: "rect", coords: [391, 206, 433, 241], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-three",
        title: "Трети етаж",
        imgUrl: "../images/schema3.png",
        areas: [
            { name: "WC - мъже", shape: "rect", coords: [275, 115, 300, 147], fillColor: "#D1DEDE" },
            { name: "WC - жени", shape: "rect", coords: [249, 111, 273, 149], fillColor: "#D1DEDE" },
            { name: "Столова - служители и преподаватели", shape: "circle", coords: [339, 72, 52], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-four",
        title: "Четвърти етаж",
        imgUrl: "../images/schema4.png",
        areas: [
            { name: "Кафе", shape: "rect", coords: [390, 169, 430, 211], fillColor: "#D1DEDE" },
            { name: "WC - мъже", shape: "rect", coords: [258, 127, 282, 160], fillColor: "#D1DEDE" },
            { name: "WC - жени", shape: "rect", coords: [233, 127, 257, 159], fillColor: "#D1DEDE" },
            { name: "Стълби", shape: "rect", coords: [353, 82, 386, 97], fillColor: "#D1DEDE" },
            { name: "Конферента зала", shape: "circle", coords: [157, 159, 25], fillColor: "#D1DEDE" },
            { name: "Стълби", shape: "circle", coords: [89, 188, 7], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-five",
        title: "Пети етаж",
        imgUrl: "../images/schema5.png",
        areas: [
            { name: "Заемна библиотека", shape: "rect", coords: [299, 191, 388, 221], fillColor: "#D1DEDE" },
            { name: "Асансьор", shape: "rect", coords: [364, 98, 399, 111], fillColor: "#D1DEDE" },
            { name: "Асансьор", shape: "circle", coords: [306, 168, 1], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-six",
        title: "Шести етаж",
        imgUrl: "../images/schema6.png",
        areas: [
            { name: "Асаньор", shape: "rect", coords: [313, 179, 341, 197], fillColor: "#D1DEDE" },
            { name: "Копирни услуги", shape: "rect", coords: [349, 245, 399, 282], fillColor: "#D1DEDE" },
        ]
    }
]

export default data