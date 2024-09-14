import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() creationDate!: Date;
  @Input() duration!: number;
  @Input() authors!: string[];
  @Input() editable!: boolean;

  @Output() clickOnShow = new EventEmitter<string>();

  get hours(): number {
    return Math.floor(this.duration / 60);
  }

  get minutes(): number {
    return this.duration % 60;
  }

  onShowCourse(event: string) {
    this.clickOnShow.emit(event);
  }
}
