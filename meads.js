/* jshint esversion: 6 */

var meadData = [{
        'batchID': 0,
        'type': 'Dry Ginger Ale',
        'recipeName': 'Wabozu\'',
        'bottleRangeMin': 0,
        'bottleRangeMax': 0,
        'size': '2L',
        'notes': 'Very first brew; super dry ginger ale.',
        'openingDate': '2017-09-11',
        'bottleDistribution': [
            ['1', 'JWK']
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
        'tastingNotes': 'Lovely -- quite spicy and dry but excellent. Towards bottom of the bottle, floculated yeast gets a little gross. Carbonation disappeared exceedingly quickly.',
    },
    {
        'batchID': 1,
        'type': 'Sweet Mead',
        'recipeName': 'Jutini\'',
        'bottleRangeMin': 1,
        'bottleRangeMax': 5,
        'size': '1 gal.',
        'notes': 'This is one of my first two meads! This mead uses a weaker yeast that should result in a sweet mead. This is a small batch and may or may not come out tasting like battery acid -- as always, longer aging makes for a better mead!<br><br>Honeys used: 3lb Crocket Raw Arizona Desert Wildflower honey, .5lb Nature Nate\'s Raw Unfiltered honey.',
        'openingDate': 'Open 2018-04-21 at the earliest; let age for a year (2018-10) or longer for optimum taste!',
        'bottleDistribution': [
            ['1', 'JKi'],
            ['2', 'JKi'],
            ['3', 'CBa'],
            ['4', 'MMa'],
            ['5', 'MBa']
        ],
        'timeline': [
            // date, notes
            ['2017-10-09 1830', 'Must prepared.'],
            ['2017-10-09 1930', 'Carboy airlocked.'],
            ['2017-10-09 2230', 'Very few bubbles; some tiny surface ones but only ~10% coverage.'],
            ['2017-10-10 0030', 'Bubble from yeast every minute or two'],
            ['2017-10-11 1415', 'Bubbles every two to three seconds; moved to warmed surroundings with towel around carboy for light and warmth']
        ],
        'gravReadings': [
            // date, OG, notes
            ['2017-10-09', 1.12, 'Pitched']
        ],
        'images': ['img/f1mustevening.jpg', 'img/mixedmusts.jpg', 'img/musts.jpg', 'img/ingredients.jpg', 'img/bundled.jpg'],
        'tastingNotes': ''
    },
    {
        'batchID': 2,
        'type': 'Semi-Dry Mead',
        'recipeName': 'Jutini-α',
        'bottleRangeMin': 6,
        'bottleRangeMax': 10,
        'size': '1 gal.',
        'notes': 'This is one of my first two meads! This mead uses a stronger yeast that should result in a semi-dry mead. This is a small batch and may or may not come out tasting like battery acid -- as always, longer aging makes for a better mead!<br><br>Honeys used: 3lb Crocket Raw Arizona Desert Wildflower honey, .5lb Nature Nate\'s Raw Unfiltered honey. Promised bottles: B6-7 JWK, B8 HLu, B9 MWe, B10 JFe.',
        'openingDate': 'Open 2018-04-21 at the earliest; let age for a year (2018-10) or longer for optimum taste!',
        'bottleDistribution': [
            ['6', 'JKi'],
            ['7', 'JKi'],
            ['8', 'HLu'],
            ['9', 'MWe'],
            ['10', 'JFe']
        ],
        'timeline': [
            // date, notes
            ['2017-10-09 1830', 'Must prepared.'],
            ['2017-10-09 1930', 'Carboy airlocked.'],
            ['2017-10-09 2230', 'Lots of tiny bubbles; 100% surface coverage and about 2mm thick.'],
            ['2017-10-10 0030', 'Creamy layer of top bubbles; bubble through airlock once every 10 seconds. These yeast are HUNGRY!'],
            ['2017-10-11 1415', 'Bubbles every second; moved to warmed surroundings with towel around carboy for light and warmth']
        ],
        'gravReadings': [
            // date, OG, notes
            ['2017-10-09', 1.11, 'Pitched']
        ],
        images: ['img/f2bubbling.gif', 'img/f2mustevening.jpg', 'img/mixedmusts.jpg', 'img/f2must.jpg', 'img/musts.jpg', 'img/ingredients.jpg', 'img/f2yeast.jpg', 'img/bundled.jpg'],
        'tastingNotes': '',
    }
];

var recipes = {
    'Wabozu\'': `Fiery ginger ale

**Volume Produced:** 2 liters

**Brew time:** 2 days

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
    'Jutini\'': `Simple sweet mead

**Voume Produced:** 1 gallon

**Brew time:** 1 month primary, 2 week secondary/stabilization

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
Add room temperature honey, then room temperature distilled water until volume of must is 1 gal.

Pour dry yeast into must, and add DAP with yeast hulls.

Seal carboy and shake vigorously for 4 minutes. Take and record gravity reading if desired. Airlock carboy.

Place in dark location at 60 - 75 degrees F.

After two weeks, check for fermentation completion via SG check. Once complete, rack onto crushed campden and let sit for two weeks or until clear, then bottle.`,
    'Jutini-α': `Simple semi-dry mead

**Voume Produced:** 1 gallon

**Brew time:** 1 month primary, 2 week secondary/stabilization

### Ingredients
- 3.5 lbs honey
- 1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)
- 0.5 tsp LD Carlson Energizer (yeast hulls)
- 5 grams Lavlin 71B-1122
- Distilled water to 1 gal.
- Xylitol to taste (optional)

### Equipment/Misc.
- 1 gal. carboy
- Airlock
- StarSan soln.
- 1 Campden tablet, crushed

### Prep
Clean 1 gal. carboy with StarSan soln. .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.

### Recipe
Add room temperature honey, then room temperature distilled water until volume of must is 1 gal.

Pour dry yeast into must, and add DAP with yeast hulls.

Seal carboy and shake vigorously for 4 minutes. Take and record gravity reading if desired. Airlock carboy.

Place in dark location at 60 - 75 degrees F.

After two weeks, check for fermentation completion via SG check. Once complete, rack onto crushed campden and let sit for two weeks or until clear, backsweeten with xylitol if necessary, then bottle.`,
    'Soravo\'': `Reaper Capsicumel

**Voume Produced:** 1 gallon

**Brew time:** 1 month primary, 1 month oaking/secondary, 2 weeks stabilization

### Ingredients
- 3 lbs honey
- 1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)
- 0.5 tsp LD Carlson Energizer (yeast hulls)
- 5 grams Lavlin EC-1118
- 4 Carolina Reaper chilis
- 1 Med. toast oak spiral
- Distilled water to 1 gal.
- Xylitol to taste (optional)

