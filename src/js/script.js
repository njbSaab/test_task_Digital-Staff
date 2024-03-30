class MediaMobile {
    constructor() {
      this.menuTriggerBtn = document.querySelector('.menu-trigger');
      this.innerMenuNavbar = document.querySelector('.mobile_inner');
      this.contentSheet = document.querySelector('.content-sheet');
      this.mainContent = document.querySelector('main.content');
      this.bindEvents();
      this.handleResize(); 
    }
  
    bindEvents() {
      this.menuTriggerBtn.addEventListener('click', () => this.toggleNavbarActive());
      window.addEventListener('resize', () => this.handleResize());
    }
  
    toggleNavbarActive() {
      this.menuTriggerBtn.classList.toggle('active');
      this.innerMenuNavbar.classList.toggle('active');
    }

    handleResize() {
      if (window.innerWidth <= 450) {
        this.contentSheet.classList.add('content');
        this.mainContent.classList.remove('content');
      } else {
        if (this.contentSheet.classList.contains('content')) {
          this.contentSheet.classList.remove('content');
        }
        if (!this.mainContent.classList.contains('content')) {
          this.mainContent.classList.add('content');
        }
      }
    }
  }
  
document.addEventListener('DOMContentLoaded', function () {
    new MediaMobile();
});

  