import { Component, OnInit } from '@angular/core';
import { CourseSliderComponent } from '../CourseSlider/course-slider/course-slider.component';
import { SliderssComponent } from '../sliderss/sliderss.component';
import { InstructorComponent } from '../instructor/instructor.component';
import { LastsliderComponent } from '../lastslider/lastslider.component';
import { CommonModule } from '@angular/common';
import { Icourses } from '../../Models/ICourse';




@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CourseSliderComponent,SliderssComponent,InstructorComponent,
    LastsliderComponent,CommonModule,],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent{

  

  //sidebar
  expandedItems: { [key: string]: boolean } = {};

  toggleCollapse(collapseId: string): void {
    this.expandedItems[collapseId] = !this.expandedItems[collapseId];
  }

  isExpanded(collapseId: string): boolean {
    return this.expandedItems[collapseId] || false;
  }

}
 