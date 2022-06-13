import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart, Scroll } from '@angular/router';
import { NgbPopoverWindow } from '@ng-bootstrap/ng-bootstrap/popover/popover';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  public isCollapsed = true;
  navbarLogo = environment.navbarLogo;

  
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
      document.getElementById("adk-navbar").style.boxShadow = "0px 2px 4px 2px var(--contrast-colour-shadow)";
    }

    if(window.scrollY > 0 && window.innerWidth < 768  || window.innerHeight < 290) {
      document.documentElement.style.setProperty('--logo-size', "calc(var(--adk-navbar-height) - 0.5rem)");
    } else {
      document.documentElement.style.setProperty('--logo-size', "15vw");
    }
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    if(window.scrollY > 0 && window.innerWidth < 768 || window.innerHeight < 290) {
      document.documentElement.style.setProperty('--logo-size', "calc(var(--adk-navbar-height) - 0.5rem)");
    } else {
      document.documentElement.style.setProperty('--logo-size', "15vw");
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
