import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    // {path: 'resume', component: ResumeComponent},
    // {path: 'portfolio', component: PortfolioComponent},
    // {path: 'blog', component: BlogComponent},
    // {path: 'contactme', component: ContactComponent},    
    {path: '', pathMatch:'full', redirectTo:'home'}
];

export const routing = RouterModule.forRoot(appRoutes);