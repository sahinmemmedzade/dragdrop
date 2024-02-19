const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    function readFile(file) {
        reader.onload = (e) => {
            const box1 = document.getElementById("box1");

            const fileExtension = file.name.split(".").pop().toLowerCase();

            if (["jpg", "jpeg", "png", "s"].includes(fileExtension)) {
                const img = new Image();
                img.src = e.target.result;
                box1.innerHTML = "";
                img.className = "dragable";
                box1.appendChild(img);
                img.setAttribute("id", "imgdrag");

                img.addEventListener("dragstart", (e) => {
                    e.dataTransfer.setData("image", e.target.id);
                });
            } else {
                alert("Supported file formats: jpg, jpeg, png, s");
            }
        };

        if (file.type.startsWith("image/")) {
            reader.readAsDataURL(file);
        } else {
            alert("Unsupported file type. Please select an image.");
        }
    }

    readFile(file);
});

const boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    box.addEventListener("drop", (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("image");
        const dragelement = document.getElementById(data);
        console.log(data);
        box.innerHTML = "";
        box.append(dragelement);
    });
});
