product_root = document.querySelector('.productWrapper')
cartWrapper = document.querySelector('.cart_items')
cart_button = document.querySelector('.cart_button')

const productList = [
  {
    id: 0,
    productPic: 'C:/Users/Ezzytechs/Pictures/BlueStacks/audio.jpg',
    productName: ' OX Standing Fan',
    productPrice: 15000,
    productDesc: 'portable earphone for cool music',
    productCat: 'home appliances',
    discount: 10,
    morePic: [
      'C:/Users/Ezzytechs/Desktop/Lantana/4.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/5.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/6.jpg',
    ],
  },
  {
    id: 1,
    productPic: 'C:/Users/HP/Desktop/GALLERY/logo.jpg',
    productName: 'Infinix hot11 pro',
    productPrice: 1000,
    productDesc: 'ram 3gb, rom32gb battery 6000mah',
    productCat: 'phones',
    discount: 10,
    morePic: [
      'C:/Users/Ezzytechs/Desktop/Lantana/1.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/2.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/3.jpg',
    ],
  },

  {
    id: 2,
    productPic: 'C:/Users/Ezzytechs/Pictures/BlueStacks/pro3.jpg',
    productName: 'Tecno spark 4 pro',
    productPrice: 95000,
    productDesc:
      'the tecno spark 4 is portable and durable with three months guarantee',
    productCat: 'phones',
    morePic: [
      'C:/Users/Ezzytechs/Desktop/Lantana/6.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/1.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/4.jpg',
    ],
  },

  {
    id: 3,
    productPic: 'C:/Users/Ezzytechs/Pictures/BlueStacks/pro3.jpg',
    productName: 'LG Home theater',
    productPrice: 155000,
    productDesc: 'ram 3gb, rom32gb battery 6000mah',
    productCat: 'home appliances',
    morePic: [
      'C:/Users/Ezzytechs/Desktop/Lantana/5.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/2.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/4.jpg',
    ],
  },
  {
    id: 4,
    productPic: 'C:/Users/HP/Desktop/GALLERY/logo.jpg',
    productName: 'Tecno spark 5 pro',
    productPrice: 120000,
    productDesc: 'ram 4gb, rom64gb battery 5000mah',
    productCat: 'phones',
    morePic: [
      'C:/Users/Ezzytechs/Desktop/Lantana/1.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/2.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/3.jpg',
    ],
  },
  {
    id: 5,
    productPic: 'C:/Users/HP/Desktop/GALLERY/logo.jpg',
    productName: 'LG Plasma TV 50"',
    productPrice: 160000,
    productDesc: 'A 50" tv set for your home ',
    productCat: 'home appliances',
    discount: 5,
    morePic: [
      'C:/Users/Ezzytechs/Desktop/Lantana/1.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/2.jpg',
      'C:/Users/Ezzytechs/Desktop/Lantana/3.jpg',
    ],
  },
]

//discount sales
function discountProducts() {
  filterProduct = (els) => {
    return els.discount > 0
  }

  let discountText = ''
  let discountProducts = productList.filter(filterProduct)
  discountProducts.forEach((els) => {
    discountText += `
  
   <div class="product" id='${'products' + els.id}'>
   <button class="details" id="${
     'details' + els.id
   }" onClick="detailview(this.id)">i</button>
 <div class="product_picdiv"><img class="product_pic" src="${
   els.productPic
 }"></div>
  <div class="product_name">${els.productName}</div>
  <div class="productPriceDiv">
  <div class="product_price">${
    els.discount
      ? //to display price without discount if none
        els.productPrice - els.productPrice * (els.discount / 100)
      : els.productPrice
  }NGN</div>
  <div class="product_price_old">${
    els.discount ? els.productPrice + 'NGN' : ''
  }</div>
</div>
  <button onClick="addToCart(this.id)" id='${
    'cartButton' + els.id
  }' class="add_cart">add to cart</button>
  </div>`
  })
  document.getElementById('productWrapper').innerHTML = `
  <div class="catHeading">Discount</div>
  <div class="discount" id="products">${discountText}</div>`
}
text = ''
function createproduct(categorylist, headerText, t, textToFilter) {
  function filterProduct(els) {
    return els.productCat == textToFilter
  }

  categorylist = productList.filter(filterProduct)

  categorylist.forEach((item) => {
    t += `
  
   <div class="product" id='${'products' + item.id}'>
   <button class="details" id="${
     'details' + item.id
   }" onClick="detailview(this.id)">i</button>
 <div class="product_picdiv"><img class="product_pic" src="${
   item.productPic
 }"></div>
  <div class="product_name">${item.productName}</div>
  <div class="productPriceDiv">
  <div class="product_price">${
    item.discount
      ? //to display price without discount if none
        item.productPrice - item.productPrice * (item.discount / 100)
      : item.productPrice
  }NGN</div>
  <div class="product_price_old">${
    item.discount ? item.productPrice + 'NGN' : ''
  }</div>
</div>
  <button onClick="addToCart(this.id)" id='${
    'cartButton' + item.id
  }' class="add_cart">add to cart</button>
  </div>`
  })
  let parentdiv = document.createElement('div')
  parentdiv.classList.add(`products`)
  parentdiv.innerHTML = `
  <div class="catHeading">${headerText}</div>
  <div class="${textToFilter}" id="products">${t}</div>`

  document.getElementById('productWrapper').appendChild(parentdiv)
}

