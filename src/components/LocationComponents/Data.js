
const data = {
	staticData: [
		{
			id: 1,
			name: "floor-zero",
			title: "Нулев етаж",
		},
		{
			id: 2,
			name: "first-floor",
			title: "Първи етаж",
		},
		{
			id: 3,
			name: "second-floor",
			title: "Втори етаж",
		},
		{
			id: 4,
			name: "third-floor",
			title: "Трети етаж",
		},
		{
			id: 5,
			name: "fourth-floor",
			title: "Четвърти етаж",
		},
		{
			id: 6,
			name: "fifth-floor",
			title: "Пети етаж",
		},
		{
			id: 7,
			name: "sixth-floor",
			title: "Шести етаж",
		},
	],
	schemeImages: [
		{
			id: 1,
			imgUrl: "../images/schema0.png"
		},
		{
			id: 2,
			imgUrl: "../images/schema1.png"
		},
		{
			id: 3,
			imgUrl: "../images/schema2.png"
		},
		{
			id: 4,
			imgUrl: "../images/schema3.png"
		},
		{
			id: 5,
			imgUrl: "../images/schema4.png"
		},
		{
			id: 6,
			imgUrl: "../images/schema5.png"
		},
		{
			id: 7,
			imgUrl: "../images/schema6.png"
		}
	],
	imgCoords: [
		{
			name: "floor-zero",
			areas: [
				{ name: "1", shape: "poly", coords: [178, 115, 149, 76, 141, 124], lineWidth: 2, preFillColor: "grey", },
				{ name: "test-center", shape: "rect", coords: [217, 41, 365, 70], preFillColor: "yellow", lineWidth: 4, },
				{ name: "WC", shape: "rect", coords: [187, 50, 225, 76], preFillColor: "blue", lineWidth: 4, },
			]
		},
		{
			name: "first-floor",
			areas: [
				{ name: "entrance", shape: "circle", coords: [147, 230, 14], fillColor: "blue" },
				{ name: "career-center", shape: "rect", coords: [234, 110, 255, 147], fillColor: "blue" },
				{ name: "bookstore", shape: "rect", coords: [211, 110, 234, 147], fillColor: "green" },
				{ name: "students-council", shape: "rect", coords: [183, 111, 212, 146], fillColor: "red" },
				{ name: "int-office", shape: "rect", coords: [157, 117, 184, 147], fillColor: "red" },
				{ name: "bank", shape: "rect", coords: [124, 129, 167, 150], fillColor: "red" },
				{ name: "scholarships", shape: "rect", coords: [141, 182, 192, 206], fillColor: "red" },
				{ name: "info-center", shape: "poly", coords: [107, 176, 131, 166, 97, 137], fillColor: "red" },
				{ name: "master's-center", title: "M-Center", shape: "rect", coords: [290, 242, 316, 270], fillColor: "red" },
				{ name: "fitness", title: "Fitness", shape: "rect", coords: [418, 1, 487, 48], fillColor: "red" },
				{ name: "basketball", title: "Basketball", shape: "rect", coords: [416, 49, 455, 119], fillColor: "red" },
				{ name: "aula-room", title: "Aula-room", shape: "rect", coords: [451, 205, 499, 364], fillColor: "red" },
			]
		},
		{
			name: "second-floor",
			areas: [
				{ name: "students's-resturant", title: "", shape: "rect", coords: [299, 36, 401, 115], fillColor: "blue" },
				{ name: "front-office", title: "", shape: "rect", coords: [277, 260, 304, 323], fillColor: "blue" },
				{ name: "finances", title: "", shape: "", coords: [158, 119, 210, 157], fillColor: "red" },
				{ name: "", title: "", shape: "", coords: [], fillColor: "red" },
				{ name: "", title: "", shape: "", coords: [], fillColor: "red" },
				{ name: "", title: "", shape: "", coords: [], fillColor: "red" },

			]
		},
		{
			name: "third-floor",
			areas: [
				{ name: "staff-resturant", title: "", shape: "rect", coords: [306, 27, 371, 87], fillColor: "red" },
				{ name: "men's", title: "WC", shape: "rect", coords: [275, 115, 300, 147], fillColor: "blue" },
				{ name: "woman's", title: "WC", shape: "rect", coords: [249, 111, 273, 149], fillColor: "pink" },
				{ name: "stairs", title: "", shape: "rect", coords: [374, 70, 408, 84], fillColor: "green" },
			]
		},
		{
			name: "fourth-floor",
			areas: [
				{ name: "caffe", title: "", shape: "rect", coords: [390, 169, 430, 211], fillColor: "brown" },
				{ name: "stairs", title: "", shape: "rect", coords: [353, 82, 386, 97], fillColor: "blue" },
				{ name: "confrence room", title: "WC", shape: "circle", coords: [157, 159, 25], fillColor: "yellow" },
				{ name: "stairs", title: "", shape: "circle", coords: [89, 188, 7], fillColor: "blue" },
			]
		},
		{
			name: "fifth-floor",
			areas: [
				{ name: "library", title: "", shape: "rect", coords: [299, 191, 388, 221], fillColor: "teal" },
				{ name: "stairs", title: "", shape: "rect", coords: [364, 98, 399, 111], fillColor: "blue" },
				{ name: "elevator", title: "", shape: "circle", coords: [306, 168, 1], fillColor: "green" },
				{ name: "stairs", title: "", shape: "circle", coords: [99, 201, 9], fillColor: "blue" },

			]
		},
		{
			name: "sixth-floor",
			areas: [
				{ name: "stairs", title: "", shape: "rect", coords: [270, 171, 311, 197], fillColor: "blue" },
				{ name: "elevator", title: "", shape: "rect", coords: [313, 179, 341, 197], fillColor: "green" },
				{ name: "copy-center", title: "", shape: "rect", coords: [349, 245, 399, 282], fillColor: "orange" },
			]
		}
	]
}


export default data;
