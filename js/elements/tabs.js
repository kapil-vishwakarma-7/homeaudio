


 
/*
* Tabs
*/
  
!function(s){function t(t,e){this.element=t,this.$elem=s(this.element),this.options=s.extend({},a,e),this._defaults=a,this._name=i,this.init()}var i="tabulous",a={effect:"scale"};t.prototype={init:function(){{var t=this.$elem.find("a"),i=this.$elem.find("li:first-child").find("a");this.$elem.find("li:last-child").after('<span class="tabulousclear"></span>')}"scale"==this.options.effect?tab_content=this.$elem.find("div").not(":first").not(":nth-child(1)").addClass("hidescale"):"slideLeft"==this.options.effect?tab_content=this.$elem.find("div").not(":first").not(":nth-child(1)").addClass("hideleft"):"scaleUp"==this.options.effect?tab_content=this.$elem.find("div").not(":first").not(":nth-child(1)").addClass("hidescaleup"):"flip"==this.options.effect&&(tab_content=this.$elem.find("div").not(":first").not(":nth-child(1)").addClass("hideflip"));var a=this.$elem.find(".tabs_container, .tabs_container_right"),e=a.find("div:first").height(),d=this.$elem.find("div:first").find("div");d.css({position:"absolute",top:"30px"}),a.css("height",e+"px"),i.addClass("tabulous_active"),t.on("click",{myOptions:this.options},function(i){i.preventDefault();var e=i.data.myOptions,n=e.effect,l=s(this),h=l.parent().parent().parent(),o=l.attr("href");a.addClass("transition"),t.removeClass("tabulous_active"),l.addClass("tabulous_active"),thisdivwidth=h.find("div"+o).height(),"scale"==n?(d.removeClass("showscale").addClass("make_transist").addClass("hidescale"),h.find("div"+o).addClass("make_transist").addClass("showscale")):"slideLeft"==n?(d.removeClass("showleft").addClass("make_transist").addClass("hideleft"),h.find("div"+o).addClass("make_transist").addClass("showleft")):"scaleUp"==n?(d.removeClass("showscaleup").addClass("make_transist").addClass("hidescaleup"),h.find("div"+o).addClass("make_transist").addClass("showscaleup")):"flip"==n&&(d.removeClass("showflip").addClass("make_transist").addClass("hideflip"),h.find("div"+o).addClass("make_transist").addClass("showflip")),a.css("height",thisdivwidth+"px")})},yourOtherFunction:function(){}},s.fn[i]=function(s){return this.each(function(){new t(this,s)})}}(jQuery,window,document);


  $('#tabs, #tabs5, #tabs9, #tabs13').tabulous({
      effect: 'scale'
  });
  $('#tabs2, #tabs6, #tabs10, #tabs14').tabulous({
      effect: 'slideLeft'
  });
  $('#tabs3, #tabs7, #tabs11, #tabs15').tabulous({
      effect: 'scaleUp'
  });
  $('#tabs4, #tabs8, #tabs12, #tabs16').tabulous({
      effect: 'flip'
  });
