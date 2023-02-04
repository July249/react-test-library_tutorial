import { render, screen } from "@testing-library/react";
import GetByQueries from "./GetByQueries";

test("제목이 있다.", () => {
  render(<GetByQueries />);
  const titleEl = screen.getByRole("heading", {
    level: 1,
  });
  expect(titleEl).toBeInTheDocument();
});
test("부제목이 있다.", () => {
  render(<GetByQueries />);
  const subTitleEl = screen.getByRole("heading", {
    level: 2,
  });
  expect(subTitleEl).toBeInTheDocument();
});

test("input 요소가 있다.", () => {
  render(<GetByQueries />);
  // const inputEl = screen.getByRole("textbox", {
  //   name: "이름",
  // });
  const inputEl = screen.getByLabelText("이름");
  expect(inputEl).toBeInTheDocument();
});
test("textarea 요소가 있다.", () => {
  render(<GetByQueries />);
  // const textAreaEl = screen.getByRole("textbox", {
  //   name: "자기소개",
  // });
  // const textAreaEl = screen.getByLabelText("자기소개");

  // label의 for가 중복되는 경우 selector로 특정지을 수 있다.
  const textAreaEl = screen.getByLabelText("자기소개", {
    selector: "textarea",
  });
  expect(textAreaEl).toBeInTheDocument();
});

test("두번째 input 요소가 있다.", () => {
  render(<GetByQueries />);
  const inputEl2 = screen.getByDisplayValue("Tom");
  expect(inputEl2).toBeInTheDocument();
});

// 어떤 요소를 특정지어 테스트하기 위한 경우 (최후의 수단, 미 권장)
test("my div가 있다.", () => {
  render(<GetByQueries />);
  const divEl = screen.getByTestId("my-div");
  expect(divEl).toBeInTheDocument();
});
