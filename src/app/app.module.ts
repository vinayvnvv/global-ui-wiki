import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router'
import { AppRoutingModule, routerComponents } from "./app.router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DocsComponent } from './docs/docs.component';
import { StartComponent } from './docs/start/start.component';
import { ButtonsComponent } from './docs/buttons/buttons.component';
import { TocComponent } from './toc/toc.component';
import { InputComponent } from './docs/input/input.component';
import { TypographyComponent } from './docs/typography/typography.component';
import { ListComponent } from './docs/list/list.component';
import { LabelComponent } from './docs/label/label.component';
import { TableComponent } from './docs/table/table.component';
import { ImageComponent } from './docs/image/image.component';
import { DividerComponent } from './docs/divider/divider.component';
import { WhiteframeComponent } from './docs/whiteframe/whiteframe.component';
import { BreadcrumbComponent } from './docs/components/breadcrumb/breadcrumb.component';
import { MessageComponent } from './docs/components/message/message.component';
import { PanelComponent } from './docs/components/panel/panel.component';
import { PaginationComponent } from './docs/components/pagination/pagination.component';
import { ProgressBarComponent } from './docs/components/progress-bar/progress-bar.component';
import { IndicatorsComponent } from './docs/components/indicators/indicators.component';
import { TabsComponent } from './docs/components/tabs/tabs.component';
import { TocDocComponent } from './docs/components/toc/toc.component';
import { JsToggleInfoComponent } from './common/js-toggle-info/js-toggle-info.component';
import { ModalComponent } from './docs/components/modal/modal.component';
import { ToastComponent } from './docs/components/toast/toast.component';


//directives
import { SyntaxHighlet } from './directives/syntax.directive';
import { GridsComponent } from './docs/layout/grids/grids.component';
import { SectionComponent } from './docs/layout/section/section.component';
import { ResponsivenessComponent } from './docs/overview/responsiveness/responsiveness.component';
import { ColumnsAnimComponent } from './animations/columns-anim/columns-anim.component';
import { NavbarAnimComponent } from './animations/navbar-anim/navbar-anim.component';
import { SidebarAnimComponent } from './animations/sidebar-anim/sidebar-anim.component';
import { ColorsPaletteComponent } from './docs/overview/colors-palette/colors-palette.component';
import { FooterComponent } from './footer/footer.component';
import { BuildToolsComponent } from './docs/customize/build-tools/build-tools.component';
import { ModularComponent } from './docs/customize/modular/modular.component';
import { SassStructureComponent } from './common/sass-structure/sass-structure.component';
import { DocsTabTemplateComponent } from './common/docs-tab-template/docs-tab-template.component';
import { ButtonsAnimComponent } from './animations/buttons-anim/buttons-anim.component'; 

@NgModule({
  declarations: [
    AppComponent,
    routerComponents,
    SideNavComponent,
    NavBarComponent,
    TocComponent,
    TypographyComponent,
    ListComponent,
    LabelComponent,
    TableComponent,
    ImageComponent,
    DividerComponent,
    WhiteframeComponent,
    BreadcrumbComponent,
    MessageComponent,
    PanelComponent,
    PaginationComponent,
    ProgressBarComponent,
    IndicatorsComponent,
    TabsComponent,
    TocDocComponent,
    JsToggleInfoComponent,
    ModalComponent,
    ToastComponent,
    SyntaxHighlet,
    GridsComponent,
    SectionComponent,
    ResponsivenessComponent,
    ColumnsAnimComponent,
    NavbarAnimComponent,
    SidebarAnimComponent,
    ColorsPaletteComponent,
    FooterComponent,
    BuildToolsComponent,
    ModularComponent,
    SassStructureComponent,
    DocsTabTemplateComponent,
    ButtonsAnimComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
