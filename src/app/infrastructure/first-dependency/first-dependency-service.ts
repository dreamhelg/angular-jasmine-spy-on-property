import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FirstDependencyService {
  private nameValue: string;
  age: number;

  get name(): string {
    return this.nameValue;
  }
  set name(value: string) {
    this.nameValue = value;
  }

  constructor() {
    this.age = 5;
    this.nameValue = "Mike";
  }

  doSomething(): void {
    console.log("here");
  }

  doSomethingElse(): void {
    console.log("another method");
  }
}
