function resetWindow() {
    window.location.reload(true);
}

function updateSectionTracker(currentSection) {
    const totalSections = 5;
    document.getElementById('sectionTracker').textContent = `${currentSection}-${totalSections}`;
}

function showSection2() {
    const requiredFields = document.querySelectorAll('.section-1 input[required]');
    let allFilled = true;

    requiredFields.forEach(function (field) {
        if (!field.value) {
            allFilled = false;
            field.style.borderColor = '#ff0000';
        } else {
            field.style.borderColor = '#0056b3';
        }
    });

    if (allFilled) {
        document.querySelector('.section-1').style.display = 'none';
        document.querySelector('.section-2').style.display = 'block';
        updateSectionTracker(2);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

function showSection3() {
    const requiredFields = document.querySelectorAll('.section-2 textarea[required]');
    let allFilled = true;

    requiredFields.forEach(function (field) {
        if (!field.value) {
            allFilled = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '';
        }
    });

    if (allFilled) {
        document.querySelector('.section-2').style.display = 'none';
        document.querySelector('.section-3').style.display = 'block';
        updateSectionTracker(3);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

function showSection4() {
    const requiredFields = document.querySelectorAll('.section-3 textarea[required]');
    let allFilled = true;

    requiredFields.forEach(function (field) {
        if (!field.value) {
            allFilled = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '';
        }
    });

    if (allFilled) {
        document.querySelector('.section-3').style.display = 'none';
        document.querySelector('.section-4').style.display = 'block';
        updateSectionTracker(4);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

function showSection5() {
    const requiredFields = document.querySelectorAll('.section-4 textarea[required]');
    let allFilled = true;

    requiredFields.forEach(function (field) {
        if (!field.value) {
            allFilled = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '';
        }
    });

    if (allFilled) {
        document.querySelector('.section-4').style.display = 'none';
        document.querySelector('.section-5').style.display = 'block';
        updateSectionTracker(5);
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

const scriptURL = "https://script.google.com/macros/s/AKfycbzzF-GNwZW3h99qiqKZRXcLxtZp4r-VEFcx7PE5FI-k8FxTr7G2wwZ_s9bBw6K5AkgE/exec";
const form = document.getElementById("surveyForm");
const submitButton = form.querySelector('input[type="submit"]');
const submitDiv = form.querySelector('.submit');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // ซ่อนปุ่ม submit และแสดง submitDiv
    submitButton.style.display = "none";
    submitDiv.style.display = "block";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            alert("ขอบคุณ! แบบฟอร์มของคุณถูกส่งเรียบร้อยแล้ว");
            // ทำการ reload หน้าหลังจากแสดงข้อความแจ้งเตือน
            window.location.reload();
        })
        .catch((error) => {
            handleError(error);
        });
});

function handleError(error) {
    console.error("Error!", error.message);

    // แสดงปุ่ม submit อีกครั้ง และซ่อน submitDiv
    submitButton.style.display = "block";
    submitDiv.style.display = "none";
}
