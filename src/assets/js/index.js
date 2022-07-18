// $(document).on(
//     "click",
//     ".section-slk .container .tabs-wrapper .tabs .tab",
//     function () {
//       if ($(this).data("target") < $(".is-active").data("target")) {
//         $(".section-slk .container .tabs-wrapper .tabs .tab").addClass(
//           "before-slide"
//         );
//         $(".section-slk .container .tabs-wrapper .tabs .tab").removeClass(
//           "after-slide"
//         );
//       } else {
//         $(".section-slk .container .tabs-wrapper .tabs .tab").removeClass(
//           "before-slide"
//         );
//         $(".section-slk .container .tabs-wrapper .tabs .tab").addClass(
//           "after-slide"
//         );
//       }
  
//       $(".section-slk .container .tabs-wrapper .tabs .tab").removeClass(
//         "is-active"
//       );
//       $(this).addClass("is-active");
  
//       $(".section-slk .active-content .text").removeClass("active-text");
//       let active_text = $(this).data("target");
//       $(
//         `.section-slk .active-content div:nth-child(${parseInt(active_text)})`
//       ).addClass("active-text");
//     }
//   );

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})