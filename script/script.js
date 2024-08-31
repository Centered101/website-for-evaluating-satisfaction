function resetWindow() {
    window.location.reload(true);
}

window.onload = function () {
    const image = document.getElementById("image");
    const textOne = document.getElementById("text-1");
    const textTwo = document.getElementById("text-2");
    const textTree = document.getElementById("text-3");

    setTimeout(() => {
        textOne.style.opacity = '1';
        textTwo.style.opacity = '0';
        textTree.style.opacity = '0';
    }, 5000);

    setTimeout(() => {
        textOne.style.opacity = '0';
        textOne.style.opacity = '0';
        textTwo.style.opacity = '1';
        textTree.style.opacity = '0';
    }, 10000);

    setTimeout(() => {
        textOne.style.opacity = '0';
        textTwo.style.opacity = '0';
        textTree.style.opacity = '1';
    }, 15000);

    setTimeout(() => {
        textOne.style.opacity = '0';
        textTwo.style.opacity = '0';
        textTree.style.opacity = '0';
    }, 20000);
};

// เลือกทุก thumbnail และเพิ่ม event listener สำหรับการคลิก
document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', function () {
        openFullscreen(this.src); // เมื่อคลิกที่รูปภาพ, เรียกฟังก์ชัน openFullscreen
    });
});

// ฟังก์ชันแสดงรูปภาพแบบเต็มหน้าจอ
function openFullscreen(imageSrc) {
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImage = document.getElementById('fullscreenImage');

    fullscreenImage.src = imageSrc; // ตั้งค่าที่มาของรูปภาพแบบเต็มหน้าจอ
    fullscreen.style.display = 'grid'; // แสดงส่วน fullscreen
}

// ฟังก์ชันปิดการแสดงผลรูปภาพแบบเต็มหน้าจอ
function closeFullscreen() {
    const fullscreen = document.getElementById('fullscreen');
    fullscreen.style.display = 'none'; // ซ่อนส่วน fullscreen
}

function updateSectionTracker(currentSection) {
    const totalSections = 2;
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
        document.querySelector('.section-3').style.display = 'block';
        // document.querySelector('.pewcenter').style. = 'block';
        updateSectionTracker(2);
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
            window.location.href = "/index.html";
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

function hide() {
    const draggable = document.getElementById('draggable');
    draggable.style.display = "none";
}

const draggable = document.getElementById('draggable');

let isDragging = false; // สถานะการลาก
let offsetX, offsetY; // ตัวแปรสำหรับเก็บการชดเชยของตำแหน่ง

// ฟังก์ชันเริ่มการลากด้วยเมาส์
draggable.addEventListener('mousedown', (event) => {
    startDragging(event.clientX, event.clientY);
});

// ฟังก์ชันเริ่มการลากด้วยการสัมผัส
draggable.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    startDragging(touch.clientX, touch.clientY);
});

// ฟังก์ชันเริ่มการลาก (ทั่วไป)
function startDragging(clientX, clientY) {
    isDragging = true;
    offsetX = clientX - draggable.offsetLeft;
    offsetY = clientY - draggable.offsetTop;
    draggable.style.cursor = 'grabbing'; // เปลี่ยน cursor ขณะลาก
}

// ฟังก์ชันการลากด้วยเมาส์
document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        moveElement(event.clientX, event.clientY);
    }
});

// ฟังก์ชันการลากด้วยการสัมผัส
document.addEventListener('touchmove', (event) => {
    if (isDragging) {
        const touch = event.touches[0];
        moveElement(touch.clientX, touch.clientY);
    }
});

// ฟังก์ชันการเลื่อนตำแหน่งขององค์ประกอบ (ทั่วไป)
function moveElement(clientX, clientY) {
    draggable.style.left = `${clientX - offsetX}px`;
    draggable.style.top = `${clientY - offsetY}px`;
}

// ฟังก์ชันหยุดการลากด้วยเมาส์
document.addEventListener('mouseup', () => stopDragging());

// ฟังก์ชันหยุดการลากด้วยการสัมผัส
document.addEventListener('touchend', () => stopDragging());

// ฟังก์ชันหยุดการลาก (ทั่วไป)
function stopDragging() {
    isDragging = false;
    draggable.style.cursor = 'grab'; // เปลี่ยน cursor กลับเมื่อปล่อย
}