import { sequelize } from "../src/db.js";
import Product from "../src/models/Product.js";

const productsData = [
  {
    id: 1,
    titulo: "LATTAFA YARA PINK EDP 100ML",
    imagen: "/lattafa/lattafa_yara_pink_edp_100ml.jpg",
    descripcion:
      "Una fragancia femenina envolvente con notas de vainilla, almizcle blanco y flores rosadas.",
    precio: "75",
    stock: "41",
  },
  {
    id: 2,
    titulo: "LATTAFA TOURS 100 ML",
    imagen: "/lattafa/lattafa_tours_100ml.jpg",
    descripcion:
      "Aroma cálido y exótico con acordes de ámbar, cuero y especias orientales.",
    precio: "394",
    stock: "58",
  },
  {
    id: 3,
    titulo: "LATTAFA ASAD EDP 100 ML",
    imagen: "/lattafa/lattafa_asad_edp_100ml.webp",
    descripcion:
      "Fragancia intensa de carácter masculino con notas de incienso, madera de oud y vainilla.",
    precio: "285",
    stock: "35",
  },
  {
    id: 4,
    titulo: "LATTAFA YARA MOI EDP 100 ML",
    imagen: "/lattafa/lattafa_yara_moi_edp_100ml.webp",
    descripcion:
      "Perfume floral y afrutado con corazón de jazmín y fondo almizclado.",
    precio: "199",
    stock: "66",
  },
  {
    id: 5,
    titulo: "LATTAFA YARA CANDY EDP FEM 100ML",
    imagen: "/lattafa/lattafa_yara_candy_edp_fem_100ml.jpg",
    descripcion:
      "Deliciosamente dulce con notas de caramelo, frutos rojos y flores suaves.",
    precio: "213",
    stock: "90",
  },
  {
    id: 6,
    titulo: "LATTAFFA ASAD ZANZIBAR 100 ML",
    imagen: "/lattafa/lattafa_asad_zanzibar_100ml.webp",
    descripcion:
      "Evoca las costas de Zanzíbar con acordes de coco, especias y maderas exóticas.",
    precio: "172",
    stock: "47",
  },
  {
    id: 7,
    titulo: "LATTAFA ASAD BOURBON EDP 100 ML",
    imagen: "/lattafa/lattafa_asad_bourbon_edp_100ml.jpg",
    descripcion:
      "Mezcla embriagante de bourbon, canela y cuero envejecido para una experiencia intensa.",
    precio: "381",
    stock: "50",
  },
  {
    id: 8,
    titulo: "LATTAFFA KIT ASAD & ASAD ZANZIBAR",
    imagen: "/lattafa/lattafa_kit_asad_asad_zanzibar.webp",
    descripcion:
      "Set masculino que combina el carácter fuerte de Asad con la frescura tropical de Zanzíbar.",
    precio: "359",
    stock: "25",
  },
  {
    id: 9,
    titulo: "LATTAFA KIT YARA PINK & YARA CANDY",
    imagen: "/lattafa/lattafa_kit_yara_pink_yara_candy.webp",
    descripcion:
      "Dúo femenino de aromas dulces, suaves y románticos, ideal para el día a día.",
    precio: "298",
    stock: "30",
  },
  {
    id: 10,
    titulo: "LATTAFA BADEE AL OUD HONOR & GLORY EDP 100 ML",
    imagen: "/lattafa/lattafa_badee_al_oud_honor_glory_edp_100ml.webp",
    descripcion:
      "Un homenaje olfativo al oud con toques de madera de cedro y resinas oscuras.",
    precio: "374",
    stock: "33",
  },
  {
    id: 11,
    titulo: "LATTAFA BADEE AL OUD AMETHYST EDP 100 ML",
    imagen: "/lattafa/lattafa_badee_al_oud_amethyst_edp_100ml.jpg",
    descripcion:
      "Oud elegante con notas de rosa, azafrán y un toque de ámbar cálido.",
    precio: "241",
    stock: "60",
  },
  {
    id: 12,
    titulo: "LATTAFA BADEE AL OUD SUBLIME 100 ML",
    imagen: "/lattafa/lattafa_badee_al_oud_sublime_100ml.jpg",
    descripcion:
      "Fragancia intensa con corazón de incienso y final amaderado especiado.",
    precio: "352",
    stock: "38",
  },
  {
    id: 13,
    titulo: "LATTAFA BADEE AL OUD FOR GLORY EDP 100ML",
    imagen: "/lattafa/lattafa_badee_al_oud_for_glory_edp_100ml.jpg",
    descripcion:
      "Perfume potente y masculino con oud, pachulí y resinas exóticas.",
    precio: "324",
    stock: "42",
  },
  {
    id: 14,
    titulo: "LATTAFFA BADEE AL OUD NOBLE BLUSH",
    imagen: "/lattafa/lattafa_badee_al_oud_noble_blush.webp",
    descripcion:
      "Versión suave del clásico oud, combinada con pétalos frescos y almizcle.",
    precio: "277",
    stock: "53",
  },
  {
    id: 15,
    titulo: "LATTAFA KHAMRAH 100 ML",
    imagen: "/lattafa/lattafa_khamrah_100ml.jpeg",
    descripcion:
      "Aromático, especiado y envolvente; mezcla de canela, dátiles y vainilla oscura.",
    precio: "367",
    stock: "61",
  },
  {
    id: 16,
    titulo: "LATTAFA KHAMRAH QAHWA 100 ML",
    imagen: "/lattafa/lattafa_khamrah_qahwa_100ml.webp",
    descripcion:
      "Notas de café tostado, especias dulces y madera en una fragancia cálida.",
    precio: "215",
    stock: "27",
  },
  {
    id: 17,
    titulo: "LATTAFA RAVE NOW WOMAN",
    imagen: "/lattafa/lattafa_rave_now_woman.jpg",
    descripcion:
      "Moderno y chispeante, con frutas tropicales, flor de azahar y almizcle blanco.",
    precio: "178",
    stock: "39",
  },
  {
    id: 18,
    titulo: "LATTAFA RAVE NOW",
    imagen: "/lattafa/lattafa_rave_now.jpg",
    descripcion:
      "Aroma vibrante para el día con cítricos frescos, vetiver y notas verdes.",
    precio: "194",
    stock: "47",
  },
  {
    id: 19,
    titulo: "LATTAFA ANGHAM",
    imagen: "/lattafa/lattafa_angham.jpg",
    descripcion:
      "Perfume unisex de elegancia misteriosa con rosa negra, incienso y cuero.",
    precio: "262",
    stock: "36",
  },
  {
    id: 20,
    titulo: "THE KINGDOM MASCULINO",
    imagen: "/lattafa/the_kingdom_masculino.webp",
    descripcion:
      "Para el hombre moderno: madera seca, pimienta negra y vainilla especiada.",
    precio: "204",
    stock: "44",
  },

  {
    id: 21,
    titulo: "LATTAFA RAMEEZ SILVER",
    imagen: "/lattafa/lattafa_rameez_silver.jpg",
    descripcion:
      "Fragancia masculina fresca con lavanda, cítricos y un fondo amaderado limpio.",
    precio: "163",
    stock: "61",
  },
  {
    id: 22,
    titulo: "LATTAFA RAMEEZ BLUE",
    imagen: "/lattafa/lattafa_rameez_blue.jpg",
    descripcion:
      "Acordes marinos, bergamota y ámbar gris en una fragancia vibrante y juvenil.",
    precio: "173",
    stock: "54",
  },
  {
    id: 23,
    titulo: "LATTAFA ANA ABIYEDH",
    imagen: "/lattafa/lattafa_ana_abiyedh.jpg",
    descripcion:
      "Minimalista y elegante con notas limpias de almizcle blanco, vainilla y ámbar.",
    precio: "182",
    stock: "49",
  },
  {
    id: 24,
    titulo: "LATTAFA AJWAD",
    imagen: "/lattafa/lattafa_ajwad.jpg",
    descripcion:
      "Delicadamente dulce con flores, maderas suaves y un toque de frutas rojas.",
    precio: "208",
    stock: "72",
  },
  {
    id: 25,
    titulo: "LATTAFA AJWAD PINK",
    imagen: "/lattafa/lattafa_ajwad_pink.jpg",
    descripcion:
      "Versión femenina con un bouquet floral envolvente y notas gourmand suaves.",
    precio: "226",
    stock: "57",
  },
  {
    id: 26,
    titulo: "LATTAFA RAMZ GOLD",
    imagen: "/lattafa/lattafa_ramz_gold.jpg",
    descripcion:
      "Lujoso, con vainilla especiada, oud ligero y un corazón floral cálido.",
    precio: "247",
    stock: "35",
  },
  {
    id: 27,
    titulo: "LATTAFA RA'ED LUXE",
    imagen: "/lattafa/lattafa_raed_luxe.jpg",
    descripcion:
      "Mezcla oriental con oud suave, incienso blanco y un toque de miel especiada.",
    precio: "289",
    stock: "38",
  },
  {
    id: 28,
    titulo: "LATTAFA RAMZ SILVER",
    imagen: "/lattafa/lattafa_ramz_silver.jpg",
    descripcion:
      "Aroma limpio y metálico con lavanda, menta fresca y fondo almizclado.",
    precio: "204",
    stock: "46",
  },
  {
    id: 29,
    titulo: "LATTAFA QAED AL FURSAN UNISEX",
    imagen: "/lattafa/lattafa_qaed_al_fursan_unisex.jpg",
    descripcion:
      "Fragancia afrutada con piña, madera de cedro y vainilla dulce para todos los géneros.",
    precio: "213",
    stock: "40",
  },
  {
    id: 30,
    titulo: "LATTAFA QAED AL FURSAN MASCULINO",
    imagen: "/lattafa/lattafa_qaed_al_fursan_masculino.jpg",
    descripcion:
      "Versión intensa con oud, cuero y ámbar oscuro de fondo misterioso.",
    precio: "236",
    stock: "50",
  },
  {
    id: 31,
    titulo: "LATTAFA NAYEL",
    imagen: "/lattafa/lattafa_nayel.jpg",
    descripcion:
      "Composición elegante con cuero, tonka y un toque especiado ahumado.",
    precio: "318",
    stock: "29",
  },
  {
    id: 32,
    titulo: "LATTAFA NEBRAS",
    imagen: "/lattafa/lattafa_nebras.jpg",
    descripcion:
      "Dulce y cremoso con notas de vainilla, cacao y flor de naranjo.",
    precio: "261",
    stock: "43",
  },
  {
    id: 33,
    titulo: "LATTAFA MOUSUF RAMADI",
    imagen: "/lattafa/lattafa_mousuf_ramadi.jpg",
    descripcion:
      "Fresco y especiado, con lavanda, pimienta y un fondo ambarado cálido.",
    precio: "179",
    stock: "64",
  },
  {
    id: 34,
    titulo: "LATTAFA MOUSUF",
    imagen: "/lattafa/lattafa_mousuf.jpg",
    descripcion:
      "Dulce oriental con notas de frutas maduras, ámbar y maderas suaves.",
    precio: "198",
    stock: "68",
  },
  {
    id: 35,
    titulo: "LATTAFA MOUSUF WODI",
    imagen: "/lattafa/lattafa_mousuf_wodi.jpg",
    descripcion: "Profundo y seductor con acordes de incienso, cuero y oud.",
    precio: "236",
    stock: "32",
  },
  {
    id: 36,
    titulo: "LATTAFA MAHASIN CRYSTAL",
    imagen: "/lattafa/lattafa_mahasin_crystal.jpg",
    descripcion:
      "Ligero y chispeante, con cítricos, jazmín y almizcle cristalino.",
    precio: "159",
    stock: "77",
  },
  {
    id: 37,
    titulo: "LATTAFA MAHASIN GOLD",
    imagen: "/lattafa/lattafa_mahasin_gold.jpg",
    descripcion: "Versión dorada, dulce con miel, rosas y maderas suaves.",
    precio: "187",
    stock: "62",
  },
  {
    id: 38,
    titulo: "LATTAFA MAHASIN BLOOM",
    imagen: "/lattafa/lattafa_mahasin_bloom.jpg",
    descripcion:
      "Primaveral, con pétalos frescos, frutas jugosas y fondo almizclado.",
    precio: "176",
    stock: "53",
  },
  {
    id: 39,
    titulo: "LATTAFA MAHASIN OUD",
    imagen: "/lattafa/lattafa_mahasin_oud.jpg",
    descripcion:
      "Una versión amaderada con oud refinado, resinas y rosa oriental.",
    precio: "219",
    stock: "36",
  },
  {
    id: 40,
    titulo: "LATTAFA MAHASIN WHITE",
    imagen: "/lattafa/lattafa_mahasin_white.jpg",
    descripcion:
      "Delicadamente fresco con flores blancas, almizcle suave y toques cítricos.",
    precio: "195",
    stock: "49",
  },

  {
    id: 41,
    titulo: "RADIO VINTAGE",
    imagen: "/lattafa/lattafa_radio_vintage.jpg",
    descripcion:
      "Perfume sofisticado con notas florales y amaderadas, ideal para ocasiones especiales.",
    precio: 120,
    stock: 14,
  },
  {
    id: 43,
    titulo: "PRIDE ISHQ AL SHUYUKH (GOLD EDITION)",
    imagen: "/lattafa/lattafa_pride_ishq_al_shuyukh_gold_edition.webp",
    descripcion:
      "Aroma elegante con toques cítricos y especiados, ideal para cualquier estación del año.",
    precio: 230,
    stock: 15,
  },
  {
    id: 44,
    titulo: "LATTAFA NEBRAS EDP 100 ML",
    imagen: "/lattafa/lattafa_nebras_edp_100ml.jpg",
    descripcion:
      "Fragancia fresca y versátil con notas cítricas y amaderadas para uso diario.",
    precio: 190,
    stock: 5,
  },
  {
    id: 45,
    titulo: "LATTAFA ANSAAM GOLD",
    imagen: "/lattafa/lattafa_ansaam_gold.webp",
    descripcion:
      "Perfume cálido con notas de ámbar y especias que destacan la elegancia.",
    precio: 150,
    stock: 3,
  },
  {
    id: 46,
    titulo: "LATTAFA ANSAAM SILVER 100 ML",
    imagen: "/lattafa/lattafa_ansaam_silver_100ml.webp",
    descripcion:
      "Notas de vainilla, ámbar y almizcle que aportan calidez y personalidad.",
    precio: 210,
    stock: 5,
  },
  {
    id: 47,
    titulo: "LATTAFA EMEER",
    imagen: "/lattafa/lattafa_emeer.webp",
    descripcion:
      "Aroma intenso con acordes florales y amaderados, perfecto para la noche.",
    precio: 180,
    stock: 7,
  },
  {
    id: 48,
    titulo: "LATTAFA MAYAR EDP 100 ML",
    imagen: "/lattafa/lattafa_mayar_edp_100ml.jpeg",
    descripcion:
      "Fragancia fresca y vibrante con notas florales para un uso diario.",
    precio: 160,
    stock: 6,
  },
  {
    id: 49,
    titulo: "LATTAFA MAYAR NATURAL INTENSE EDP 100 ML",
    imagen: "/lattafa/lattafa_mayar_natural_intense_edp_100ml.webp",
    descripcion:
      "Versión intensa con notas frutales y florales, ideal para quienes buscan presencia.",
    precio: 220,
    stock: 8,
  },
  {
    id: 50,
    titulo: "LATTAFA MAYAR CHERRY INTENSE EDP 100 ML",
    imagen: "/lattafa/lattafa_mayar_cherry_intense_edp_100ml.jpg",
    descripcion:
      "Fragancia dulce con notas de cereza y vainilla que cautiva los sentidos.",
    precio: 240,
    stock: 9,
  },
  {
    id: 51,
    titulo: "LATTAFA FAKHAR WOMAN ROSE EDP 100 ML",
    imagen: "/lattafa/lattafa_fakhar_woman_rose_edp_100ml.jpg",
    descripcion:
      "Notas delicadas de rosa y almizcle para una fragancia femenina y elegante.",
    precio: 260,
    stock: 12,
  },
  {
    id: 52,
    titulo: "LATTAFA FAKHAR DORADO EDP 100 ML",
    imagen: "/lattafa/lattafa_fakhar_dorado_edp_100ml.webp",
    descripcion: "Aroma sofisticado con notas doradas de ámbar y madera.",
    precio: 255,
    stock: 10,
  },
  {
    id: 53,
    titulo: "LATTAFA FAKHAR HOMBRE EDP 100 ML",
    imagen: "/lattafa/lattafa_fakhar_hombre_edp_100ml.webp",
    descripcion:
      "Fragancia masculina con notas especiadas y amaderadas para uso diario.",
    precio: 230,
    stock: 11,
  },
  {
    id: 54,
    titulo: "LATTAFA TA'WELL EDP 100 ML",
    imagen: "/lattafa/lattafa_tawell_edp_100ml.webp",
    descripcion:
      "Aroma fresco con un toque cítrico y especiado para una personalidad única.",
    precio: 200,
    stock: 6,
  },
  {
    id: 55,
    titulo: "LATTAFA A PISA EDP 100 ML",
    imagen: "/lattafa/lattafa_a_pisa_edp_100ml.jpg",
    descripcion:
      "Fragancia intensa con notas florales y especiadas que perduran todo el día.",
    precio: 195,
    stock: 4,
  },
  {
    id: 56,
    titulo: "LATTAFA CONFIDENTIAL PRIVATE GOLD 100ML UNISEX",
    imagen: "/lattafa/lattafa_confidential_private_gold_100ml_unisex.webp",
    descripcion:
      "Aroma unisex con notas doradas, ideal para ocasiones especiales.",
    precio: 280,
    stock: 7,
  },
  {
    id: 57,
    titulo: "LATTAFA CONFIDENTIAL PLATINUM EDP 100ML UNISEX",
    imagen: "/lattafa/lattafa_confidential_platinum_edp_100ml_unisex.webp",
    descripcion: "Fragancia unisex elegante con notas metálicas y florales.",
    precio: 290,
    stock: 8,
  },
  {
    id: 58,
    titulo: "LATTAFA OUD MOOD EDP 100ML",
    imagen: "/lattafa/lattafa_oud_mood_edp_100ml.jpg",
    descripcion: "Aroma intenso de oud con matices amaderados y especiados.",
    precio: 260,
    stock: 5,
  },
  {
    id: 59,
    titulo: "LATTAFA OUD MOOD ELIXIR EDP 100ML UNISEX",
    imagen: "/lattafa/lattafa_oud_mood_elixir_edp_100ml_unisex.webp",
    descripcion:
      "Versión elixir con mayor concentración de oud y notas florales.",
    precio: 310,
    stock: 6,
  },
  {
    id: 60,
    titulo: "LATTAFFA AJAYEB DUBAINEGRO EDP 100 ML",
    imagen: "/lattafa/lattafa_ajayeb_dubainegro_edp_100ml.jpg",
    descripcion: "Fragancia intensa y oscura con notas de especias y madera.",
    precio: 240,
    stock: 4,
  },
  {
    id: 61,
    titulo: "LATTAFFA AJAYEB DUBAI EDP 100 ML",
    imagen: "/lattafa/lattafa_ajayeb_dubai_edp_100ml.webp",
    descripcion:
      "Aroma clásico con una mezcla equilibrada de especias y madera.",
    precio: 230,
    stock: 7,
  },
  {
    id: 62,
    titulo: "LATTAFA HAYAATI AL MALEKY AZUL EDP 100 ML",
    imagen: "/lattafa/lattafa_hayaati_al_maleky_azul_edp_100ml.webp",
    descripcion: "Fragancia fresca y acuática con notas cítricas y florales.",
    precio: 220,
    stock: 9,
  },
  {
    id: 63,
    titulo: "LATTAFA HAYAATI EDP 100ML",
    imagen: "/lattafa/lattafa_hayaati_edp_100ml.jpg",
    descripcion:
      "Aroma femenino con notas dulces y florales para el día a día.",
    precio: 210,
    stock: 11,
  },
  {
    id: 64,
    titulo: "LATTAFA HAYAATI FLORENCE EDP FEM 100ML",
    imagen: "/lattafa/lattafa_hayaati_florence_edp_fem_100ml.jpeg",
    descripcion:
      "Fragancia femenina con un toque fresco y floral, perfecta para primavera.",
    precio: 215,
    stock: 7,
  },
  {
    id: 65,
    titulo: "LATTAFA HAYAATI GOLD ELIXIR MAS EDP 100ML",
    imagen: "/lattafa/lattafa_hayaati_gold_elixir_edp_100ml.webp",
    descripcion: "Versión dorada con notas intensas de ámbar y madera.",
    precio: 270,
    stock: 6,
  },
  {
    id: 66,
    titulo: "LATTAFA SONDOS 100 ML",
    imagen: "/lattafa/lattafa_sondos_100ml.jpg",
    descripcion:
      "Fragancia suave con notas florales y almizcle para uso diario.",
    precio: 180,
    stock: 10,
  },
  {
    id: 67,
    titulo: "LATTAFFA VELVET ROSE EDP EDP 100 ML",
    imagen: "/lattafa/lattafa_velvet_rose_edp_100ml.webp",
    descripcion: "Aroma floral y aterciopelado con notas de rosa y vainilla.",
    precio: 260,
    stock: 8,
  },
  {
    id: 68,
    titulo: "LATTAFA VELVET MUSK 100 ML",
    imagen: "/lattafa/lattafa_velvet_musk_100ml.webp",
    descripcion:
      "Fragancia sensual con notas de almizcle y madera para la noche.",
    precio: 250,
    stock: 9,
  },
  {
    id: 69,
    titulo: "LATTAFA VELVET OUD EDP EDP 100 ML",
    imagen: "/lattafa/lattafa_velvet_oud_edp_100ml.webp",
    descripcion: "Aroma intenso y sofisticado con notas de oud y especias.",
    precio: 270,
    stock: 7,
  },
  {
    id: 70,
    titulo: "LATTAFA PRIDE SHAHEEN GOLD EDP 100ML",
    imagen: "/lattafa/lattafa_pride_shaheen_gold_edp_100ml.jpg",
    descripcion: "Fragancia dorada con notas cálidas y especiadas.",
    precio: 280,
    stock: 6,
  },
  {
    id: 71,
    titulo: "LATTAFA PRIDE SHAHEEN SILVER EDP 100ML",
    imagen: "/lattafa/lattafa_pride_shaheen_silver_edp_100ml.jpg",
    descripcion: "Aroma fresco con toques metálicos y cítricos.",
    precio: 270,
    stock: 7,
  },
  {
    id: 72,
    titulo: "LATTAFA MAAHIR BLACK EDP 100ML",
    imagen: "/lattafa/lattafa_maahir_black_edp_100ml.jpg",
    descripcion: "Fragancia masculina con notas oscuras y especiadas.",
    precio: 230,
    stock: 8,
  },
  {
    id: 73,
    titulo: "LATTAFA MAAHIR LEGACY SILVER EDP 100 ML",
    imagen: "/lattafa/lattafa_maahir_legacy_silver_edp_100ml.jpg",
    descripcion: "Aroma elegante con toques metálicos y amaderados.",
    precio: 240,
    stock: 6,
  },
  {
    id: 74,
    titulo: "LATTAFA MAAHIR EDP 100ML",
    imagen: "/lattafa/lattafa_maahir_edp_100ml.jpg",
    descripcion: "Fragancia masculina clásica con notas especiadas y madera.",
    precio: 220,
    stock: 5,
  },
  {
    id: 75,
    titulo: "LATTAFA KHANJAR 85 ML EDP",
    imagen: "/lattafa/lattafa_khanjar_85ml_edp.webp",
    descripcion: "Aroma oriental intenso con notas amaderadas y especiadas.",
    precio: 180,
    stock: 4,
  },
  {
    id: 76,
    titulo: "LATTAFA AJWAD EDP 60 ML",
    imagen: "/lattafa/lattafa_ajwad_edp_60ml.jpg",
    descripcion:
      "Fragancia fresca con notas cítricas y especiadas, ideal para el día.",
    precio: 140,
    stock: 7,
  },
  {
    id: 77,
    titulo: "LATTAFA AJWAD PINK TO PINK EDP 60 ML",
    imagen: "/lattafa/lattafa_ajwad_pink_to_pink_edp_60ml.webp",
    descripcion:
      "Aroma dulce y floral con un toque frutal, perfecto para la primavera.",
    precio: 145,
    stock: 5,
  },
  {
    id: 78,
    titulo: "LATTAFA AJWAD DUBAI EDP 60 ML",
    imagen: "/lattafa/lattafa_ajwad_dubai_edp_60ml.webp",
    descripcion:
      "Fragancia equilibrada con notas florales y amaderadas para uso diario.",
    precio: 150,
    stock: 6,
  },
  {
    id: 79,
    titulo: "LATTAFA AJWAD ROSE EDP 60 ML",
    imagen: "/lattafa/lattafa_ajwad_rose_edp_60ml.webp",
    descripcion:
      "Aroma floral con predominancia de rosa y toques suaves de almizcle.",
    precio: 155,
    stock: 8,
  },
];

async function seedProducts() {
  try {
    await sequelize.sync();

    const productsToCreate = productsData.map((product) => ({
      name: product.titulo,
      description: product.descripcion,
      price: product.precio ? parseFloat(product.precio) : null,
      stock: product.stock ? parseInt(product.stock) : 0,
      brand: "Lattafa",
      category: "Unisex",
      mainImage: product.imagen,
      active: true,
    }));

    const createdProducts = await Product.bulkCreate(productsToCreate, {
      validate: true,
      ignoreDuplicates: true,
    });


  } catch (error) {
    console.error("Error al insertar productos:", error);
  } finally {
    await sequelize.close();
    console.log("Conexión cerrada");
  }
}

seedProducts();
