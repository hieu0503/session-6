// Bài 1 : Cho 1 chuỗi str_input. 
// Viết chương trình đảo ngược chuỗi 
// và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả

// function daoChuoi(str) {
//     let input = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         input += str[i];
//     }
//     return input;
// }
// console.log(daoChuoi('hello'));

// Bài 2 : Viết 1 chương trình với đầu vào là 
// 1 chuỗi ký tự và in ra chuỗi đó với các ký
//  tự đầu của chữ mỗi chữ được viết hoa. (2đ)

// function inHoa(str) {
//     let strArr = str.split(" ");
//     for (let i = 0; i < strArr.length; i++) {
//         let charArr = strArr[i].split("");
//         charArr[0] = charArr[0].toUpperCase();
//         strArr[i] = charArr.join("");
//     }
//     return strArr.join(" ");
// }
// console.log(inHoa('hello cac ban'));

// Bài 3 : Viết một chương trình xóa các phần tử 
// trùng của một mảng và in ra kết quả

// function xoaTrung(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(xoaTrung(['he','llo','he','llo','ban']))

// Bài 4 : Tạo dữ liệu của 3 nhân viên mindX 
// (gồm tên, tuổi, mức lương, chức vụ). Xây dựng 
// chương trình quản lý nhân viên với các chức năng 
// (Read, Create, Update, Delete).


// em chua lam xong
// let user = [
//     {
//         name: 'An',
//         age: 20,
//         salary: 100,
//         position: 'TTS'
//     },
//     {
//         name: 'Bach',
//         age: 22,
//         salary: 600,
//         position: 'NV'
//     },
//     {
//         name: 'Chung',
//         age: 30,
//         salary: 2000,
//         position: 'GD'
//     }
// ];
// let userInput = prompt("Enter C/R/U/E");
// if (userInput === "C") {
//     let name = prompt("Enter name");
//     let age = Number(prompt("Enter age"));
//     let salary = Number(prompt("Enter salary"));
//     let position = prompt("Enter position");
//     let newUser = 
// }
// if (userInput == "R") {
//     console.table(user);
// }
// if (userInput == "U") {
//     let i = Number(prompt("Enter index: "));
//     if (i > user.length) {

//     }
//     else {

//     }
// }
// if (userInput == "D") {
//     let i = Number(prompt("Enter index: "));
//     if (i > user.length || i < 0) {
//         alert("Ko tim dc vi tri cua " + i);
//     } else {
//         user.splice(i, 1);
//         alert("xoa thanh cong");
//         console.table(user);
//     }
// }

// Bài 5 : Viết chương trình cho phép người dùng
// nhập vào ngày tháng năm
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo

function checkDate(strDate) {
    let str = "";
    let comp = strDate.split('/')
    let d = parseInt(comp[0], 10)
    let m = parseInt(comp[1], 10)
    let y = parseInt(comp[2], 10)
    let date = new Date(y,m-1,d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
        return str = strDate + ' la ngay hop le';
    }
    return str = strDate + ' la ngay khong hop le';
}
console.log(checkDate('29/02/2019'));

// em con phan B
