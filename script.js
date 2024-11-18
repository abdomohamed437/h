// عرض تفاصيل المنتج عند الضغط على زر "عرض التفاصيل"
function viewProduct(name, price, image) {
    // محتوى تفاصيل المنتج
    const productDetailsHTML = `
      <div class="product-details">
        <h2>${name}</h2>
        <img src="${image}" alt="${name}" class="img-fluid">
        <p>السعر: ${price} جنيه</p>
        <button class="btn btn-success mt-3">إضافة إلى السلة</button>
      </div>
    `;
  
    // عرض التفاصيل في نافذة منبثقة
    $('body').append(`
      <div class="product-popup">
        <div class="popup-content">${productDetailsHTML}</div>
        <span class="popup-close">&times;</span>
      </div>
    `);
  
    // غلق النافذة عند الضغط على X
    $('.popup-close').on('click', function () {
      $('.product-popup').remove();
    });
  }
  
  // أسلوب CSS لتنسيق النافذة المنبثقة
  $(document).ready(function () {
    $('head').append(`
      <style>
        .product-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 80%;
          max-width: 500px;
          text-align: center;
        }
        .popup-close {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 24px;
          color: white;
          cursor: pointer;
        }
      </style>
    `);
  });
  