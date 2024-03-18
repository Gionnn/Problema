Algoritmul preia numarul introdus si il transforma intr-un sir de caractere in variabila sir, verifica cum se vor citi combinatiile de cifre pentru numerele de ordinul zecilor si sutelor, apoi folosindu-se de aceste criterii se poate determina cum se vor citi si urmatoarele numere de ordinul miilor, sutelor de mii si milioanelor, la fel formarea lor tinand cont de anumite criterii in care numarul se scrie cu 'o suta/doua sute' sau 'sute', 'mii' sau 'de mii', 'milion' sau 'milioane / de milioane'.

// Algoritmul merge pana la 1 miliard, dar pe acelasi criteriu poate fi updatat si pentru valorile mai mari.

//Singurul lucru pe care nu am stiut cum sa-l fac, e sa modific din 'doi' in 'doua' ca exemplu : 152000 este scris ca fiind 'o suta cincizeci si doi de mii', in loc de 'o suta cincizeci si doua de mii'.

//Criteriul pe care l-am gasit eu este: daca sir.length > 5, folosim un for pentru a parcurge sirul de la 0 la sir.length/2 iar daca gasim in sir[i] valoarea 2 sa fie schimbat din 'doi' in 'doua', doar ca nu stiu cum sa-l implementez fara a folosi alt sir si sa stric tot algoritmul :/
