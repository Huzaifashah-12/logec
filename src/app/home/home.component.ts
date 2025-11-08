import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GotAProjectComponent } from '../got-a-project/got-a-project.component';
import { FooterComponent } from "../footer/footer.component";
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GotAProjectComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showGotAProjectModal = false;

  toggleGotAProjectModal() {
    this.showGotAProjectModal = !this.showGotAProjectModal;
  }

 tabs = [
  {
    name: 'Mobile Apps',
    content: {
      iOS: [
        { label: 'Swift' },
        { label: 'UI Kit' },
        { label: 'RxSwift' },
        { label: 'Combine' },
        { label: 'MVVM' },
        { label: 'Alamofire' },
        { label: 'Core Data' }
      ],
      Android: [
        { label: 'Kotlin' },
        { label: 'Java' },
        { label: 'MVVM' },
        { label: 'Retrofit' },
        { label: 'RxJava' },
        { label: 'Jetpack' }
      ]
    }
  },
  {
    name: 'Web Platforms',
    content: {
      Frontend: [
        { label: 'React js' },
        { label: 'Next.js' },
        { label: 'Angular' },
        { label: 'Vue' },
        { label: 'Typescript' },
        { label: 'HTML5' },
        { label: 'CSS' },
        { label: 'Javascript' },
        { label: 'GraphQL' },
        { label: 'Apollo' },
        { label: 'MaterialUI' },
        { label: 'Rest API' }
      ],
      Backend: [
        { label: 'Node.js' },
        { label: 'Php' },
        { label: 'Python' },
        { label: 'Java' },
        { label: 'Scala' },
        { label: 'Spring' }
      ]
    }
  },
  {
    name: 'Cross Platforms',
    content: {
      Tools: [
        { label: 'Flutter' },
        { label: 'React Native' },
      ]
    }
  },
  {
    name: 'Database',
    content: {
      Databases: [
        { label: 'MongoDB' },
        { label: 'MySQL' },
        { label: 'MsSQL' },
        { label: 'DynamoDB' },
        { label: 'PostgreSQL' },
        { label: 'IBM' },
        { label: 'Redis' },
        { label: 'Elasticsearch' }
      ]
    }
  },
  {
    name: 'Cloud & DevOps',
    content: {
      Tools: [
        { label: 'AWS' },
        { label: 'Azure' },
        { label: 'Google Cloud' },
        { label: 'Docker' },
        { label: 'Kubernetes' },
        { label: 'Jenkins' },
        { label: 'Terraform' }
      ]
    }
  }
];


  selectedTab = this.tabs[0].name;
  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }

  // Draggable logic
  isPressed = false;
  defaultPosition = { x: 0, y: 0 };
  position = { x: 0, y: 0 };
  origin = { x: 0, y: 0 };
  isDragging = false;

  startDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    this.isPressed = true;
    this.isDragging = true;
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
    this.origin = { x: clientX - this.position.x, y: clientY - this.position.y };
  }

  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
    const newX = clientX - this.origin.x;
    const newY = clientY - this.origin.y;

    const maxRadius = 60;
    const distance = Math.sqrt(newX * newX + newY * newY);
    if (distance <= maxRadius) {
      this.position = { x: newX, y: newY };
    }
  }

  endDrag() {
    this.isDragging = false;
    this.isPressed = false;
    this.position = { ...this.defaultPosition };
  }
    steps = [
    {
      title: 'Ideate',
      description: 'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.',
      image: 'ideate.png'
    },
    {
      title: 'Design',
      description: 'Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.',
      image: 'design.png'
    },
    {
      title: 'Develop',
      description: 'Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.',
      image: 'develop.png'
    },
    {
      title: 'Test',
      description: 'Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.',
      image: 'test.png'
    },
    {
      title: 'Launch',
      description: 'Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.',
      image: 'launch.png'
    },
    {
      title: 'Support',
      description: 'Providing ongoing support and enhancements to ensure continued product success.',
      image: 'support.png'
    }
  ];

  currentImage: string = this.steps[0].image;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const elements = document.querySelectorAll('section div.flex-1 > div');

    let index = 0;
    for (let i = 0; i < elements.length; i++) {
      const box = elements[i].getBoundingClientRect();
      if (box.top < window.innerHeight / 2) {
        index = i;
      }
    }

    this.currentImage = this.steps[index].image;
  }
}


