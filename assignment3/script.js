



// $(".draggable").draggable();


// $(".droppable").droppable();

    $( ".draggable" ).draggable();

    $(".droppable").droppable({
      hoverClass: 'active',
      drop: function(e, ui) {
        $(this).html(ui.draggable.remove().html());
        $(this).droppable('disabled');
        $(this).droppable('option','disabled,true');
    }
    })

    // $( ".droppable" ).droppable({
    //   accept:".draggable",
    //   classes:{
    //     "ui-droppable-hover": "ui-state-hover"
    //   },
    //   drop:function(event,ui){
    //     $(this)
    //     .addClass("ui-state-highlight")
    //     .find("p")
    //     .html("Dropped!");
    //   }
    // });
