import { sequelize } from "../db.js";
import Product from "../src/models/Product.js";

const productsData = [
    {
      "id": 1,
      "titulo": "LATTAFA YARA PINK EDP 100ML",
      "imagen": "/lattafa/lattafa_yara_pink_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "100",
      "stock": ""
    },
    {
      "id": 2,
      "titulo": "LATTAFA TOURS 100 ML",
      "imagen": "/lattafa/lattafa_tours_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 3,
      "titulo": "LATTAFA ASAD EDP 100 ML",
      "imagen": "/lattafa/lattafa_asad_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 4,
      "titulo": "LATTAFA YARA MOI EDP 100 ML",
      "imagen": "/lattafa/lattafa_yara_moi_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 5,
      "titulo": "LATTAFA YARA CANDY EDP FEM 100ML",
      "imagen": "/lattafa/lattafa_yara_candy_edp_fem_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 6,
      "titulo": "LATTAFFA ASAD ZANZIBAR 100 ML",
      "imagen": "/lattafa/lattafa_asad_zanzibar_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 7,
      "titulo": "LATTAFA ASAD BOURBON EDP 100 ML",
      "imagen": "/lattafa/lattafa_asad_bourbon_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 8,
      "titulo": "LATTAFFA KIT ASAD & ASAD ZANZIBAR",
      "imagen": "/lattafa/lattafa_kit_asad_asad_zanzibar.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 9,
      "titulo": "LATTAFA KIT YARA PINK & YARA CANDY",
      "imagen": "/lattafa/lattafa_kit_yara_pink_yara_candy.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 10,
      "titulo": "LATTAFA BADEE AL OUD HONOR & GLORY EDP 100 ML",
      "imagen": "/lattafa/lattafa_badee_al_oud_honor_glory_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 11,
      "titulo": "LATTAFA BADEE AL OUD AMETHYST EDP 100 ML",
      "imagen": "/lattafa/lattafa_badee_al_oud_amethyst_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 12,
      "titulo": "LATTAFA BADEE AL OUD SUBLIME 100 ML",
      "imagen": "/lattafa/lattafa_badee_al_oud_sublime_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 13,
      "titulo": "LATTAFA BADEE AL OUD FOR GLORY EDP 100ML",
      "imagen": "/lattafa/lattafa_badee_al_oud_for_glory_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 14,
      "titulo": "LATTAFFA BADEE AL OUD NOBLE BLUSH",
      "imagen": "/lattafa/lattafa_badee_al_oud_noble_blush.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 15,
      "titulo": "LATTAFA KHAMRAH 100 ML",
      "imagen": "/lattafa/lattafa_khamrah_100ml.jpeg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 16,
      "titulo": "LATTAFA KHAMRAH QAHWA 100 ML",
      "imagen": "/lattafa/lattafa_khamrah_qahwa_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 17,
      "titulo": "LATTAFA RAVE NOW WOMAN",
      "imagen": "/lattafa/lattafa_rave_now_woman.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    { 
      "id": 18,
      "titulo": "LATTAFA RAVE NOW",
      "imagen": "/lattafa/lattafa_rave_now.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 19,
      "titulo": "LATTAFA ANGHAM",
      "imagen": "/lattafa/lattafa_angham.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 20,
      "titulo": "THE KINGDOM MASCULINO",
      "imagen": "/lattafa/the_kingdom_masculino.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 21,
      "titulo": "LATTAFA KINGDOM EDP 100 ML",
      "imagen": "/lattafa/lattafa_kingdom_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 22,
      "titulo": "LATTAFA LAIL MALEKY",
      "imagen": "/lattafa/lattafa_lail_maleky.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 23,
      "titulo": "LATTAFA QAED AL FURSAN",
      "imagen": "/lattafa/lattafa_qaed_al_fursan.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 24,
      "titulo": "LATTAFA QAED AL FURSAN UNLIMITED",
      "imagen": "/lattafa/lattafa_qaed_al_fursan_unlimited.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 25,
      "titulo": "LATTAFA HER CONFESSION 100 ML",
      "imagen": "/lattafa/lattafa_her_confession_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 26,
      "titulo": "LATTAFA HIS CONFESSION 100 ML",
      "imagen": "/lattafa/lattafa_his_confession_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 27,
      "titulo": "LATTAFA TERIAQ",
      "imagen": "/lattafa/lattafa_teriaq.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 28,
      "titulo": "LATTAFA TERIAQ INTENSE 100ML UNISEX",
      "imagen": "/lattafa/lattafa_teriaq_intense_100ml_unisex.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 29,
      "titulo": "LATTAFA ECLAIRE EDP FEM 100ML",
      "imagen": "/lattafa/lattafa_eclaire_edp_fem_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 30,
      "titulo": "LATTAFFA SEHR EDP 100 ML",
      "imagen": "/lattafa/lattafa_sehr_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 31,
      "titulo": "LATTAFFA MUSAMAM EDP 100 ML",
      "imagen": "/lattafa/lattafa_musamam_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 32,
      "titulo": "LATTAFA MUSAMAM WHITE INTENSE EDP FEM 100ML",
      "imagen": "/lattafa/lattafa_musamam_white_intense_edp_fem_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 33,
      "titulo": "LATTAFFA AL QIAM GOLD EDP 100 ML",
      "imagen": "/lattafa/lattafa_al_qiam_gold_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 34,
      "titulo": "LATTAFFA AL QIAM SILVER EDP 100 ML",
      "imagen": "/lattafa/lattafa_al_qiam_silver_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 35,
      "titulo": "LATTAFFA AFEEF EDP 100 ML",
      "imagen": "/lattafa/lattafa_afeef_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 36,
      "titulo": "LATTAFFA AJWAA PRIDE 90ML",
      "imagen": "/lattafa/lattafa_ajwaa_pride_90ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 37,
      "titulo": "LATTAFFA PEACE AND LOVE EDP 100 ML",
      "imagen": "/lattafa/lattafa_peace_and_love_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 38,
      "titulo": "LATTAFFA ART OF NATURE I 100 ML",
      "imagen": "/lattafa/lattafa_art_of_nature_i_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 39,
      "titulo": "LATTAFFA ART OF NATURE II 1OO ML",
      "imagen": "/lattafa/lattafa_art_of_nature_ii_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 40,
      "titulo": "LA COLLECTION D´ANTIQUITES 1910",
      "imagen": "/lattafa/la_collection_dantiquites_1910.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 41,
      "titulo": "RADIO VINTAGE",
      "imagen": "/lattafa/lattafa_radio_vintage.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
  
    {
      "id": 43,
      "titulo": "PRIDE ISHQ AL SHUYUKH (GOLD EDITION)",
      "imagen": "/lattafa/lattafa_pride_ishq_al_shuyukh_gold_edition.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 44,
      "titulo": "LATTAFA NEBRAS EDP 100 ML",
      "imagen": "/lattafa/lattafa_nebras_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 45,
      "titulo": "LATTAFA ANSAAM GOLD",
      "imagen": "/lattafa/lattafa_ansaam_gold.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 46,
      "titulo": "LATTAFA ANSAAM SILVER 100 ML",
      "imagen": "/lattafa/lattafa_ansaam_silver_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 47,
      "titulo": "LATTAFA EMEER",
      "imagen": "/lattafa/lattafa_emeer.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 48,
      "titulo": "LATTAFA MAYAR EDP 100 ML",
      "imagen": "/lattafa/lattafa_mayar_edp_100ml.jpeg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 49,
      "titulo": "LATTAFA MAYAR NATURAL INTENSE EDP 100 ML",
      "imagen": "/lattafa/lattafa_mayar_natural_intense_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 50,
      "titulo": "LATTAFA MAYAR CHERRY INTENSE EDP 100 ML",
      "imagen": "/lattafa/lattafa_mayar_cherry_intense_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 51,
      "titulo": "LATTAFA FAKHAR WOMAN ROSE EDP 100 ML",
      "imagen": "/lattafa/lattafa_fakhar_woman_rose_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 52,
      "titulo": "LATTAFA FAKHAR DORADO EDP 100 ML",
      "imagen": "/lattafa/lattafa_fakhar_dorado_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 53,
      "titulo": "LATTAFA FAKHAR HOMBRE EDP 100 ML",
      "imagen": "/lattafa/lattafa_fakhar_hombre_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    { 
      "id": 54,
      "titulo": "LATTAFA TA'WELL EDP 100 ML",
      "imagen": "/lattafa/lattafa_tawell_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 55,
      "titulo": "LATTAFA A PISA EDP 100 ML",
      "imagen": "/lattafa/lattafa_a_pisa_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 56,
      "titulo": "LATTAFA CONFIDENTIAL PRIVATE GOLD 100ML UNISEX",
      "imagen": "/lattafa/lattafa_confidential_private_gold_100ml_unisex.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 57,
      "titulo": "LATTAFA CONFIDENTIAL PLATINUM EDP 100ML UNISEX",
      "imagen": "/lattafa/lattafa_confidential_platinum_edp_100ml_unisex.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 58,
      "titulo": "LATTAFA OUD MOOD EDP 100ML",
      "imagen": "/lattafa/lattafa_oud_mood_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 59,
      "titulo": "LATTAFA OUD MOOD ELIXIR EDP 100ML UNISEX",
      "imagen": "/lattafa/lattafa_oud_mood_elixir_edp_100ml_unisex.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 60,
      "titulo": "LATTAFFA AJAYEB DUBAINEGRO EDP 100 ML",
      "imagen": "/lattafa/lattafa_ajayeb_dubainegro_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 61,
      "titulo": "LATTAFFA AJAYEB DUBAI EDP 100 ML",
      "imagen": "/lattafa/lattafa_ajayeb_dubai_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 62,
      "titulo": "LATTAFA HAYAATI AL MALEKY AZUL EDP 100 ML",
      "imagen": "/lattafa/lattafa_hayaati_al_maleky_azul_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 63,
      "titulo": "LATTAFA HAYAATI EDP 100ML",
      "imagen": "/lattafa/lattafa_hayaati_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 64,
      "titulo": "LATTAFA HAYAATI FLORENCE EDP FEM 100ML",
      "imagen": "/lattafa/lattafa_hayaati_florence_edp_fem_100ml.jpeg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 65,
      "titulo": "LATTAFA HAYAATI GOLD ELIXIR MAS EDP 100ML",
      "imagen": "/lattafa/lattafa_hayaati_gold_elixir_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 66,
      "titulo": "LATTAFA SONDOS 100 ML",
      "imagen": "/lattafa/lattafa_sondos_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 67,
      "titulo": "LATTAFFA VELVET ROSE EDP EDP 100 ML",
      "imagen": "/lattafa/lattafa_velvet_rose_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 68,
      "titulo": "LATTAFA VELVET MUSK 100 ML",
      "imagen": "/lattafa/lattafa_velvet_musk_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 69,
      "titulo": "LATTAFA VELVET OUD EDP EDP 100 ML",
      "imagen": "/lattafa/lattafa_velvet_oud_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 70,
      "titulo": "LATTAFA PRIDE SHAHEEN GOLD EDP 100ML",
      "imagen": "/lattafa/lattafa_pride_shaheen_gold_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 71,
      "titulo": "LATTAFA PRIDE SHAHEEN SILVER EDP 100ML",
      "imagen": "/lattafa/lattafa_pride_shaheen_silver_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 72,
      "titulo": "LATTAFA MAAHIR BLACK EDP 100ML",
      "imagen": "/lattafa/lattafa_maahir_black_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 73,
      "titulo": "LATTAFA MAAHIR LEGACY SILVER EDP 100 ML",
      "imagen": "/lattafa/lattafa_maahir_legacy_silver_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 74,
      "titulo": "LATTAFA MAAHIR EDP 100ML",
      "imagen": "/lattafa/lattafa_maahir_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 75,
      "titulo": "LATTAFA KHANJAR 85 ML EDP",
      "imagen": "/lattafa/lattafa_khanjar_85ml_edp.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 76,
      "titulo": "LATTAFA AJWAD EDP 60 ML",
      "imagen": "/lattafa/lattafa_ajwad_edp_60ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 77,
      "titulo": "LATTAFA AJWAD PINK TO PINK EDP 60 ML",
      "imagen": "/lattafa/lattafa_ajwad_pink_to_pink_edp_60ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 78,
      "titulo": "LATTAFFA HAYA",
      "imagen": "/lattafa/lattafa_haya.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 79,
      "titulo": "LATTAFFA EMAAN 100 ML",
      "imagen": "/lattafa/lattafa_emaan_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 80,
      "titulo": "LATTAFA SAKEENA EDP 100 ML",
      "imagen": "/lattafa/lattafa_sakeena_edp_100ml.webp",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 81,
      "titulo": "LATTAFA QIMMAH FOR WOMEN VERDE EDP 100 ML",
      "imagen": "/lattafa/lattafa_qimmah_for_women_verde_edp_100ml.jpg",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    },
    {
      "id": 82,
      "titulo": "LATTAFFA QIMMAH FOR MEN NEGRO EDP 100 ML",
      "imagen": "/lattafa/lattafa_qimmah_for_men_negro_edp_100ml.png",
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "precio": "",
      "stock": ""
    }
];

async function seedProducts() {
  try {
    
    await sequelize.sync();
    console.log('Modelo Product sincronizado con la base de datos');

    
    const productsToCreate = productsData.map(product => ({
      name: product.titulo,
      description: product.descripcion,
      price: product.precio ? parseFloat(product.precio) : null,
      stock: product.stock ? parseInt(product.stock) : 0,
      brand: 'Lattafa',
      category: 'Unisex',
      mainImage: product.imagen,
      active: true
    }));

    
    const createdProducts = await Product.bulkCreate(productsToCreate, {
      validate: true, 
      ignoreDuplicates: true 
    });

    console.log(`Se han insertado ${createdProducts.length} productos en la base de datos`);
  } catch (error) {
    console.error('Error al insertar productos:', error);
  } finally {
    
    await sequelize.close();
    console.log('Conexión cerrada');
  }
}


seedProducts();