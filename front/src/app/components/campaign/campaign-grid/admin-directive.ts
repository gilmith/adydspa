import {Directive, Inject, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {
  AUTH_SERVICE,
  AuthService
} from '../../../../../.yalc/components/projects/components/src/lib/services/auth-service';
@Directive({
  selector: '[AdminDirective]',
  standalone: true
})
export class AdminDirective implements OnInit {

  constructor(
      private template: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef,
      @Inject(AUTH_SERVICE) private authService: AuthService) {}


    ngOnInit(): void {
      this.updateView();
    }

    private updateView() {
        this.viewContainerRef.clear();
        // Llamamos a tu servicio de la SPA de forma segura
        if (this.authService.hasPermission(['admin'])) {
            this.viewContainerRef.createEmbeddedView(this.template);
        }
    }
}
