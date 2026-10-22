import { Component } from '@angular/core';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [HlmSidebarImports],
})
export class Sidebar {}
