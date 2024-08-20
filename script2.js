let individual_btn = {
  btn_1: 0,
  btn_2: 0,
  btn_3: 0
};

let price_list = [60, 120, 200]

let main_ctr = 0;
let main_price = 0;

let curr_plus_btn;
let curr_minus_btn;

let add_to_cart_btn_list = document.querySelectorAll(".add-to-cart-btn");

add_to_cart_btn_list.forEach(function (add_to_cart_btn) {
  add_to_cart_btn.addEventListener("click", function (e) {
    
    add_to_cart_btn.style.display = "none";

    main_ctr += 1;
    let ctr = document.querySelector(".units-number");
    ctr.innerText = main_ctr;

    individual_btn[e.target.id] += 1;

    let ctr_btn_list = document.querySelectorAll(".ctr_btn");
    let focused_btn = ctr_btn_list[Number(e.target.id[e.target.id.length - 1]) - 1];
    focused_btn.style.display = "flex";
    focused_btn.children[1].innerText = individual_btn[e.target.id];

    main_price += (price_list[Number(e.target.id[e.target.id.length - 1]) - 1]) 
    let price = document.querySelector(".price-number");
    price.innerText = main_price;
  });
});

let plus_btn_list = document.querySelectorAll(".plus");

plus_btn_list.forEach(function (plus_btn) {
  plus_btn.addEventListener("click", function (e) {
    
    curr_plus_btn = e.target.id;

    let btn_p = curr_plus_btn.slice(1, curr_plus_btn.length);

    ctr = document.querySelector(".units-number");
    main_ctr += 1;
    ctr.innerText = main_ctr;

    individual_btn[btn_p] += 1;

    let ctr_btn_list = document.querySelectorAll(".ctr_btn");

    let focused_btn = ctr_btn_list[btn_p[btn_p.length - 1] - 1];
    
    focused_btn.children[1].innerText = individual_btn[btn_p];

    main_price += (price_list[Number(btn_p[btn_p.length - 1]) - 1])
    let price = document.querySelector(".price-number");
    price.innerText = main_price;
    console.log('main_price:' + main_price);    
  });
});

let minus_btn_list = document.querySelectorAll(".minus");

minus_btn_list.forEach(function (minus_btn) {
  minus_btn.addEventListener("click", function (e) {
    curr_minus_btn = e.target.id;

    let btn_m = curr_minus_btn.slice(1, curr_minus_btn.length);

    if (individual_btn[btn_m] == 1) {
      let add_to_cart_btn = document.querySelector(`#${btn_m}`);
      
      add_to_cart_btn.style.display = "block";
      
      ctr = document.querySelector(".units-number");
      main_ctr -= 1;
      ctr.innerText = main_ctr;
      
      individual_btn[btn_m] -= 1;
      
      let ctr_btn_list = document.querySelectorAll(".ctr_btn");
      let focused_btn = ctr_btn_list[Number(btn_m[btn_m.length - 1]) - 1];
      
      focused_btn.style.display = "none";

      main_price -= (price_list[Number(btn_m[btn_m.length - 1]) - 1])
      let price = document.querySelector(".price-number");
      price.innerText = main_price;
    } 
    
    else {
      
        ctr = document.querySelector(".units-number");
      main_ctr -= 1;
      ctr.innerText = main_ctr;
      
      individual_btn[btn_m] -= 1;
      
      let ctr_btn_list = document.querySelectorAll(".ctr_btn");
      let focused_btn = ctr_btn_list[btn_m[btn_m.length - 1] - 1];
      
      focused_btn.children[1].innerText = individual_btn[btn_m];

      main_price -= (price_list[Number(btn_m[btn_m.length - 1]) - 1])
      let price = document.querySelector(".price-number");
      price.innerText = main_price;
    }
  });
});
