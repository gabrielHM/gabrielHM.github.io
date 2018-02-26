import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contactme', component: ContactComponent},    
    {path: '', pathMatch:'full', redirectTo:'home'}
];

export const routing = RouterModule.forRoot(appRoutes);