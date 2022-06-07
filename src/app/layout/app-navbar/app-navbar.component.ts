import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart, Scroll } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  public isCollapsed = true;

  
  constructor(private router: Router,
    public translate: TranslateService) { }

  ngOnInit() {
    this.router.events.subscribe((ev) => {
        if (ev instanceof NavigationStart) {
          this.isCollapsed = true;
        }
      });
  }

  @HostListener('window:scroll', ['$event']) onScroll(event : Scroll) {
    if(window.scrollY === 0) {
      document.getElementById("adk-navbar").style.boxShadow = "none";
    } else {
      document.getElementById("adk-navbar").style.boxShadow = "0px 2px 4px 2px #d799226e";
    }
  }

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public closeCollapsed(): void {
    this.isCollapsed = true;
  }

  public closeDropdown(elem: HTMLDivElement): void {
    elem.classList.add('dropdown-closed');
      setTimeout(() => {
        elem.classList.remove('dropdown-closed');
      }, 150);    
  }

  public setLanguage(language: string): void {
    this.translate.use(language);
  }
}
