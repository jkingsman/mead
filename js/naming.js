function randElement(a) {
    return a[Math.floor(Math.random() * a.length)];
}

function generateName(length, version) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'z'];
    const versions = [
        ['\'', 'prime'],
        ['α', 'alpha'],
        ['β', 'beta'],
        ['γ', 'gamma'],
        ['δ', 'delta'],
        ['ε', 'epsilon'],
        ['ζ', 'zeta'],
        ['η', 'eta'],
        ['θ', 'theta'],
        ['ι', 'iota'],
        ['κ', 'kappa'],
        ['λ', 'lambda'],
        ['μ', 'mu'],
        ['ν', 'nu'],
        ['ξ', 'xi'],
        ['ο', 'omicron'],
        ['π', 'pi'],
        ['ρ', 'rho'],
        ['σ', 'sigma'],
        ['τ', 'tau'],
        ['υ', 'upsilon'],
        ['φ', 'phi'],
        ['χ', 'chi'],
        ['ψ', 'psi'],
        ['ω', 'omega'],
    ];


    let isConsonant = true;
    let name = '';

    for (let i = 0; i < length; i++) {
        name += isConsonant ? randElement(consonants) : randElement(vowels);
        isConsonant = !isConsonant;
    }

    let suffix = '';
    if (version === 0) {
        suffix = versions[0][0];
    } else {
        suffix = `-${versions[version][0]} (${versions[version][1]})`;
    }
    return name + suffix;
}

function name() {
    console.log(generateName(6, 0));
}
