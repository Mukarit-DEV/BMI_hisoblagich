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
    natija.textContent = (`${ism} ${familiya} ning BMI si ${bmi}`);
}