/* jshint esversion: 6 */

var meadData = [{
    batchID: 0,
    recipeName: 'Wabozu',
    bottleRangeMin: 0,
    bottleRangeMax: 0,
    size: '2L',
    notes: 'Very first brew; super dry ginger ale.',
    openingDate: '2017-09-11',
    bottleDistribution: [
        // bottle #, person
        ['1', 'JWK']
    ],
    timeline: [
        // date, notes
        ['2012-09-09', 'Must prepared.'],
        ['2017-09-10', 'Burped.'],
        ['2017-09-11', 'Consumed.']
    ],
    gravReadings: [
        // date, OG, notes
    ],
    images: [],
    tastingNotes: [
        // date, notes
        ['2017-09-11', 'Lovely -- quite spicy and dry but excellent. Towards bottom of the bottle, floculated yeast gets a little gross. Carbonation disappeared exceedingly quickly.']
    ],
    status: []
}, {
    batchID: 1,
    recipeName: 'Jutini',
    bottleRangeMin: 1,
    bottleRangeMax: 5,
    size: '1 gal.',
    notes: 'This is one of my first two meads! This mead uses a weaker yeast that should result in a sweet mead. This is a small batch and should have a foward honey flavor, low alcohol, and a yummy sweetness -- as always, longer aging makes for a better mead!<br><br>Honeys used: 3lb Crocket Raw Arizona Desert Wildflower honey, .5lb Nature Nate\'s Raw Unfiltered honey.',
    openingDate: 'Open 2018-04-21 at the earliest; let age for a year (2018-10) or longer for optimum taste!',
    bottleDistribution: [
        // bottle #, person
        ['1', 'JKi'],
        ['2', 'JKi'],
        ['3', 'CBa'],
        ['4', 'MMa'],
        ['5', 'MBa']
    ],
    timeline: [
        // date, notes
        ['2017-10-09 1830', 'Must prepared.'],
        ['2017-10-09 1930', 'Carboy airlocked.'],
        ['2017-10-09 2230', 'Very few bubbles; some tiny surface ones but only ~10% coverage.'],
        ['2017-10-10 0030', 'Bubble from yeast every minute or two'],
        ['2017-10-11 1415', 'Bubbles every two to three seconds; moved to warmed surroundings with towel around carboy for light and warmth'],
        ['2017-10-23', 'Softly bubbling. Racked onto half a Campden tablet for secondary and had a taste. Realized this was in error; will rack onto other half when we go onto the sorbate.'],
        ['2017-10-29', 'Zero airlock activity'],
        ['2017-11-07', 'Racked onto other half of campden, potassium sorbate, and bentonite'],
    ],
    gravReadings: [
        // date, OG, notes
        ['2017-10-09', 1.112, 'Pitched'],
        ['2017-10-23', 1.058, 'Racked off lees onto Campden to secondary'],
        ['2017-11-07', 1.054, 'Racked off onto fixatives and finer']
    ],
    images: ['img/f1mustevening.jpg', 'img/mixedmusts.jpg', 'img/musts.jpg', 'img/ingredients.jpg', 'img/bundled.jpg'],
    tastingNotes: [
        // date, notes
        ['2017-10-23', 'Very tasty -- sweet and warm, but not overpowering in any way. Possible a bit sweeter than I\'d like but I\'m sure it will mellow.'],
        ['2017-11-07', 'Warming up -- nice and tasty; somewhat sweet. Ever so slightly carbonated! This is pretty yummy.']
    ],
    // Status is [0]; next step is [1] on [2]
    status: ['In Secondary', 'racking onto k-meta, k-sorbate, bentonite', '2017-11-06']
}, {
    batchID: 2,
    recipeName: 'Jutini-α',
    bottleRangeMin: 6,
    bottleRangeMax: 10,
    size: '1 gal.',
    notes: 'This is one of my first two meads! This mead uses a stronger yeast that should result in a semi-dry mead. This is a small batch and may or may not come out tasting like battery acid -- it will be high alcohol and quite dry; almost bone dry. As always, longer aging makes for a better mead!<br><br>Honeys used: 3lb Crocket Raw Arizona Desert Wildflower honey, .5lb Nature Nate\'s Raw Unfiltered honey.',
    openingDate: 'Open 2018-04-21 at the earliest; let age for a year (2018-10) or longer for optimum taste!',
    bottleDistribution: [
        // bottle #, person
        ['6', 'JKi'],
        ['7', 'JKi'],
        ['8', 'HLu'],
        ['9', 'MWe'],
        ['10', 'JFe']
    ],
    timeline: [
        // date, notes
        ['2017-10-09 1830', 'Must prepared.'],
        ['2017-10-09 1930', 'Carboy airlocked.'],
        ['2017-10-09 2230', 'Lots of tiny bubbles; 100% surface coverage and about 2mm thick.'],
        ['2017-10-10 0030', 'Creamy layer of top bubbles; bubble through airlock once every 10 seconds. These yeast are HUNGRY!'],
        ['2017-10-11 1415', 'Bubbles every second; moved to warmed surroundings with towel around carboy for light and warmth'],
        ['2017-10-23', 'No bubbling. Racked onto half a Campden tablet for secondary and had a taste. Realized this was in error; will rack onto other half when we go onto the sorbate.'],
        ['2017-10-29', 'Zero airlock activity'],
        ['2017-11-07', 'Racked onto other half of campden, potassium sorbate, and bentonite'],
    ],
    gravReadings: [
        // date, OG, notes
        ['2017-10-09', 1.110, 'Pitched'],
        ['2017-10-23', 1.005, 'Racked off lees onto Campden to secondary'],
        ['2017-11-07', 0.998, 'Racked off onto fixatives and finer']
    ],
    images: ['img/f2bubbling.gif', 'img/f2mustevening.jpg', 'img/mixedmusts.jpg', 'img/f2must.jpg', 'img/musts.jpg', 'img/ingredients.jpg', 'img/f2yeast.jpg', 'img/bundled.jpg'],
    tastingNotes: [
        // date, notes
        ['2017-10-23', 'Hot hot hot! Got a bit much of the lees in my glass but it tastes very hot and dry.'],
        ['2017-11-07', 'Dry and slightly sour -- cooled off a bit, but not my favorite. Could be good with some xylitol but I think I\'m just gonna let it age.']
    ],
    // Status is [0]; next step is [1] on [2]
    status: ['In Secondary', 'racking onto k-meta, k-sorbate, bentonite', '2017-11-06']
}, {
    batchID: 3,
    recipeName: 'Duduhu',
    bottleRangeMin: 11,
    bottleRangeMax: 15,
    size: '1 gal.',
    notes: 'Celebratory metheglin for my first day at Chartio! (prepared a day after because I was exhausted.) Off to a slow start with some half cocked yeast (I assume), but rolling away happily after introducing another packet from the local homebrew shop<br><br>Honeys used: 3lb Crocket Raw Arizona Desert Wildflower honey, .5lb Nature Nate\'s Raw Unfiltered honey.',
    openingDate: '2018-10-24',
    bottleDistribution: [
        // bottle #, person
        ['11', 'JKi'],
        ['12', 'Chartio Team'],
        ['13', 'Chartio Team'],
        ['14', 'Chartio Team'],
        ['15', 'Chartio Team']
    ],
    timeline: [
        // date, notes
        ['2017-10-25 2130', 'Must prepared. Day after first day at Chartio, WOOO!'],
        ['2017-10-26 2130', 'Zero airlock activity. Switched airlocks from hat style to sideways-S; hoping for activity tomorrow.'],
        ['2017-10-29 1400', 'Zero airlock activity. Rehydrated and pitched another 5 grams of Lavlin 71-B; fingers crossed! Rehydrated in a bit too much water but hopefully it\'s alright -- cooled yeast by titrating must into mixing vessel to bring them down to temperature.'],
        ['2017-10-30 0800', 'We have bubbles every two seconds! IT LIVES!!'],
    ],
    gravReadings: [
        // date, OG, notes
        ['2017-10-25', 1.13, 'Pitched']
    ],
    images: ['img/f3bubbling.gif', 'img/f3bubblesandgunk.jpg', 'img/f3wrapped.jpg'],
    tastingNotes: [],
    // Status is [0]; next step is [1] on [2]
    status: ['In primary', 'reracking onto ginger', '2017-11-20']
}];

