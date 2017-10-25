/**
 * Created by abc on 2017/10/25.
 */
//Input box text effect
$(function(){
    $("#inputSearch").focus(function(){
        $(this).addClass("focus");
        if($(this).val() ==this.defaultValue){
            $(this).val("");
        }
    }).blur(function(){
        $(this).removeClass("focus");
        if($(this).val()==''){
            $(this).val(this.defaultValue);
        }
    }).keyup(function(e){
        if(e.which == 13){
            alert('Enter the form');
        }
    })
})

//Navigation bar effect
$(function(){
    $("#nav li").hover(function(){
        $(this).find(".xiamu3").show();
    },function(){
        $(this).find(".xiamu3").hide();
    });
})

//Commodity classification effects show
/*$(function(){
    $(".xiamu6 .promoted").append('<s class="hot"></s>');
})
    */

//Advertising effects
$(function(){
    var $imgrolls = $("#myShop1 div a");
    $imgrolls.css("opacity","0.7");
    var len =$imgrolls.length;
    var index =0;
    var adTimer = null;
    $imgrolls.mouseover(function(){
        index=$imgrolls.index(this);
        showImg(index);
    }).eq(0).mouseover();
    $("#myShop1").hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function () {
            showImg(index);
            index++;
            if(index==len){index=0;}
        },5000);
    }).trigger("mouseleave");
})
function showImg(index) {
    var $rollobj = $("#myShop1");
    var $rolllist= $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#imgChange").attr("href",newhref)
        .find("img").eq(index).stop(true.true).fadeIn()
        .siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity","0.7")
        .eq(index).addClass("chos").css("opacity","1");
}

//Below the ad effects
$(function(){
    $("#myShop6 li a").click(function(){
        $(this).parent().addClass("chos")
            .siblings().removeClass("chos");
        var idx=$("#myShop6 li a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
});
function showBrandList(index){
    var $rollobj = $("#myShop6");
    var rollWidth = $rollobj.find("li").outerWidth();
    rollWidth=rollWidth*4;
    $rollobj.stop(true,false).animate({left:-rollWidth*index},1000);
}

//item Interface effect--Image zoom
/*
$(function(){
    $('.jqzoom').jqzoom({
        zoomType:'standard',
        lens:true,
        preloadImaes:false,
        zoomWidth:340,
        zoomHeight:340,
        xOffset:10,
        yOffset:0,
        position:'right'
    });
});
*/
//size select
$(function(){
    $(".pro_size li").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents("ul").siblings("strong")
            .text($(this).text());
    })
})

//number and price
$(function(){
    var $span =$(".pro_price strong");
    var price =$span.text();
    $("#num_sort").change(function(){
        var num =$(this).val();
        var amount = num*price;
        $span.text(amount);
    }).change();
})

//Add to cart
$(function(){
    var $product =$(".xiamu12");
    $("#cart a").click(function(){
        var pro_name=$product.find("h4:first").text();
        var pro_size = $product.find(".pro_size strong").text();
        var pro_num = $product.find("#num_sort").val();
        var pro_price = $product.find(".pro_price strong").text();
        var info ="Thanks for the purchase.\nPurchase information:"+
            "name:"+pro_name+";\n"+
        "size:"+pro_size+";\n"+
        "number:"+pro_num+";\n"+
        "Total price:"+pro_price+"yuan";
        alert(info);
        return false;
    })
})