let lists = ''
let tot = 0
overList = []
arr = []
function addToCart(getCartId) {
  let id = getCartId.slice(10)
  document.getElementById(getCartId).innerHTML = 'Added'
  // let all = '#' + getCartId
  // let allDivs = document.querySelectorAll(all)
  // allDivs.forEach((elem) => {
  //   elem.innerHTML = 'Added'
  // })
  if (!overList.includes(id)) {
    cartWrapper.innerHTML = ''
    //overList.push(id);
    overList = [...overList, id]
    document.querySelector('.cartItemCounter').innerHTML = overList.length
    createEls()
  }

  cartButtonChanger()
}

function createEls() {
  let totalP = 0
  overList.forEach((el) => {
    let newList = document.createElement('div')
    newList.innerHTML = ` <li class="${productList[el].id}" id="cart_item">
       <div class="cart_picwrapper">
       <img class="cart_pic" src="${productList[el].productPic}">
       </div>
  
     <div class="cart_details">
       <div class="product_name">${productList[el].productName}</div>
      <div id="product_price">NGN${
        productList[el].discount
          ? productList[el].productPrice -
            productList[el].productPrice * (productList[el].discount / 100)
          : productList[el].productPrice
      }</div>
       <div class="quantity_control">
       <button onClick="subtractIt(this.id)" id='${
         'subtract' + productList[el].id
       }'>-</button>
       <div id="quantity">1</div> 
       <button id='${
         'add' + productList[el].id
       }' onClick="addit(this.id)">+</button>
       </div>
    </div>
    <div class="remover" onClick="remover(this.id)" id="${
      'remov' + productList[el].id
    }">X</div>
  </li>`
    cartWrapper.appendChild(newList)
    productList[el].discount
      ? (totalP +=
          productList[el].productPrice -
          productList[el].productPrice * (productList[el].discount / 100))
      : (totalP += productList[el].productPrice)

    //productList[el].discount ? console.log('yes') : console.log('no')
    //totalP += productList[el].productPrice
  })
  cartWrapper.innerHTML += `
  <div class='totaldiv'>
  <div class='equals'>=</div>
   <div class='naira'>NGN</div>
  <div id="total_price">${totalP}</div>
 
  </div>
  
  <button class="delivery" onClick="dsplayMe()">Delivery Details</button>
  
  <div class="deliveryAdressWrapper">
  <div class="errormsg">please, enter correct details!</div>
  <form action="" id=form1>
  <input type="text" onfocus="focusMe()" placeholder="Name" name="" id="name">
  <input type="text" onfocus="focusMe()"  placeholder="Adress" name="" id="address">
  <input type="tel" onfocus="focusMe()"  placeholder="Phone number" name="" id="phone">
  <input type="email" onfocus="focusMe()"  placeholder="Email" name="" id="email">
  </form>
    
    <button class="deliverySubmit" onClick=formData()>make payment</button>
  </div>
  `
}

cart_button.addEventListener('click', () => {
  displayCart()
})
function displayCart() {
  if (cartWrapper.style.display != 'block' && !overList.length == 0) {
    cartWrapper.style.display = 'block'
  } else {
    cartWrapper.style.display = 'none'
  }
}

productPriceMinus = 0
function subtractIt(id) {
  let subtractId = id.slice(8)
  let subtract = document.getElementById(id).parentNode
  let minus = subtract.childNodes[3].innerHTML
  minus--
  let price = productList[subtractId].discount
    ? productList[subtractId].productPrice -
      productList[subtractId].productPrice *
        (productList[subtractId].discount / 100)
    : productList[subtractId].productPrice

  let currentTotal = Number(document.querySelector('#total_price').innerHTML)
  if (minus >= 1 && currentTotal > productList[subtractId].productPrice) {
    subtract.childNodes[3].innerHTML = minus
    let mainParent = subtract.parentNode
    mainParent.childNodes[3].innerHTML = 'NGN' + price * minus
    productPriceMinus = productList[subtractId].productPrice
    document.querySelector('#total_price').innerHTML = currentTotal - price
    minus = 1
    productPriceMinus = 0
  }
}

