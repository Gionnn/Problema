// Algoritmul preia numarul introdus si il transforma intr-un sir de caractere in variabila sir, verifica cum se vor citi combinatiile de cifre pentru numerele de ordinul zecilor si sutelor, apoi folosindu-se de aceste criterii se poate determina cum se vor citi si urmatoarele numere de ordinul miilor, sutelor de mii si milioanelor, la fel formarea lor tinand cont de anumite criterii in care numarul se scrie cu 'o suta/doua sute' sau 'sute', 'mii' sau 'de mii', 'milion' sau 'milioane / de milioane'.

// Algoritmul merge pana la 1 miliard, dar pe acelasi criteriu poate fi updatat si pentru valorile mai mari.

//Singurul lucru pe care nu am stiut cum sa-l fac, e sa modific din 'doi' in 'doua' ca exemplu : 152000 este scris ca fiind 'o suta cincizeci si doi de mii', in loc de 'o suta cincizeci si doua de mii'.

//Criteriul pe care l-am gasit eu este: daca sir.length > 5, folosim un for pentru a parcurge sirul de la 0 la sir.length/2 iar daca gasim in sir[i] valoarea 2 sa fie schimbat din 'doi' in 'doua', doar ca nu stiu cum sa-l implementez fara a folosi alt sir si sa stric tot algoritmul :/


function cuvant(num) {
  var numere = [
    "",
    "unu",
    "doi",
    "trei",
    "patru",
    "cinci",
    "sase",
    "sapte",
    "opt",
    "noua",
    "zece",
    "unsprezece",
    "doisprezece",
    "treisprezece",
    "paisprezece",
    "cincisprezece",
    "saisprezece",
    "saptesprezece",
    "optsprezece",
    "nouasprezece"
  ];
  var zeci = [
    "",
    "",
    "douazeci",
    "treizeci",
    "patruzeci",
    "cincizeci",
    "saizeci",
    "saptezeci",
    "optzeci",
    "nouazeci"
  ];

  var sir = num.toString();

  //Pentru cazul in care numarul introdus este 0

  if(sir.length === 1 && num === 0)
  return 'Zero';

  //Pentru numerele de la 1-20

  if (num < 20) {
    return numere[num];
  }

  if (sir.length === 2 && num === 20)
    return zeci[sir[0]] + numere[sir[1]];
  if (sir.length === 2)
    return zeci[sir[0]] + " si " + numere[sir[1]];

  //Pentru numerele de la 100-1000

  if (sir.length == 3) {
    if (sir[0] === "1")
      return "o suta " + cuvant(+(sir[1] + sir[2]));
    else if (sir[0] === "2")
      return "doua sute " + cuvant(+(sir[1] + sir[2]));
    else
      return (
        numere[sir[0]] + " sute " + cuvant(+(sir[1] + sir[2]))
      );
  }

  //Pentru numerele de la 1000-10000

  if (sir.length === 4) {
    var final = +(sir[1] + sir[2] + sir[3]);
    if (sir[0] === "1") return "o mie " + cuvant(final);
    else if (sir[0] === "2") return "doua mii " + cuvant(final);
    else return numere[sir[0]] + " mii " + cuvant(final);
  }

  //Pentru numerele de la 10000-100000

  if (sir.length === 5) {
    var final = +(sir[2] + sir[3] + sir[4]);
    if (num / 1000 < 20)
      return numere[parseInt(num / 1000)] + " mii " + cuvant(final);
    else
      return (
        zeci[sir[0]] +
        " si " +
        numere[sir[1]] +
        " de mii " +
        cuvant(final)
      );
  }

  //Pentru numerele de la 100000-1000000

  if (sir.length === 6) {
    var incep = +(sir[0] + sir[1] + sir[2]);
    var final = +(sir[3] + sir[4] + sir[5]);

    return cuvant(incep) + " de mii " + cuvant(final);
  }

  //Pentru numerele de la 1000000-10000000

  if (sir.length === 7) {
    var verif = +(sir[2] + sir[3]);
    var incep = +(sir[1] + sir[2] + sir[3]);
    var final = +(sir[4] + sir[5] + sir[6]);

    if (sir[0] === "1" && verif < 20)
      return "un milion " + cuvant(incep) + "  " + cuvant(final);
    else if (sir[0] === "1" && verif > 20)
      return "un milion " + cuvant(incep) + " de mii " + cuvant(final);
    else if (sir[0] === "2" && verif < 20)
      return "doua milioane " + cuvant(incep) + " mii " + cuvant(final);
    else if (sir[0] === "2" && verif > 20)
      return "doua milioane " + cuvant(incep) + " mii " + cuvant(final);
    else if (sir[0] > "2" && verif < 20)
      return (
        numere[sir[0]] +
        " milioane " +
        cuvant(incep) +
        " mii " +
        cuvant(final)
      );
    else if (sir[0] > "2" && verif > 20)
      return (
        numere[sir[0]] +
        " milioane " +
        cuvant(incep) +
        " de mii " +
        cuvant(final)
      );
  }

  //Pentru numerele de la 10000000-100000000

  if (sir.length === 8) {
    var prm = +(sir[0] + sir[1]);
    var incep = +(sir[2] + sir[3] + sir[4]);
    var final = +(sir[5] + sir[6] + sir[7]);

    if (num / 1000000 < 20)
      return (
        cuvant(prm) + " milioane " + cuvant(incep) + " de mii " + cuvant(final)
      );
    else
      return (
        cuvant(prm) +
        " de milioane " +
        cuvant(incep) +
        " de mii " +
        cuvant(final)
      );
  }

  //Pentru numerele de la 100000000-1000000000

  if (sir.length === 9) {
    var prm = +(sir[0] + sir[1] + sir[2]);
    var incep = +(sir[3] + sir[4] + sir[5]);
    var final = +(sir[6] + sir[7] + sir[8]);

    if ((num / 1000000) % 100 < 20)
      return (
        cuvant(prm) + " milioane " + cuvant(incep) + " de mii " + cuvant(final)
      );
    else
      return (
        cuvant(prm) +
        " de milioane " +
        cuvant(incep) +
        " de mii " +
        cuvant(final)
      );
  }
}

console.log(cuvant(618754923));
