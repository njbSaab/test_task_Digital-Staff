$(function() {
  function validateForms(form, confirmPasswordId){
    $(form).validate({
      rules: {
        name: "required",
        last_name: "required",
        text: {
          required: true,
          minlength: 15
        },
        phone: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
        confirm_password: {
          required: true,
          minlength: 8,
          equalTo: confirmPasswordId
        }
      },
      messages: {
        name: "Будь ласка, вкажіть ім'я",
        last_name: "Будь ласка, вкажіть прізвище",
        text: {
          required: "Будь ласка, введіть текст",
          minlength: jQuery.validator.format("Мінімально повинно бути {0} символів"),
        },
        phone: "Будь ласка, вкажіть номер телефону",
        email: {
          required: "Будь ласка, вкажіть вашу пошту",
          email: "Вкажіть вірну адресу пошти"
        },
        password: {
          required: "Будь ласка, введіть пароль",
          minlength: jQuery.validator.format("Мінімально повинно бути {0} символів")
        },
        confirm_password: {
          required: "Будь ласка, підтвердіть пароль",
          minlength: jQuery.validator.format("Мінімально повинно бути {0} символів"),
          equalTo: 'Паролі не співпадають'
        }
      }
    });
  }

  validateForms('#oneclick-form');

  validateForms('#mobile-login-form');
  validateForms('#mobile-registration-form', '#mobile-registration-password');

  validateForms('#modal-login-form');
  validateForms('#modal-registration-form', '#modal-registration-password');

  validateForms('#modal-reviews-form');

  validateForms('#modal-questions-form');

  $('input[name=phone]').mask("+38 (999) 999-99-99");

  // Modal

  $('[data-modal=profile]').on('click', function() {
    $('.overlay_modal, #account-modal-main').fadeIn('slow');
  });
  $('[data-element="accountModalMainCloseElem"]').on('click', function() {
    $('.overlay_modal, #account-modal-main').fadeOut('slow');
  });

  $('[data-modal=reviews]').on('click', function() {
    $('.overlay_modal, #reviews-modal').fadeIn('slow');
  });
  $('[data-element="reviewsModalCloseElem"]').on('click', function() {
    $('.overlay_modal, #reviews-modal').fadeOut('slow');
  });

  $('[data-modal=questions]').on('click', function() {
    $('.overlay_modal, #questions-modal').fadeIn('slow');
  });
  $('[data-element="questionsModalCloseElem"]').on('click', function() {
    $('.overlay_modal, #questions-modal').fadeOut('slow');
  });

  $('[data-menu=breadcrumbHamburger]').on('click', function() {
    $('.overlay_breadcrumb, #mobile-breadcrumb').fadeIn('slow');
  });
  $('[data-element="mobileBreadcrumbCloseElem"]').on('click', function() {
    $('.overlay_breadcrumb, #mobile-breadcrumb').fadeOut('slow');
  });
});

// Swiper

const imagesVideosBreakpoints = {
  0: {
    slidesPerView: 4.64,
  },
  425: {
    slidesPerView: 6,
  },
  576:{
    slidesPerView: 7,
  },
  768: {
    slidesPerView: 5,
  },
  992: {
    slidesPerView: 6,
  },
  1200: {
    slidesPerView: 8,
  },
};

// Product images

const productImgSwiper = new Swiper('.productImgSwiper', {
  spaceBetween: 9.3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: imagesVideosBreakpoints,
});

const productImgSwiper2 = new Swiper('.productImgSwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.product-images-videos__button-next',
    prevEl: '.product-images-videos__button-prev'
  },
  thumbs: {
    swiper: productImgSwiper,
  }
});

// Tabs images

const productImgSwiper3 = new Swiper('.productImgSwiper3', {
  spaceBetween: 9.3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: imagesVideosBreakpoints,
});

const productImgSwiper4 = new Swiper('.productImgSwiper4', {
  spaceBetween: 10,
  thumbs: {
    swiper: productImgSwiper3,
  }
});

// Tabs videos

const productVideosSwiper = new Swiper('.productVideosSwiper', {
  spaceBetween: 9.3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: imagesVideosBreakpoints,
});

const productVideosSwiper2 = new Swiper('.productVideosSwiper2', {
  spaceBetween: 10,
  thumbs: {
    swiper: productVideosSwiper,
  }
});

const advantagesSwiper = new Swiper('.advantagesSwiper', {
  spaceBetween: 11,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    390: {
      slidesPerView: 3.5,
    },
    576:{
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1450: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: '.advantages__button-next',
    prevEl: '.advantages__button-prev'
  }
});

const cardListBreakpoints = {
  0: {
    slidesPerView: 1,
  },
  390: {
    slidesPerView: 1.7,
  },
  576: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  992: {
    slidesPerView: 4,
  },
  1200: {
    slidesPerView: 5,
  },
};

