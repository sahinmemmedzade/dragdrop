const fileInput=document.getElementById("fileInput")
fileInput.addEventListener("change",(e)=>{
    const file=e.target.files[0]
    const reader=new FileReader()
    function readFile(file) {
        reader.onload=(e)=>{
            const box1=document.getElementById("box1")
            if (file.name.endsWith(".img")) {
                const img=new Image()
                img.src=e.target.result
                box1.innerHTML=""
                img.className="dragable"
                box1.appendChild(img)
                img.setAttribute("id","imgdrag");
                img.addEventListener("dragstart", (e) => {
                    e.dataTransfer.setData("image", e.target.id);
                })
            }
            else{
                alert("img uzantili fayl daxil edin!")
            }
        }
        if(file.name.endsWith(".img")){
            reader.readAsDataURL(file)
        }
    }
    readFile(file)
})
const boxs=document.querySelectorAll(".box")
boxs.forEach((box)=>{
    box.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })
    box.addEventListener("drop",(e)=>{
        e.preventDefault()
        const data=e.dataTransfer.getData("image")
        const dragelement=document.getElementById(data)
        console.log(data);
        box.innerHTML=""
        box.append(dragelement) 
    })
})