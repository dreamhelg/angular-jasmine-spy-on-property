import { Injectable } from "@angular/core";
import { FirstDependencyService } from "./first-dependency/first-dependency-service";

@Injectable({
  providedIn: "root"
})
export class TestService {
  constructor(private firstDependency: FirstDependencyService) {}

  sayHi(): string {
    const name = this.firstDependency.name;

    if (name === "Mike") {
      return "Hi, Mike!";
    } else {
      return "Hi, stranger!";
    }
  }

  setName(value: string): void {
    this.firstDependency.name = value;
  }

  returnAge(): number {
    return this.firstDependency.age;
  }
}
