/**
 * jquery.typist — animated text typing
 * @author Alexander Burtsev, http://burtsev.me, 2014—2015
 * @license MIT
 */
 
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){"use strict";function i(i,e){t.extend(this,{speed:10,text:"",cursor:!0,blinkSpeed:2,typeFrom:"end",cursorStyles:{display:"inline-block",fontStyle:"normal",margin:"-2px 2px 0 2px"}},e||{}),this._cursor=null,this._element=t(i),this._element.data("typist",this),this._container=null,this.queue=[],this.timer=null,this.delay=1e3/this.speed,this.blinkTimer=null,this.blinkDelay=1e3/this.blinkSpeed,this.text&&(this.queue.push({text:this.text}),this.type())}t.fn.typistInit=function(){return this.each(function(){t(this).data("typist")||new i(this)})},t.fn.typist=function(t){return this.each(function(){new i(this,t)})},t.fn.typistAdd=function(i,e){return this.typistInit().each(function(){var s=t(this).data("typist");s.queue.push({text:i,callback:e}),s.type()})},t.fn.typistRemove=function(i,e){return i=parseInt(i)||0,this.typistInit().each(function(){var s=t(this).data("typist");s.queue.push({remove:i,callback:e}),s.type()})},t.fn.typistPause=function(i,e){return i=parseInt(i)||0,this.typistInit().each(function(){var s=t(this).data("typist");s.queue.push({delay:i,callback:e}),s.type()})},t.fn.typistStop=function(){return this.typistInit().each(function(){var i=t(this).data("typist");i.queue.push({stop:!0}),i.type()})},i.prototype={addCursor:function(){this._cursor&&(clearInterval(this.blinkTimer),this._cursor.stop().remove()),this._cursor=t("<span>|</span>").css(this.cursorStyles).insertAfter(this._container),this.cursorVisible=!0,this.blinkTimer=setInterval(t.proxy(function(){this.cursorVisible=!this.cursorVisible,this._cursor.animate({opacity:this.cursorVisible?1:0},100)},this),this.blinkDelay)},fire:function(t){return this._element.trigger(t,this),this},nl2br:function(t){return t.replace(/\n/g,"<br>")},br2nl:function(t){return t.replace(/<br.*?>/g,"\n")},remove:function(i,e){if(0>=i)return e(),this.timer=null,this.fire("end_remove.typist").type();var s=this._container.html();i--,s=this.br2nl(s),s=s.substr(0,s.length-1),s=this.nl2br(s),this.timer=setTimeout(t.proxy(function(){this._container.html(s),this.remove(i,e)},this),this.delay),this.fire("tick.typist")},step:function(i,e){if("string"==typeof i&&(i=i.split("")),!i.length)return e(),this.timer=null,this.fire("end_type.typist").type();var s=i.shift();s=t("<div>").text(s).html(),s=this.nl2br(s),this.timer=setTimeout(t.proxy(function(){this._container.html(this._container.html()+s),this.step(i,e)},this),this.delay),this.fire("tick.typist")},stop:function(){clearInterval(this.blinkTimer),this.blinkTimer=null,this._cursor&&(this._cursor.remove(),this._cursor=null),clearTimeout(this.timer),this.timer=null},type:function(){if(!this.timer){this._container||(this._container=t("<span>"),"start"===this.typeFrom?this._element.prepend(this._container):this._element.append(this._container)),this.cursor&&this.addCursor();var i=this.queue.shift()||{},e=t.proxy(i.callback||t.noop,this);return i.delay?void(this.fire("start_pause.typist").timer=setTimeout(t.proxy(function(){e(),this.timer=null,this.fire("end_pause.typist").type()},this),i.delay)):i.remove?void this.fire("start_remove.typist").remove(i.remove,e):i.stop?void this.stop():void(i.text&&this.fire("start_type.typist").step(i.text,e))}}}});




// typist
jQuery(document).ready(function($) {
    $('.typist').typist({
            speed: 12
        }).typistPause(2000) // 2 sec before to write
        .typistAdd('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur unde quae totam').typistPause(800) // 0,8 sec
        .typistAdd('\consectetur adipisicing elit.... ').typistPause(1500) // 1,5 sec
        .typistAdd('You will be ready?');


    // typing
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
});