const data = [
    {
        name: "floor-zero",
        title: "Нулев етаж",
        imgUrl: "../images/schema0.png",
        areas: [
            { name: "Кафене", shape: "poly", coords: [178, 115, 149, 76, 141, 124], fillColor: "blue", },
            { name: "Тестови център", shape: "rect", coords: [217, 41, 365, 70], fillColor: "blue", },
            { name: "WC - м/ж", shape: "rect", coords: [187, 50, 225, 76], fillColor: "blue", },
        ]
    },
    {
        name: "floor-one",
        title: "Първи етаж",
        imgUrl: "../images/schema1.png",
        areas: [
            { name: "Вход", shape: "circle", coords: [147, 230, 14], fillColor: "blue" },
            { name: "Кариерен център", shape: "rect", coords: [234, 110, 255, 147], fillColor: "blue" },
            { name: "Книжарница", shape: "rect", coords: [211, 110, 234, 147], fillColor: "blue" },
            { name: "Студентски съвет", shape: "rect", coords: [183, 111, 212, 146], fillColor: "blue" },
            { name: "М/у офис", shape: "rect", coords: [157, 117, 184, 147], fillColor: "blue" },
            { name: "Банка", shape: "rect", coords: [124, 129, 167, 150], fillColor: "blue" },
            { name: "Стипендии & Общижития", shape: "rect", coords: [141, 182, 192, 206], fillColor: "blue" },
            { name: "Информационен център", shape: "poly", coords: [107, 176, 131, 166, 97, 137], fillColor: "blue" },
            { name: "Център магистри", shape: "rect", coords: [290, 242, 316, 270], fillColor: "blue" },
            { name: "Фитнес", title: "Fitness", shape: "rect", coords: [418, 1, 487, 48], fillColor: "blue" },
            { name: "Малка зала баскетбол", shape: "rect", coords: [416, 49, 455, 119], fillColor: "blue" },
            { name: "Аула", title: "Aula-room", shape: "rect", coords: [451, 205, 499, 364], fillColor: "blue" },
        ]
    },
    {
        name: "floor-two",
        title: "Втори етаж",
        imgUrl: "../images/schema2.png",
        areas: [
            { name: "Фронт офис", shape: "rect", coords: [277, 260, 304, 323], fillColor: "blue" },
            { name: "Счетоводство", shape: "rect", coords: [158, 119, 210, 157], fillColor: "blue" },
            { name: "Зала баскетбол", shape: "rect", coords: [404, 21, 473, 122], fillColor: "blue" },
        ]
    },
    {
        name: "floor-three",
        title: "Трети етаж",
        imgUrl: "../images/schema3.png",
        areas: [
            { name: "WC - мъже", shape: "rect", coords: [275, 115, 300, 147], fillColor: "blue" },
            { name: "WC - жени", shape: "rect", coords: [249, 111, 273, 149], fillColor: "blue" },
        ]
    },
    {
        name: "floor-four",
        title: "Четвърти етаж",
        imgUrl: "../images/schema4.png",
        areas: [
            { name: "Кафе", shape: "rect", coords: [390, 169, 430, 211], fillColor: "blue" },
            { name: "stairs", shape: "rect", coords: [353, 82, 386, 97], fillColor: "blue" },
            { name: "Конферента зала", shape: "circle", coords: [157, 159, 25], fillColor: "blue" },
            { name: "stairs", shape: "circle", coords: [89, 188, 7], fillColor: "blue" },
        ]
    },
    {
        name: "floor-five",
        title: "Пети етаж",
        imgUrl: "../images/schema5.png",
        areas: [
            { name: "Библиотека", shape: "rect", coords: [299, 191, 388, 221], fillColor: "blue" },
            { name: "Асансьор", shape: "rect", coords: [364, 98, 399, 111], fillColor: "blue" },
            { name: "Асансьор", shape: "circle", coords: [306, 168, 1], fillColor: "blue" },
        ]
    },
    {
        name: "floor-six",
        title: "Шести етаж",
        imgUrl: "../images/schema6.png",
        areas: [
            { name: "Асаньор", shape: "rect", coords: [313, 179, 341, 197], fillColor: "blue" },
            { name: "Копирни услуги", shape: "rect", coords: [349, 245, 399, 282], fillColor: "blue" },
        ]
    }
]

export default data