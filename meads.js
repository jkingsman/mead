/* jshint esversion: 6 */

const meadData = [{
        'batchID': 0,
        'type': 'Dry Ginger Ale',
        'recipeName': 'Wabozu\'',
        'bottleRangeMin': 0,
        'bottleRangeMax': 0,
        'size': '2L',
        'notes': 'Very first brew; super dry ginger ale.',
        'ingredients': [
            '1.5 oz. finely grated fresh ginger (the younger the better; microplane suggested)',
            '6 oz. table sugar',
            '7.5 cups filtered water',
            '1/8 teaspoon (should be around 750mg) champagne yeast (Red Star Premier Blanc formerly known as Pastuer Champagne)',
            '2 tablespoons freshly squeezed lemon juice'
        ],
        'timeline': [
            // date, notes
            ['2012-09-09', 'Must prepared.'],
            ['2017-09-10', 'Burped.'],
            ['2017-09-11', 'Consumed.']
        ],
        'gravReadings': [
            // date, OG, notes
            ['2017-10-09', 1.1, 'Pitched'],
            ['2017-10-09', 1.09, 'Pitched']
        ],
        'images': [],
        'tastingNotes': 'Lovely -- quite spicy and dry but excellent. Towards bottom of the bottle, floculated yeast gets a little gross.',
        'suggestedOpeningDate': '',
        'promisedBottles': 'All mine'
    },
    {
        'batchID': 1,
        'type': 'Sweet Mead',
        'recipeName': 'Jutini\'',
        'bottleRangeMin': 1,
        'bottleRangeMax': 5,
        'size': '1 gal.',
        'notes': 'This is one of my first two meads! This mead uses a weaker yeast that should result in a sweet mead. This is a small batch and may or may not come out tasting like battery acid -- as always, longer aging makes for a better mead! Making .5 gal of starsan soln (1oz/5gal H20 = .1oz/.5gal). Sharing between two bottles. Honey, then yeast + DAP + hulls, then water and agitate for 3 mins.',
        'ingredients': [
            '3.5lbs honey (3lb Crocket Raw Arizona Desert Wildflower honey, .5lb Nature Nate\'s Raw Unfiltered honey)',
            'Tap water to 1 gal.',
            '1 tsp LD Carlson nutrient (diammonium phosphate)',
            '.5 tsp LD Carlson energizer (yeast hulls)',
            '5 grams Safale US-05 yeast',
            '.5 Campden tablet (crushed); introduced at rerack'
        ],
        'timeline': [
            // date, notes
            ['2017-10-09 1830', 'Must prepared.'],
            ['2017-10-09 1930', 'Carboy airlocked.'],
            ['2017-10-09 2230', 'Very few bubbles; some tiny surface ones but only ~10% coverage.'],
            ['2017-10-10 0030', 'Bubble from yeast every minute or two']
        ],
        'gravReadings': [
            // date, OG, notes
            ['2017-10-09', 1.12, 'Pitched']
        ],
        'images': ['f1mustevening.jpg', 'mixedmusts.jpg', 'musts.jpg', 'ingredients.jpg'],
        'tastingNotes': '',
        'suggestedOpeningDate': '2018-04-21 at the earliest; let age for a year (2018-10) or longer for optimum taste!',
        'promisedBottles': 'B1-3 JWK, B4 MMa, B5 MBa',
    },
    {
        'batchID': 2,
        'type': 'Semi-Dry Mead',
        'recipeName': 'Jutini-α',
        'bottleRangeMin': 6,
        'bottleRangeMax': 10,
        'size': '1 gal.',
        'notes': 'This is one of my first two meads! This mead uses a stronger yeast that should result in a semi-dry mead. This is a small batch and may or may not come out tasting like battery acid -- as always, longer aging makes for a better mead! Making .5 gal of starsan soln (1oz/5gal H20 = .1oz/.5gal). Sharing between two bottles. Honey, then yeast + DAP + hulls, then water and agitate for 3 mins.',
        'ingredients': [
            '3.5lbs honey (3lb Crocket Raw Arizona Desert Wildflower honey, .5lb Nature Nate\'s Raw Unfiltered honey)',
            'Tap water to 1 gal.',
            '1 tsp LD Carlson nutrient (diammonium phosphate)',
            '.5 tsp LD Carlson energizer (yeast hulls)',
            '5 grams Lavlin 71B-1122 yeast',
            '.5 Campden tablet (crushed); introduced at rerack'
        ],
        'timeline': [
            // date, notes
            ['2017-10-09 1830', 'Must prepared.'],
            ['2017-10-09 1930', 'Carboy airlocked.'],
            ['2017-10-09 2230', 'Lots of tiny bubbles; 100% surface coverage and about 2mm thick.'],
            ['2017-10-10 0030', 'Creamy layer of top bubbles; bubble through airlock once every 10 seconds. These yeast are HUNGRY!']
        ],
        'gravReadings': [
            // date, OG, notes
            ['2017-10-09', 1.11, 'Pitched']
        ],
        images: ['f2bubbling.gif', 'f2mustevening.jpg', 'mixedmusts.jpg', 'f2must.jpg', 'musts.jpg', 'ingredients.jpg', 'f2yeast.jpg'],
        'tastingNotes': '',
        'suggestedOpeningDate': '2018-04-21 at the earliest; let age for a year (2018-10) or longer for optimum taste!',
        'promisedBottles': 'B6-7 JWK, B8 HLu, B9 MWe, B10 JFe',
    }
];

