class MediaMobile {
    constructor() {
      this.menuTriggerBtn = document.querySelector('.menu-trigger');
      this.innerMenuNavbar = document.querySelector('.mobile_inner');
      this.contentSheet = document.querySelector('.content-sheet');
      this.mainContent = document.querySelector('main.content');
      if (this.menuTriggerBtn && this.innerMenuNavbar) {
        this.bindEvents();
      }
      this.handleResize();
    }
  
    bindEvents() {
      this.menuTriggerBtn.addEventListener('click', () => this.toggleNavbarActive());
      window.addEventListener('resize', this.debounce(() => this.handleResize(), 250));
    }
  
    toggleNavbarActive() {
      this.menuTriggerBtn.classList.toggle('active');
      this.innerMenuNavbar.classList.toggle('active');
    }

    handleResize() {
      const isMobile = window.innerWidth <= 450;
      this.contentSheet.classList.toggle('content', isMobile);
      this.mainContent.classList.toggle('content', !isMobile);
    }

    debounce(func, wait, immediate) {
      let timeout;
      return function() {
        const context = this, args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
}
  
document.addEventListener('DOMContentLoaded', function () {
    new MediaMobile();
});