### Equipment/Misc.
- 1 gal. carboy
- Airlock
- StarSan soln.
- 1 Campden tablet, crushed

### Prep
Clean 1 gal. carboy with StarSan soln. .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.

### Recipe
Add room temperature honey, then room temperature distilled water until volume of must is short of 1 gal. Pour dry yeast into must, and add DAP with yeast hulls.

Seal carboy and shake vigorously for 4 minutes.

Take and record gravity reading if desired.

Simmer chopped and de-seeded chilis in 1/4 cup of water for ten minutes; pour into must through muslin and tie off muslin.

Fill with water to 1 gal. Airlock carboy.

Place in dark location at 60 - 75 degrees F.

After 1 month, rack off peppers and into new vessel with oak spiral.

After another month, rack off oak and add crushed Campden tablet. Let sit for two weeks or until clear, backsweeten with xylitol if necessary, then bottle.`,
    'Duduhu\'': `Ginger metheglin

**Voume Produced:** 1 gallon

**Brew time:** 1 month primary, 2 month (or to taste) secondary, 2 week stabilization

### Ingredients
- 3.5 lbs honey
- 1 tsp LD Carlson Nutrient (diammonium phosphate/DAP)
- 0.5 tsp LD Carlson Energizer (yeast hulls)
- 1 lb raw ginger, peeled and cubed
- 5 grams Lavlin 71B-1122
- Distilled water to 1 gal.
- Xylitol to taste (optional)

### Equipment/Misc.
- 1 gal. carboy
- Airlock
- StarSan soln.
- 1 Campden tablet, crushed

### Prep
Clean 1 gal. carboy with StarSan soln. .1oz starsan (.6 tsp) for half gallon. Rinse until suds subside.

### Recipe
Add room temperature honey, then room temperature distilled water until volume of must is shy of 1 gal.

Pour dry yeast into must, and add DAP with yeast hulls.

Seal carboy and shake vigorously for 4 minutes. Take and record gravity reading if desired.

Fill to 1 gal., put into carboy, and airlock.Place in dark location at 60 - 75 degrees F.

After one month, rack onto peeled and cubed ginger.

After two months (or to taste) on ginger, rack onto crushed campden and let sit for two weeks or until clear, backsweeten with xylitol if necessary, then bottle.`
};
