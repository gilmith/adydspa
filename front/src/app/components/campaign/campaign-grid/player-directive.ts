import {Directive, Inject, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {
  AUTH_SERVICE,
  AuthService
} from '../../../../../.yalc/components/projects/components/src/lib/services/auth-service';

@Directive({
  selector: '[PlayerDirective]',
  standalone: true
})
export class PlayerDirective implements OnInit {

  constructor(
      private template: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef,
      @Inject(AUTH_SERVICE) private authService: AuthService) {}


    ngOnInit(): void {
      this.updateView();
    }

    private updateView() {
        this.viewContainerRef.clear();

        if (this.authService.hasPermission(['player'])) {
            this.viewContainerRef.createEmbeddedView(this.template);
        }
    }
}
