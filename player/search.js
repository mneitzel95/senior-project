Reveal.slide(indexh, indexv, indexf);

function doSearch(text) {
    if (window.find && window.getSelection) {
        document.designMode = "on";
        var sel = window.getSelection();
        sel.collapse(document.body, 0);
        
        while (window.find(text)) {
            document.getElementById("button").blur();
            document.execCommand("HiliteColor", false, "yellow");
            sel.collapseToEnd();
        }
        document.designMode = "off";
    } else if (document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        while (textRange.findText(text)) {
            textRange.execCommand("BackColor", false, "yellow");
            textRange.collapse(false);
        }
    }
}

// $(function() {

//     // the input field
//     var $input = $("input[type='search']"),
//       // clear button
//       $clearBtn = $("button[data-search='clear']"),
//       // prev button
//       $prevBtn = $("button[data-search='prev']"),
//       // next button
//       $nextBtn = $("button[data-search='next']"),
//       // the context where to search
//       $content = $(".content"),
//       // jQuery object to save <mark> elements
//       $results,
//       // the class that will be appended to the current
//       // focused element
//       currentClass = "current",
//       // top offset for the jump (the search bar)
//       offsetTop = 50,
//       // the current index of the focused element
//       currentIndex = 0;
  
//     /**
//      * Jumps to the element matching the currentIndex
//      */
//     function jumpTo() {
//       if ($results.length) {
//         var position,
//           $current = $results.eq(currentIndex);
//         $results.removeClass(currentClass);
//         if ($current.length) {
//           $current.addClass(currentClass);
//           position = $current.offset().top - offsetTop;
//           window.scrollTo(0, position);
//         }
//       }
//     }
  
//     /**
//      * Searches for the entered keyword in the
//      * specified context on input
//      */
//     $input.on("input", function() {
//         var searchVal = this.value;
//       $content.unmark({
//         done: function() {
//           $content.mark(searchVal, {
//             separateWordSearch: true,
//             done: function() {
//               $results = $content.find("mark");
//               currentIndex = 0;
//               jumpTo();
//             }
//           });
//         }
//       });
//     });
  
//     /**
//      * Clears the search
//      */
//     $clearBtn.on("click", function() {
//       $content.unmark();
//       $input.val("").focus();
//     });
  
//     /**
//      * Next and previous search jump to
//      */
//     $nextBtn.add($prevBtn).on("click", function() {
//       if ($results.length) {
//         currentIndex += $(this).is($prevBtn) ? -1 : 1;
//         if (currentIndex < 0) {
//           currentIndex = $results.length - 1;
//         }
//         if (currentIndex > $results.length - 1) {
//           currentIndex = 0;
//         }
//         jumpTo();
//       }
//     });
//   });