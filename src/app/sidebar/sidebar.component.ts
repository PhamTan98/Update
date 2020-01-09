import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',           title: 'Trang chủ',             icon:'nc-bank',       class: '' },
    { path: '/danh-sach-sinh-vien', title: 'Danh sách sinh viên',   icon:'nc-bullet-list-67',    class: '' },
    { path: '/them-moi-sinh-vien',  title: 'Thêm mới sinh viên',    icon:'nc-single-02',      class: '' },
    { path: '/danh-sach-check-in',            title: 'Danh sách check-in',    icon:'nc-bell-55',    class: '' },
    { path: '/duyet',               title: 'Duyệt',                 icon:'nc-check-2',  class: '' },
    {path: '/icons', title: 'Icons', icon:'nc-check-2', class: ''}
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
