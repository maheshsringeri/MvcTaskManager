"use strict";
(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["main"],{

/***/ 2455:
/*!************************************************!*\
  !*** ./src/app/admin/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 6662);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2455);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 1363);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ 2394);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 1832);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team-size-validator.directive */ 4761);
/* harmony import */ var _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client-location-status-validator.directive */ 3172);
/* harmony import */ var _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project-idunique-validator.directive */ 6588);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ 7405);
/* harmony import */ var _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-box-printer/check-box-printer.component */ 2643);
/* harmony import */ var _number_to_words_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../number-to-words.pipe */ 8331);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../filter.pipe */ 4211);
/* harmony import */ var _paging_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../paging.pipe */ 8374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
















class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent,
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent,
        _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__.TeamSizeValidatorDirective,
        _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__.ClientLocationStatusValidatorDirective,
        _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__.ProjectIDUniqueValidatorDirective,
        _project_project_component__WEBPACK_IMPORTED_MODULE_8__.ProjectComponent,
        _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__.CheckBoxPrinterComponent,
        _number_to_words_pipe__WEBPACK_IMPORTED_MODULE_10__.NumberToWordsPipe,
        _filter_pipe__WEBPACK_IMPORTED_MODULE_11__.FilterPipe,
        _paging_pipe__WEBPACK_IMPORTED_MODULE_12__.PagingPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule], exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent,
        _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__.TeamSizeValidatorDirective, _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__.ClientLocationStatusValidatorDirective, _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__.ProjectIDUniqueValidatorDirective] }); })();


/***/ }),

/***/ 2643:
/*!************************************************************************!*\
  !*** ./src/app/admin/check-box-printer/check-box-printer.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBoxPrinterComponent": () => (/* binding */ CheckBoxPrinterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class CheckBoxPrinterComponent {
    constructor() {
        this.isChecked = false;
    }
    ngOnInit() {
    }
    check() {
        debugger;
        this.isChecked = true;
    }
    unCheck() {
        debugger;
        this.isChecked = false;
    }
}
CheckBoxPrinterComponent.ɵfac = function CheckBoxPrinterComponent_Factory(t) { return new (t || CheckBoxPrinterComponent)(); };
CheckBoxPrinterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckBoxPrinterComponent, selectors: [["app-check-box-printer"]], decls: 2, vars: 1, consts: [["type", "checkbox", "value", "true", "id", "isChecked", "name", "isChecked", 3, "ngModel", "ngModelChange"]], template: function CheckBoxPrinterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckBoxPrinterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.isChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isChecked);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1ib3gtcHJpbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6662:
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard.service */ 2394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function DashboardComponent_li_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r9);
} }
function DashboardComponent_li_53_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_li_53_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.OnProjectChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r10);
} }
function DashboardComponent_a_60_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_a_60_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.OnYearChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r13);
} }
function DashboardComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.SelectedYear);
} }
function DashboardComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.SelectedYear);
} }
function DashboardComponent_span_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.SelectedYear);
} }
function DashboardComponent_span_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.SelectedYear);
} }
function DashboardComponent_div_88_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const MembersSummary_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](MembersSummary_r17.Region);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](MembersSummary_r17.Count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](MembersSummary_r17.Members);
} }
function DashboardComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Team Members Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Temporarily Unavailable Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DashboardComponent_div_88_tr_9_Template, 8, 3, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.TeamMembersSummary);
} }
function DashboardComponent_div_93_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
} }
function DashboardComponent_div_93_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const members_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", members_r26.Status == "Busy" ? "bg-danger" : "bg-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", members_r26.Id, " - ", members_r26.Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", members_r26.Status == "Busy" ? "Red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](members_r26.Status);
} }
function DashboardComponent_div_93_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DashboardComponent_div_93_ng_template_8_div_0_Template, 6, 6, "div", 60);
} if (rf & 2) {
    const teamMembers_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", teamMembers_r18.Members);
} }
function DashboardComponent_div_93_ng_template_10_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const members_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](members_r29.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", members_r29.Status == "Busy" ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](members_r29.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", members_r29.Status == "Busy" ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", members_r29.Status, "");
} }
function DashboardComponent_div_93_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_93_ng_template_10_tr_10_Template, 8, 7, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teamMembers_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", teamMembers_r18.Members);
} }
function DashboardComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DashboardComponent_div_93_div_7_Template, 1, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_93_ng_template_8_Template, 1, 1, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_93_ng_template_10_Template, 11, 1, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teamMembers_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "headingOne" + i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-bs-target", "#collapseOne" + i_r19)("aria-controls", "collapseOne" + i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", teamMembers_r18.Region, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "collapseOne" + i_r19)("ngClass", i_r19 == 0 ? "show" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-labelledby", "headingOne" + i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r19 == 0)("ngIfThen", _r21)("ngIfElse", _r23);
} }
class DashboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.Designation = '';
        this.Username = '';
        this.NoOfTeamMembers = 0;
        this.TotalCostOfAllProjects = 0;
        this.PendingTasks = 0;
        this.UpComingProjects = 0;
        this.ProjectCost = 0;
        this.CurrentExpenditure = 0;
        this.AvailableFunds = 0;
        this.SelectedYear = 0;
        this.ToDay = new Date();
        this.Clients = [];
        this.Projects = [];
        this.Years = [];
        this.TeamMembersSummary = [];
        this.TeamMembers = [];
    }
    ngOnInit() {
        this.Designation = 'Team Leader';
        this.Username = 'Mahesh SN';
        this.NoOfTeamMembers = 10;
        this.TotalCostOfAllProjects = 15050000;
        this.PendingTasks = 50;
        this.UpComingProjects = 15;
        this.ProjectCost = 1000000;
        this.CurrentExpenditure = 500000;
        this.AvailableFunds = 50002.5000;
        this.ToDay = new Date();
        this.Clients = ["ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries", "Educo Soft"];
        this.Projects = ["Project A", "Project B", "Project C", "Project D", "Project E"];
        for (var year = 2019; year <= 2025; year++) {
            this.Years.push(year);
        }
        this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
        this.TeamMembers = this.dashboardService.getTeamMembers();
    }
    OnProjectChange($event) {
        if ($event.target.innerHTML == "Project A") {
            this.ProjectCost = 150000;
            this.CurrentExpenditure = 1000;
            this.AvailableFunds = 100000;
        }
        else if ($event.target.innerHTML == "Project B") {
            this.ProjectCost = 250000;
            this.CurrentExpenditure = 2000;
            this.AvailableFunds = 200000;
        }
        else if ($event.target.innerHTML == "Project C") {
            this.ProjectCost = 350000;
            this.CurrentExpenditure = 3000;
            this.AvailableFunds = 300000;
        }
        else if ($event.target.innerHTML == "Project D") {
            this.ProjectCost = 450000;
            this.CurrentExpenditure = 4000;
            this.AvailableFunds = 400000;
        }
        else if ($event.target.innerHTML == "Project E") {
            this.ProjectCost = 550000;
            this.CurrentExpenditure = 5000;
            this.AvailableFunds = 500000;
        }
    }
    OnYearChange($event) {
        this.SelectedYear = $event.target.innerHTML;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 94, vars: 30, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-3", "pb-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "text-white", "text-center", "mx-auto", "rounded", "pt-2", "pb-2", "font-weight-bold", 2, "background-color", "#a39e9e", "font-family", "'Arial Narrow Bold', sans-serif"], [1, "col-12", "text-center", "mt-2"], ["src", "assets/user.png", "width", "120px"], [1, "col-12", "text-center", "pt-2", "pb-2", "fw-bold", 2, "font-family", "Tahoma"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial"], [1, "col-12", "mb-3"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "bg-secondary", "rounded-pill"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial Narrow"], [1, "col-12"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "col-6"], [1, "col-12", "pt-0", "pb-2", 2, "background-color", "#e9e6e6"], [1, "row", "pt-1"], [1, "col-6", "text-left"], [1, "dropdown"], ["type", "button", "id", "cboProject", "data-bs-toggle", "dropdown", "aria-expanded", "true", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "cboProject", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "col-6", "text-end"], ["type", "button", "id", "cboYear", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "cboYear", 1, "dropdown-menu"], ["class", "dropdown-item", "href", "#", "onclick", "return false", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-auto", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "table", "table-borderless"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow", 3, "ngSwitch"], ["style", "color: red;", 4, "ngSwitchCase"], ["style", "color: rgb(187, 255, 0);", 4, "ngSwitchCase"], ["style", "color: rgb(14, 138, 111);", 4, "ngSwitchCase"], ["style", "color: rgb(22, 19, 19);", 4, "ngSwitchDefault"], ["class", "col-12", 4, "ngIf"], [1, "col-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "mx-auto", "text-white", "text-center", "pt-1", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "col-12", "pt-2"], ["class", "accordion", "id", "accordionExample", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["href", "#", "onclick", "return false", 1, "dropdown-item", 3, "click"], [2, "color", "red"], [2, "color", "rgb(187, 255, 0)"], [2, "color", "rgb(14, 138, 111)"], [2, "color", "rgb(22, 19, 19)"], [1, "table"], ["id", "accordionExample", 1, "accordion"], [1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", 1, "accordion-button", "bg-secondary", "text-white"], ["data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", 3, "id", "ngClass"], [1, "accordion-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["firstTemplate", ""], ["secondTemplate", ""], ["class", "card border-primary mb-3", "style", "max-width: 18rem;", 4, "ngFor", "ngForOf"], [1, "card", "border-primary", "mb-3", 2, "max-width", "18rem"], [1, "card-header", "text-white", 3, "ngClass"], [1, "card-body", "text-primary"], [1, "card-title"], [1, "fa", "fa-phone"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " TEAM SUMMARY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " NO. OF TEAM MEMBERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " TOTAL COST OF ALL PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " PENDING TASKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " UPCOMING PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "CLIENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DashboardComponent_li_44_Template, 2, 1, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Project A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, DashboardComponent_li_53_Template, 3, 1, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, DashboardComponent_a_60_Template, 2, 1, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " PROJECT BRIEFING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Project Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Current Expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Available Funds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " TEAM MEMBERS SUMMARY - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DashboardComponent_span_84_Template, 2, 1, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, DashboardComponent_span_85_Template, 2, 1, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, DashboardComponent_span_86_Template, 2, 1, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, DashboardComponent_span_87_Template, 2, 1, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, DashboardComponent_div_88_Template, 10, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " TEAM MEMBERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, DashboardComponent_div_93_Template, 12, 10, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Dashboard [ToDay's Date:", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 19, ctx.ToDay, "d/m/y"), "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 22, ctx.Designation), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.Username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.NoOfTeamMembers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.TotalCostOfAllProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.PendingTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.UpComingProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Years);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](70, 24, ctx.ProjectCost, "USD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](76, 27, ctx.CurrentExpenditure, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.AvailableFunds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.SelectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.SelectedYear <= 2022);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.TeamMembers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1363:
/*!**********************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MyProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(); };
MyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 0, template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7405:
/*!****************************************************!*\
  !*** ./src/app/admin/project/project.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectComponent": () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/projects.service */ 318);
