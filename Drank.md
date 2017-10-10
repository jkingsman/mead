# Dranks

## Wabozu'
A PET bottle ginger ale, with a fiery kick, light carbonation, and a short lifespan.

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
At 2 days, burp and refrigerate bottle. Allow 24 hours for yeast to fall asleep, then siphon off into another StarSan'd 2L soda bottle, leaving the flocculated yeast at the bottom of the first bottle.  Take and record gravity reading if desired. Keep chilled and drink quickly; the carbonation will not last long -- 3 days is safe.

### Modifications
#### Wabozu-α
Modified for longer brew times.

**Brew time:** 1 week

**Age time:** 2 day

Instead of waiting two days before chill-down, wait one week, burping every 48 hours or sooner if bottle is dangerously pressurized (bottom bulging/rounded, etc.). When chilling, allow two days in fridge for yeast to settle before siphoning

### Executions
#### ~2012-09-15? Date uncertain -- Wabozu'
Came out lovely and hot and spicy, but man oh man did the carbonation disappear quickly. No measurable change in OG; maaaybe 2% if I recall?

--------------

## Jutini'
Simple introductory Mead.

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

When the mead is clear enough to read newsprint through it, it's ready to bottle.

### Modifications
#### Jutini-α
Modified to be drier.

Instead of Sofale US-05, use Lavlin 71B-1122.

### Executions

--------------

# Name Generation Script
```js
function randElement(a){
    return a[Math.floor(Math.random() * a.length)];
}

function generateName(length, version){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z'];
    var versions = [["'", "prime"], ["α", "alpha"], ["β", "beta"], ["γ", "gamma"], ["δ", "delta"], ["ε", "epsilon"], ["ζ", "zeta"], ["η", "eta"], ["θ", "theta"], ["ι", "iota"], ["κ", "kappa"], ["λ", "lambda"], ["μ", "mu"], ["ν", "nu"], ["ξ", "xi"], ["ο", "omicron"], ["π", "pi"], ["ρ", "rho"], ["σ", "sigma"], ["τ", "tau"], ["υ", "upsilon"], ["φ", "phi"], ["χ", "chi"], ["ψ", "psi"], ["ω", "omega"]];


    var isConsonant = true;
    var name = '';

    for(var i = 0; i < length; i++){
        name += isConsonant ? randElement(consonants) : randElement(vowels);
        isConsonant = !isConsonant;
    }

    var suffix = '';
    if(version === 0){
        suffix = versions[0][0];
    } else {
        suffix = "-" + versions[version][0] + " (" + versions[version][1] + ")"
    }
    return name + suffix;
}

generateName(6, 0);
```

Minified:
```js
function randElement(a){return a[Math.floor(Math.random()*a.length)]}function generateName(a,e){for(var t=["a","e","i","o","u"],n=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","z"],r=[["'","prime"],["α","alpha"],["β","beta"],["γ","gamma"],["δ","delta"],["ε","epsilon"],["ζ","zeta"],["η","eta"],["θ","theta"],["ι","iota"],["κ","kappa"],["λ","lambda"],["μ","mu"],["ν","nu"],["ξ","xi"],["ο","omicron"],["π","pi"],["ρ","rho"],["σ","sigma"],["τ","tau"],["υ","upsilon"],["φ","phi"],["χ","chi"],["ψ","psi"],["ω","omega"]],i=!0,m="",o=0;o<a;o++)m+=randElement(i?n:t),i=!i;var l="";return l=0===e?r[0][0]:"-"+r[e][0]+" ("+r[e][1]+")",m+l}generateName(6,0);
```