const recipes = {
    'Wabozu\'': `A PET bottle ginger ale, with a fiery kick, light carbonation, and a short lifespan.

**Volume Produced:** 2 liters

**Brew time:** 2 days

**Age time:** 1 day

### Ingredients
- 1.5 oz. finely grated fresh ginger (the younger the better; microplane suggested)
- 6 oz. table sugar
- 7.5 cups filtered water
- 1/8 teaspoon (should be around 750mg) champagne yeast (Red Star Premier Blanc formerly known as Pastuer Champagne)
- 2 tablespoons freshly squeezed lemon juice
- StarSan soln.

### Equipment/Misc
- 2L PET bottle (i.e. plastic soda bottle)

### Prep
Clean 2L PET bottle with StarSan soln.

### Recipe
Place ginger, sugar, and 1/2 cup of the water into a saucepan over medium-high heat. Stir until the sugar dissolves. Remove from heat, cover, and allow to steep for 1 hour.

Pour the syrup through a fine strainer, cheese cloth over a bowl, or t-shirt, using pressure to get all the juice out of the mixture. Rapidly chill in an ice bath and stir until the mixture reaches 70 degrees F.

Pour the syrup into a 2L PET bottle and add yeast, lemon juice, and remaining 7 cups of water. Shake vigorously for five minutes. Let sit in a dark place at room temperature.

### Rack'n'Pack
At 2 days, burp and refrigerate bottle. Allow 24 hours for yeast to fall asleep, then siphon off into another StarSan'd 2L soda bottle, leaving the flocculated yeast at the bottom of the first bottle.  Take and record gravity reading if desired. Keep chilled and drink quickly; the carbonation will not last long -- 3 days is safe.`,
    'Jutini\'': `Simple introductory semi-dry Mead.

**Voume Produced:** 1 gallon

**Brew time:** 1 - 2 weeks

**Age time:** 3 - 6 months

### Ingredients
- 3.5 lbs honey
- 1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)
- 0.5 tsp LD Carlson Energizer (yeast hulls)
- 5 grams Safale US-05 yeast
- Distilled water to 1 gal.

### Equipment/Misc.
- 1 gal. carboy
- Airlock
- StarSan soln.
- 1 Campden tablet, crushed

### Prep
Clean 1 gal. carboy with StarSan soln. .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.

### Recipe
Add room temperature honey, then room temperature distilled water until volume of must is 1L.

Pour dry yeast into must, and add DAP with yeast hulls.

Seal carboy and shake vigorously for 4 minutes. Take and record gravity reading if desired. Seal carboy and fill airlock with vodka.

Place in dark location at 60 - 75 degrees F.

Signs of fermentation should appear in 24-48 hours. Fermentation should complete in 1-2 weeks. This is highly variable depending upon dozens of factors.

### Rack'n'Pack
When fermentation is complete (confirm with gravity reading), add crushed campden tablet and siphon mead into new vessel while leaving sediment in bottom of carboy.

When the mead is clear enough to read newsprint through it, it's ready to bottle.`,
    'Jutini-α': `Simple introductory semi-dry Mead.

**Voume Produced:** 1 gallon

**Brew time:** 1 - 2 weeks

**Age time:** 3 - 6 months

### Ingredients
- 3.5 lbs honey
- 1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)
- 0.5 tsp LD Carlson Energizer (yeast hulls)
- 5 grams Lavlin 71B-1122
- Distilled water to 1 gal.

### Equipment/Misc.
- 1 gal. carboy
- Airlock
- StarSan soln.
- 1 Campden tablet, crushed

### Prep
Clean 1 gal. carboy with StarSan soln. .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.

### Recipe
Add room temperature honey, then room temperature distilled water until volume of must is 1L.

Pour dry yeast into must, and add DAP with yeast hulls.

Seal carboy and shake vigorously for 4 minutes. Take and record gravity reading if desired. Seal carboy and fill airlock with vodka.

Place in dark location at 60 - 75 degrees F.

Signs of fermentation should appear in 24-48 hours. Fermentation should complete in 1-2 weeks. This is highly variable depending upon dozens of factors.

### Rack'n'Pack
When fermentation is complete (confirm with gravity reading), add crushed campden tablet and siphon mead into new vessel while leaving sediment in bottom of carboy.

When the mead is clear enough to read newsprint through it, it's ready to bottle.`
};