productPriceAdd = 0
function addit(ids) {
  let id = ids.slice(3)
  let adder = document.getElementById(ids).parentNode
  let currentValue = adder.childNodes[3].textContent++
  let mainParent = adder.parentNode
  let price = productList[id].discount
    ? productList[id].productPrice -
      productList[id].productPrice * (productList[id].discount / 100)
    : productList[id].productPrice

  mainParent.childNodes[3].innerHTML = 'NGN' + price * (currentValue + 1)
  currentTotal = Number(document.querySelector('#total_price').innerHTML)
  // productPriceAdd = productList[id].productPrice
  document.querySelector('#total_price').innerHTML = currentTotal + price

  // console.log(price)
}

function remover(ids) {
  let id = ids.slice(5)

  //item.style.display='none';
  let removIt = document.getElementById(ids).parentNode.childNodes[3]
    .childNodes[3].textContent
  let remov = Number(removIt.slice(3))
  let m = document.querySelector('#total_price').innerHTML
  document.querySelector('#total_price').innerHTML = m - remov

  let getProductId = 'cartButton' + id
  document.getElementById(getProductId).innerHTML = 'add to cart'

  let cartItemParent = document.querySelector('.cart_items')
  let item = document.getElementById(ids).parentNode.parentNode
  let me = overList.indexOf(id)
  overList.splice(me, 1)
  cartItemParent.removeChild(item)
  if (m == remov) {
    cartWrapper.style.display = 'none'
    cartButtonChanger()
  }
  document.querySelector('.cartItemCounter').innerHTML = overList.length
  if (overList.length < 1) {
    cartWrapper.style.display = 'none'
  }
}
function cartButtonChanger() {
  if (overList.length > 0) {
    document.querySelector('.cartItemCounter').style.background = 'green'
  } else {
    document.querySelector('.cartItemCounter').style.background = 'transparent'
  }
}
let topmargin = 0
window.onscroll = function () {
  topmargin = document.documentElement.scrollTop
}
function detailview(ids) {
  let me = ids.slice(7)
  let getProduct = productList[me]
  let details = document.querySelector('.detailsViewer')
  details.innerHTML = `
<button class="detailsCloser" onClick="detailsClose()">X</button>
    <div class="slidesWrapper">
<button class="slidesPrevious" id="${me}"onClick="prev(this.id)"> < </button>
<img class='slidesPic' src="${getProduct.productPic}">
<button class="slidesNext" id=${me} onClick="next(this.id)"> > </button>
    </div>
    <div class="product_name">${getProduct.productName}</div>
   <div class="productPriceDiv">
  <div class="product_price">${
    getProduct.discount
      ? //to display price without discount if none
        getProduct.productPrice -
        getProduct.productPrice * (getProduct.discount / 100)
      : getProduct.productPrice
  }NGN</div>
  <div class="product_price_old">${
    getProduct.discount ? getProduct.productPrice + 'NGN' : ''
  }</div>
</div>
    <div class="productDesc">
      <h3 class="detailsHeading">Descriptions</h3>
      ${getProduct.productDesc}</br>
      <button onClick="addToCart(this.id)" id='${
        'cartButton' + getProduct.id
      }' class="detailsAddCart">add to cart</button>
    </div>`
  let viewWrapper = document.querySelector('.view2')
  viewWrapper.classList.toggle('view')
  document.querySelector('.detailsViewer').style.marginTop =
    topmargin + 60 + 'px'
  details.style.display = 'block'
}
let getAllNames = ''
listNo = 1
let add = 2
function formData() {
  let custName = document.querySelector('#name').value
  let custEmail = document.querySelector('#email').value
  let custNo = document.querySelector('#phone').value

  let amountToPay =
    Number(document.querySelector('#total_price').innerHTML) * 100
  var handler = PaystackPop.setup({
    key: 'pk_live_1446e456f61e7cbd9aafdaa98eac1400b5ce0fe3', //put your public key here
    email: custEmail, //put your customer's email here
    amount: amountToPay, //amount the customer is supposed to pay
    metadata: {
      custom_fields: [
        {
          display_name: 'BlissMart',
          variable_name: 'mobile_number',
          value: custNo, //customer's mobile number
        },
      ],
    },
    callback: function (response) {
      //after the transaction have been completed
      //make post call  to the server with to verify payment
      //using transaction reference as post data
      $.post('verify.php', { reference: response.reference }, function (
        status,
      ) {
        if (status == 'success') {
          //successful transaction

          alert('Transaction was successful')
        }
        //transaction failed
        else alert(response)
      })
    },
    onClose: function () {
      //when the user close the payment modal

      let forms = document.forms['form1']
      var text = ''
      var i
      for (i = 0; i < forms.length; i++) {
        text += forms.elements[i].value + '<br>'
        forms.elements[i].value = ''
      }
      let allCart = document.querySelectorAll('#cart_item')
      allCart.forEach((el) => {
        let getNames = el.childNodes[3].childNodes[1].innerHTML
        getAllNames += `ordered: (${listNo++}) ${getNames}`
      })
      //console.log(text, getAllNames)
      cartWrapper.innerHTML = ''
      $mailTo = 'jameze49@gmail.com'
      $subject = 'A new order from ' + custName
      $htmlContent = 'email request received ' + text + getAllNames
      $header = 'MIME-Version: 1.0\\r\\n'
      $header = 'Content-type: text/html\\r\\n'
      mail($mailTo, $subject, $htmlContent, $header)
      alert('Transaction cancelled')
    },
  })
  handler.openIframe() //open the paystack's payment modal
}

