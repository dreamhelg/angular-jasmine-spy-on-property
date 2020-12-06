import { TestService } from "./test-service";
import { TestBed } from "@angular/core/testing";
import { FirstDependencyService } from "./first-dependency/first-dependency-service";

describe("Test service ", () => {
  let service: TestService;

  const fakeFirstDependencyService = {
    ...jasmine.createSpyObj("fakeFirstDependency", ["doSomething", "doSomethingElse"]),
    age: 0
  };
  Object.defineProperty(fakeFirstDependencyService, "name", { get: () => "", set: () => {}, configurable: true });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: FirstDependencyService, useValue: fakeFirstDependencyService },
        TestService
      ]
    });

    service = TestBed.inject(TestService);
  });

  it("should create an instance", () => {
    expect(service).toBeDefined();
  });

  it("should return 'Hi, Mike!', when name equal Mike", () => {
    spyOnProperty(fakeFirstDependencyService, "name", "get").and.returnValue("Mike");
    const result = service.sayHi();
    expect(result).toBe("Hi, Mike!");
  });

  it("setName should call setter of firstDependencyService name", () => {
    const setterSpy = spyOnProperty(fakeFirstDependencyService, "name", "set").and.callThrough();
    service.setName("Joe");
    expect(setterSpy).toHaveBeenCalledWith("Joe");
  });

  it("returnAge should return age of 18", () => {
    fakeFirstDependencyService.age = 18;
    const result = service.returnAge();
    expect(result).toBe(18);
  });
});
