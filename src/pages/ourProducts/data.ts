interface ProductDataProps {
	label: string;
	img: string;
	img2?: string;
	subLabel?: string;
	children?: Array<ProductDataProps>;
}
const productData: Array<ProductDataProps> = [
	{
		label: "1 Bedsheet + 2 Pillow Set",
		subLabel:
			"100 percent cotton double bed sheet with 2 pillow covers in multiple designs such as stripes, florals and abstract. Enliven your bedroom decor with our bed sheets which come in a vibrant range of colors and designs that will look great in Indian homes.",
		img: "./FANTASY_SET.jpg",
		children: [
			{
				label: "Blue berry",
				img: ""				
			},
			{
				label: "Classic Dye",
				img: "/CLASSICDYE_SET.jpg",
				
			},
			{
				label: "Blossoms",
				img: "/BLOSSOMS_SET.jpg",
				
			},
			{
				label: "Colors",
				img: "/COLORS_SET.jpg",
				
			},
			{
				label: "Classic",
				img: "/CLASSIC_SET.jpg",
				
			},
			{
				label: "Crown",
				img: "/CLASSIC_SET.jpg",
			},
			{
				label: "Divin",
				img: "/DIVINE_SET.jpg",	
			},
			{
				label: "Elegance",
				img: "/ELEGANCE_SET.jpg",	
			},
			{
				label: "Fantasy",
				img: "/FANTASY_SET.jpg",
			},
			{
				label: "Festival",
				img: "/FESTIVAL_SET.jpg",
				
			},
			{
				label: "Freedom",
				img: "/FREEDOM_SET.jpg",
				
			},
			{
				label: "Freedom Dye",
				img: "/FREEDOMDYE_SET.jpg",
				
			},
			{
				label: "Five Star White",
				img: "/CLASSIC_SET.jpg",
				
			},
			{
				label: "Five Star Dekuxe",
				img: "/CLASSIC_SET.jpg",
				
			},
			{
				label: "Five Star Supreme",
				img: "/CLASSIC_SET.jpg",
				
			},
			{
				label: "Galaxy",
				img: "/GALAXY_SET.jpg",
				
			},
			{
				label: "Glory",
				img: "/GLORY_SET.jpg",
				
			},
			{
				label: "Impression",
				img: "/IMPRESSION_SET.jpg",
				
			},
			{
				label: "Kidzee",
				img: "/KIDZEE_SET.jpg",
				
			},
			{
				label: "Layers",
				img: "/LAYERS_SET.jpg",
				
			},
			{
				label: "Lotus",
				img: "/LOTUS_SET.jpg",
				
			},
			{
				label: "Magic",
				img: "/MAGIC_SET.jpg",
				
			},
			{
				label: "Magnum",
				img: "/MAGNUM_SET.jpg",
				
			},
			{
				label: "Miracle",
				img: "/MIRACLE_SET.jpg",
				
			},
			{
				label: "Orchid",
				img: "/ORCHID_SET.jpg",
				
			},
			{
				label: "Opel",
				img: "/OPEL_SET.jpg",
				
			},
			{
				label: "Oreava",
				img: "/OREAVA_SET.jpg",
				
			},
			{
				label: "Paradise",
				img: "/PARADISE_SET.jpg",
				
			},
			{
				label: "Plain Cashment White",
				img: "/LAYERS_SET.jpg",
				
			},
			{
				label: "Polygold",
				img: "/POLYGOLD_SET.jpg",
				
			},
			{
				label: "Plain Shiting White",
				img: "/LAYERS_SET.jpg",
				
			},
			{
				label: "Qualis",
				img: "/QUALIS_SET.jpg",
				
			},
			{
				label: "Richlook",
				img: "/RICHLOOK_SET.jpg",
				
			},
			{
				label: "Signity",
				img: "/SIGNITY_SET.jpg",
				
			},
			{
				label: "Sunshine",
				img: "/SUNSHINE_SET.jpg",
				
			},
			{
				label: "Titanic",
				img: "/TITANIC_SET.jpg",
				
			},
			{
				label: "Unique",
				img: "/UNIQUE_SET.jpg",
				
			},
			{
				label: "Vega",
				img: "/VEGA_SET.jpg",
				
			},
			{
				label: "Venus",
				img: "/VENUS_SET.jpg",
				
			},
			{
				label: "Victory",
				img: "/VICTORY_SET.jpg",
				
			}

		]
	},
	{
		label: "Mattress Protector(WaterProof) ",
		subLabel:
			"Our mattress protector offers protection to the mattress from accidents. i-sleep Mattress protector is waterproof and protects mattress against any liquid spill over by a kids, pet or during regular usage.",
		img: "https://images.unsplash.com/photo-1561316441-2ab442340b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWF0cmVzcyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		label: "Gift Packing",
		subLabel:
			"All the bedsheets are made in such a way to make sure that your bedroom looks elegant and also bedsheet remains soft and skin friendly. This gives the modern, classy, lustrous and smooth look.These double bed sheets also make excellent Birthday gift for kids and House Warming gifts for the near and dear ones and family.",
		img: "https://images.unsplash.com/photo-1592903297149-37fb25202dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
	},
	{
		label: "Pillow Covers",
		subLabel:
			"Dress your bed in style with the versatile and attractive range of pillow covers. These pillow covers are made of high strength 100 percent cotton yarn providing the charm needed to complete any bedroom.",
		img: "./VENUS_P.JPG",
	},
	{
		label: "Sofa Seat back",
		subLabel:
			"Cover your sofas with the stylish and elegant sofa covers. These sofa covers sets are ideal for your living room or for your bedroom. These sofa covers have a modern pattern and designed to match up on going home decor trends.",
		img: "./10.jpg",
	},
	{
		label: "Dewan Set",
		subLabel:
			"Dewan Set is what all you need for luxurious feel in your rooms. These dewan sets give graceful and modern look to any dewan. 100 percent color fastness - fade-resistant.",
		img: "./GOLDQUEEN_D.jpg",
	},
	{
		label: "Bedsheets",
		subLabel:
			"Presenting the exclusive collection for your  home.  Bring home the classy yet traditional bed sheets to make your bedroom look outstanding. Made from pure cotton which is extremely skin friendly. ",
		img: "./MERINA_SET.jpg",
	},
	{
		label: "2 Bedsheets + 2 Pillow Set",
		subLabel:
			"Make your home interiors look lavish and beautiful with our two double bed sheet and two pillow cover set. It features a stylish design that makes your room look more appealing. ",
		img: "./LAYERS_SET.jpg",
	},
	{
		label: "Cushion Covers",
		subLabel:
			"These decorative Cushion Covers from our collection will surely put your bed in a great mood that you always wanted to set also you can use them as sofa cushion covers or as cushion covers for chairs",
		img: "./LAYERS_P.JPG",
	},
	{
		label: "Bolseter Cushion Set",
		subLabel:
			"These Cushion Cover & Bolster Cover Combo are available in Cotton as well as in Shaneel material. Use these cushion cover & bolster cover combo for missing touch of furnishing in your rooms.",
		img: "https://images.unsplash.com/photo-1488320504421-6f0d07388737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvbHN0ZXIlMjBjdXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		label: "A/C Quilt / Dohar",
		subLabel:
			"Beautify the interiors of your bedroom by these beautiful reversible A.C. Quilts / Dohars. The stunning design of this dohars provides a rich and vibrant feel which also makes your room more royal.",
		img: "https://images.unsplash.com/photo-1623111773154-05d3be4a70d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	},
	{
		label: "Bolster Covers",
		subLabel:
			"PASHUPATI brings to your room decor, a set of high quality cotton or shaneel made bolster covers that will enlighten your room.",
		img: "https://images.unsplash.com/photo-1488320504421-6f0d07388737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvbHN0ZXIlMjBjdXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		label: "Table Covers",
		subLabel:
			"Protect your valuable furniture from accidental spills and mishaps by spreading this durable table cover. Shaneel quality of this cover enhance the beauty of the table while ensuring proper protection. These covers also enhance the life and functionality of the Furniture.",
		img: "https://images.unsplash.com/photo-1576506542790-51244b486a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGUlMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		label: "Topsheet",
		subLabel:
			"These Topsheets are skin friendly and therefore does not make any kind of discomfort or irritation. Moreover, you will never feel any fade in the color or textures in the topsheets even after having a machine wash. We intend you to provide with the premium quality and extraordinary topsheets , so that you can have luxuries feel in your bed room ",
		img: "https://images.unsplash.com/photo-1516707471165-777029111409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVpbHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
	},
];

export default productData;
