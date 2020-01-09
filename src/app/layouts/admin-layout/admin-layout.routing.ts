import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { StudentsComponent } from '../../pages/students/students.component';
import { CheckInComponent } from '../../pages/check-in/check-in.component';
import {AddStudentComponent} from '../../pages/add-student/add-student.component';
import { DuyetComponent } from 'app/pages/Duyet/Duyet.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'danh-sach-sinh-vien',        component: StudentsComponent },
    { path: 'danh-sach-check-in',        component: CheckInComponent },
    { path: 'them-moi-sinh-vien',     component: AddStudentComponent},
    { path: 'duyet',           component: DuyetComponent}
];
