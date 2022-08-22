function newItem() {
    //javascript
    //1. Adding a new item to the list of items:
    let list = $('<li></li>');
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton
      .append(document.createTextNode('X'))
      .addClass('crossOutButton');
    $('#input').each(function (i) {
      let inputValue = $('#input').val();
      list.append(inputValue).append(crossOutButton);
      if (inputValue.length == 0) {
        console.log('You must write something!');
      } else {
        $('#list').append(list);
      }
    });
    //2. Crossing out an item from the list of items:

    list.on('dblclick', function () {
      $(this).toggleClass('strike');
    });

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    $('.crossOutButton').on('click', deleteListItem);

    function deleteListItem() {
      console.log('delete');
      $(this).parent().addClass('delete');
    }
    // 4. Reordering the items:
    $('#list').sortable();
  }
