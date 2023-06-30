const data = [
    {
        name: "floor-zero",
        title: "Нулев етаж",
        imgUrl: "../images/schema0.png",
        areas: [
            { name: "Галерия 'Академика'", shape: "circle", coords: [912, 694, 136], fillColor: "D1DEDE" },
            { name: "Кафене", shape: "poly", coords: [636, 472, 754, 667, 912, 574, 795, 377], fillColor: "#D1DEDE", },
            { name: "WC - м/ж", shape: "circle", coords: [1024, 327, 89], fillColor: "#D1DEDE", },
            { name: "Компютърни зали 50/51", shape: "circle", coords: [718, 1032, 165], fillColor: "D1DEDE" },
            { name: "Електронни спортове 52", shape: "circle", coords: [540, 770, 99], fillColor: "D1DEDE" },
            { name: "Компютърни зала 53", shape: "circle", coords: [559, 599, 111], fillColor: "D1DEDE" },
            { name: "Тестови център / зала 55", shape: "rect", coords: [1089, 236, 1477, 356], fillColor: "#D1DEDE", },
            { name: "Тестови център / зала 56", shape: "rect", coords: [1480, 204, 1824, 345], fillColor: "#D1DEDE", },
            { name: "Център медиация", shape: "rect", coords: [1682, 1010, 2048, 1162], fillColor: "#D1DEDE", },
        ]
    },
    {
        name: "floor-one",
        title: "Първи етаж",
        imgUrl: "../images/schema1.png",
        areas: [
            { name: "Вход", shape: "circle", coords: [744, 1143, 61], fillColor: "#D1DEDE" },
            { name: "WC - мъже", shape: "rect", coords: [1387, 555, 1513, 727], fillColor: "#D1DEDE" },
            { name: "WC - жени", shape: "rect", coords: [1261, 554, 1381, 727], fillColor: "#D1DEDE" },
            { name: "Кариерен център", shape: "rect", coords: [1161, 554, 1258, 725], fillColor: "#D1DEDE" },
            { name: "Книжарница", shape: "rect", coords: [1060, 554, 1157, 726], fillColor: "#D1DEDE" },
            { name: "Студентски съвет", shape: "rect", coords: [907, 553, 1056, 732], fillColor: "#D1DEDE" },
            { name: "Международен офис", shape: "poly", coords: [832, 750, 842, 564, 920, 730], fillColor: "#D1DEDE" },
            { name: "Банка", shape: "circle", coords: [736, 692, 77], fillColor: "#D1DEDE" },
            { name: "Стипендии & Общижития", shape: "circle", coords: [838, 954, 111], fillColor: "#D1DEDE" },
            { name: "Конферентна зала", shape: "rect", coords: [942, 840, 1291, 1022], fillColor: "#D1DEDE" },
            { name: "Конферентна зала 116", shape: "rect", coords: [1447, 1044, 1565, 1194], fillColor: "#D1DEDE" },
            { name: "Информационен център", shape: "circle", coords: [554, 772, 82], fillColor: "#D1DEDE" },
            { name: "Център магистри", shape: "rect", coords: [1447, 1201, 1563, 1335], fillColor: "#D1DEDE" },
            { name: "Академичен клуб", shape: "rect", coords: [1914, 1619, 2077, 1740], fillColor: "#D1DEDE" },
            { name: "Фитнес", title: "Fitness", shape: "rect", coords: [2068, 19, 2410, 237], fillColor: "#D1DEDE" },
            { name: "Малка зала баскетбол", shape: "rect", coords: [2068, 241, 2252, 589], fillColor: "#D1DEDE" },
            { name: "Аула", title: "Aula-room", shape: "rect", coords: [2228, 1000, 2468, 1709], fillColor: "#D1DEDE" },
            { name: "Кафене - аула", title: "Aula-room", shape: "rect", coords: [2286, 1710, 2406, 1797], fillColor: "#D1DEDE" },
            { name: "Асансьор / стълби", shape: "circle", coords: [1583, 600, 63], fillColor: "#D1DEDE" },
            { name: "Стълби", shape: "circle", coords: [1915, 361, 50], fillColor: "#D1DEDE" },
            { name: "Асансьор", shape: "circle", coords: [2006, 379, 44], fillColor: "#D1DEDE" },
            { name: "Лекар", shape: "rect", coords: [2336, 803, 2410, 962], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-two",
        title: "Втори етаж",
        imgUrl: "../images/schema2.png",
        areas: [
            { name: "Студентски стол", shape: "circle", coords: [1646, 298, 169], fillColor: "#D1DEDE" },
            { name: "Фронт офис 'студенти'", shape: "rect", coords: [1392, 1291, 1519, 1587], fillColor: "#D1DEDE" },
            { name: "Ректор", shape: "rect", coords: [1863, 1665, 2023, 1784], fillColor: "#D1DEDE" },
            { name: "Ректорат", shape: "rect", coords: [1576, 1591, 2029, 1660], fillColor: "#D1DEDE" },
            { name: "WC", shape: "rect", coords: [1934, 789, 2057, 1009], fillColor: "#D1DEDE" },
            { name: "Кафене", shape: "rect", coords: [2056, 610, 2183, 715], fillColor: "#D1DEDE" },
            { name: "WC - мъже", shape: "rect", coords: [1328, 598, 1458, 769], fillColor: "#D1DEDE" },
            { name: "WC - жени", shape: "rect", coords: [1203, 598, 1326, 769], fillColor: "#D1DEDE" },
            { name: "Стълбище", shape: "circle", coords: [606, 1124, 76], fillColor: "#D1DEDE" },
            { name: "Асаньор / стълби", shape: "circle", coords: [1525, 649, 66], fillColor: "#D1DEDE" },
            { name: "Асаньор", shape: "circle", coords: [1947, 426, 47], fillColor: "#D1DEDE" },
            { name: "Стълбище", shape: "circle", coords: [1856, 402, 53], fillColor: "#D1DEDE" },
            { name: "Финансов отдел", shape: "rect", coords: [800, 589, 1054, 778], fillColor: "#D1DEDE" },
            { name: "Зала баскетбол", shape: "rect", coords: [2013, 102, 2355, 607], fillColor: "#D1DEDE" },
            { name: "Художествена гимнастика", shape: "rect", coords: [2186, 610, 2357, 1007], fillColor: "#D1DEDE" },
            { name: "Зала за тенис на маса", shape: "rect", coords: [1944, 1016, 2154, 1179], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-three",
        title: "Трети етаж",
        imgUrl: "../images/schema3.png",
        areas: [
            { name: "Столова - служители и преподаватели", shape: "circle", coords: [1692, 257, 154], fillColor: "#D1DEDE" },
            { name: "Стълби", shape: "circle", coords: [1898, 390, 50], fillColor: "#D1DEDE" },
            { name: "Асансьор", shape: "circle", coords: [1994, 390, 44], fillColor: "#D1DEDE" },
            { name: "Асансьор / стълби", shape: "circle", coords: [1566, 614, 64], fillColor: "#D1DEDE" },
            { name: "Стълбище", shape: "circle", coords: [1813, 1522, 91], fillColor: "#D1DEDE" },
            { name: "WC - жени", shape: "rect", coords: [1240, 565, 1366, 736], fillColor: "#D1DEDE" },
            { name: "WC - мъже", shape: "rect", coords: [1368, 564, 1498, 738], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-four",
        title: "Четвърти етаж",
        imgUrl: "../images/schema4.png",
        areas: [
            { name: "Кафе", shape: "rect", coords: [1938, 823, 2128, 1042], fillColor: "#D1DEDE" },
            { name: "WC м/ж", shape: "rect", coords: [1936, 595, 2130, 817], fillColor: "#D1DEDE" },
            { name: "WC - мъже", shape: "rect", coords: [1284, 620, 1409, 786], fillColor: "#D1DEDE" },
            { name: "WC - жени", shape: "rect", coords: [1162, 621, 1279, 786], fillColor: "#D1DEDE" },
            { name: "Асансьор / стълби", shape: "circle", coords: [1473, 661, 65], fillColor: "#D1DEDE" },
            { name: "Стълби", shape: "circle", coords: [1795, 446, 45], fillColor: "#D1DEDE" },
            { name: "Асансьор", shape: "circle", coords: [1883, 451, 37], fillColor: "#D1DEDE" },
            { name: "Конферента зала", shape: "circle", coords: [801, 795, 124], fillColor: "#D1DEDE" },
            { name: "Стълбище", shape: "circle", coords: [466, 887, 48], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-five",
        title: "Пети етаж",
        imgUrl: "../images/schema5.png",
        areas: [
            { name: "Заемна библиотека", shape: "rect", coords: [1479, 932, 1930, 1092], fillColor: "#D1DEDE" },
            { name: "Асансьор", shape: "circle", coords: [1942, 518, 39], fillColor: "#D1DEDE" },
            { name: "Стълби", shape: "circle", coords: [1854, 516, 49], fillColor: "#D1DEDE" },
            { name: "WC м/ж", shape: "rect", coords: [1384, 759, 1457, 859], fillColor: "#D1DEDE" },
            { name: "Асансьор / стълби", shape: "circle", coords: [1519, 810, 64], fillColor: "#D1DEDE" },
            { name: "Стълбище", shape: "circle", coords: [495, 982, 55], fillColor: "#D1DEDE" },
        ]
    },
    {
        name: "floor-six",
        title: "Шести етаж",
        imgUrl: "../images/schema6.png",
        areas: [
            { name: "Стълби", shape: "circle", coords: [724, 459, 54], fillColor: "#D1DEDE" },
            { name: "Асансьор", shape: "circle", coords: [819, 465, 38], fillColor: "#D1DEDE" },
            { name: "WC м/ж", shape: "rect", coords: [873, 709, 993, 811], fillColor: "#D1DEDE" },
            { name: "Копирни център", shape: "rect", coords: [873, 604, 991, 701], fillColor: "#D1DEDE" },
        ]
    }
]

export default data