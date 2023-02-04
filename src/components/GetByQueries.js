export default function GetByQueries() {
  return (
    <div>
      <h1>hello</h1>
      <h2>world</h2>
      <div>
        <label htmlFor="username">이름</label>
        <input type="text" id="username" />
        <label htmlFor="username2">이름</label>
        <input type="text" id="username2" value="Tom" readOnly />
      </div>
      <div data-testid="my-div" />
      <div>
        <label htmlFor="profile">자기소개</label>
        <textarea id="profile"></textarea>
      </div>
    </div>
  );
}