var recipes = {
    Wabozu: {
        type: 'Fiery Ginger Ale',
        volume: '2L',
        brewTime: [
            '2 days',
        ],
        ingredients: [
            '1.5 oz. finely grated fresh ginger (the younger the better; microplane suggested)',
            '6 oz. table sugar',
            '7.5 cups filtered water',
            '1/8 teaspoon (should be around 750mg) champagne yeast (Red Star Premier Blanc formerly known as Pastuer Champagne)',
            '2 tablespoons freshly squeezed lemon juice',
            'StarSan soln.',
        ],
        equipmentMisc: [
            '2L PET bottle (i.e. plastic soda bottle)',
        ],
        recipe: [
            'Clean 2L PET bottle with StarSan soln.',
            'Place ginger, sugar, and 1/2 cup of the water into a saucepan over medium-high heat. Stir until the sugar dissolves. Remove from heat, cover, and allow to steep for 1 hour.',
            'Pour the syrup through a fine strainer, cheese cloth over a bowl, or t-shirt, using pressure to get all the juice out of the mixture. Rapidly chill in an ice bath and stir until the mixture reaches 70 degrees F.',
            'Pour the syrup into a 2L PET bottle and add yeast, lemon juice, and remaining 7 cups of water. Shake vigorously for five minutes. Let sit in a dark place at room temperature.',
            'At 2 days, burp and refrigerate bottle. Allow 24 hours for yeast to fall asleep, then siphon off into another StarSan\'d 2L soda bottle, leaving the flocculated yeast at the bottom of the first bottle. SG check. Keep chilled and drink quickly; the carbonation will not last long -- 3 days is safe',
        ],
        fdaIngredients: 'water, sugar, ginger, lemon juice, yeast'
    },
    Jutini: {
        type: 'Simple Sweet Mead',
        volume: '1 gal',
        brewTime: [
            '2 week primary',
            '2 week secondary',
            '1 week stabilization/clarifying',
        ],
        ingredients: [
            '3.5 lbs honey',
            '1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)',
            '0.5 tsp LD Carlson Energizer (yeast hulls)',
            '5 grams Safale US-05 yeast',
            'Spring or tap water to 1 gal.',
        ],
        equipmentMisc: [
            '1 gal. carboy',
            'Airlock',
            'StarSan soln.',
            '1 Campden tablet, crushed',
            '0.5 tsp potassium sorbate',
            '1.5 tbsp hydrated (2 tsp in .5 cup very hot water, agitate thoroughly, rest for 12 hours) bentonite slurry (optional)',
        ],
        recipe: [
            'Clean 1 gal. carboy with StarSan soln.; .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.',
            'Add room temperature honey, then room temperature spring or tap water until volume of must is 1 gal.',
            'Pour dry yeast into must and add DAP with yeast hulls.',
            'Seal carboy and shake vigorously for 4 minutes. SG check. Airlock carboy.',
            'Place in dark location at 60 - 75 degrees F.',
            'After two weeks, rack off lees into sanitized carboy for aging.',
            'After two more weeks, rack onto crushed Campden tablet, potassium sorbate, and, optionally, hydrated bentonite slurry. SG check. After a week or when clear, bottle.',
        ],
        fdaIngredients: 'water, raw organic honey, yeast, less than 0.5% of the following: yeast nutrients (diammonium phosphate, yeast ghosts), potassium metabisulfate, potassium sorbate, bentonite'
    },
    'Jutini-α': {
        type: 'Simple Semi-dry Mead',
        volume: '1 gal',
        brewTime: [
            '2 week primary',
            '2 week secondary',
            '1 week stabilization/clarifying',
        ],
        ingredients: [
            '3.5 lbs honey',
            '1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)',
            '0.5 tsp LD Carlson Energizer (yeast hulls)',
            '5 grams Lavlin 71B-1122',
            'Spring or tap water to 1 gal.',
        ],
        equipmentMisc: [
            '1 gal. carboy',
            'Airlock',
            'StarSan soln.',
            '1 Campden tablet, crushed',
            '0.5 tsp potassium sorbate',
            '1.5 tbsp hydrated (2 tsp in .5 cup very hot water, agitate thoroughly, rest for 12 hours) bentonite slurry (optional)',
        ],
        recipe: [
            'Clean 1 gal. carboy with StarSan soln.; .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.',
            'Add room temperature honey, then room temperature spring or tap water until volume of must is 1 gal.',
            'Pour dry yeast into must and add DAP with yeast hulls.',
            'Seal carboy and shake vigorously for 4 minutes. SG check. Airlock carboy.',
            'Place in dark location at 60 - 75 degrees F.',
            'After two weeks, rack off lees into sanitized carboy for aging.',
            'After two more weeks, rack onto crushed Campden tablet, potassium sorbate, and, optionally, hydrated bentonite slurry. SG check. After a week or when clear, bottle.',
        ],
        fdaIngredients: 'water, raw organic honey, yeast, less than 0.5% of the following: yeast nutrients (diammonium phosphate, yeast ghosts), potassium metabisulfate, potassium sorbate, bentonite'
    },
    Firogo: {
        type: 'Simple Ultra-dry Jet Fuel Mead',
        volume: '1 gal',
        brewTime: [
            '2 week primary',
            '2 week secondary',
            '1 week stabilization/clarifying',
        ],
        ingredients: [
            '3.5 lbs honey',
            '1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)',
            '0.5 tsp LD Carlson Energizer (yeast hulls)',
            '5 grams Lavlin EC-1118',
            'Spring or tap water to 1 gal.',
            'Xylitol to taste (optional)',
        ],
        equipmentMisc: [
            '1 gal. carboy',
            'Airlock',
            'StarSan soln.',
            '1 Campden tablet, crushed',
            '0.5 tsp potassium sorbate',
            '1.5 tbsp hydrated (2 tsp in .5 cup very hot water, agitate thoroughly, rest for 12 hours) bentonite slurry (optional)',
        ],
        recipe: [
            'Clean 1 gal. carboy with StarSan soln.; .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.',
            'Add room temperature honey, then room temperature spring or tap water until volume of must is 1 gal.',
            'Pour dry yeast into must and add DAP with yeast hulls.',
            'Seal carboy and shake vigorously for 4 minutes. SG check. Airlock carboy.',
            'Place in dark location at 60 - 75 degrees F.',
            'After two weeks, rack off lees into sanitized carboy for aging.',
            'After two more weeks, rack onto crushed Campden tablet, potassium sorbate, and, optionally, hydrated bentonite slurry. SG check. After a week or when clear, optionally backsweeten and bottle.',
        ],
        fdaIngredients: 'water, raw organic honey, yeast, xylitol, less than 0.5% of the following: yeast nutrients (diammonium phosphate, yeast ghosts), potassium metabisulfate, potassium sorbate, bentonite'
    },
    Soravo: {
        type: 'Reaper Capsicumel',
        volume: '1 gal',
        brewTime: [
            '1 month primary',
            '1 month oaking/secondary',
            '2 week stabilization',
        ],
        ingredients: [
            '3 lbs honey',
            '1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)',
            '0.5 tsp LD Carlson Energizer (yeast hulls)',
            '5 grams Safale US-05',
            '4 Carolina Reaper chilis',
            '1 Med. toast oak spiral',
            'Spring or tap water to 1 gal.',
            'Xylitol to taste (optional)',
        ],
        equipmentMisc: [
            '1 gal. carboy',
            'Airlock',
            'StarSan soln.',
            '1 Campden tablet, crushed',
            '0.5 tsp potassium sorbate',
            '1.5 tbsp hydrated (2 tsp in .5 cup very hot water, agitate thoroughly, rest for 12 hours) bentonite slurry (optional)',
        ],
        recipe: [
            'Clean 1 gal. carboy with StarSan soln.; .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.',
            'Add room temperature honey, then room temperature spring or tap water until volume of must is short of 1 gal. Pour dry yeast into must and add DAP with yeast hulls.',
            'Seal carboy and shake vigorously for 4 minutes.',
            'SG check.',
            'Simmer chopped and de-seeded chilis in 1/4 cup of water for ten minutes; pour into must through muslin and tie off muslin.',
            'Fill with water to 1 gal. Airlock carboy.',
            'Place in dark location at 60 - 75 degrees F.',
            'After 1 month, rack off peppers and into new vessel with oak spiral. SG check.',
            'After another month, rack off oak onto crushed Campden tablet, potassium sorbate, and, optionally, hydrated bentonite slurry. SG check. After a two weeks or when clear, optionally backsweeten with xylitol and bottle.',
        ],
        fdaIngredients: 'water, raw organic honey, yeast, xylitol, less than 0.5% of the following: yeast nutrients (diammonium phosphate, yeast ghosts), potassium metabisulfate, potassium sorbate, bentonite, flavor from oak wood and organic carolina reaper chili'
    },
    Duduhu: {
        type: 'Spicy Ginger Metheglin',
        volume: '1 gal',
        brewTime: [
            '3 week primary',
            '2 month (or to taste) secondary',
            '2 week stabilization/clarifying',
        ],
        ingredients: [
            '3.5 lbs honey',
            '1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)',
            '0.5 tsp LD Carlson Energizer (yeast hulls)',
            '5 grams Lavlin 71B-1122',
            'Spring or tap water to 1 gal.',
            '1 lb raw ginger, peeled and cubed',
            'Xylitol to taste (optional)',
        ],
        equipmentMisc: [
            '1 gal. carboy',
            'Airlock',
            'StarSan soln.',
            '1 Campden tablet, crushed',
            '0.5 tsp potassium sorbate',
            '1.5 tbsp hydrated (2 tsp in .5 cup very hot water, agitate thoroughly, rest for 12 hours) bentonite slurry (optional)',
        ],
        recipe: [
            'Clean 1 gal. carboy with StarSan soln.; .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.',
            'Add room temperature honey then room temperature spring or tap water until volume of must is shy of 1 gal.',
            'Pour dry yeast into must and add DAP with yeast hulls.',
            'Seal carboy and shake vigorously for 4 minutes. SG check.',
            'Fill to 1 gal., put into carboy, and airlock. Place in dark location at 60 - 75 degrees F.',
            'After one month, rack onto peeled and cubed ginger. SG check.',
            'After two months (or to taste) on ginger, rack off lees onto crushed Campden tablet, potassium sorbate, and, optionally, hydrated bentonite slurry. SG check. After two weeks or when clear, optionally backsweeten with xylitol and bottle.',
        ],
        fdaIngredients: 'water, raw organic honey, yeast, ginger, less than 0.5% of the following: yeast nutrients (diammonium phosphate, yeast ghosts), potassium metabisulfate, potassium sorbate, bentonite, flavor from organic ginger'
    },
    Watuda: {
        type: 'Sweet Metheglin',
        volume: '1 gal',
        brewTime: [
            '2 week primary',
            '2 week secondary',
            '1 week stabilization/clarifying',
        ],
        ingredients: [
            '3.5 lbs honey',
            '1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)',
            '0.5 tsp LD Carlson Energizer (yeast hulls)',
            '5 grams Safale US-05 yeast',
            '1 vanilla bean',
            '1 cinnamon stick',
            'Spring or tap water to 1 gal.',
        ],
        equipmentMisc: [
            '1 gal. carboy',
            'Airlock',
            'StarSan soln.',
            '1 Campden tablet, crushed',
            '0.5 tsp potassium sorbate',
            '1.5 tbsp hydrated (2 tsp in .5 cup very hot water, agitate thoroughly, rest for 12 hours) bentonite slurry (optional)',
        ],
        recipe: [
            'Clean 1 gal. carboy with StarSan soln.; .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.',
            'Boil vanilla bean and cinnamon stick in 1 cup water for 10 minutes.',
            'Add room temperature honey then room temperature spring or tap water until volume of must is 1 gal.',
            'Pour dry yeast into must, add cinnamon and vanilla with water, and add DAP with yeast hulls.',
            'Seal carboy and shake vigorously for 4 minutes. SG check. Airlock carboy.',
            'Place in dark location at 60 - 75 degrees F.',
            'After two weeks, rack off lees into sanitized carboy.',
            'After two more weeks, rack onto crushed Campden tablet, potassium sorbate, and, optionally, hydrated bentonite slurry. SG check. After a week or when clear, bottle.',
        ],
        fdaIngredients: 'water, raw organic honey, yeast, less than 0.5% of the following: yeast nutrients (diammonium phosphate, yeast ghosts), potassium metabisulfate, potassium sorbate, bentonite, flavor from organic cinnamon and vanilla'
    },
    Melawa: {
        type: 'Sweet Metheglin w/ Herbs',
        volume: '1 gal',
        brewTime: [
            '2 week primary',
            '2 week secondary',
            '2 week stabilization/clarifying',
        ],
        ingredients: [
            '3.5 lbs honey',
            '1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)',
            '0.5 tsp LD Carlson Energizer (yeast hulls)',
            '5 grams Safale US-05 yeast',
            '1 vanilla bean',
            '1 cinnamon stick',
            '60 grams (assuming 1 gal = 5 bottles * 3 herb portions per bottle * 4 gram portion = 60 grams) herbs',
            'Spring or tap water to 1 gal.',
        ],
        equipmentMisc: [
            '1 gal. carboy',
            'Airlock',
            'StarSan soln.',
            '1 Campden tablet, crushed',
            '0.5 tsp potassium sorbate',
        ],
        recipe: [
            'Clean 1 gal. carboy with StarSan soln.; .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.',
            'Bring vanilla bean and cinnamon stick to boil for 5 minutes.',
            'Add room temperature honey then room temperature spring or tap water until volume of must is 1 gal.',
            'Pour dry yeast into must and add DAP with yeast hulls.',
            'Seal carboy and shake vigorously for 4 minutes. SG check. Airlock carboy.',
            'Place in dark location at 60 - 75 degrees F.',
            'After two weeks, bring herbs to boil in 1/4 cup water. Pitch mixture into santizied carboy and rack mead off lees and onto herbs.',
            'After two more eeks, rack onto crushed campden and potassium sorbate and let sit for two weeks or until SG reading stabilizes, then bottle.',
        ],
        fdaIngredients: 'water, raw organic honey, yeast, less than 0.5% of the following: yeast nutrients (diammonium phosphate, yeast ghosts), potassium metabisulfate, potassium sorbate, bentonite, herbs'
    },
};
