function bmi() {
    const ism1 = document.querySelector("#ism");
    const familiya1 = document.querySelector("#familiya");
    const weight1 = document.querySelector("#weight");
    const height1 = document.querySelector("#height");
    const natija = document.querySelector("#natija");

    const ism = ism1.value;
    const familiya = familiya1.value;
    const weight = parseFloat(weight1.value);
    const height = parseFloat(height1.value);

    const bmi = (weight / (height * height)).toFixed(2);
    
    const a = "ozg'in";
    const b = "o'rtacha";
    const c = "semiz";
    const d = "juda semiz"
    
    if (bmi < 18.5){
        natija.textContent = (`${ism} ${familiya} ning BMI si ${bmi}. Siz ${a}siz. Semiring !!!`);
    } else if (bmi < 24.9) {
        natija.textContent = (`${ism} ${familiya} ning BMI si ${bmi}. Siz ${b}siz. Shunday vaznda qoling !!!`);
    } else if (bmi < 29.9) {
        natija.textContent = (`${ism} ${familiya} ning BMI si ${bmi}. Siz ${c}siz. Ozroq vazn tashlang !!!`);
    } else {
        natija.textContent = (`${ism} ${familiya} ning BMI si ${bmi}. Siz ${d}siz. Siz parxez qilishingiz zarur !!!`);
    
    natija.textContent = (`${ism} ${familiya} ning BMI si ${bmi}`);
}
