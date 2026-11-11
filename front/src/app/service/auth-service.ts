import { Injectable, inject } from '@angular/core';
import Keycloak, {KeycloakTokenParsed} from 'keycloak-js';
import {AuthService} from '../../../.yalc/components/projects/components/src/lib/services/auth-service';

@Injectable({ providedIn: 'root' })
export class AuthServiceImpl implements AuthService {
  private readonly keycloak = inject(Keycloak);

  hasPermission(permissions: string[]): boolean {
    if (!this.keycloak) return false;

    const tokenParsed = this.keycloak.tokenParsed as KeycloakTokenParsed;
    if (!tokenParsed) return false;

    const roles: string[] = tokenParsed.realm_access?.roles || [];

    const realmAccess = tokenParsed.realm_access?.roles as string[];
    if (realmAccess) {
      if (realmAccess.length > 0) {
        return permissions.some(p => realmAccess.includes(p));
      }
    }

    return permissions.some(p => roles.includes(p));
  }

  logout(): void {
    this.keycloak.logout({redirectUri: '/login', logoutMethod: "POST"}).then(r => {
      console.log(JSON.stringify(r));
    })
  }

  getUser(): string {
    const token = this.keycloak.tokenParsed as KeycloakTokenParsed;
    return 'token.name';
  }
}
