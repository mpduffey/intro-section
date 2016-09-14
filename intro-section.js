"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var IntroSection = (function () {
    function IntroSection() {
    }
    IntroSection = __decorate([
        core_1.Component({
            selector: 'intro-section',
            template: "\n\t\t<section id=\"intro\" class=\"intro-fullscreen\">\n\t\t\t<div class=\"intro-media overlay-dark20\"></div>\n\t\t\t<div class=\"intro-caption-waper dark-bg\">\n\t\t\t\t<div class=\"intro-full-height container\" style=\"min-height: 500px; height: 100%;\">\n\t\t\t\t\t<div class=\"intro-content\">\n\t\t\t\t\t\t<div class=\"intro-content-inner\">\n\t\t\t\t\t\t\t<h1 class=\"intro-title mb-10\">Wisconsin Women for Trump</h1>\n\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-white scroll-down\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSfjiqYbdEAR7KZbRGCiiJCGUIsr-QR2tZnSKVl2o5qs0vtaTQ/viewform\" target=\"_blank\">I Support Donald Trump! Sign Me Up!</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t",
            styles: ["\n\t\ta {color: #333; cursor: pointer; text-decoration: none;}\n\t\t.overlay-dark20 {position: relative; z-index: 1;}\n\t\t.overlay-dark20:before {left: 0; top: 0; position: absolute; width: 100%; height: 100%; content: \"\"; z-index: -1;}\n\t\t.overlay-dark20:before {background-color: rgba(34,34,34,0.2);}\n\t\t#intro {position: relative;}\n\t\t.intro-fullscreen {min-height: 500px; height: 100%;}\n\t\t.intro-media {width:100%; position:absolute; display:block; top:0; left:0; height:100%;}\n\t\t.intro-caption-waper {height:100%; position:absolute; width:100%; z-index:2;}\n\t\t.intro-content {display:table; height: 100%; text-align:center; width: 100%;}\n\t\t.intro-content-inner {display: table-cell; height: 100%; vertical-align: middle;}\n\t\t.intro-img-circle {margin-left:auto; margin-right:auto; width:120px; height:120px; border:5px solid rgba(0,0,0, 0.2); border-radius:50%; -moz-border-radius:50%; -webkit-border-radius:50%; margin-bottom:30px;}\n\t\t.intro-img-circle img {outline:none; border:none; width:100%; height:100%; border-radius:50%; -moz-border-radius:50%; -webkit-border-radius:50%;}\n\t\t@media (max-width: 767px) {\n\t\t\t.intro-title {letter-spacing:0; font-size:18px;}\n\t\t\t.btn{font-size: 10px;}\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], IntroSection);
    return IntroSection;
}());
exports.IntroSection = IntroSection;
//# sourceMappingURL=intro-section.js.map