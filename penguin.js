function navigateTo(pageId) {
    // 隱藏所有頁面
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
      page.classList.remove('active');
    });
  
    // 顯示指定頁面
    document.getElementById(pageId).classList.add('active');
  }
  