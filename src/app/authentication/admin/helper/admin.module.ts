import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "../admin.component";
import { AuthGuard } from "../../auth/helper/auth.guard";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AccountEditorComponent } from "../components/account-editor/account-editor.component";
import { AccountTableComponent } from "../components/account-table/account-table.component";
import { OrderTableComponent } from "../components/order-table/order-table.component";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { ViewAccountDialogComponent } from "../components/account-table/view-account-dialog/view-account-dialog.component";
import { ViewAccountProfileDialogComponent } from "../components/account-table/view-account-profile-dialog/view-account-profile-dialog.component";

let routing = RouterModule.forChild([
  {
    path: "main", component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: "accounts/:mode/:id", component: AccountEditorComponent },
      { path: "accounts/:mode", component: AccountEditorComponent },
      { path: "accounts", component: AccountTableComponent },
      { path: "orders", component: OrderTableComponent },
      { path: "**", redirectTo: "products" }
    ]
  },
  { path: "**", redirectTo: "auth" }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing, MatDialogModule],
  providers: [AuthGuard, {provide: MatDialogRef, useValue: {}}],
  declarations: [AdminComponent, AccountTableComponent, OrderTableComponent, AccountEditorComponent, ViewAccountDialogComponent, ViewAccountProfileDialogComponent]
})
export class AdminModule { }