const similarPositionsSwiper = new Swiper('.similarPositionsSwiper', {
  spaceBetween: 15,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: cardListBreakpoints,
  navigation: {
    nextEl: '[data-element="similarPositionsNextBtn"]',
    prevEl: '[data-element="similarPositionsPrevBtn"]'
  },
});

const recentViewsSwiper = new Swiper('.recentViewsSwiper', {
  spaceBetween: 20,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: cardListBreakpoints,
  navigation: {
    nextEl: '[data-element="recentViewsNextBtn"]',
    prevEl: '[data-element="recentViewsPrevBtn"]'
  },
});

const newsSwiper = new Swiper('.newsSwiper', {
  spaceBetween: 32,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    390: {
      slidesPerView: 1.7,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '[data-element="newsNextBtn"]',
    prevEl: '[data-element="newsPrevBtn"]'
  },
});

const productReviewsBlockSwiper = new Swiper('.productReviewsBlockSwiper', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.product-reviews-questions-block__button_next',
    prevEl: '.product-reviews-questions-block__button_prev'
  }
});

const body = document.querySelector('body'),

      mobileSearchIcon = document.querySelector('.header__mobile-search-icon'),
      mobileSearch = document.querySelector('.mobile-search'),
      mobileSearchCloseElem = document.querySelector('.mobile-search__close'),
      mobileSearchInput = document.querySelector('[data-element="mobileSearchInput"]'),
      mobileSearchClearIcon = document.querySelector('.mobile-search__clear-icon'),

      headerHamburger = document.querySelector('.header__hamburger'),
      mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuCloseElem = document.querySelector('[data-element="mobileMenuCloseElem"]'),

      mobilePanelCatalogIcon = document.querySelector('[data-element="catalogMobilePanelLink"]'),
      mobileCatalogLink = document.querySelector('[data-element="catalogLink"]'),
      mobileCatalog = document.querySelector('[data-element="mobileCatalog"]'),
      mobileCatalogCloseElem = document.querySelector('[data-element="catalogCloseElem"]'),
      mobileCatalogBackElem = document.querySelector('[data-element="mobileCatalogBack"]'),

      mobileForClientLink = document.querySelector('[data-element="forClientLink"]'),
      mobileForClient = document.querySelector('[data-element="mobileForClient"]'),
      mobileForClientCloseElem = document.querySelector('[data-element="mobileForClientCloseElem"]'),
      mobileForClientBackElem = document.querySelector('[data-element="mobileForClientBack"]'),

      mobileCatalogCategoryItem = document.querySelector('[data-element="mobileCatalogCategoryItem"]'),
      mobileCatalogCategory = document.querySelector('[data-element="mobileCatalogCategory"]'),
      mobileCatalogCategoryCloseElem = document.querySelector('[data-element="catalogCategoryCloseElem"]'),
      mobileCatalogCategoryBackElem = document.querySelector('[data-element="mobileCatalogCategoryBack"]'),

      mobileContactIcon = document.querySelector('.header__mobile-contact-menu'),
      mobileContact = document.querySelector('[data-element="mobileContact"]'),
      mobileContactCloseElem = document.querySelector('[data-element="mobileContactCloseElem"]'),

      mobilePanelCartIcon = document.querySelector('[data-element="mobileCart"]'),
      mobileCartMenu = document.querySelector('[data-element="mobileCartMenu"]'),
      mobileCartCloseElem = document.querySelector('[data-element="mobileCartCloseElem"]'),

      mobilePanelViewedIcon = document.querySelector('[data-element="mobileViewed"]'),
      mobileViwedLink = document.querySelector('[data-element="viewedLink"]'),
      mobileViewedMenu = document.querySelector('[data-element="mobileViewedMenu"]'),
      mobileViewedCloseElem = document.querySelector('[data-element="mobileViewedCloseElem"]'),
      mobileViewedBackElem = document.querySelector('[data-element="mobileViewedBack"]'),

      mobilePersonalAccountLink = document.querySelector('[data-element="mobilePersonalAccountLink"]'),
      mobilePersonalAccountMenu = document.querySelector('[data-element="mobilePersonalAccount"]'),
      mobilePersonalAccountCloseElem = document.querySelector('[data-element="mobilePersonalAccountCloseElem"]'),
      mobilePersonalAccountBackElem = document.querySelector('[data-element="mobilePersonalAccountBack"]'),

      mobileTogglePassword = document.querySelector('[data-element="mobileTogglePassword"]'),
      mobilePassword = document.querySelector('#mobile-password'),

      mobileToggleRegPassword = document.querySelector('[data-element="mobileToggleRegPassword"]'),
      mobileRegPassword = document.querySelector('#mobile-registration-password'),

      mobileToggleConfirmPassword = document.querySelector('[data-element="mobileToggleConfirmPassword"]'),
      mobileConfirmPassword = document.querySelector('#mobile-registration-confirm-password'),



      modalTogglePassword = document.querySelector('[data-element="modalTogglePassword"]'),
      modalPassword = document.querySelector('#modal-account-password'),

      modalToggleRegPassword = document.querySelector('[data-element="modalToggleRegPassword"]'),
      modalRegPassword = document.querySelector('#modal-registration-password'),

      modalToggleConfirmPassword = document.querySelector('[data-element="modalToggleConfirmPassword"]'),
      modalConfirmPassword = document.querySelector('#modal-registration-confirm-password'),



      productActionsVolume = document.querySelector('[data-element="productActionsVolume"]'),
      productActionsVolumeBtns = document.querySelectorAll('.product-actions__middle-volume-item'),

      productActionsColor = document.querySelector('[data-element="productActionsColor"]'),
      productActionsColorCheckBoxes = document.querySelectorAll('.product-actions__middle-color input[type="checkbox"]');

      // productCharacteristicsDotsElement = document.querySelectorAll('.product-characteristics__item span');

