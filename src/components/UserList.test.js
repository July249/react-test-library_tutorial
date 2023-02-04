import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];

  test("잠시후 제목이 나타납니다.", async () => {
    render(<UserList users={users} />);
    // const titleEl = screen.getByRole("heading", {
    //   name: "사용자 목록",
    // });
    screen.debug();
    // findByRole은 1초 딜레이를 기다려줌
    const titleEl = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록",
      },
      {
        // findByRole은 1초 딜레이를 기본값으로 기다려줌
        // 1초 이상이 걸린다면 커스텀 시간을 할당할 수 있다.
        timeout: 2000,
      }
    );
    screen.debug();
    expect(titleEl).toBeInTheDocument();
  });

  test("ul이 있다.", () => {
    render(<UserList users={users} />);
    const ulEl = screen.getByRole("list");
    expect(ulEl).toBeInTheDocument();
  });

  // Note: getBy, getAllBy는 일치하는 것이 없으면 에러를 발생시킴
  test("li는 3개가 나옵니까?", () => {
    render(<UserList users={users} />);
    const liEl = screen.getAllByRole("listitem");
    expect(liEl).toHaveLength(users.length);
  });

  // Note: queryBy, queryAllBy는 일치하는 것이 없으면 null이나 빈 배열을 반환
  test("li는 0개가 나옵니까?", () => {
    render(<UserList users={[]} />);
    const liEl = screen.queryAllByRole("listitem");
    expect(liEl).toHaveLength(0);
  });
});
