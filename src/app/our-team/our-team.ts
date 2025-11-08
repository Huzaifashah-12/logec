import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { SecondaryNavbarComponent } from "../secondary-navbar/secondary-navbar.component";

@Component({
  selector: 'app-our-team',
  imports: [FooterComponent, CommonModule, SecondaryNavbarComponent],
  templateUrl: './our-team.html',
  styleUrl: './our-team.css'
})
export class OurTeam {
  showGotAProjectModal = false;  // ✅ This was missing

 team = [
{
  name: 'Huzaifa Shah',
  role: 'Founder & CEO',
  image: 'huzaifa.png',
  description:
    'Skilled in Angular, Node.js, and MongoDB, Huzaifa builds scalable and secure web applications with a strong focus on clean UI/UX, performance, and modern design.',
},

   {
  name: 'Zain Arshad',
  role: 'Co-Founder & Lead Flutter Developer',
  image: 'zain.png',
  description:
    'Zain specializes in building fast, scalable, and high-performing mobile applications using Flutter. He leads the mobile development direction, ensuring seamless user experiences across all devices.',
},
{
  name: 'Usman Niaz',
  role: 'Team Lead & Full Stack (MEAN) Developer',
  image: 'usman.png',
  description:
    'An experienced Full Stack Developer and technical mentor, Usman oversees development workflows, architecture decisions, and ensures the engineering team delivers reliable and scalable solutions.',
},
{
  name: 'Areeba Khalid',
  role: 'HR & Quality Assurance Lead',
  image: 'assets/team/member5.jpg',
  description:
    'Areeba is an experienced Full Stack Developer and technical mentor, Areeba oversees development workflows, architecture decisions, and ensures the engineering team delivers reliable and scalable solutions.',
},

  ];
toggleGotAProjectModal() {
  this.showGotAProjectModal = !this.showGotAProjectModal;
}
}
