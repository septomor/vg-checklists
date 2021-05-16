var jsonData = {
    "table_titles": ["Recipe", "Ingredient #1", "Ingredient #2", "Ingredient $3"],
    "recipes": [
        { 
          "name": "Sandwich",
          "ingredients": [{"$ref": "#/ingredients/artificial/w_br"}, "Hunk of Tender Beef"],
          "count": [1,1]
        },
        { 
            "name": "Fishburger",
            "ingredients": ["Loaf of White", "Dumbflounder", "Head of Crispy Lettuce"],
            "count": [2,1,1]
        },
        { 
            "name": "Cheeseburger",
            "ingredients": ["Sandwich", "Head of Crispy Lettuce", "Glowshrimp"],
            "count": [1,1,1]
        },            
        { 
            "name": "Tonic",
            "ingredients": ["Bottle of Pixie Dew", "Bunches of Old Oak Leaves", "Handfuls of Seeds of Discord"],
            "count": [1,2,2]
        }, 
        { 
            "name": "Pixie Dew",
            "ingredients": ["Fogdrop", "Bunch of Booster Shoots", "Bottles of Springwater"],
            "count": [1,3,3]
        },
        { 
            "name": "Sprite Dew",
            "ingredients": ["Bottle of Pixie Dew", "Bunch of Sour Grapes", "Bundles of Slumbernot Leaves"],
            "count": [1,1,3]
        },
        { 
            "name": "Strong Coffee",
            "ingredients": ["Bottles of Ice Coffee", "Bottles of Springwater"],
            "count": [2,1]
        }
    ],
    "ingredients": {
        "natural": {
            "a_w": "Angel's Wings",
            "ang": "Angula",
            "bab": "Babanas",
            "b_ba": "Big Babanas",
            "ban": "Baneflower",
            "b_be": "Bass Bell",
            "b_bl": "Blizzard Bloom",
            "b_sh": "Booster Shots",
            "col": "Coldstone",
            "cro": "Crownberries",
            "d_sc": "Drill Screw",
            "fog": "Fogdrop",
            "glc": "Glowcap",
            "gls": "Glowstone",
            "gno": "Gnomebeard",
            "g_gr": "Green Grapes",
            "gus": "Gustplume",
            "i_di": "Iron Diamond",
            "j_ma": "Jade Marble",
            "kal": "Kaleidostone",
            "met": "Meteorite Fragment",
            "m_cr": "Moon Crystals",
            "o_o_l": "Old Oak Leaves",
            "pla": "Plainswort",
            "p_cr": "Planet Crystals",
            "pow": "Powerstone",
            "r_st": "Raw Steel",
            "r_a_b": "Rings-a-Bell",
            "rit": "Ritestone",
            "rum": "Rumblenuts",
            "s_o_t": "Scroll of Truth",
            "s_o_d": "Seeds of Discord",
            "sha": "Shadowglass",
            "slu": "Slumbernot Leaves",
            "sno": "Snowflake",
            "s_gr": "Sour Grapes",
            "spr": "Springwater",
            "star_cr": "Star Crystals",
            "s_sh": "Sturdy Shinbone",
            "sun_cr": "Sun Crystals",
            "tea": "Tealwood",
            "t_te": "Troll's Tears",
            "wet": "Wetstone"
        },
        "artificial": {
            "a_s_e": "All-Seeing Eye",
            "bab": "Babanas",
            "b_tr": "Black Truffle",
            "b_pi": "Bubble Pipe",
            "b_ho": "Bumbler Honey",
            "cak": "Cake",
            "car": "Caramel",
            "cho": "Chocolate",
            "c_mi": "Creamy Milk",
            "c_le": "Crispy Lettuce",
            "c_ca": "Crunchy Carrot",
            "dra": "Drakestone",
            "dum": "Dumbflounder",
            "d_eg": "Dumpty Egg",
            "emb": "Emberstone",
            "fla": "Flan",
            "f_ri": "Fluffy Rice",
            "glo": "Glowshrimp",
            "g_gr": "Green Grapes",
            "i_cr": "Ice Cream",
            "i_co": "Iced Coffee",
            "pie": "Pie",
            "p_de": "Pixie Dew",
            "p_fe": "Phoenix Feather",
            "san": "Sandwhich",
            "s_ra": "Snow Radish",
            "s_co": "Strong Coffee",
            "sun": "Sundae",
            "tac": "Tachestone",
            "t_be": "Tender Beef",
            "yog": "Yogurt",
            "w_br": "White Bread"
        }
    }
}