function detailsClose() {
  let view = document.querySelector('.view2')
  view.classList.toggle('view')
}

//picture slides
let count = -1
let next = (id) => {
  let total = productList[id].morePic
  if (count >= total.length - 1) {
    count = 0
  } else {
    count++
  }
  document.querySelector('.slidesPic').src = productList[id].morePic[count]
}
//picture slides
let prev = (ids) => {
  let total = productList[ids].morePic
  if (count <= 0) {
    count = total.length
  }
  count--
  document.querySelector('.slidesPic').src = productList[ids].morePic[count]
}
dsplayMe = () => {
  let dis = document.querySelector('.deliveryAdressWrapper')
  if (dis.style.display != 'block' && cartWrapper.innerHTML.length > 800) {
    dis.style.display = 'block'
  } else {
    dis.style.display = 'none'
  }
}
function focusMe() {
  document.querySelector('.errormsg').style.visibility = 'hidden'
}

createproduct('categoryTwo', 'home appliances', text, 'home appliances')
createproduct('categoryOne', 'phones accessories', text, 'phones')

document.querySelector('.shopbody').addEventListener('click', () => {
  cartWrapper.style.display = 'none'
})

filterlist = []
function filterhtml(elid, catHeader) {
  //console.log(id);
  let texter = ''
  function isSameAnswe(els) {
    return els.productCat == elid
  }

  filterlist = productList.filter(isSameAnswe)

  if (texter.length == 0) {
    filterlist.forEach((item) => {
      texter += `
   <div class="product" id='${'products' + item.id}'>
   <button class="details" id="${
     'deatils' + item.id
   }" onClick="detailview(this.id)">i</button>
   <div class="product_picdiv"><img class="product_pic" src="${
     item.productPic
   }"></div>
  <div class="product_name">${item.productName}</div>
  <div class="product_price">${item.productPrice}NGN</div>
  <button onClick="addToCart(this.id)" id='${
    'cartButton' + item.id
  }' class="add_cart">add to cart</button>
  </div>`
    })
  }
  document.querySelector('#productWrapper').innerHTML = `
<div class="catHeading">${catHeader}</div>
<div class="${elid}" id="products">
 ${texter}</div>`
}

// document.querySelector('.termsCondition').innerHTML =
//   'hey i am terms and conditions'
// console.log(window.location.href)
// function cartCreate(){
//  let item= localStorage.getItem('list');
// let items=JSON.parse(item);
// if(!items.length==0){
// createEls(items)
// }}
// cartCreate()

// document.querySelector('.cartItemCounter').innerHTML=localStorage.getItem('qty');

// let catClass=[];
// let cat=[];
// function creatcat(){
// productList.map((item)=>{
//   item.productCat
//   if(catClass.includes(item.productCat))
//   {
//   }
// else{catClass.push(item.productCat)}
// })

// catClass.forEach(items=>{
//   function isSameAnswe(els) {
//     return els.productCat==items;
//   }
//   getP=productList.filter(isSameAnswe);
//    console.log(getP);
// })

// //   getP=productList.filter(isSameAnswe);
// // console.log(getP);
// // })
// // getP.forEach(item=>{
// //   console.log(item.productName);
// // })
// }
// creatcat();
/*
delivery address function
payment system function
*/
