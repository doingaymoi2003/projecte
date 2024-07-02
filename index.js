alert("hello world")


    // tao function de get id
    function getEle(id){
        return document.getElementById(id)
    }


    function submitForm(e) {
        e.preventDefault();

        // dom lay gia tri nguoi dung vao
        var prodName = getEle("prodName").value
        var description = getEle("description").value;
        var originalPrice = getEle("originalPrice").value;
        var reducedPrice = getEle("ReducePrice").value;
        var prodMedia = getEle("prodMedia").value;


        var phone = new PhoneModel(
            prodName, 
            description, 
            originalPrice, 
            reducedPrice, 
            prodMedia, 
            new Date() 
        )
        console.log(phone)

        var phoneHtml = ``
// dom toi the div co id la phone de in noi dung
document.getElementById("phone").innerHTML = phoneHtml;
}

// tạo class OOP bằng es6 
    class PhoneModel {
        productName = "";
        description = "";
        originalPrice = 0;
        reducedPrice = 0;
        image = "";
        creatAt = "";

        constructor(name, description, originalPrice, reducedPrice, image, creatAt) {
            this.productName = name;
            this.description = description;
            this.originalPrice = originalPrice;
            this.reducedPrice = reducedPrice;
            this.image = image;
            this.creatAt = creatAt;
        }
    }









// // tạo OOP bằng es5
// function PhoneModel(name, description, originalPrice, ReducedPrice, image, createAT){
//     this.name = name;
//     this.description = description;
//     this.originalPrice = originalPrice;
//     this.ReducedPrice = ReducedPrice;
//     this.image = image;
//     this.creatAt = createAT;
// }

