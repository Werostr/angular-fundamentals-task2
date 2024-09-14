import { Component } from "@angular/core";
import { mockedCoursesList, mockedAuthorsList } from "./shared/mocks/mock";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "courses-app";
  authors = mockedAuthorsList;
  courses = mockedCoursesList.map((course) => ({
    ...course,
    authors: course.authors.map((authorId) => {
      const author = this.authors.find((author) => author.id === authorId);
      return author?.name;
    }),
    duration: this.formatDuration(course.duration),
    creationDate: this.formatDate(new Date(course.creationDate)),
  }));

  formatDuration(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} hours`;
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  }
}
