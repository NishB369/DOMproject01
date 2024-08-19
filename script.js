// "use strict";

// let add_to_card_button_list = document.querySelectorAll('.add-to-cart-btn')
// // console.log(add_to_card_button_list);

// let main_ctr = 0
// let flag = false

// // add_to_cart_btn not clicked
// let btn_change = function (flag,idx) {
//     if (flag){
//     let add_btn_ctr_del = document.querySelector('.add-to-cart-btn');
//     add_btn_ctr_del.remove()
//     let ctr_btn_display_list= document.querySelectorAll('.ctr_btn')
//     ctr_btn_display_list.forEach(function(){
//         ctr_btn_display_list[idx-1].style.display = "flex";
//     })
// }
// }

// add_to_card_button_list.forEach(function(single_btn){
//     single_btn.addEventListener('click', function(e) {
//         ctr = document.querySelector('.units-number')
//         main_ctr+=1
//         ctr.innerText = main_ctr
//         flag = true
//         btn_change(flag, e.target.id[e.target.id.length-1])
//     })
// })

// let plus_btn_list = document.querySelectorAll('.plus')
// plus_btn_list.forEach(function (plus_btn) {
//     let inner_count = 1
//     plus_btn.addEventListener('click', function(){

//         ctr = document.querySelector('.units-number')
//         main_ctr+=1
//         ctr.innerText = main_ctr

//         // inner_ctr = document.querySelector('ctr_btn').children[1]
//         // inner_ctr = document.querySelector('.ctr_btn').children[1]
//         inncer_ctr_list = document.querySelectorAll('.ctr-btn')
//         inncer_ctr_list.forEach(function(btn_parent){
//             inner_ctr = btn_parent.children[1]
//             inner_count+=1
//             inner_ctr.innerText = inner_count
//         })
//         // console.log(inner_ctr);
//     })
// })

// let minus_btn_list = document.querySelectorAll('.minus')
// minus_btn_list.forEach(function (minus_btn) {
//     let inner_count = 1
//     minus_btn.addEventListener('click', function(){
//         // inner_count = 1
//         ctr = document.querySelector('.units-number')
//         main_ctr-=1
//         ctr.innerText = main_ctr
//         inner_ctr = document.querySelector('.ctr_btn').children[1]
//         inner_count-=1
//         inner_ctr.innerText = inner_count
//     })
// })

// // console.log(inner_ctr = document.querySelector('ctr_btn'));

// accessing all add to cart button

let individual_btn = {
  btn_1: 0,
  btn_2: 0,
  btn_3: 0,
};

let flag = false;
let main_ctr = 0;

let curr_plus_btn;
let curr_minus_btn;

let add_to_cart_btn_list = document.querySelectorAll(".add-to-cart-btn");
console.log(add_to_cart_btn_list);

add_to_cart_btn_list.forEach(function (add_to_cart_btn) {
  add_to_cart_btn.addEventListener("click", function (e) {
    add_to_cart_btn.style.display = "none";

    main_ctr += 1;

    let ctr = document.querySelector(".units-number");

    ctr.innerText = main_ctr;

    flag = true;

    individual_btn[e.target.id] += 1;

    let ctr_btn_list = document.querySelectorAll(".ctr_btn");
    let focused_btn =
      ctr_btn_list[Number(e.target.id[e.target.id.length - 1]) - 1];
    focused_btn.style.display = "flex";
    focused_btn.children[1].innerText = individual_btn[e.target.id];

    curr_plus_btn = e.target.id;
    curr_minus_btn = e.target.id;
  });
});

let plus_btn_list = document.querySelectorAll(".plus");
plus_btn_list.forEach(function (plus_btn) {
  plus_btn.addEventListener("click", function (e) {
    ctr = document.querySelector(".units-number");
    main_ctr += 1;
    ctr.innerText = main_ctr;

    individual_btn[curr_plus_btn] += 1;

    let ctr_btn_list = document.querySelectorAll(".ctr_btn");

    let focused_btn = ctr_btn_list[curr_plus_btn[curr_plus_btn.length - 1] - 1];
    focused_btn.children[1].innerText = individual_btn[curr_plus_btn];
  });
});

let minus_btn_list = document.querySelectorAll(".minus");
minus_btn_list.forEach(function (minus_btn) {
  minus_btn.addEventListener("click", function (e) {
    // console.log(curr_minus_btn);
    // console.log(individual_btn[curr_minus_btn] == 1);

    // console.log(add_to_cart_btn);

    if (individual_btn[curr_minus_btn] == 1) {
      let add_to_cart_btn = document.querySelector(`#${curr_minus_btn}`);
      add_to_cart_btn.style.display = "block";
      ctr = document.querySelector(".units-number");
      main_ctr -= 1;
      ctr.innerText = main_ctr;
      individual_btn[curr_minus_btn] -= 1;
      let ctr_btn_list = document.querySelectorAll(".ctr_btn");
      let focused_btn =
        ctr_btn_list[Number(curr_minus_btn[curr_minus_btn.length - 1]) - 1];
      focused_btn.style.display = "none";
    } else {
      ctr = document.querySelector(".units-number");
      main_ctr -= 1;
      ctr.innerText = main_ctr;
      individual_btn[curr_minus_btn] -= 1;
      let ctr_btn_list = document.querySelectorAll(".ctr_btn");
      let focused_btn =
        ctr_btn_list[curr_minus_btn[curr_minus_btn.length - 1] - 1];
      focused_btn.children[1].innerText = individual_btn[curr_minus_btn];
    }
  });
});
