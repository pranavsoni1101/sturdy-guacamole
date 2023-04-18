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
		img: "https://images.unsplash.com/photo-1559841771-599b6eeaca62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
		children: [
			{
				label: "Blue berry",
				img: "https://images.unsplash.com/photo-1559841771-599b6eeaca62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
				
			},
			{
				label: "Blue berry",
				img: "https://images.unsplash.com/photo-1559841771-599b6eeaca62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
				
			},
			{
				label: "Blue berry",
				img: "https://images.unsplash.com/photo-1559841771-599b6eeaca62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
				
			},
			{
				label: "Blue berry",
				img: "https://images.unsplash.com/photo-1559841771-599b6eeaca62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
				
			},
			{
				label: "Blue berry",
				img: "https://images.unsplash.com/photo-1559841771-599b6eeaca62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
				
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
		img: "https://images.unsplash.com/photo-1582477400411-603c4679d579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
	},
	{
		label: "Sofa Seat back",
		subLabel:
			"Cover your sofas with the stylish and elegant sofa covers. These sofa covers sets are ideal for your living room or for your bedroom. These sofa covers have a modern pattern and designed to match up on going home decor trends.",
		img: "https://images.unsplash.com/photo-1495754149474-e54c07932677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	},
	{
		label: "Dewan Set",
		subLabel:
			"Dewan Set is what all you need for luxurious feel in your rooms. These dewan sets give graceful and modern look to any dewan. 100 percent color fastness - fade-resistant.",
		img: "data:image/jpeg;base64,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",
	},
	{
		label: "Bedsheets",
		subLabel:
			"Presenting the exclusive collection for your  home.  Bring home the classy yet traditional bed sheets to make your bedroom look outstanding. Made from pure cotton which is extremely skin friendly. ",
		img: "https://images.unsplash.com/photo-1577942199497-cdd452f1852b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkc2hlZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
	},
	{
		label: "2 Bedsheets + 2 Pillow Set",
		subLabel:
			"Make your home interiors look lavish and beautiful with our two double bed sheet and two pillow cover set. It features a stylish design that makes your room look more appealing. ",
		img: "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlZCUyMHNoZWV0JTIwc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		label: "Cushion Covers",
		subLabel:
			"These decorative Cushion Covers from our collection will surely put your bed in a great mood that you always wanted to set also you can use them as sofa cushion covers or as cushion covers for chairs",
		img: "https://images.unsplash.com/photo-1531592762598-58a792d73aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
