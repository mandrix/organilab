let _canvases = [];
(function( ) {
    let formdata = $("#sgaform").serializeArray();
    $(".templatepreview").each(function(index, element){
        $.post(element.dataset.href,
          formdata,
          function(data, status){
             let newcanvas = canvas_editor = new fabric.Canvas(element.id);
             _canvases.push(newcanvas);
               newcanvas.loadFromJSON(data.object, function() {
               newcanvas.on('mouse:wheel', function (opt) {
                    let delta = opt.e.deltaY;
                    let zoom = newcanvas.getZoom();
                    zoom = zoom + delta / 200;
                    if (zoom > 20) zoom = 20;
                    if (zoom < 0.01) zoom = 0.01;
                    newcanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
                    opt.e.preventDefault();
                    opt.e.stopPropagation();
                });
                let canvas_container_preview = $(".canvas-container-preview");
                 let height = canvas_container_preview.height();
                    if (height < 400){
                        height = 400;
                    }
                    let width = canvas_container_preview.width();
                    if(width < 400 ){
                        width = 400;
                    }
         /*      newcanvas.setZoom(parseFloat(data.preview));*/
               newcanvas.setWidth(width);
               newcanvas.setHeight(height);

               newcanvas.renderAll();
            });
          });
    });
})();


$(document).ready(function(){
    $(".canvaspng").on('click', function(){
         let canvas =  _canvases[this.dataset.order];
         this.href=canvas.toDataURL({ format: 'png', quality: 0.8});

    });

});

 function get_canvas(pk){
     for(let canvas of _canvases){
         let id = canvas.lowerCanvasEl.id;
         if (id === "preview_" + pk.toString())
             return canvas;
     }
 }

function get_as_pdf(pk){
    const canvas = get_canvas(pk);
    const json_data = JSON.stringify(canvas);
    $('#json_data').attr('value',json_data);
    document.download_pdf.submit();
}