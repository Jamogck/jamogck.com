jQuery(document).ready(function($){$(".expand").click(function(){$(this).next().toggle("fast")}),$("#puppet").hover(function(){$(".speech").toggle()}),$("#ux").animatedModal({modalTarget:"uxModal",animatedIn:"zoomIn",animatedOut:"fadeOutDown",color:"#528296",animationDuration:".4s"}),$("#wd").animatedModal({modalTarget:"wdModal",animatedIn:"zoomIn",animatedOut:"fadeOutDown",color:"#528296",animationDuration:".4s"}),$("#fed").animatedModal({modalTarget:"fedModal",animatedIn:"zoomIn",animatedOut:"fadeOutDown",color:"#528296",animationDuration:".4s"})});