/* harmony import */ var _number_to_words_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../number-to-words.pipe */ 8331);




const _c0 = ["selectionBox"];
const _c1 = ["tbl"];
const _c2 = ["*"];
class ProjectComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.project = null;
        this.i = 0;
        this.editClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.deleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.selectiobBoxes = null;
        this.hideDetails = false;
        this.tbl = null;
    }
    ngOnChanges(simpleChanges) {
        console.info("----------------ngOnChanges called");
        for (let propName in simpleChanges) {
            let chng = simpleChanges[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}:currentValue=${cur} ,previousValue=${prev}`);
        }
        if (simpleChanges["project"]) {
            //this.project.teamSize+=1;
        }
    }
    ngOnInit() {
        console.info("----------------ngOnInit called");
        this.MySubscription = this.projectsService.MySubject.subscribe((hide) => {
            this.hideDetails = hide;
        });
    }
    ngDoCheck() {
        console.info("----------------ngDoCheck called");
    }
    ngAfterContentInit() {
        console.info("----------------ngAfterContentInit called");
        console.log(this.selectiobBoxes.toArray());
    }
    ngAfterContentChecked() {
        console.info("----------------ngAfterContentChecked called");
    }
    ngAfterViewInit() {
        console.info("----------------ngAfterViewInit called");
        console.log(this.tbl);
    }
    ngAfterViewChecked() {
        console.info("----------------ngAfterViewChecked called");
    }
    ngOnDestroy() {
        console.info("----------------ngOnDestroy called");
        this.MySubscription.unsubscribe();
    }
    onEditClick(event, i) {
        this.editClick.emit({ event, i });
    }
    onDeleteClick(event, i) {
        this.deleteClick.emit({ event, i });
    }
    isAllCheckedChange(b) {
        let selectiobBox = this.selectiobBoxes.toArray();
        if (b) {
            for (let i = 0; i < selectiobBox.length; i++) {
                selectiobBox[i].check();
            }
        }
        else {
            for (let i = 0; i < selectiobBox.length; i++) {
                selectiobBox[i].unCheck();
            }
        }
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService)); };
ProjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], contentQueries: function ProjectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _c0, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selectiobBoxes = _t);
    } }, viewQuery: function ProjectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tbl = _t.first);
    } }, inputs: { project: ["currentProject", "project"], i: ["recordIndex", "i"] }, outputs: { editClick: "editClick", deleteClick: "deleteClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 40, vars: 10, consts: [[1, "card", "card-primary", "mb-3"], [1, "card-header"], [1, "row"], [1, "col-md-11"], [1, "col-md-1"], [1, "card-body"], [1, "table", "table-borderless", "table-sm", 3, "hidden"], ["tbl", ""], [1, "card-footer", "text-muted"], ["data-bs-toggle", "modal", "data-bs-target", "#EditModal", 1, "btn", "btn-info", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#DeleteModal", 1, "btn", "btn-warning", 3, "click"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "numberToWords");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Client Lacation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_35_listener($event) { return ctx.onEditClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_38_listener($event) { return ctx.onDeleteClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", ctx.project.projectID, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.hideDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.project.dateOfStart, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.project.teamSize, " (", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 8, ctx.project.teamSize), ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.status);
    } }, pipes: [_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_1__.NumberToWordsPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1832:
/*!******************************************************!*\
  !*** ./src/app/admin/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var src_app_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project */ 2513);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../filter.pipe */ 4211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ 318);
/* harmony import */ var src_app_client_locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/client-locations.service */ 780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project/project.component */ 7405);
/* harmony import */ var _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../check-box-printer/check-box-printer.component */ 2643);
/* harmony import */ var _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client-location-status-validator.directive */ 3172);
/* harmony import */ var _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../project-idunique-validator.directive */ 6588);
/* harmony import */ var _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../team-size-validator.directive */ 4761);
/* harmony import */ var _paging_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../paging.pipe */ 8374);















const _c0 = ["newForm"];
const _c1 = ["editForm"];
const _c2 = ["prjEName"];
const _c3 = ["prjID"];
const _c4 = ["prj"];

function ProjectsComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 105);
  }
}

function ProjectsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "app-project", 107, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editClick", function ProjectsComponent_div_35_Template_app_project_editClick_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r52);
      const i_r48 = restoredCtx.index;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r51.onEditClick($event, i_r48);
    })("deleteClick", function ProjectsComponent_div_35_Template_app_project_deleteClick_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r52);
      const i_r48 = restoredCtx.index;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r53.onDeleteClick($event, i_r48);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-check-box-printer", null, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const project_r47 = ctx.$implicit;
    const i_r48 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("currentProject", project_r47)("recordIndex", i_r48);
  }
}

const _c5 = function (a0) {
  return {
    "active": a0
  };
};

function ProjectsComponent_li_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_li_42_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r56);
      const page_r54 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r55.onPageIndexClicked(page_r54.pageIndex);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r54 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c5, page_r54.pageIndex == ctx_r2.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](page_r54.pageIndex + 1);
  }
}

function ProjectsComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_option_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const clientLocation_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", clientLocation_r57.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", clientLocation_r57.clientLocationName, " ");
  }
}

function ProjectsComponent_span_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please select client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_option_204_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const clientLocation_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", clientLocation_r58.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", clientLocation_r58.clientLocationName, " ");
  }
}

function ProjectsComponent_span_205_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please select client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function ProjectsComponent_span_206_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

const _c6 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};

class ProjectsComponent {
  constructor(projectsService, clientLocationsService) {
    this.projectsService = projectsService;
    this.clientLocationsService = clientLocationsService;
    this.projects = [];
    this.showLoading = true;
    this.newProject = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.editProject = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.editIndex = 0;
    this.deleteProject = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.deleteIndex = 0;
    this.searchBy = "projectName";
    this.searchText = "";
    this.currentPageIndex = 0;
    this.pageSize = 3;
    this.pages = [];
    this.newForm = null;
    this.editForm = null;
    this.prjEName = null;
    this.prjID = null;
    this.prj = null;
    this.isAllChecked = false;
  }

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe({
      next: response => {
        this.projects = response;
        this.showLoading = false;
        this.calculateNoOfPages();
      }
    });
    this.clientLocations = this.clientLocationsService.getClientLocations();
  }

  onSaveClick() {
    if (this.newForm.valid) {
      this.newProject.clientLocation.clientLocationID = 0;
      this.projectsService.insertProject(this.newProject).subscribe({
        next: response => {
          var p = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
          p.projectID = response.projectID;
          p.projectName = response.projectName;
          p.dateOfStart = response.dateOfStart;
          p.teamSize = response.teamSize;
          p.active = response.active;
          p.status = response.status;
          p.clientLocationID = response.clientLocationID;
          p.clientLocation = response.clientLocation;
          this.projects.push(p);
          this.newProject.projectID = null;
          this.newProject.projectName = null;
          this.newProject.dateOfStart = null;
          this.newProject.teamSize = null;
          this.newProject.active = false;
          this.newProject.status = null;
          this.newProject.clientLocationID = null;
          jquery__WEBPACK_IMPORTED_MODULE_1__("#newFormCancel").trigger("click");
          this.calculateNoOfPages();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }

  onEditClick(event, index) {
    this.editForm.resetForm();
    setTimeout(() => {
      this.editProject.projectID = this.projects[index].projectID;
      this.editProject.projectName = this.projects[index].projectName;
      this.editProject.dateOfStart = this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd

      this.editProject.teamSize = this.projects[index].teamSize;
      this.editProject.active = this.projects[index].active;
      this.editProject.status = this.projects[index].status;
      this.editProject.clientLocationID = this.projects[index].clientLocationID;
      this.editProject.clientLocation = this.projects[index].clientLocation;
      this.editIndex = index;
      this.prjEName.nativeElement.focus();
    }, 500);
  }

  onUpdateClick() {
    if (this.editForm.valid) {
      this.projectsService.updateProject(this.editProject).subscribe({
        next: response => {
          var p = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
          p.projectID = response.projectID;
          p.projectName = response.projectName;
          p.dateOfStart = response.dateOfStart;
          p.teamSize = response.teamSize;
          p.active = response.active;
          p.status = response.status;
          p.clientLocationID = response.clientLocationID;
          p.clientLocation = response.clientLocation;
          this.projects[this.editIndex] = p;
          this.editProject.projectID = null;
          this.editProject.projectName = null;
          this.editProject.dateOfStart = null;
          this.editProject.teamSize = null;
          this.editProject.active = false;
          this.editProject.status = null;
          this.editProject.clientLocationID = null;
          jquery__WEBPACK_IMPORTED_MODULE_1__("#editFormCancel").trigger("click");
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }

  onDeleteClick(event, index) {
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
    this.calculateNoOfPages();
  }

  onDeleteConfirmClick() {
    this.projectsService.deleteProject(this.deleteProject.projectID).subscribe({
      next: response => {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.dateOfStart = null;
        this.deleteProject.teamSize = null;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  onSearchClick() {// this.projectsService.searchProjects(this.searchBy,this.searchText).subscribe({
    //   next:(response:Project[])=>{
    //     this.projects=response;
    //   },
    //   error:(error)=>{
    //     console.log(error);
    //   }
    // });
  }

  onSearchTextKeyup(event) {
    this.calculateNoOfPages();
  }

  onNewClick(event) {
    this.newForm.resetForm();
    setTimeout(() => {
      this.prjID.nativeElement.focus();
    }, 500);
  }

  onHideShowDetails(event) {
    this.projectsService.toggleDetails();
  }

  isAllCheckedChange(event) {
    let prjs = this.prj.toArray();

    for (let i = 0; i < prjs.length; i++) {
      prjs[i].isAllCheckedChange(this.isAllChecked);
    }
  }

  calculateNoOfPages() {
    let filterPipe = new src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe();
    var resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
    var noOfPages = Math.ceil(resultProjects.length / this.pageSize);
    this.pages = [];

    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }

    this.currentPageIndex = 0;
  }

  onPageIndexClicked(pageIndex) {
    this.currentPageIndex = pageIndex;
  }

}

ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_client_locations_service__WEBPACK_IMPORTED_MODULE_4__.ClientLocationsService));
};

ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  viewQuery: function ProjectsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c4, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.newForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.prjEName = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.prjID = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.prj = _t);
    }
  },
  decls: 238,
  vars: 101,
  consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:34px", 4, "ngIf"], [1, "row"], [1, "col-sm-10", "mx-auto"], [1, "row", "mb-3"], ["for", "drpSearchBy", 1, "col-sm-2", "col-form-label", "text-end"], [1, "col-sm-4"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], ["value", "projectID"], ["value", "projectName"], ["value", "dateOfStart"], ["value", "teamSize"], ["for", "textSearchText", 1, "col-sm-2", "col-form-label", "text-end"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", "form-select-sm", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-sm-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#AddModal", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "col-sm-8"], ["type", "checkbox", "id", "isAllChecked", "name", "isAllChecked", "value", "true", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "isAllCheckedChange", 1, "custom-control-label"], ["class", "col-md-4 mb-1 projectcard", 4, "ngFor", "ngForOf"], [1, "col-md-12"], ["aria-label", "..."], [1, "pagination", "justify-content-center", "pagination-sm"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["novalidate", "novalidate", "appClientLocationStatusValidator", ""], ["newForm", "ngForm"], ["id", "AddModal", "tabindex", "-1", "aria-labelledby", "AddModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "form-group", "row", "mb-3"], ["for", "txtNewProjectId", 1, "col-sm-3", "col-form-lable"], [1, "col-sm-9"], ["type", "text", "name", "ProjectID", "id", "txtNewProjectId", "placeholder", "Project ID", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["prjID", "", "newProjectID", "ngModel"], ["class", "text-danger", 4, "ngif"], ["class", "text-danger", 4, "ngIf"], ["for", "txtNewProjectName", 1, "col-sm-3", "col-form-lable"], ["type", "text", "name", "ProjectName", "id", "txtNewProjectName", "placeholder", "Project Name", "required", "required", "pattern", "^[A-Za-Z0-9 /-]*$", "minlength", "3", "maxlength", "30", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectName", "ngModel"], ["for", "txtNewDateOfStart", 1, "col-sm-3", "col-form-lable"], ["type", "date", "name", "DateOfStart", "id", "txtNewDateOfStart", "placeholder", "dd/mm/yyyy", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newDateOfStart", "ngModel"], ["for", "txtTeamSize", 1, "col-sm-3", "col-form-lable"], ["type", "text", "id", "txtTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["newTeamSize", "ngModel"], [1, "col-sm-4", "col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "chkNewActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkNewActive", 1, "form-check-label"], ["for", "rbNewStatusInForce", 1, "col-sm-4", "col-form-label"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "rbNewStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusInForce", "ngModel"], ["for", "rbNewStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbNewStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["NewStatusSupport", "ngModel"], ["for", "rbNewStatusSupport", 1, "form-check-label"], ["for", "drpNewClientLocation", 1, "col-sm-4", "col-from-label"], ["id", "drpNewClientLocation", "name", "ClientLocation", "required", "required", 1, "form-select", "form-select-sm", 3, "ngModel", "ngClass", "ngModelChange"], ["newClientLocationID", "ngModel"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "id", "newFormCancel", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["editForm", "ngForm"], ["id", "EditModal", "tabindex", "-1", "aria-labelledby", "EditModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["for", "txtEditProjectId", 1, "col-sm-3", "col-form-lable"], ["type", "text", "name", "ProjectID", "id", "txtEditProjectId", "disabled", "disabled", "placeholder", "Project ID", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control", "form-control-palin-text", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectID", "ngModel"], ["for", "txtEditProjectName", 1, "col-sm-3", "col-form-lable"], ["type", "text", "name", "ProjectName", "id", "txtEditProjectName", "placeholder", "Project Name", "required", "required", "pattern", "^[A-Za-Z0-9 /-]*$", "minlength", "3", "maxlength", "30", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["prjEName", "", "editProjectName", "ngModel"], ["for", "txtEditDateOfStart", 1, "col-sm-3", "col-form-lable"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["editDateOfStart", "ngModel"], ["for", "txtEditTeamSize", 1, "col-sm-3", "col-form-lable"], ["type", "text", "name", "TeamSize", "id", "txtEditTeamSize", "placeholder", "Team Size", "maxlength", "7", "pattern", "^[0-9]*$", "appTeamSizeValidator", "5", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editTeamSize", "ngModel"], ["type", "checkbox", "id", "chkEditActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkEditActive", 1, "form-check-label"], ["for", "rbEditStatusInForce", 1, "col-sm-4", "col-form-label"], ["type", "radio", "id", "rbEditStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusInForce", "ngModel"], ["for", "rbEditStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbEditStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusSupport", "ngModel"], ["for", "rbEditStatusSupport", 1, "form-check-label"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-from-label"], ["id", "drpEditClientLocation", "name", "ClientLocation", "required", "required", 1, "form-select", "form-select-sm", 3, "ngModel", "ngClass", "ngModelChange"], ["editClientLocationID", "ngModel"], ["type", "button", "id", "editFormCancel", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "DeleteModal", "tabindex", "-1", "aria-labelledby", "DeleteModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "text-warning"], ["for", "txtDeleteProjectId", 1, "col-sm-3", "col-form-lable"], ["type", "text", "name", "ProjectID", "id", "txtDeleteProjectId", "disabled", "disabled", "placeholder", "Project ID", 1, "form-control", "form-control-palin-text", 3, "ngModel", "ngModelChange"], ["for", "txtDeleteProjectName", 1, "col-sm-3", "col-form-lable"], ["type", "text", "name", "ProjectName", "id", "txtDeleteProjectName", "disabled", "disabled", "placeholder", "Project Name", 1, "form-control", "form-control-palin-text", 3, "ngModel", "ngModelChange"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "34px"], [1, "col-md-4", "mb-1", "projectcard"], [3, "currentProject", "recordIndex", "editClick", "deleteClick"], ["prj", ""], ["selectionBox", ""], [1, "page-item", 3, "ngClass", "click"], [1, "page-link"], [1, "text-danger"], [3, "value"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Projects List ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ProjectsComponent_i_2_Template, 1, 0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Search By");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_9_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Date Of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Search:");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function ProjectsComponent_Template_input_keyup_22_listener($event) {
        return ctx.onSearchTextKeyup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_25_listener($event) {
        return ctx.onNewClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, " Create New Project ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_28_listener($event) {
        return ctx.onHideShowDetails($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "Hide/Show Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.isAllChecked = $event;
      })("change", function ProjectsComponent_Template_input_change_31_listener($event) {
        return ctx.isAllCheckedChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "Select All");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, ProjectsComponent_div_35_Template, 5, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](37, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "nav", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "ul", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ProjectsComponent_li_42_Template, 3, 4, "li", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "form", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "New Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "input", 37, 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.newProject.projectID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, ProjectsComponent_span_60_Template, 2, 0, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](61, ProjectsComponent_span_61_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](62, ProjectsComponent_span_62_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "label", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "input", 42, 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_67_listener($event) {
        return ctx.newProject.projectName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, ProjectsComponent_span_69_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, ProjectsComponent_span_70_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](71, ProjectsComponent_span_71_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, "Date Of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "input", 45, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_76_listener($event) {
        return ctx.newProject.dateOfStart = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, ProjectsComponent_span_78_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "input", 48, 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_83_listener($event) {
        return ctx.newProject.teamSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, ProjectsComponent_span_85_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](86, ProjectsComponent_span_86_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_92_listener($event) {
        return ctx.newProject.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](97, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "input", 56, 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_100_listener($event) {
        return ctx.newProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](103, "In Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "input", 59, 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_105_listener($event) {
        return ctx.newProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "label", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](109, ProjectsComponent_span_109_Template, 2, 0, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "label", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "select", 63, 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_114_listener($event) {
        return ctx.newProject.clientLocationID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "option", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](117, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](118, ProjectsComponent_option_118_Template, 2, 2, "option", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](119, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, ProjectsComponent_span_120_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](121, ProjectsComponent_span_121_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](123, "button", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](124, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](125, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_125_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](126, "Save changes");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "form", 25, 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134, "Edit Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](135, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "label", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](139, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "input", 73, 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_141_listener($event) {
        return ctx.editProject.projectID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](143, ProjectsComponent_span_143_Template, 2, 0, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](144, ProjectsComponent_span_144_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](145, ProjectsComponent_span_145_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](147, "label", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](148, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](149, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "input", 76, 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_150_listener($event) {
        return ctx.editProject.projectName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](153, ProjectsComponent_span_153_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](154, ProjectsComponent_span_154_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](155, ProjectsComponent_span_155_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](157, "label", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](158, "Date Of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](159, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](160, "input", 79, 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_160_listener($event) {
        return ctx.editProject.dateOfStart = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](162, ProjectsComponent_span_162_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](163, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](164);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](165, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "label", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](167, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](168, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](169, "input", 82, 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_169_listener($event) {
        return ctx.editProject.teamSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](171, ProjectsComponent_span_171_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](172, ProjectsComponent_span_172_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](173, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](175, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](176, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](178, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_178_listener($event) {
        return ctx.editProject.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](179, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](180, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](181, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](182, "label", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](183, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](184, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](185, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](186, "input", 87, 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_186_listener($event) {
        return ctx.editProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](188, "label", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](189, "In Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](190, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "input", 90, 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_191_listener($event) {
        return ctx.editProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](193, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](194, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](195, ProjectsComponent_span_195_Template, 2, 0, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](196, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "label", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](198, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](199, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "select", 94, 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_200_listener($event) {
        return ctx.editProject.clientLocationID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](202, "option", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](203, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](204, ProjectsComponent_option_204_Template, 2, 2, "option", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](205, ProjectsComponent_span_205_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](206, ProjectsComponent_span_206_Template, 2, 0, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](207, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](208, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](209, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](210, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_210_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](211, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](212, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](213, "div", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](214, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](215, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](216, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](217, "h5", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](218, "Delete Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](219, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](220, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](221, "div", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](222, "Are you sure to delete this project ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](223, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](224, "label", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](225, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](226, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](227, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_227_listener($event) {
        return ctx.deleteProject.projectID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](228, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](229, "label", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](230, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](232, "input", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_232_listener($event) {
        return ctx.deleteProject.projectName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](233, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](234, "button", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](235, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](236, "button", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_236_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](237, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](44);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](59);

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](68);

      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](77);

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](84);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](101);

      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](115);

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](128);

      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](142);

      const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](152);

      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](161);

      const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](170);

      const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](187);

      const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](201);

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.isAllChecked);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](36, 61, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](37, 65, ctx.projects, ctx.searchBy, ctx.searchText), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](71, _c6, _r5.invalid && (_r5.touched || _r5.dirty || _r3.submitted), _r5.valid && (_r5.touched || _r5.dirty || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngif", _r5.invalid && (_r5.touched || _r5.dirty || _r3.submitted) && _r5.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.touched || _r5.dirty || _r3.submitted) && _r5.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched || _r3.submitted) && _r5.errors["uniqueProjectID"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](74, _c6, _r9.invalid && (_r9.touched || _r9.dirty || _r3.submitted), _r9.valid && (_r9.touched || _r9.dirty || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.touched || _r9.dirty || _r3.submitted) && _r9.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.touched || _r9.dirty || _r3.submitted) && _r9.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.touched || _r9.dirty || _r3.submitted) && _r9.errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](77, _c6, _r13.invalid && (_r13.touched || _r13.dirty || _r3.submitted), _r13.valid && (_r13.touched || _r13.dirty || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r13.invalid && (_r13.touched || _r13.dirty || _r3.submitted) && _r13.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](80, _c6, _r15.invalid && (_r15.dirty || _r15.touched || _r3.submitted), _r15.valid && (_r15.dirty || _r15.touched || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r15.invalid && (_r15.dirty || _r15.touched || _r3.submitted) && _r15.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r15.invalid && (_r15.dirty || _r15.touched || _r3.submitted) && _r15.errors["divisible"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngif", _r18.invalid && (_r18.touched || _r18.dirty || _r3.submitted) && _r18.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](83, _c6, _r21.invalid && (_r21.touched || _r21.dirty || _r3.submitted), _r21.valid && (_r21.touched || _r21.dirty || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](119, 69, ctx.clientLocations));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r21.invalid && (_r21.touched || _r21.dirty || _r3.submitted) && _r21.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r3.submitted) && (_r3.errors ? _r3.errors["clientLocationStatus"] : false));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](86, _c6, _r26.invalid && (_r26.touched || _r26.dirty || _r25.submitted), _r26.valid && (_r26.touched || _r26.dirty || _r25.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngif", _r26.invalid && (_r26.touched || _r26.dirty || _r25.submitted) && _r26.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r26.invalid && (_r26.touched || _r26.dirty || _r25.submitted) && _r26.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r26.invalid && (_r26.dirty || _r26.touched || _r25.submitted) && _r26.errors["uniqueProjectID"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](89, _c6, _r31.invalid && (_r31.touched || _r31.dirty || _r25.submitted), _r31.valid && (_r31.touched || _r31.dirty || _r25.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r31.invalid && (_r31.touched || _r31.dirty || _r25.submitted) && _r31.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r31.invalid && (_r31.touched || _r31.dirty || _r25.submitted) && _r31.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r31.invalid && (_r31.touched || _r31.dirty || _r25.submitted) && _r31.errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](92, _c6, _r35.invalid && (_r35.touched || _r35.dirty || _r25.submitted), _r35.valid && (_r35.touched || _r35.dirty || _r25.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r35.invalid && (_r35.touched || _r35.dirty || _r25.submitted) && _r35.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.editProject.dateOfStart);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](95, _c6, _r37.invalid && (_r37.touched || _r37.dirty || _r25.submitted), _r37.valid && (_r37.touched || _r37.dirty || _r25.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r37.invalid && (_r37.touched || _r37.dirty || _r25.submitted) && _r37.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r37.invalid && (_r37.dirty || _r37.touched || _r25.submitted) && _r37.errors["divisible"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngif", _r40.invalid && (_r40.touched || _r40.dirty || _r25.submitted) && _r40.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](98, _c6, _r43.invalid && (_r43.touched || _r43.dirty || _r25.submitted), _r43.valid && (_r43.touched || _r43.dirty || _r25.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.clientLocations);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r43.invalid && (_r43.touched || _r43.dirty || _r25.submitted) && _r43.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r3.submitted) && (_r3.errors ? _r3.errors["clientLocationStatus"] : false));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectID);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectName);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _project_project_component__WEBPACK_IMPORTED_MODULE_5__.ProjectComponent, _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_6__.CheckBoxPrinterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_7__.ClientLocationStatusValidatorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.PatternValidator, _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_8__.ProjectIDUniqueValidatorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_9__.TeamSizeValidatorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor],
  pipes: [_paging_pipe__WEBPACK_IMPORTED_MODULE_10__.PagingPipe, src_app_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: [".projectcard[_ngcontent-%COMP%] {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtBQUFKIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RjYXJkXHJcbntcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 2026:
/*!************************************!*\
  !*** ./src/app/alert.directive.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDirective": () => (/* binding */ AlertDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AlertDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.error = null;
        this.title = "";
    }
    ngOnInit() {
        this.divElement = this.renderer2.createElement("div");
        this.renderer2.setAttribute(this.divElement, "role", "alert");
        this.renderer2.setAttribute(this.divElement, "class", "alert alert-danger fade show");
        this.renderer2.setStyle(this.divElement, "transition", "transform 0.5s");
        this.spanElement = this.renderer2.createElement("span");
        this.renderer2.setAttribute(this.spanElement, "class", "message");
        this.spanText = this.renderer2.createText(this.error);
        this.renderer2.appendChild(this.spanElement, this.spanText);
        this.renderer2.appendChild(this.divElement, this.spanElement);
        this.elementRef.nativeElement.appendChild(this.divElement);
        this.title = "Please try again.";
    }
    onMouseEnter(event) {
        this.renderer2.setStyle(this.divElement, "transform", "scale(1.1)");
        // this.elementRef.nativeElement.querySelector(".alert").style.transform="scale(1.1)";
    }
    onMouseLeave(event) {
        this.renderer2.setStyle(this.divElement, "transform", "scale(1)");
        //this.elementRef.nativeElement.querySelector(".alert").style.transform="scale(1)";
    }
}
AlertDirective.ɵfac = function AlertDirective_Factory(t) { return new (t || AlertDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
AlertDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AlertDirective, selectors: [["", "appAlert", ""]], hostVars: 1, hostBindings: function AlertDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AlertDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event); })("mouseleave", function AlertDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("title", ctx.title);
    } }, inputs: { error: "error" } });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/about/about.component */ 2455);
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ 6662);
/* harmony import */ var _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/projects/projects.component */ 1832);
/* harmony import */ var _can_activate_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./can-activate-guard.service */ 766);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ 570);
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks.component */ 9544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










const routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__.SignupComponent },
    { path: "dashboard", component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_3__.CanActivateGuardService],
        data: { expectedRole: "Admin" } },
    { path: "about", component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent },
    { path: "projects", component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_3__.CanActivateGuardService],
        data: { expectedRole: "Admin" } },
    { path: "tasks", component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__.TasksComponent, canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_3__.CanActivateGuardService],
        data: { expectedRole: "Employee" } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 5619);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4293);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);






function AppComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.loginService.currentUserName);
} }
function AppComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_19_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.loginService.Logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(loginService, domSanitizer) {
        this.loginService = loginService;
        this.domSanitizer = domSanitizer;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 30, vars: 5, consts: [[1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-success"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#mynav", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mynav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "tasks", 1, "nav-link"], ["routerLink", "about", 1, "nav-link"], ["routerLink", "projects", 1, "nav-link"], [1, "d-flex"], ["id", "search", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-warning"], ["aria-current", "page", "routerLink", "dashboard", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], [1, "nav-link", 3, "click"], ["routerLink", "login", 1, "nav-link"], ["routerLink", "signup", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Angular Task Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_li_8_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppComponent_li_18_Template, 3, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_li_19_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AppComponent_li_20_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppComponent_li_21_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4293);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin.module */ 7095);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _jwt_intercepter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt-intercepter.service */ 8407);
/* harmony import */ var _jwt_un_authorized_intercepter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt-un-authorized-intercepter.service */ 6378);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ 570);
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/tasks.component */ 9544);
/* harmony import */ var _alert_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alert.directive */ 2026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
            useClass: _jwt_intercepter_service__WEBPACK_IMPORTED_MODULE_3__.JwtIntercepterService,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
            useClass: _jwt_un_authorized_intercepter_service__WEBPACK_IMPORTED_MODULE_4__.JwtUnAuthorizedIntercepterService,
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__.AdminModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JwtModule.forRoot({
                config: {
                    tokenGetter: () => {
                        return (sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')).token : null);
                    }
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__.SignupComponent,
        _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__.TasksComponent,
        _alert_directive__WEBPACK_IMPORTED_MODULE_8__.AlertDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__.AdminModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__.JwtModule] }); })();


/***/ }),

/***/ 766:
/*!***********************************************!*\
  !*** ./src/app/can-activate-guard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanActivateGuardService": () => (/* binding */ CanActivateGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 5619);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);




class CanActivateGuardService {
    constructor(loginService, router, jwtHelperService) {
        this.loginService = loginService;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
    }
    canActivate(route) {
        console.log(this.router.url);
        var token = sessionStorage.getItem('currentUser') ?
            JSON.parse(sessionStorage.getItem('currentUser')).token : null;
        if (this.loginService.isAuthenticated() && this.jwtHelperService.decodeToken(token).role ==
            route.data['expectedRole']) {
            return true;
        }
        else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}
CanActivateGuardService.ɵfac = function CanActivateGuardService_Factory(t) { return new (t || CanActivateGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService)); };
CanActivateGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CanActivateGuardService, factory: CanActivateGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3172:
/*!***************************************************************!*\
  !*** ./src/app/client-location-status-validator.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLocationStatusValidatorDirective": () => (/* binding */ ClientLocationStatusValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class ClientLocationStatusValidatorDirective {
    constructor() { }
    validate(control) {
        let isValid = true;
        if (control.value.ClientLocation == 6 && control.value.Status == "Support") {
            isValid = false;
        }
        if (isValid) {
            return null;
        }
        else {
            return { clientLocationStatus: { valid: false } };
        }
    }
}
ClientLocationStatusValidatorDirective.ɵfac = function ClientLocationStatusValidatorDirective_Factory(t) { return new (t || ClientLocationStatusValidatorDirective)(); };
ClientLocationStatusValidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClientLocationStatusValidatorDirective, selectors: [["", "appClientLocationStatusValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS, useExisting: ClientLocationStatusValidatorDirective, multi: true }])] });


/***/ }),

/***/ 1028:
/*!************************************!*\
  !*** ./src/app/client-location.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLocation": () => (/* binding */ ClientLocation)
/* harmony export */ });
class ClientLocation {
    constructor() {
        this.clientLocationID = null;
        this.clientLocationName = null;
    }
}


/***/ }),

/***/ 780:
/*!*********************************************!*\
  !*** ./src/app/client-locations.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLocationsService": () => (/* binding */ ClientLocationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class ClientLocationsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getClientLocations() {
        return this.httpClient.get("api/clientlocations", { responseType: "json" });
    }
}
ClientLocationsService.ɵfac = function ClientLocationsService_Factory(t) { return new (t || ClientLocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ClientLocationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientLocationsService, factory: ClientLocationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8077:
/*!**************************************!*\
  !*** ./src/app/countries.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesService": () => (/* binding */ CountriesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class CountriesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCountries() {
        return this.httpClient.get("api/countries", { responseType: "json" });
    }
}
CountriesService.ɵfac = function CountriesService_Factory(t) { return new (t || CountriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CountriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountriesService, factory: CountriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 368:
/*!**********************************************!*\
  !*** ./src/app/custom-validators.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidatorsService": () => (/* binding */ CustomValidatorsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 5619);



class CustomValidatorsService {
    constructor(loginService) {
        this.loginService = loginService;
    }
    minimumAgeValidator(minAge) {
        return (control) => {
            if (!control.value)
                return null;
            var today = new Date();
            var dateOfBirth = new Date(control.value);
            var diffMilliSecond = Math.abs(today.getTime() - dateOfBirth.getTime());
            var diffYears = (diffMilliSecond / (1000 * 60 * 60 * 24)) / 365.25;
            if (diffYears >= minAge)
                return null;
            else
                return { minAge: { valie: false } };
        };
    }
    compareValidator(controlToValidate, controlToCompare) {
        return (formGroup) => {
            if (!formGroup.get(controlToValidate).value)
                return null; //return, if the confirm password is null
            if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value)
                return null; //valid
            else {
                formGroup.get(controlToValidate).setErrors({ compareValidator: { valid: false } });
                return { compareValidator: { valid: false } }; //invalid
            }
        };
    }
    DuplicateEmailValidator() {
        return (control) => {
            return this.loginService.getUserByEmail(control.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((existingUser) => {
                if (existingUser != null) {
                    return { uniqueEmail: { valid: false } };
                }
                else {
                    return null;
                }
            }));
        };
    }
}
CustomValidatorsService.ɵfac = function CustomValidatorsService_Factory(t) { return new (t || CustomValidatorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
CustomValidatorsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomValidatorsService, factory: CustomValidatorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2394:
/*!**************************************!*\
  !*** ./src/app/dashboard.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DashboardService {
    getTeamMembersSummary() {
        var TeamMembersSummary = [
            { Region: "East", Count: 20, Members: 4 },
            { Region: "South", Count: 15, Members: 8 },
            { Region: "West", Count: 7, Members: 1 },
            { Region: "North", Count: 15, Members: 16 }
        ];
        return TeamMembersSummary;
    }
    getTeamMembers() {
        var TeamMembers = [
            { Region: "East", Members: [
                    { Id: 1, Name: "Ford", Status: "Available" },
                    { Id: 2, Name: "Miller Jhone", Status: "Available" },
                    { Id: 3, Name: "Jones", Status: "Busy" },
                    { Id: 4, Name: "James", Status: "Busy" }
                ]
            },
            { Region: "South", Members: [
                    { Id: 5, Name: "Ford", Status: "Available" },
                    { Id: 6, Name: "Miller", Status: "Available" },
                    { Id: 7, Name: "Jones", Status: "Busy" },
                    { Id: 8, Name: "James", Status: "Busy" }
                ]
            },
            { Region: "West", Members: [
                    { Id: 9, Name: "Jones", Status: "Available" },
                    { Id: 10, Name: "Miller", Status: "Busy" },
                    { Id: 11, Name: "Ford", Status: "Available" },
                    { Id: 12, Name: "Ford", Status: "Busy" }
                ]
            },
            { Region: "North", Members: [
                    { Id: 13, Name: "Jones", Status: "Available" },
                    { Id: 14, Name: "Miller", Status: "Busy" },
                    { Id: 15, Name: "Ford", Status: "Available" },
                    { Id: 16, Name: "James", Status: "Busy" }
                ]
            }
        ];
        return TeamMembers;
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(); };
DashboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });


/***/ }),

/***/ 4211:
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FilterPipe {
    transform(value, searchBy, searchText) {
        if (value == null) {
            return value;
        }
        let resultArray = [];
        for (let item of value) {
            if (String(item[searchBy]).toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: false });


/***/ }),

/***/ 8407:
/*!********************************************!*\
  !*** ./src/app/jwt-intercepter.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtIntercepterService": () => (/* binding */ JwtIntercepterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class JwtIntercepterService {
    constructor() { }
    intercept(request, next) {
        var currentUser = { token: "" };
        if (sessionStorage['currentUser'] != null) {
            currentUser = JSON.parse(sessionStorage['currentUser']);
        }
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + currentUser.token
            }
        });
        return next.handle(request);
    }
}
JwtIntercepterService.ɵfac = function JwtIntercepterService_Factory(t) { return new (t || JwtIntercepterService)(); };
JwtIntercepterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtIntercepterService, factory: JwtIntercepterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6378:
/*!**********************************************************!*\
  !*** ./src/app/jwt-un-authorized-intercepter.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtUnAuthorizedIntercepterService": () => (/* binding */ JwtUnAuthorizedIntercepterService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class JwtUnAuthorizedIntercepterService {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)({
            next: (event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                    //do something with response
                }
            },
            error: (error) => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                    if (error.status == 401) {
                        console.log();
                        alert('401 UnAuthorized');
                    }
                }
            }
        }));
    }
}
JwtUnAuthorizedIntercepterService.ɵfac = function JwtUnAuthorizedIntercepterService_Factory(t) { return new (t || JwtUnAuthorizedIntercepterService)(); };
JwtUnAuthorizedIntercepterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtUnAuthorizedIntercepterService, factory: JwtUnAuthorizedIntercepterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9269:
/*!*************************************!*\
  !*** ./src/app/login-view-model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginViewModel": () => (/* binding */ LoginViewModel)
/* harmony export */ });
class LoginViewModel {
    constructor() {
        this.Username = "";
        this.Password = "";
    }
}


/***/ }),

/***/ 5619:
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






class LoginService {
    constructor(httpBackend, jwtHelperService, router) {
        this.httpBackend = httpBackend;
        this.jwtHelperService = jwtHelperService;
        this.router = router;
        this.httpClient = null;
        this.currentUserName = null;
    }
    Login(loginViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
        return this.httpClient.post("/authenticate", loginViewModel, { responseType: "json", observe: "response" })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            if (response) {
                this.currentUserName = response.body.userName;
                sessionStorage['currentUser'] = JSON.stringify(response.body);
                sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    }
    Register(signUpViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
        return this.httpClient.post("/register", signUpViewModel, { responseType: "json", observe: "response" })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            if (response) {
                this.currentUserName = response.body.userName;
                sessionStorage['currentUser'] = JSON.stringify(response.body);
                sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
            }
            return response.body;
        }));
    }
    getUserByEmail(Email) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
        return this.httpClient.get("/api/getUserByEmail/" + Email, { responseType: "json" });
    }
    Logout() {
        sessionStorage.removeItem('currentUser');
        this.currentUserName = null;
        this.router.navigate(['login']);
    }
    isAuthenticated() {
        var token = sessionStorage.getItem('currentUser') ?
            JSON.parse(sessionStorage.getItem('currentUser')).token : null;
        if (this.jwtHelperService.isTokenExpired()) {
            return false; //token is not valid is expired
        }
        else {
            return true; //token is valid
        }
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _login_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-view-model */ 9269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _alert_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert.directive */ 2026);








const _c0 = ["userName"];
function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("error", ctx_r0.loginError);
} }
class LoginComponent {
    constructor(loginService, router, jwtHelperService) {
        this.loginService = loginService;
        this.router = router;
        this.jwtHelperService = jwtHelperService;
        this.loginViewModel = new _login_view_model__WEBPACK_IMPORTED_MODULE_0__.LoginViewModel();
        this.loginError = "";
        this.userName = null;
    }
    ngOnInit() {
        setTimeout(() => {
            this.userName.nativeElement.focus();
        }, 500);
    }
    onLoginClick(event) {
        this.loginService.Login(this.loginViewModel).subscribe({
            next: (response) => {
                var token = sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')) : null;
                if (token.role == "Employee")
                    this.router.navigateByUrl("tasks");
                else
                    this.router.navigateByUrl("dashboard");
            },
            error: (error) => {
                console.log(error);
                this.loginError = "Invalid Username or Password";
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__.JwtHelperService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.userName = _t.first);
    } }, decls: 21, vars: 3, consts: [[1, "row", "mt-3"], [1, "col-lg-6", "col-xl-5", "col-md-9", "mx-auto"], [1, "card", "text-center"], [1, "card-header", "bg-secondary", "text-start"], ["appAlert", "", 3, "error", 4, "ngIf"], [1, "card-body"], [1, "mb-3", "mt-3", "text-start"], ["for", "UserName", 1, "form-label"], ["type", "text", "placeholder", "username", "name", "username", "autofocus", "autofocus", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userName", ""], [1, "mb-3", "text-start"], ["for", "password", 1, "form-label"], ["type", "password", "placeholder", "password", "name", "password", "autofocus", "autofocus", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-muted", "text-end"], [1, "btn", "btn-primary", 3, "click"], ["appAlert", "", 3, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.loginViewModel.Username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.loginViewModel.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener($event) { return ctx.onLoginClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginViewModel.Username);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginViewModel.Password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _alert_directive__WEBPACK_IMPORTED_MODULE_2__.AlertDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8331:
/*!*****************************************!*\
  !*** ./src/app/number-to-words.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberToWordsPipe": () => (/* binding */ NumberToWordsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NumberToWordsPipe {
    constructor() {
        this.inWords = (n, separator) => {
            let a = [
                '', 'One', 'Two', 'Three', 'Four',
                'Five', 'Six', 'Seven', 'Eight', 'Nine',
                'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
                'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
            ];
            let b = [
                '', '', 'Twenty', 'Thirty', 'Forty',
                'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
            ];
            let g = [
                '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion',
                'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'
            ];
            const arr = (x) => Array.from(x);
            const num = (x) => Number(x) || 0;
            const str = (x) => String(x);
            const isEmpty = (xs) => xs.length === 0;
            const take = (n) => (xs) => xs.slice(0, n);
            const drop = (n) => (xs) => xs.slice(n);
            const reverse = (xs) => xs.slice(0).reverse();
            const comp = (f) => (g) => (x) => f(g(x));
            const not = (x) => !x;
            const chunk = (n) => (xs) => isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
            let makeGroup = ([ones, tens, huns]) => {
                return [
                    num(huns) === 0 ? '' : a[huns] + ' Hundred ',
                    num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
                    a[tens + ones] || a[ones]
                ].join('');
            };
            let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;
            if (typeof n === 'number')
                return this.inWords(str(n), separator);
            else if (n === '0')
                return 'Zero';
            else
                return comp(chunk(3))(reverse)(arr(n))
                    .map(makeGroup)
                    .map(thousand)
                    .filter(comp(not)(isEmpty))
                    .reverse()
                    .join(separator);
        };
    }
    transform(value, separator = ", ") {
        if (value == null) {
            return null;
        }
        else {
            return this.inWords(value, separator);
        }
    }
}
NumberToWordsPipe.ɵfac = function NumberToWordsPipe_Factory(t) { return new (t || NumberToWordsPipe)(); };
NumberToWordsPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "numberToWords", type: NumberToWordsPipe, pure: true });


/***/ }),

/***/ 8374:
/*!********************************!*\
  !*** ./src/app/paging.pipe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingPipe": () => (/* binding */ PagingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PagingPipe {
    transform(value, currentPageIndex, pageSize) {
        if (value == null) {
            return value;
        }
        var start = currentPageIndex * pageSize;
        var end = (Number(currentPageIndex) + 1) * pageSize;
        let resultArray = [];
        for (let i = start; i < end; i++) {
            if (value[i]) {
                resultArray.push(value[i]);
            }
        }
        return resultArray;
    }
}
PagingPipe.ɵfac = function PagingPipe_Factory(t) { return new (t || PagingPipe)(); };
PagingPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paging", type: PagingPipe, pure: true });


/***/ }),

/***/ 6588:
/*!*********************************************************!*\
  !*** ./src/app/project-idunique-validator.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectIDUniqueValidatorDirective": () => (/* binding */ ProjectIDUniqueValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.service */ 318);




class ProjectIDUniqueValidatorDirective {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    validate(control) {
        return this.projectsService.getProjectByProjectID(control.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((existingProject) => {
            if (existingProject != null) {
                return { uniqueProjectID: { valid: false } };
            }
            else {
                return null;
            }
        }));
    }
}
ProjectIDUniqueValidatorDirective.ɵfac = function ProjectIDUniqueValidatorDirective_Factory(t) { return new (t || ProjectIDUniqueValidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService)); };
ProjectIDUniqueValidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ProjectIDUniqueValidatorDirective, selectors: [["", "appProjectIDUniqueValidator", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_ASYNC_VALIDATORS, useExisting: ProjectIDUniqueValidatorDirective, multi: true }])] });


/***/ }),

/***/ 2513:
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _client_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-location */ 1028);

class Project {
    constructor() {
        this.projectID = null;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = true;
        this.status = null;
        this.clientLocationID = null;
        this.clientLocation = new _client_location__WEBPACK_IMPORTED_MODULE_0__.ClientLocation();
    }
}


/***/ }),

/***/ 318:
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ProjectsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.MySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    toggleDetails() {
        this.MySubject.next(!this.MySubject.value);
    }
    getAllProjects() {
        return this.httpClient.get("/api/projects", { responseType: "json" })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
            for (let i = 0; i < data.length; i++) {
                //data[i].teamSize=data[i].teamSize*100;
            }
            return data;
        }));
    }
    insertProject(newProject) {
        var requestHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage['XSRFRequestToken']);
        return this.httpClient.post("/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
    }
    updateProject(existingProject) {
        return this.httpClient.put("/api/projects", existingProject, { responseType: "json" });
    }
    deleteProject(projectID) {
        return this.httpClient.delete("/api/projects?ProjectId=" + projectID);
    }
    searchProjects(searchBy, searchText) {
        return this.httpClient.get("api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
    }
    getProjectByProjectID(ProjectID) {
        return this.httpClient.get("api/projects/searchbyprojectid/" + ProjectID, { responseType: "json" });
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProjectsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 570:
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../countries.service */ 8077);
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-validators.service */ 368);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








function SignupComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is already exists");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mobile can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mobile is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Date of Birth can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Minimum age must be 18 year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Confirm Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password and Confirm Password do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", gender_r19)("value", gender_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", gender_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](gender_r19);
} }
function SignupComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SignupComponent_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", country_r20.countryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](country_r20.countryName);
} }
function SignupComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select country");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
function SignupComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Please Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupComponent_div_82_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const i_r22 = restoredCtx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.onRemoveClick(i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c0, skill_r21.get("skillName").invalid && (skill_r21.get("skillName").dirty || skill_r21.get("skillName").touched || ctx_r18.signUpForm.submitted), skill_r21.get("skillName").valid && (skill_r21.get("skillName").dirty || skill_r21.get("skillName").touched || ctx_r18.signUpForm.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, skill_r21.get("sKillLevel").invalid && (skill_r21.get("sKillLevel").dirty || skill_r21.get("sKillLevel").touched || ctx_r18.signUpForm.submitted), skill_r21.get("sKillLevel").valid && (skill_r21.get("sKillLevel").dirty || skill_r21.get("sKillLevel").touched || ctx_r18.signUpForm.submitted)));
} }
class SignupComponent {
    constructor(countriesService, formBuilder, customValidatorsService, loginService, router) {
        this.countriesService = countriesService;
        this.formBuilder = formBuilder;
        this.customValidatorsService = customValidatorsService;
        this.loginService = loginService;
        this.router = router;
        this.signUpForm = null;
        this.genders = ["male", "female"];
        this.countries = [];
        this.registerError = null;
    }
    ngOnInit() {
        this.countriesService.getCountries().subscribe((response) => {
            this.countries = response;
        });
        this.signUpForm = this.formBuilder.group({
            personName: this.formBuilder.group({
                firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]]
            }),
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email], [this.customValidatorsService.DuplicateEmailValidator()], { updateOn: 'blur' }],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[789]\d{9}$/)]],
            dateOfBirth: ["2022-03-15", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.customValidatorsService.minimumAgeValidator(18)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            countryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            receiveNewsLetters: null,
            skills: this.formBuilder.array([])
        }, {
            validators: [
                this.customValidatorsService.compareValidator("confirmPassword", "password")
            ]
        });
        this.signUpForm.valueChanges.subscribe((value) => {
            // console.log(value);
        });
    }
    onSubmitClick() {
        //Display current form value
        this.signUpForm["submitted"] = true;
        console.log(this.signUpForm.value);
        if (this.signUpForm.valid) {
            var signUpViewModel = this.signUpForm.value;
            this.loginService.Register(signUpViewModel).subscribe({
                next: (response) => {
                    this.router.navigate(["tasks"]);
                },
                error: (error) => {
                    console.log(error);
                    this.registerError = "Unable to submit";
                }
            });
        }
    }
    onAddSkill() {
        var formGroup = this.formBuilder.group({
            skillName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            sKillLevel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
        this.signUpForm.get("skills").push(formGroup);
    }
    onRemoveClick(index) {
        this.signUpForm.get("skills").removeAt(index);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_0__.CountriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 92, vars: 56, consts: [[1, "row", "mt-5"], [1, "col-md-8", "col-xl-6", "mx-auto"], [3, "formGroup", "ngSubmit"], [1, "card", "mt-1"], [1, "card-header"], [1, "card-body"], ["formGroupName", "personName", 1, "row", "mb-2"], ["for", "firstName", 1, "col-md-4", "col-form-label-sm"], [1, "col-md-8"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", "form-control-sm", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName", 1, "col-md-4", "col-form-label-sm"], ["type", "text", "id", "lastName", "name", "lastName", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "row", "mb-2"], ["for", "email", 1, "col-md-4", "col-form-label-sm"], ["type", "text", "id", "email", "name", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "mobile", 1, "col-md-4", "col-form-label-sm"], ["type", "text", "id", "mobile", "name", "mobile", "placeholder", "Mobile", "formControlName", "mobile", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "dateOfBirth", 1, "col-md-4", "col-form-label-sm"], ["type", "date", "id", "dateOfBirth", "name", "dateOfBirth", "placeholder", "Date Of Birth", "formControlName", "dateOfBirth", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "password", 1, "col-md-4", "col-form-label-sm"], ["type", "text", "id", "password", "name", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "form-control-sm", 3, "ngClass"], ["for", "confirmPassword", 1, "col-md-4", "col-form-label-sm"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "col-md-4", "col-form-label-sm"], ["class", "form-check-label form-check-inline", 4, "ngFor", "ngForOf"], ["id", "countryID", "name", "countryID", "formControlName", "countryID", 1, "form-select", "form-select-sm", 3, "ngClass"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "checkbox", "id", "receiveNewsLetters", "name", "receiveNewsLetters", "value", "true", "formControlName", "receiveNewsLetters", 1, "form-check-input"], ["for", "receiveNewsLetters", 1, "form-check-label"], ["formArrayName", "skills", 1, "col-md-8"], ["class", "row mb-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btb", "btn-primary", 3, "click"], [1, "card-footer"], [1, "btn", "btn-success", "float-end"], [1, "text-danger"], [1, "form-check-label", "form-check-inline"], ["type", "radio", "name", "gender", "formControlName", "gender", 1, "form-check-input", 3, "id", "value"], [1, "form-check-lable", 3, "for"], [3, "value"], [1, "row", "mb-2", 3, "formGroupName"], [1, "col-sm-5"], ["type", "text", "name", "skillName", "id", "skillName", "placeholder", "Skill Name", "formControlName", "skillName", 1, "form-control", "form-control-sm", 3, "ngClass"], [1, "col-sm-4"], ["name", "sKillLevel", "id", "sKillLevel", "formControlName", "sKillLevel", 1, "form-select", "form-select-sm", 3, "ngClass"], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Professional"], ["value", "Expert"], [1, "col-sm-3"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmitClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SignupComponent_span_13_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SignupComponent_span_14_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SignupComponent_span_20_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SignupComponent_span_21_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "EMail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, SignupComponent_span_27_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SignupComponent_span_28_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, SignupComponent_span_29_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Mobile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, SignupComponent_span_35_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, SignupComponent_span_36_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, SignupComponent_span_42_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, SignupComponent_span_43_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, SignupComponent_span_49_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Confirm Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, SignupComponent_span_55_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, SignupComponent_span_56_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, SignupComponent_div_61_Template, 4, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, SignupComponent_span_62_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, SignupComponent_option_70_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, SignupComponent_span_71_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Receive News Letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Skills:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, SignupComponent_div_82_Template, 18, 9, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_83_listener() { return ctx.onAddSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " Add Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](91, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](32, _c0, ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("personName.firstName").valid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](35, _c0, ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("personName.lastName").valid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](38, _c0, ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("email").valid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.uniqueEmail));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](41, _c0, ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("mobile").valid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](44, _c0, ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("dateOfBirth").valid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.minAge));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](47, _c0, ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("password").valid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("password").errors == null ? null : ctx.signUpForm.get("password").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](50, _c0, ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("confirmPassword").valid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("confirmPassword").errors == null ? null : ctx.signUpForm.get("confirmPassword").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("confirmPassword").errors == null ? null : ctx.signUpForm.get("confirmPassword").errors.compareValidator));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("gender").invalid && (ctx.signUpForm.get("gender").dirty || ctx.signUpForm.get("gender").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("gender").errors == null ? null : ctx.signUpForm.get("gender").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](53, _c0, ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("countryID").valid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("countryID").errors == null ? null : ctx.signUpForm.get("countryID").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.signUpForm.get("skills").controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.registerError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](91, 30, ctx.signUpForm.value), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9544:
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TasksComponent {
    constructor() { }
    ngOnInit() {
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(); };
TasksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 2, vars: 0, template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tasks works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4761:
/*!**************************************************!*\
  !*** ./src/app/team-size-validator.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamSizeValidatorDirective": () => (/* binding */ TeamSizeValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class TeamSizeValidatorDirective {
    constructor() {
        this.n = 0;
    }
    validate(control) {
        let currentValue = control.value;
        let isValid = currentValue % this.n == 0;
        if (isValid) {
            return null;
        }
        else {
            return { divisible: { valid: false } };
        }
    }
}
TeamSizeValidatorDirective.ɵfac = function TeamSizeValidatorDirective_Factory(t) { return new (t || TeamSizeValidatorDirective)(); };
TeamSizeValidatorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TeamSizeValidatorDirective, selectors: [["", "appTeamSizeValidator", ""]], inputs: { n: ["appTeamSizeValidator", "n"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS, useExisting: TeamSizeValidatorDirective, multi: true }])] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map