const form = document.forms.vaccine;
const FirstName = form.FirstName;
const MiddleName = form.MiddleName;
const LastName = form.LastName;
const DOB = form.DOB;
const email = form.email;
const region = form.region;
const province = form.province;
const brgy = form.brgy;
const street = form.street;
const gender = form.gender;
const dose1 = form.dose1;
const DOV1 = form.DOV1;
const vacSite1 = form.vacSite1;
const didU = form.didU;
const dose2 = form.dose2;
const DOV2 = form.DOV2;
const vacSite2 = form.vacSite2;

function DisabledItems(result) {
if(result===true){
            dose2.value = '';
            DOV2.value = '';
            vacSite2.value = '';
            
            dose2.disabled = true;
            DOV2.disabled = true;
            vacSite2.disabled = true;
    } else {
            dose2.disabled = false;
            DOV2.disabled = false;
            vacSite2.disabled = false;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    if (!FirstName.value){
        setError('First Name is required!');
        return;
    }
    if (!MiddleName.value){
        setError('Middle Name is required!');
        return;
    }
    if (!LastName.value){
        setError('Last Name is required!');
        return;
    }
    if (!DOB.value){
        setError('Birthday is required!');
        return;
    }
    if (!email.value){
        setError('Email is required!');
        return;
    }
    if (!region.value){
        setError('Region is required!');
        return;
    }
    if (!province.value){
        setError('Province is required!');
        return;
    }
    if (!brgy.value){
        setError('Barangay is required!');
        return;
    }
    if (!street.value){
        setError('Street is required!');
        return;
    }
    if (!gender.value){
        setError('Gender is required!');
        return;
    }
    if (!dose1.value){
        setError('Vaccine Dose 1 is required!');
        return;
    }
    if (!DOV1.value){
        setError('Date of Vaccine Dose 1 is required!');
        return;
    }
    if (!vacSite1.value){
        setError('Vaccine Dose 1 Site is required!');
        return;
    }
    if (!didU.value){
        setError('Please answer 2nd dose question!');
        return;
    }

    composedMsg = `<span class="close">&times;</span>
    <h2>Vaccine Registration</h2>
    <b><u>Personal Details</u>:</b><br>
    First Name: ${FirstName.value} <br>
    Middle Name: ${MiddleName.value} <br>
    Last Name: ${LastName.value} <br>
    Date of Birth: ${DOB.value} <br>
    Email: ${email.value} <br>
    Region: ${region.value} <br>
    Province: ${province.value} <br>
    Barangay: ${brgy.value} <br>
    Street: ${street.value} <br>
    Gender: ${gender.value} <br><br>
    <b><u>Vaccine Details</u>:</b><br>
    Vaccine Brand (Dose 1): ${dose1.value} <br>
    Date of Vaccination (Dose 1): ${DOV1.value} <br>
    Vaccination Site (Dose 1): ${vacSite1.value} <br>
    With Second Vaccination? ${didU.value} <br>`;

if(didU.value==="Yes"){
    if (!dose2.value){
        setError('Vaccine Dose 2 is required!');
        return;
    }
    if (!DOV2.value){
        setError('Date of Vaccine Dose 2 is required!');
        return;
    }
    if (!vacSite2.value){
        setError('Vaccine Dose 2 Site is required!');
        return;
    }

    composedMsg += `Vaccine Brand (Dose 2): ${dose2.value} <br>
    Date of Vaccination (Dose 2): ${DOV2.value} <br>
    Vaccination Site (Dose 2): ${vacSite2.value} <br>`;

}

    function setError(errorMsg){
        alert(errorMsg);
    }

    vaccine.reset();

    document.getElementById("regDetails").innerHTML = composedMsg;

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
});