// const fillDots = (dotsElements) => {
//   const dotWidth =  7.2;

//   dotsElements.forEach((dotsElement) => {
//     const dotsWidth = dotsElement.offsetWidth;
//     const dotsCount = Math.floor(dotsWidth / dotWidth);
//     dotsElement.innerText = '. '.repeat(dotsCount);
//   });
// }

// fillDots(productCharacteristicsDotsElement);

const setProductVolume = (buttons, volume) => {
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      if (!this.classList.contains('product-actions__middle-volume-item_unavailable')) {
        volume.innerText = this.innerText;
      }
    });
  });
}

setProductVolume(productActionsVolumeBtns, productActionsVolume);

const setProductColor = (checkboxes, color) => {
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change',  function() {

      if (this.checked) {
        checkboxes.forEach(otherCheckbox => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });

        color.innerText = checkbox.value;

      } else {
        color.innerText = '';
      }
    });
  });
}

setProductColor(productActionsColorCheckBoxes, productActionsColor);

const toggleMobileMenu = (link, menu, closeElem, backElem) => {
  link.addEventListener('click', () => {
    menu.classList.add('active');

    if (menu != mobileSearch) {
      mobileMenu.classList.add('active');
      body.style.overflow = 'hidden';
    }
  });

  if (closeElem) {
    closeElem.addEventListener('click', () => {
      menu.classList.remove('active');
      mobileCatalog.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.style.overflow = 'auto';
    });
  }

  if (backElem) {
    backElem.addEventListener('click', () => {
      menu.classList.remove('active');
      mobileMenu.classList.add('active');
    });
  }
}

toggleMobileMenu(mobileSearchIcon, mobileSearch, mobileSearchCloseElem);
toggleMobileMenu(headerHamburger, mobileMenu, mobileMenuCloseElem);

toggleMobileMenu(mobileCatalogLink, mobileCatalog, mobileCatalogCloseElem, mobileCatalogBackElem);
toggleMobileMenu(mobilePanelCatalogIcon, mobileCatalog);

toggleMobileMenu(mobileCatalogCategoryItem, mobileCatalogCategory, mobileCatalogCategoryCloseElem, mobileCatalogCategoryBackElem);
toggleMobileMenu(mobilePanelCartIcon, mobileCartMenu, mobileCartCloseElem);
toggleMobileMenu(mobileForClientLink, mobileForClient, mobileForClientCloseElem, mobileForClientBackElem);
toggleMobileMenu(mobileContactIcon, mobileContact, mobileContactCloseElem);

toggleMobileMenu(mobileViwedLink, mobileViewedMenu, mobileViewedCloseElem, mobileViewedBackElem);

toggleMobileMenu(mobilePersonalAccountLink, mobilePersonalAccountMenu, mobilePersonalAccountCloseElem, mobilePersonalAccountBackElem);

toggleMobileMenu(mobilePanelViewedIcon, mobileViewedMenu);

mobileSearchClearIcon.addEventListener('click', () => {
  mobileSearchInput.value = '';
});

const togglePassword = (togglePass, pass) => {
  togglePass.addEventListener ('click', () => {
    const type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);
  });
}

togglePassword(mobileTogglePassword, mobilePassword);
togglePassword(mobileToggleRegPassword, mobileRegPassword);
togglePassword(mobileToggleConfirmPassword, mobileConfirmPassword);

togglePassword(modalTogglePassword, modalPassword);
togglePassword(modalToggleRegPassword, modalRegPassword);
togglePassword(modalToggleConfirmPassword, modalConfirmPassword);
