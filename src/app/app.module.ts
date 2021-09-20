import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AnalysisSelectorComponent } from './analysis-selector/analysis-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HiddenMenuComponent } from './hidden-menu/hidden-menu.component';
import { ReportPageComponent } from './report-page/report-page.component';

@NgModule({
	declarations: [
		AppComponent,
		AnalysisSelectorComponent,
		HeaderComponent,
		FooterComponent,
		HiddenMenuComponent,
		ReportPageComponent,
	],
	imports: [BrowserModule, BrowserAnimationsModule, MatIconModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
