import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "../../auth/auth.component";
import { AdminComponent } from "../admin.component";
import { AuthGuard } from "../../auth/helper/auth.guard";
import { ProductEditorComponent } from "../components/product-editor/product-editor.component";
import { ProductTableComponent } from "../components/product-table/product-table.component";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: "products/:mode/:id", component: ProductEditorComponent },
            { path: "products/:mode", component: ProductEditorComponent },
            { path: "products", component: ProductTableComponent },
            /*{ path: "orders", component: OrderTableComponent },*/
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent]
})
export class AdminModule { }